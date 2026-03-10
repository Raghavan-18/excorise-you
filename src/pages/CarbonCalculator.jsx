import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const CarbonCalculator = () => {
  const [transport, setTransport] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [diet, setDiet] = useState('mixed');
  const [waste, setWaste] = useState(0);
  const [result, setResult] = useState(null);

  const calculateFootprint = (e) => {
    e.preventDefault();
    
    // Simple mock calculation logic
    const transportScore = transport * 0.2;
    const electricityScore = electricity * 0.5;
    const dietScore = diet === 'vegan' ? 1 : diet === 'vegetarian' ? 2 : 4;
    const wasteScore = waste * 0.1;
    
    const total = transportScore + electricityScore + dietScore + wasteScore;
    
    const data = [
      { name: 'Transport', value: transportScore },
      { name: 'Electricity', value: electricityScore },
      { name: 'Diet', value: dietScore },
      { name: 'Waste', value: wasteScore },
    ];

    setResult({ total: total.toFixed(2), data });
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Carbon Footprint Calculator</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Estimate your daily carbon emissions and find ways to reduce them.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <form onSubmit={calculateFootprint} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Daily Transport (km)</label>
              <input 
                type="number" 
                value={transport}
                onChange={(e) => setTransport(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Daily Electricity (kWh)</label>
              <input 
                type="number" 
                value={electricity}
                onChange={(e) => setElectricity(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Diet Type</label>
              <select 
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              >
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="mixed">Mixed (Meat & Veg)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Daily Waste (kg)</label>
              <input 
                type="number" 
                value={waste}
                onChange={(e) => setWaste(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
                min="0"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md text-lg"
            >
              Calculate Footprint
            </button>
          </form>
        </div>
        
        {result && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Your Carbon Score</h2>
            <div className="text-5xl font-extrabold text-green-600 dark:text-green-400 mb-6">{result.total} <span className="text-xl text-gray-500">kg CO2e</span></div>
            
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={result.data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {result.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl w-full">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Suggestions:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {transport > 10 && <li>Consider carpooling or using public transport.</li>}
                {electricity > 5 && <li>Switch to energy-efficient LED bulbs.</li>}
                {diet === 'mixed' && <li>Try having one meat-free day a week.</li>}
                {waste > 1 && <li>Start composting your organic waste.</li>}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
