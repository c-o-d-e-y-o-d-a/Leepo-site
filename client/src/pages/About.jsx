import React from 'react';
// import CardAbout from '../components/CardAbout';
import Footer from '../components/Footer';
import CardAbout from '../components/CardAbout';    



export default function About() {
  return (
    <>
      <div className='py-20 px-4   text-lg text-center bg-gradient-to-br from-yellow-100 to-rose-100'>
        <h1 className='text-4xl font-bold mb-4 text-slate-800 mt-20'>About LEEPO</h1>
        <p className='mb-8 text-slate-700 p-6 md:p-16'>
          Leepo is an innovative platform that revolutionizes the way people travel. It’s a unique social networking site designed specifically for travelers, enabling them to connect with others who have similar travel plans.
          Imagine planning a trip to a new city or country, and being able to find someone else who is also traveling to the same destination within the same time frame. This is exactly what Leepo offers.
          Leepo is not just about finding travel buddies; it’s about creating a global community of like-minded travelers. It encourages users to share their travel plans, experiences, and tips, thereby enriching the overall travel experience for everyone on the platform. Whether you’re planning a solo adventure, a family vacation, or a business trip, Leepo can help you connect with others who are on a similar journey.
        </p>
        <div className='my-10'><hr className='bg-black'/></div>

        <div className='mb-4'>
          <div className='text-4xl font-bold mb-8 text-slate-800 mt-20'>What we have to offer: </div>
        </div>

        {/* <div className='grid md:grid-cols-2 grid-cols-1 md:ps-60 gap-y-10'>
          <CardAbout content='Unite with Travel Buddies' heading='Find like-minded travelers and embark on an unforgettable journey together.'/>
          <CardAbout content='Discover Common Interests' heading='Connect with people who share your passion for travel and explore new places.'/>
          <CardAbout content='Save Money on Trips' heading='Travel in groups and enjoy significant savings on accommodation, transportation, and more.'/>
          <CardAbout content='Time-Efficient Planning' heading='Collaborate on travel plans and make the most of your time on your adventures.'/>
        </div>  */}
      </div>
      <Footer/>
    </>
  );
}
