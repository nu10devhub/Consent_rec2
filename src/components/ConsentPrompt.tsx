import React, { useState } from 'react';
import { Language } from '../types';

interface ConsentPromptProps {
  selectedLanguage: Language;
  onStartRecording: () => void;
}

const ConsentPrompt: React.FC<ConsentPromptProps> = ({
  selectedLanguage,
  onStartRecording,
}) => {
  const [fullName, setFullName] = useState('');
  
  return (
    <div className="animate-fadeIn">
      <h3 className="text-lg font-medium text-gray-700 mb-4">
        Step 2: Record your consent
      </h3>
      
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
        />
      </div>
      
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
        <p className="text-gray-700 font-medium mb-1">Please read and record:</p>
        <p className="text-gray-800 italic">
          "My name is {fullName || '[Your Full Name]'}. I have thoroughly reviewed and understood the product, and I am ready to proceed with the application."
        </p>
      </div>
      
      <button
        onClick={onStartRecording}
        disabled={!fullName}
        className={`w-full py-3 px-4 rounded-md font-medium text-white transition-all ${
          fullName
            ? 'bg-blue-600 hover:bg-blue-700 shadow-md'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Give Consent
      </button>
      
      {!fullName && (
        <p className="text-sm text-red-500 mt-2">
          Please enter your full name to continue
        </p>
      )}
    </div>
  );
};

export default ConsentPrompt;