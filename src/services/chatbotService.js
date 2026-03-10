import axios from 'axios';

export const sendMessageToBot = async (message) => {
  try {
    const response = await axios.post('/api/chat', { message });
    return response.data.reply;
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    return "Sorry, I'm having trouble connecting to the server.";
  }
};
