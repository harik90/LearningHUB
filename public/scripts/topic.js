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
            title: "Python Programming",
            about: "Master Python programming from basics to advanced concepts including OOP, data structures, and web development.",
            explanation: `
                <div class="explanation-section">
                    <h3>1. Python Fundamentals</h3>
                    <p>Python is a versatile, high-level programming language known for its simplicity and readability. It's widely used in web development, data science, AI, and automation.</p>
                    <ul>
                        <li>Dynamic typing and automatic memory management</li>
                        <li>Rich standard library and extensive third-party packages</li>
                        <li>Cross-platform compatibility</li>
                        <li>Strong community support</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>2. Basic Concepts</h3>
                    <ul>
                        <li>Variables and Data Types (int, float, str, bool, list, tuple, dict)</li>
                        <li>Control Structures (if-else, loops, try-except)</li>
                        <li>Functions and Modules</li>
                        <li>File I/O Operations</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>3. Intermediate Concepts</h3>
                    <ul>
                        <li>Object-Oriented Programming (Classes, Inheritance, Polymorphism)</li>
                        <li>Decorators and Generators</li>
                        <li>Regular Expressions</li>
                        <li>Working with APIs and JSON</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>4. Advanced Topics</h3>
                    <ul>
                        <li>Multithreading and Concurrency</li>
                        <li>Database Integration</li>
                        <li>Web Development with Flask/Django</li>
                        <li>Data Science and Machine Learning Basics</li>
                    </ul>
                </div>
            `,
            code: `# Python Programming Examples

# 1. Basic Concepts
# Variables and Data Types
name = "John"
age = 25
height = 1.75
is_student = True
hobbies = ["reading", "gaming", "coding"]
person = {"name": "John", "age": 25}

# Control Structures
if age >= 18:
    print(f"{name} is an adult")
else:
    print(f"{name} is a minor")

# Loops
for hobby in hobbies:
    print(f"I enjoy {hobby}")

# 2. Functions and Modules
def greet(name):
    return f"Hello, {name}!"

# 3. File I/O
with open("example.txt", "w") as f:
    f.write("Hello, World!")

# 4. Object-Oriented Programming
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"I am {self.name}, {self.age} years old"

# 5. Decorators
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Function {func.__name__} took {end-start:.2f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(2)
    return "Done!"

# 6. Generators
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# 7. Regular Expressions
import re
text = "Contact us at support@example.com or sales@example.com"
emails = re.findall(r'[\\w\\.-]+@[\\w\\.-]+\\.\\w+', text)

# 8. Multithreading
import threading
import time

def worker():
    for i in range(5):
        print(f"Worker thread: {i}")
        time.sleep(1)

thread = threading.Thread(target=worker)
thread.start()

# 9. Database Integration (SQLite)
import sqlite3

def setup_database():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')
    conn.commit()
    conn.close()

# 10. Web Development (Flask)
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)`,
            youtube: [
                { url: "https://www.youtube.com/embed/_uQrJ0TkZlc", title: "Python for Beginners" },
                { url: "https://www.youtube.com/embed/HGOBQPFzWKo", title: "Python Intermediate Concepts" },
                { url: "https://www.youtube.com/embed/ua-CiDNNj30", title: "Python Advanced Topics" }
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
            title: "Java Programming",
            about: "Learn Java programming from basics to advanced concepts including OOP, multithreading, and enterprise development.",
            explanation: `
                <div class="explanation-section">
                    <h3>1. Java Fundamentals</h3>
                    <p>Java is a robust, object-oriented programming language designed for building enterprise-level applications. It's known for its "Write Once, Run Anywhere" capability.</p>
                    <ul>
                        <li>Strong type checking and exception handling</li>
                        <li>Automatic memory management with garbage collection</li>
                        <li>Rich standard library and frameworks</li>
                        <li>Platform independence through JVM</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>2. Basic Concepts</h3>
                    <ul>
                        <li>Variables and Data Types</li>
                        <li>Control Structures (if-else, loops, switch)</li>
                        <li>Methods and Functions</li>
                        <li>Arrays and Collections</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>3. Intermediate Concepts</h3>
                    <ul>
                        <li>Object-Oriented Programming</li>
                        <li>Exception Handling</li>
                        <li>File I/O Operations</li>
                        <li>Lambda Expressions</li>
                    </ul>
                </div>
                <div class="explanation-section">
                    <h3>4. Advanced Topics</h3>
                    <ul>
                        <li>Multithreading and Concurrency</li>
                        <li>Stream API and Collections</li>
                        <li>Design Patterns</li>
                        <li>Spring Framework Basics</li>
                    </ul>
                </div>
            `,
            code: `// Java Programming Examples

// 1. Basic Concepts
public class BasicExamples {
    public static void main(String[] args) {
        // Variables and Data Types
        String name = "John";
        int age = 25;
        double height = 1.75;
        boolean isStudent = true;
        
        // Arrays
        String[] hobbies = {"reading", "gaming", "coding"};
        
        // Control Structures
        if (age >= 18) {
            System.out.println(name + " is an adult");
        } else {
            System.out.println(name + " is a minor");
        }
        
        // Loops
        for (String hobby : hobbies) {
            System.out.println("I enjoy " + hobby);
        }
    }
}

// 2. Object-Oriented Programming
class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String introduce() {
        return "I am " + name + ", " + age + " years old";
    }
}

// 3. Exception Handling
class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Cleanup code here");
        }
    }
}

// 4. File I/O
import java.io.*;

class FileIOExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"));
             BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line.toUpperCase());
                writer.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// 5. Lambda Expressions
import java.util.Arrays;
import java.util.List;

class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Adam", "Eve");
        names.forEach(name -> System.out.println("Hello, " + name));
    }
}

// 6. Multithreading
class ThreadExample {
    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 1: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread 2: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        
        thread1.start();
        thread2.start();
    }
}

// 7. Stream API
import java.util.stream.Collectors;

class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Adam", "Eve");
        
        List<String> filteredNames = names.stream()
            .filter(name -> name.startsWith("J"))
            .map(String::toUpperCase)
            .collect(Collectors.toList());
            
        System.out.println(filteredNames);
    }
}

// 8. Design Pattern (Singleton)
class Singleton {
    private static Singleton instance;
    private String data;
    
    private Singleton() {
        data = "Initialized";
    }
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    
    public String getData() {
        return data;
    }
    
    public void setData(String data) {
        this.data = data;
    }
}

// 9. Database Connection (JDBC)
import java.sql.*;

class DatabaseExample {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydb",
                "username",
                "password"
            );
            
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");
            
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
            
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

// 10. Spring Framework (Basic)
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class SpringExample {
    public static void main(String[] args) {
        SpringApplication.run(SpringExample.class, args);
    }
    
    @GetMapping("/")
    public String home() {
        return "Hello, World!";
    }
}`,
            youtube: [
                { url: "https://www.youtube.com/embed/grEKMHGYyns", title: "Java Programming Basics" },
                { url: "https://www.youtube.com/embed/GoXwIVyNvX0", title: "Java Intermediate Concepts" },
                { url: "https://www.youtube.com/embed/BSVKUk58K6U", title: "Java Advanced Topics" }
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
        codeExplanation.innerHTML = topicsData[topic].explanation;
        codeSnippet.className = `language-${topic}`; // Dynamically set language class
        codeSnippet.textContent = topicsData[topic].code; // Set raw code
        Prism.highlightElement(codeSnippet); // Highlight the code

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
