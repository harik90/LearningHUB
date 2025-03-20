import React from 'react';

const LanguageDetails = ({ language, steps }) => {
    return (
        <div className="language-details">
            <h2>{language} Programming Language</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index} className="step">
                        {step}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default LanguageDetails;