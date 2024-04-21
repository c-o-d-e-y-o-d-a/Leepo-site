import React from 'react';

const Card = ({ to, from, when, reason }) => {
  return (


    

    <div className="text-center w-80    rounded-lg shadow-md md:w-80 bg-gray-200 border-orange-200 border-4  ">
  
  <div className="relative">
    <img src="\bg-leepo.png" alt="Tour Image" className="rounded-t-lg w-full h-40 object-cover" />
    
    <div className="absolute inset-0 bg-black opacity-40 rounded-t-lg"></div>
    
   
  </div>

  {/* Details */}
  <div className=" p-6">
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
    
    <button className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600">
      <a href="https://mediafiles.botpress.cloud/e466fd62-271b-4607-a5d6-9d9937bdcca7/webchat/bot.html" target='_blank'>Join Tour</a>
    </button>
  </div>
</div>

    


  );
};

export default Card;
