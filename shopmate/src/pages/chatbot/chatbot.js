import React from 'react';

const ChatbotEmbed = () => {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <iframe
        title="Streamlit Chatbot"
        src="http://localhost:8501/"  // Replace with your Streamlit app URL
style={{ border: "none", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default ChatbotEmbed;
