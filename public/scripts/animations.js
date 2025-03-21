async function showDetails(topic) {
    const detailsContent = document.getElementById('details-content');
    const youtubeCourseContent = document.getElementById('youtube-course-content');
    let content = '';
    let youtubeContent = '';

    switch (topic) {
        case 'hacking':
            content = `
                <h3>Hacking Basics</h3>
                <p>Hacking involves understanding systems and finding vulnerabilities.</p>
                <pre><code>// Example command
ping 127.0.0.1
                </code></pre>`;
            break;
        case 'cmd':
            content = `
                <h3>Command Line Basics</h3>
                <p>The command line is a powerful tool for interacting with your system.</p>
                <pre><code>// Example command
ls -la
                </code></pre>`;
            break;
        case 'cpp':
            content = `
                <h3>C++ Basics</h3>
                <p>C++ is a powerful programming language for system-level programming.</p>
                <pre><code>// Example C++ code
#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}
                </code></pre>`;
            break;
        case 'csharp':
            content = `
                <h3>C# Basics</h3>
                <p>C# is a modern object-oriented programming language.</p>
                <pre><code>// Example C# code
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
                </code></pre>`;
            break;
        case 'java':
            content = `
                <h3>Java Basics</h3>
                <p>Java is a versatile and platform-independent programming language.</p>
                <pre><code>// Example Java code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
                </code></pre>`;
            break;
        case 'python':
            content = `
                <h3>Python Basics</h3>
                <p>Python is a beginner-friendly programming language.</p>
                <pre><code># Example Python code
print("Hello, World!")
                </code></pre>`;
            break;
        case 'kotlin':
            content = `
                <h3>Kotlin Basics</h3>
                <p>Kotlin is a modern programming language for Android development.</p>
                <pre><code>// Example Kotlin code
fun main() {
    println("Hello, World!")
}
                </code></pre>`;
            break;
        default:
            content = '<p>Topic not found.</p>';
    }

    // Fetch YouTube video links dynamically
    try {
        const response = await fetch(`/api/videos?topic=${topic}`);
        if (response.ok) {
            const data = await response.json();
            youtubeContent = data.videos.map(video => `
                <div class="youtube-video-container">
                    <h4>${video.title}</h4>
                    <p class="video-about">${video.about || 'No description available.'}</p>
                    <iframe width="560" height="315" src="${video.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `).join('');
        } else {
            youtubeContent = '<p>No related courses available for this topic.</p>';
        }
    } catch (error) {
        console.error('Error fetching video data:', error);
        youtubeContent = '<p>Failed to load video content.</p>';
    }

    detailsContent.innerHTML = content;
    youtubeCourseContent.innerHTML = youtubeContent;
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down
                    header.classList.add("hide");
                    header.classList.remove("show");
                } else {
                    // Scrolling up
                    header.classList.remove("hide");
                    header.classList.add("show");
                }
                
                lastScrollY = currentScrollY;
                ticking = false;
            });
            
            ticking = true;
        }
    });

    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Handle topic button clicks
    document.querySelectorAll('.topic-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Ensure the back button is visible initially if not on the home page
    if (!window.location.pathname.includes("index.html")) {
        backButton.style.display = "block";
    }

    // Back button click event to navigate back
    backButton.addEventListener("click", () => {
        history.back();
    });

    // Ensure the back button is not shown on the home page
    if (window.location.pathname.includes("index.html")) {
        backButton.style.display = "none";
    }

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #4CAF50, #8BC34A);
        z-index: 1001;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});