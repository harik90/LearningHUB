const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
let isTyping = false;

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message || isTyping) return;

  appendUserMessage(message);
  userInput.value = '';
  scrollChatContainer();

  showTypingIndicator();

  try {
    const response = await fetchGeminiAI(message); // Replaced checkCustomAI with fetchGeminiAI
    renderAIResponse(response);
  } catch (error) {
    showError(error.message);
  } finally {
    removeTypingIndicator();
  }
}

function appendUserMessage(message) {
  const bubble = createMessageBubble('user-bubble', message);
  chatContainer.appendChild(bubble);
  bubble.style.animation = 'slideUp 0.5s ease forwards';
  scrollChatContainer();
}

function createMessageBubble(className, content) {
  const bubble = document.createElement('div');
  bubble.className = className;
  bubble.innerHTML = content;
  return bubble;
}

function scrollChatContainer() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTypingIndicator() {
  isTyping = true;
  chatContainer.appendChild(createTypingBubble());
  scrollChatContainer();
}

function createTypingBubble() {
  const typing = document.createElement('div');
  typing.className = 'ai-bubble typing-bubble';
  typing.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  return typing;
}

function removeTypingIndicator() {
  const typingBubble = document.querySelector('.typing-bubble');
  if (typingBubble) {
    chatContainer.removeChild(typingBubble);
    isTyping = false;
  }
}

async function generateAIResponse(message) {
  try {
    const response = await fetchAIResponse(message);
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (responseText) {
      renderAIResponse(responseText);
    } else {
      showError('AI unable to generate a response.');
    }
  } catch (error) {
    showError(error.message);
  } finally {
    removeTypingIndicator();
  }
}

async function fetchAIResponse(message) {
  const apiKey = 'AIzaSyCH_ZRWh4Mc2AFybOJUKtKoUa6eicNv0Tg';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw new Error('Network Error! Unable to fetch response.');
  }
}

async function fetchGeminiAI(message) {
  const apiKey = 'AIzaSyCH_ZRWh4Mc2AFybOJUKtKoUa6eicNv0Tg';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from AI.';
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw new Error('Network Error! Unable to fetch response.');
  }
}

function renderAIResponse(text) {
  const aiBubble = document.createElement('div');
  aiBubble.className = 'ai-bubble';

  const parts = parseAndFormatText(text);

  parts.forEach(part => {
    aiBubble.appendChild(part);
  });

  chatContainer.appendChild(aiBubble);
  aiBubble.style.animation = 'slideUp 0.5s ease forwards';
  scrollChatContainer();

  Prism.highlightAll();

  aiBubble.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeText = btn.closest('.code-snippet').querySelector('code').innerText;
      navigator.clipboard.writeText(codeText);
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 2000);
    });
  });
}

function parseAndFormatText(text) {
  const parts = [];
  const codeRegex = /```(\w*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeRegex.exec(text)) !== null) {
    const normalText = text.substring(lastIndex, match.index).trim();
    if (normalText) {
      const textPart = document.createElement('div');
      textPart.innerHTML = parseTextFormatting(normalText);
      parts.push(textPart);
    }

    const language = match[1].trim() || 'plaintext';
    const codeContent = match[2].trim();

    const codeBlock = document.createElement('div');
    codeBlock.className = 'code-snippet';
    codeBlock.innerHTML = `
      <div class="code-header">
        <span>${language}</span>
        <button class="copy-btn">Copy</button>
      </div>
      <pre><code class="language-${language}">${escapeHtml(codeContent)}</code></pre>
    `;
    parts.push(codeBlock);
    lastIndex = codeRegex.lastIndex;
  }

  const remainingText = text.substring(lastIndex).trim();
  if (remainingText) {
    const textPart = document.createElement('div');
    textPart.innerHTML = parseTextFormatting(remainingText);
    parts.push(textPart);
  }

  return parts;
}

function parseTextFormatting(text) {
  return text
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.+?)\*/g, '<i>$1</i>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
    .replace(/`(.+?)`/g, '<code style="color:#00e5ff; background:none;">$1</code>');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function showError(errorText) {
  chatContainer.appendChild(createMessageBubble('ai-bubble error', errorText));
  scrollChatContainer();
}

