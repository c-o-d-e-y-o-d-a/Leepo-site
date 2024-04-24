import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from '../components/Card';
import Footer from '../components/Footer';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import {addDoc, collection,getDocs} from "firebase/firestore";
import { db } from '../firebase-config';


const Home = () => {


   const [tours,setTours] = useState([]);
   const usersCollectionRef = collection(db,"allTours");
  useEffect(() => {
  const getTours = async () => {
    const data = await getDocs(usersCollectionRef);
    setTours(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getTours();
}, []);


const [newTo, setNewTo] = useState("dsfsdf");
const [newFrom, setNewFrom] = useState("dsfsdf");
const [newWhen, setNewWhen] = useState(new Date());
const [newReason, setNewReason] = useState("sdfsdf");
const [newCreatorName, setNewCreatorName] = useState("dfsdf");
const [newCreatorEmail, setNewCreatorEmail] = useState("fsdfsdf");


const createTour = async () => {
  await addDoc(usersCollectionRef,{to:newTo,from:newFrom,when:newWhen,reason:newReason,creatorName:newCreatorName,CreatorEmail:newCreatorEmail});
}




  return (
    <div className='bg-gray-900 c '>

      <SignedOut>
        <div className='bg-gray-700 text-white ps-10 hover:bg-gray-700 '>
          Sign up to make travelling way easier for you
        </div>
      </SignedOut>


       <section className="bg-gray-900 pb-6"> {/* Use className instead of class */}
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 mt-10"> {/* Use className instead of class */}
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Find your next perfect travelling partner</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Leepo is an application which allows you to find people to collaborate and save money and have more fun while travelling.</p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Get started
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  {/* Use Link component directly */}
                  <Link to={'/search'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-yellow-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 hover:text-yellow-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 text-yellow-200">
                      Lets get started
                  </Link>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="\leepoLogo.png" alt="mockup"/>
              </div>
          </div>
      </section>

      <div className='flex justify-center bold align-middle mt-12 md:mt-24 cardsSection'>
        <h1 className='text-3xl md:text-5xl mb-2 font-bold text-black'>Explore:</h1>
      </div>

      <div className="flex justify-center gap-8 items-center mt-20 mb-6">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="text-2xl text-gray-500 px-4 italic font-light">People looking to colloborate near you</span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>

      {tours.map((tour) => (
  <div key={tour.id}>
    {tour.to}{tour.from}
  </div>
))}

      <div className='grid justify-center  items-center grid-cols-1 ps-8 sm:grid-cols-2 p-6 md:grid-cols-3 my-8 gap-y-6 md:gap-y-10 gap-x-4 md:gap-x-28   '>
        <Card from='Delhi' to='Greater noida' when='17 th december' reason='Carpooling'/>
        <Card from='Mumbai' to='Pune' when='18th December' reason='Business Meeting'/>
        <Card from='Bangalore' to='Mysore' when='19th December' reason='Family Visit'/>
        <Card from='Hyderabad' to='Vijayawada' when='20th December' reason='Vacation'/>
        <Card from='Chennai' to='Pondicherry' when='21st December' reason='Weekend Getaway'/>
      </div>
      
      

     <div className="flex justify-center gap-8 items-center mt-20  mb-10">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="text-2xl text-gray-500 px-4 italic font-light">Frequent tours from your location</span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>

      <div className='grid justify-center  items-center grid-cols-1 ps-8 sm:grid-cols-2 md:grid-cols-3 my-8 gap-y-6 md:gap-y-10 gap-x-4 md:gap-x-32  pb-40 '>
        <Card from='Delhi' to='Greater noida' when='17 th december' reason='Carpooling'/>
        <Card from='Mumbai' to='Pune' when='18th December' reason='Business Meeting'/>
        <Card from='Bangalore' to='Mysore' when='19th December' reason='Family Visit'/>
        <Card from='Hyderabad' to='Vijayawada' when='20th December' reason='Vacation'/>
        <Card from='Chennai' to='Pondicherry' when='21st December' reason='Weekend Getaway'/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
