import React from 'react';

const topics = [
    { id: 1, name: 'JavaScript', description: 'Learn the fundamentals of JavaScript, the language of the web.' },
    { id: 2, name: 'Python', description: 'Explore Python, a versatile language for web development, data analysis, and more.' },
    { id: 3, name: 'Java', description: 'Understand Java, a widely-used language for building enterprise-level applications.' },
    { id: 4, name: 'C++', description: 'Dive into C++, a powerful language for system programming and game development.' },
    { id: 5, name: 'Ruby', description: 'Discover Ruby, known for its elegant syntax and used in web development with Rails.' },
];

const Topics = () => {
    return (
        <div className="topics-container">
            <h2>Select a Programming Topic</h2>
            <ul className="topics-list">
                {topics.map(topic => (
                    <li key={topic.id} className="topic-item">
                        <h3>{topic.name}</h3>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Topics;