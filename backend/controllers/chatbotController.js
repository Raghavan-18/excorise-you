import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleChat = (req, res) => {
  const { message } = req.body;
  
  // Log message to messages.json
  const messagesPath = path.join(__dirname, '../data/messages.json');
  let messages = [];
  try {
    if (fs.existsSync(messagesPath)) {
      const data = fs.readFileSync(messagesPath, 'utf8');
      messages = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading messages.json', error);
  }

  messages.push({ role: 'user', content: message, timestamp: new Date().toISOString() });

  const reply = "This feature will be connected to an AI model soon.";
  messages.push({ role: 'bot', content: reply, timestamp: new Date().toISOString() });

  try {
    fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error writing messages.json', error);
  }

  res.json({ reply });
};
