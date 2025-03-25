import { useState } from "react";
import { AiOutlineClose as CloseIcon, AiOutlineMessage as ChatIcon } from "react-icons/ai";

function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userPrompt, setUserPrompt] = useState(""); // holds the user response
  const [aiResponse, setAiResponse] = useState(""); // holds the AI response

  // sends the prompt to the backend
  const handleSendPrompt = async () => {
    if (userPrompt.trim() === "") return; // doesnt send if the prompt is empty

    try {
      const response = await fetch("http://localhost:5251/Gemini/Chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",},
           body: JSON.stringify({ prompt: userPrompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI.");
      }

      const data = await response.json();
      setAiResponse(data.Response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAiResponse("Sorry, there was an error processing your request.");
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

          
          <div className="mb-2"> 
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Ask me anything..."
            />
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded-md w-full"
            onClick={handleSendPrompt} // sends the prompt when clicked
          >
            Send
          </button>

          {aiResponse && (
            <div className="mt-4">
              <h3 className="font-bold text-gray-700">AI Response:</h3>
              <p>{aiResponse}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GeminiChat;
