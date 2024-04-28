import React from 'react';

const Card = ({ to, from, when, reason, userName }) => {
  const chatUrl = `https://your-chat-app-url.com/chats?username=${encodeURIComponent(userName)}`;

  return (
    <div className="text-center w-80 rounded-lg shadow-md md:w-80 bg-gray-200 border-orange-200 border-2">
      <div className="relative">
        <img src="\bg-leepo.png" alt="Tour Image" className="rounded-t-lg w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg"></div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex flex-col mb-4">
          <div className="mb-2">
            <span className="font-semibold">From:</span> {to}
          </div>
          <div className="mb-2">
            <span className="font-semibold">To:</span> {from}
          </div>
          <div className="mb-2">
            <span className="font-semibold">When:</span> {when}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Reason:</span> {reason}
          </div>
        </div>
        
        {/* Join Tour Button */}
        <button className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <a href={chatUrl} target='_blank' rel='noopener noreferrer'>Join Tour</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
