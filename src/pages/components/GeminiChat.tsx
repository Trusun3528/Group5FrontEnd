import { useState } from "react";
function GeminiChat() {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-md">
        Chat
      </button>
    </div>
  );
}

export default GeminiChat;

/**import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("KEY HERE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-blue-500 text-white p-3 rounded-full shadow-md" 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200">
          <h2 className="text-lg font-bold mb-2">Chat with AI</h2>
          <p className="text-gray-500">[Placeholder for Chat Input]</p>
        </div>
      )}
    </div>
  );
}

export default GeminiChat;

*/

