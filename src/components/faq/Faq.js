import React, { useState } from "react";
import "./FAQComponent.css"; // Import CSS file for styling

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQComponent() {
  const faqData = [
    {
      question: "How do you measure your max heart rate?",
      answer:
        "To estimate your maximum age-related heart rate, subtract your age from 220. For example, for a 50-year-old person, the estimated maximum age-related heart rate would be calculated as 220 – 50 years = 170 beats per minute (bpm).",
    },
    {
      question: "How do you measure moderate-intensity physical activity ?",
      answer: "For moderate-intensity physical activity, your target heart rate should be between 64% and 76% of your maximum heart rate.",
    },
    {
        question: "How do you measure vigorous-intensity physical activity ?",
        answer: "For vigorous-intensity physical activity, your target heart rate should be between 77% and 93% of your maximum heart rate.",
      },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <br/>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;
