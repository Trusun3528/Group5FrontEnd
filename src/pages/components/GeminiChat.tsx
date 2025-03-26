import { useState } from "react";
import { AiOutlineClose as CloseIcon, AiOutlineMessage as ChatIcon } from "react-icons/ai";

function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userPrompt, setUserPrompt] = useState(""); // holds the user response
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([]); // holds the conversation history

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPrompt(e.target.value);
  };

  const handleSendPrompt = async () => {
    if (userPrompt.trim() === "") return; // doesnt send if the input is empty

    // add user's messagfe to the conversation history
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: userPrompt, ai: "" }
    ]);

    try {
      const response = await fetch("http://localhost:5251/Gemini/Chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt })
      });

      if (!response.ok) {
        throw new Error("AI unresponsive");
      }

      const data = await response.json();

      // sets the AI response in the conversation history
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1 ? { ...msg, ai: data.response } : msg));
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, ai: "Sorry, there was an error processing your request." } : msg));
    } finally {
      setUserPrompt(""); // resets the input field
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200">
          <h2 className="text-lg font-bold mb-2">Chat with AI</h2>

          <div className="chat-window">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <div className="user-message">
                  <strong>You:</strong> {message.user}
                </div>
                {message.ai && (
                  <div className="ai-message">
                    <strong>AI:</strong> {message.ai}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="user-input">
            <input
              type="text"
              value={userPrompt}
              onChange={handleUserInput}
              placeholder="Ask me anything..."
              className="w-full p-2 border border-gray-300 rounded"/>

            <button
              onClick={handleSendPrompt}
              className="mt-2 p-2 bg-blue-500 text-white rounded">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeminiChat;
