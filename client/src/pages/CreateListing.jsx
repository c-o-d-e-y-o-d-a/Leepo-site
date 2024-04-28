import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useUser } from '@clerk/clerk-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


export default function CreateListing() {
  const { user } = useUser();
  const currEmail = String(user?.primaryEmailAddress); // Ensure user object and email are available

  const [formData, setFormData] = useState({
    to: '',
    from: '',
    when: '', // Assuming this is meant to be 'date' field
    reason: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const fetchListings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'allTours'));
      const listings = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCards(listings);
    } catch (error) {
      setError('Error fetching listings: ' + error.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      const newListing = {
        to: formData.to.toLowerCase(),
        from: formData.from.toLowerCase(),
        date: formData.when.toLowerCase(), // Ensure 'date' matches the field name in Firestore
        reason: formData.reason.toLowerCase(),
        username: user?.fullName || 'Unknown', // Use fallback if fullName is not available
        useremail: currEmail || 'Unknown Email', // Use fallback if email is not available
      };

      await addDoc(collection(db, 'allTours'), newListing);

      setFormData({
        to: '',
        from: '',
        when: '',
        reason: '',
      });

      fetchListings();

      setLoading(false);
    } catch (error) {
      setError('Error creating listing: ' + error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'allTours', id));
      fetchListings();
    } catch (error) {
      setError('Error deleting listing: ' + error.message);
    }
  };

  return (
    <div className='text-center'>
      <SignedIn>
        <main className='p-3 max-w-xl mx-auto mt-14 border-black bg-blue-gray-100 p-10 rounded-lg shadow-md shadow-gray-700'>
        <h1 className='text-3xl font-semibold text-center my-12'>Create a Listing</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-8'>
          <div className='flex flex-col gap-4 flex-1'>
            <input
              type='text'
              placeholder='To'
              className='border p-3 rounded-lg'
              id='to'
              required
              onChange={handleChange}
              value={formData.to}
            />
            <input
              type='text'
              placeholder='From'
              className='border p-3 rounded-lg'
              id='from'
              required
              onChange={handleChange}
              value={formData.from}
            />
            <input
              type='text'
              placeholder='When'
              className='border p-3 rounded-lg'
              id='when'
              required
              onChange={handleChange}
              value={formData.when}
            />
            <input
              type='text'
              placeholder='Reason'
              className='border p-3 rounded-lg'
              id='reason'
              required
              onChange={handleChange}
              value={formData.reason}
            />
          </div>

          <div className='flex flex-col flex-1 gap-4 w-80 ms-28'>
            <button
              disabled={loading}
              className='hover:bg-blue-gray-200 p-3 border border-black hover:bg-slate-700 bg-slate-900 text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
              {loading ? 'Creating...' : 'Create listing'}
            </button>
            {error && <p className='text-red-700 text-sm'>{error}</p>}
          </div>
        </form>
      </main>

      <h3 className='text-2xl font-bold mt-20 mb-16'>Your Current Listings:</h3>

      <div className='p-7 flex flex-wrap gap-4 md:ps-52'>
        {cards.map((listing) => {
          if (listing.useremail === currEmail) {
            return (
              <div key={listing.id} className='text-center w-80 rounded-lg shadow-md md:w-80 bg-gray-200 border-orange-200 border-2'>
                <div className='relative'>
                  <img src='\bg-leepo.png' alt='Tour Image' className='rounded-t-lg w-full h-40 object-cover' />
                  <div className='absolute inset-0 bg-black opacity-40 rounded-t-lg'></div>
                </div>
                <div className='p-6'>
                  <div className='flex flex-col mb-4'>
                    <div className='mb-2'>
                      <span className='font-semibold'>From:</span> {listing.from}
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>To:</span> {listing.to}
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>When:</span> {listing.date}
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Reason:</span> {listing.reason}
                    </div>
                  </div>
                  <button
                    className='bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600'
                    onClick={() => handleDelete(listing.id)}
                  >
                    Delete Tour
                  </button>
                </div>
              </div>
            );
          }
          return null; 
        })}
      </div>
      </SignedIn>
      <SignedOut>
        <div className='w-80 bg-yellow-50  border-2 fixed top-80 shadow-md p-4 left-[500px] border-blue-gray-600 rounded-lg'>Please create an account or log in if you already have one to create listings
        <div className="border-black border-2 mt-2 rounded-lg bg-gray-400 w-40 ms-16"> <SignInButton/></div>
       
        </div>
      </SignedOut>
    </div>
  );
}
