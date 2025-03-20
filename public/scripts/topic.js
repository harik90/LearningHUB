document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get("topic");
    const topicTitle = document.getElementById("topic-title");
    const codeExplanation = document.getElementById("code-explanation");
    const codeSnippet = document.getElementById("code-snippet");
    const youtubeCourseContent = document.getElementById("youtube-course-content");

    // Example data for topics
    const topicsData = {
        hacking: {
            title: "Hacking Basics",
            about: "Learn the fundamentals of ethical hacking, including tools, techniques, and best practices.",
            explanation: `
                <ol>
                    <li>Understand the basics of networking and protocols.</li>
                    <li>Learn about common vulnerabilities like SQL injection and XSS.</li>
                    <li>Explore tools like Nmap, Wireshark, and Metasploit.</li>
                    <li>Practice ethical hacking techniques in a controlled environment.</li>
                    <li>Understand the importance of penetration testing.</li>
                </ol>
            `,
            code: `# Example: Simple Port Scanner in Python
import socket

target = "127.0.0.1"
ports = [21, 22, 80, 443]

for port in ports:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex((target, port))
    if result == 0:
        print(f"Port {port} is open")
    sock.close()
`,
            youtube: [
                { url: "https://www.youtube.com/embed/3Kq1MIfTWCE", title: "Introduction to Ethical Hacking" },
                { url: "https://www.youtube.com/embed/s19BxFpoSd0?si=yH5DtNx5wBsglA5U", title: "Common Hacking Tools and Techniques" },
                { url: "https://www.youtube.com/embed/3Kq1MIfTWCE?si=w9NpgGeJ1CoOvRjx", title: "Penetration Testing Basics" }
            ]
        },
        cmd: {
            title: "Command Line Basics",
            about: "Master the command line to navigate, manage files, and automate tasks efficiently.",
            explanation: `
                <ol>
                    <li>Learn basic navigation commands like <code>cd</code>, <code>ls</code>, and <code>pwd</code>.</li>
                    <li>Understand file manipulation commands like <code>cp</code>, <code>mv</code>, and <code>rm</code>.</li>
                    <li>Explore text processing commands like <code>cat</code>, <code>grep</code>, and <code>awk</code>.</li>
                </ol>
            `,
            code: `# Example: Basic Linux Commands
ls -l    # List files in long format
cd /path/to/directory    # Change directory
mkdir new_folder    # Create a new folder
`,
            youtube: [
                { url: "https://www.youtube.com/embed/ZtqBQ68cfJc", title: "Command Line Navigation" },
                { url: "https://www.youtube.com/embed/IVquJh3DXUA", title: "File Manipulation Commands" },
                { url: "https://www.youtube.com/embed/SPTfmiYiuok", title: "Text Processing with Command Line" }
            ]
        },
        cpp: {
            title: "C++ Basics",
            about: "Learn the fundamentals of C++ programming, including syntax, OOP, and STL.",
            explanation: `
                <ol>
                    <li>Understand the structure of a C++ program.</li>
                    <li>Learn about variables, data types, and constants.</li>
                    <li>Explore input and output using <code>cin</code> and <code>cout</code>.</li>
                </ol>
            `,
            code: `// Example: Hello World in C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`,
            youtube: [
                { url: "https://www.youtube.com/embed/vLnPwxZdW4Y", title: "Getting Started with C++" },
                { url: "https://www.youtube.com/embed/8jLOx1hD3_o?si=TXEwxVPXZi-wsoPI", title: "C++ Variables and Data Types" },
                { url: "https://www.youtube.com/embed/m1fJjNLzRag?si=GklJkt0-5k1Vmn-6", title: "Introduction to Object-Oriented Programming in C++" }
            ]
        },
        python: {
            title: "Python Basics",
            about: "Learn Python programming from basics to advanced concepts.",
            explanation: `
                <ol>
                    <li>Understand the structure of a Python program.</li>
                    <li>Learn about variables, data types, and constants.</li>
                    <li>Explore input and output using <code>input()</code> and <code>print()</code>.</li>
                </ol>
            `,
            code: `# Example: Hello World in Python
print("Hello, World!")
`,
            youtube: [
                { url: "https://www.youtube.com/embed/_uQrJ0TkZlc", title: "Python for Beginners" },
                { url: "https://www.youtube.com/embed/HGOBQPFzWKo", title: "Python Variables and Data Types" },
                { url: "https://www.youtube.com/embed/ua-CiDNNj30", title: "Python Input and Output" }
            ]
        },
        csharp: {
            title: "C# Basics",
            about: "Learn the fundamentals of C# programming, including syntax, OOP, and .NET framework.",
            explanation: `
                <ol>
                    <li>Understand the structure of a C# program.</li>
                    <li>Learn about variables, data types, and constants.</li>
                    <li>Explore input and output using <code>Console.ReadLine()</code> and <code>Console.WriteLine()</code>.</li>
                </ol>
            `,
            code: `// Example: Hello World in C#
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
`,
            youtube: [
                { url: "https://www.youtube.com/embed/GhQdlIFylQ8", title: "Introduction to C# Programming" },
                { url: "https://www.youtube.com/embed/0QUgvfuKvWU", title: "C# Variables and Data Types" },
                { url: "https://www.youtube.com/embed/ZkQS0HreuSc?si=USILP8rk46vzl3s_", title: "Object-Oriented Programming in C#" }
            ]
        },
        java: {
            title: "Java Basics",
            about: "Learn the fundamentals of Java programming, including syntax, OOP, and JVM.",
            explanation: `
                <ol>
                    <li>Understand the structure of a Java program.</li>
                    <li>Learn about variables, data types, and constants.</li>
                    <li>Explore input and output using <code>Scanner</code> and <code>System.out.println()</code>.</li>
                </ol>
            `,
            code: `// Example: Hello World in Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
            youtube: [
                { url: "https://www.youtube.com/embed/grEKMHGYyns", title: "Getting Started with Java" },
                { url: "https://www.youtube.com/embed/GoXwIVyNvX0", title: "Java Variables and Data Types" },
                { url: "https://www.youtube.com/embed/BSVKUk58K6U", title: "Object-Oriented Programming in Java" }
            ]
        },
        kotlin: {
            title: "Kotlin Basics",
            about: "Learn the fundamentals of Kotlin programming, including syntax, OOP, and Android development.",
            explanation: `
                <ol>
                    <li>Understand the structure of a Kotlin program.</li>
                    <li>Learn about variables, data types, and constants.</li>
                    <li>Explore input and output using <code>readLine()</code> and <code>println()</code>.</li>
                </ol>
            `,
            code: `// Example: Hello World in Kotlin
fun main() {
    println("Hello, World!")
}
`,
            youtube: [
                { url: "https://www.youtube.com/embed/F9UC9DY-vIU", title: "Introduction to Kotlin Programming" },
                { url: "https://www.youtube.com/embed/TEXaoSC_8lQ?si=9-CzY9s3qViL7IL5", title: "Kotlin Variables and Data Types" },
                { url: "https://www.youtube.com/embed/EExSSotojVI?si=_1rfS7-p6DjRhLZp", title: "Object-Oriented Programming in Kotlin" }
            ]
        }
    };

    // Load topic data
    if (topicsData[topic]) {
        topicTitle.textContent = topicsData[topic].title;
        topicTitle.insertAdjacentHTML('afterend', `<p style="color: gray; font-size: 14px; margin-top: 5px;">${topicsData[topic].about}</p>`);
        codeExplanation.innerHTML = `<p>${topicsData[topic].explanation}</p>`;
        codeSnippet.textContent = topicsData[topic].code;

        // Load YouTube courses
        topicsData[topic].youtube.forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.style = "background-color: #111; border-radius: 20px; overflow: hidden; width: 320px; box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);";

            const videoTitle = course.title;
            const videoDescription = `This video provides insights into ${topicsData[topic].about}`;

            courseDiv.innerHTML = `
                <iframe width="100%" height="180" src="${course.url}" title="${videoTitle}" frameborder="0" allowfullscreen style="border-radius: 20px 20px 0 0;"></iframe>
                <div style="padding: 20px;">
                    <h4 style="font-size: 20px; color: #fff;">${videoTitle}</h4>
                    <p style="font-size: 14px; color: #bbb;">${videoDescription}</p>
                </div>
            `;
            youtubeCourseContent.appendChild(courseDiv);
        });
    } else {
        topicTitle.textContent = "Topic Not Found";
        codeExplanation.innerHTML = `<p>Sorry, we couldn't find the topic you're looking for.</p>`;
    }
});

// Copy code functionality
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy code: ", err);
    });
}
