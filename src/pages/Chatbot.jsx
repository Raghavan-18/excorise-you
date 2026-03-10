import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from '../components/ChatBubble';
import { sendMessageToBot } from '../services/chatbotService';
import { Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Eco Assistant. Ask me anything about the environment, climate change, or how to reduce your carbon footprint!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const reply = await sendMessageToBot(input);
    
    setMessages(prev => [...prev, { text: reply, isBot: true }]);
    setIsLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto h-[calc(100vh-64px)] flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
          <Bot size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Eco Assistant</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Powered by AI</p>
        </div>
      </div>
      
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900/50">
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg.text} isBot={msg.isBot} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm text-gray-500 flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSend} className="flex space-x-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about recycling, energy saving, etc..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-14"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
