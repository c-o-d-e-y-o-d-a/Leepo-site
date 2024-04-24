import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';


const TotalListing = [
  {"to": "Jaipur", "from": "Delhi", "when": "01:01:2024", "reason": "Business trip"},
  {"to": "Delhi", "from": "Hyderabad", "when": "15:02:2024", "reason": "Vacation"},
  {"to": "Hyderabad", "from": "Vizag", "when": "30:03:2024", "reason": "Conference"},
  {"to": "Vizag", "from": "Jaipur", "when": "14:04:2024", "reason": "Meeting"},
  {"to": "Jaipur", "from": "Hyderabad", "when": "28:05:2024", "reason": "Wedding"},
  {"to": "Delhi", "from": "Vizag", "when": "11:06:2024", "reason": "Seminar"},
  {"to": "Hyderabad", "from": "Jaipur", "when": "23:07:2024", "reason": "Workshop"},
  {"to": "Vizag", "from": "Delhi", "when": "07:08:2024", "reason": "Reunion"},
  {"to": "Jaipur", "from": "Vizag", "when": "19:09:2024", "reason": "Festival"},
  {"to": "Delhi", "from": "Hyderabad", "when": "02:10:2024", "reason": "Exhibition"},
  {"to": "Hyderabad", "from": "Delhi", "when": "15:11:2024", "reason": "Trade Fair"},
  {"to": "Vizag", "from": "Hyderabad", "when": "29:12:2024", "reason": "Concert"},
  {"to": "Jaipur", "from": "Delhi", "when": "12:01:2025", "reason": "Sports Event"},
  {"to": "Delhi", "from": "Hyderabad", "when": "26:02:2025", "reason": "Cultural Fest"},
  {"to": "Hyderabad", "from": "Vizag", "when": "11:03:2025", "reason": "Music Festival"},
  {"to": "Vizag", "from": "Jaipur", "when": "25:04:2025", "reason": "Art Exhibition"},
  {"to": "Jaipur", "from": "Hyderabad", "when": "09:05:2025", "reason": "Food Festival"},
  {"to": "Delhi", "from": "Hyderabad", "when": "23:06:2025", "reason": "Film Festival"},
  {"to": "Hyderabad", "from": "Jaipur", "when": "07:07:2025", "reason": "Literature Festival"},
  {"to": "Vizag", "from": "Delhi", "when": "21:08:2025", "reason": "Dance Festival"},
  {"to": "Jaipur", "from": "Delhi", "when": "01:01:2024", "reason": "Business trip"},
  {"to": "Delhi", "from": "Hyderabad", "when": "15:02:2024", "reason": "Vacation"},
  {"to": "Hyderabad", "from": "Vizag", "when": "30:03:2024", "reason": "Conference"},
  {"to": "Vizag", "from": "Jaipur", "when": "14:04:2024", "reason": "Meeting"},
  {"to": "Jaipur", "from": "Hyderabad", "when": "28:05:2024", "reason": "Wedding"},
  {"to": "Delhi", "from": "Vizag", "when": "11:06:2024", "reason": "Seminar"},
  {"to": "Hyderabad", "from": "Jaipur", "when": "23:07:2024", "reason": "Workshop"},
  {"to": "Vizag", "from": "Delhi", "when": "07:08:2024", "reason": "Reunion"},
  {"to": "Jaipur", "from": "Vizag", "when": "19:09:2024", "reason": "Festival"},
  {"to": "Delhi", "from": "Hyderabad", "when": "02:10:2024", "reason": "Exhibition"},
  {"to": "Hyderabad", "from": "Delhi", "when": "15:11:2024", "reason": "Trade Fair"},
  {"to": "Vizag", "from": "Hyderabad", "when": "29:12:2024", "reason": "Concert"},
  {"to": "Jaipur", "from": "Delhi", "when": "12:01:2025", "reason": "Sports Event"},
  {"to": "Delhi", "from": "Hyderabad", "when": "26:02:2025", "reason": "Cultural Fest"},
  {"to": "Hyderabad", "from": "Vizag", "when": "11:03:2025", "reason": "Music Festival"},
  {"to": "Vizag", "from": "Jaipur", "when": "25:04:2025", "reason": "Art Exhibition"},
  {"to": "Jaipur", "from": "Hyderabad", "when": "09:05:2025", "reason": "Food Festival"},
  {"to": "Delhi", "from": "Hyderabad", "when": "23:06:2025", "reason": "Film Festival"},
  {"to": "Hyderabad", "from": "Jaipur", "when": "07:07:2025", "reason": "Literature Festival"},
  {"to": "Vizag", "from": "Delhi", "when": "21:08:2025", "reason": "Dance Festival"},
  {"to": "Hathras", "from": "Mathura", "when": "04:09:2025", "reason": "Event"},
  {"to": "Mathura", "from": "Delhi", "when": "17:10:2025", "reason": "Festival"},
  {"to": "Agra", "from": "Lucknow", "when": "12:11:2025", "reason": "Holiday"},
  {"to": "Varanasi", "from": "Kolkata", "when": "25:12:2025", "reason": "Pilgrimage"},
  {"to": "Shimla", "from": "Chandigarh", "when": "07:01:2026", "reason": "Snowboarding"},
  {"to": "Manali", "from": "Delhi", "when": "19:02:2026", "reason": "Skiing"},
  {"to": "Goa", "from": "Mumbai", "when": "03:03:2026", "reason": "Beach Vacation"},
  {"to": "Kerala", "from": "Chennai", "when": "16:04:2026", "reason": "Backwaters Tour"},
  {"to": "Pune", "from": "Bangalore", "when": "29:05:2026", "reason": "Tech Conference"},
  {"to": "Nainital", "from": "Delhi", "when": "12:06:2026", "reason": "Nature Trek"},
  {"to": "Munnar", "from": "Kochi", "when": "25:07:2026", "reason": "Tea Plantation Visit"},
  {"to": "Ooty", "from": "Coimbatore", "when": "08:08:2026", "reason": "Botanical Garden Tour"},
  {"to": "Kodaikanal", "from": "Madurai", "when": "21:09:2026", "reason": "Hill Station Retreat"},
];

  

const Search = () => {
    

    const [text1, setText1] = useState('');

  const handleChange1 = (event) => {
    setText1(event.target.value);
  };
  

  const [text2, setText2] = useState('');

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };

  const [text3, setText3] = useState('');

  const handleChange3 = (event) => {
    setText3(event.target.value);
  };

  const [cards, setCards] = useState([]);



    const renderCards = (TotalListing, to, from) => {
  return TotalListing
    .filter(item => item.to === to && item.from === from)
    .map((item, index) => <Card key={index} {...item} />);
};

    const handleSubmit = (e) => {
    e.preventDefault();

    const renderedCards = renderCards(TotalListing, text1, text2);
    setCards(renderedCards);
  };


  return (

    <>
  <div className='flex flex-col md:flex-row pt-101'>
    <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
      <h3 className='font-bold mb-10'>Find people</h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className='flex items-center gap-2'>
          <label className='whitespace-nowrap font-semibold'>
            From:
          </label>
          <input
            type='text'
            id='from'
            placeholder='Search...'
            className='border rounded-lg p-3 w-full'
            value={text1}
            onChange={handleChange1}
          />
        </div>
        <div className='flex items-center gap-2'>
          <label className='whitespace-nowrap font-semibold'>
            To:
          </label>
          <input
            type='text'
            id='to'
            placeholder='Search...'
            className='border rounded-lg p-3 w-full'
            value={text2}
            onChange={handleChange2}
          />
        </div>
        <div className='flex items-center gap-2'> 
          <label className='whitespace-nowrap font-semibold'>
            WHEN:
          </label>
          <input
            type='text'
            id='when'
            placeholder='Search...'
            className='border rounded-lg p-3 w-full'
            value={text3}
            onChange={handleChange3}
          />
        </div>
        
        <button className='bg-slate-700 text-white p-3 bg-black rounded-lg uppercase hover:opacity-95 hover:bg-blue-gray-800' >
          Search
        </button>

      </form>
    </div>


    <div className='flex-1'>

      <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
        Listing results:
      </h1>
      
      <div className='p-7 flex flex-wrap gap-4 ps-20'>

        {cards}
        
      </div>
    </div>
    
  </div>
  <Footer/>
</>

  )
}

export default Search
