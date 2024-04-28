import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';



  

















  

const Search = () => {

  const [TotalListing,setTotalListing] = useState([]);
  
const fetchListings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'allTours'));
      const listings = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTotalListing(listings);
    } catch (error) {
      setError('Error fetching listings: ' + error.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  





   const { user } = useUser();
  const userName = String(user?.fullName);
    

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
  <SignedIn>
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
        
        <button className='bg-slate-700 text-white p-3 bg-black rounded-lg uppercase hover:opacity-95 hover:bg-blue-gray-800'  type='submit' >
          Search
        </button>

         <button className='bg-slate-700 text-white p-3 bg-black rounded-lg uppercase hover:opacity-95 hover:bg-blue-gray-800'  >
          <Link to='/createListing'>
            Create new Tour
          </Link>
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
  </SignedIn>
  <SignedOut>
        <div className='w-80 bg-yellow-50  border-2 fixed top-80 shadow-md p-4 left-[500px] border-blue-gray-600 rounded-lg'>Please create an account or log in if you already have one to create and view listings
        <div className="border-black border-2 mt-2 rounded-lg bg-gray-400 w-40 ms-16"> <SignInButton/></div>
       
        </div>
      </SignedOut>
  

</>

  )
}

export default Search
