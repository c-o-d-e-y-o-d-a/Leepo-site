import { useState } from 'react';
import TotalListings from '../utils/TotalListings'; // Import the TotalListings array directly instead of using useSelector

export default function CreateListing() {
  const [formData, setFormData] = useState({
    to: '',
    from: '',
    when: '',
    reason: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      // Create a new listing object
      const newListing = {
        to: formData.to,
        from: formData.from,
        when: formData.when,
        reason: formData.reason,
      };

      // Add the new listing to the TotalListings array
      TotalListings.push(newListing);

      // Reset form data
      setFormData({
        to: '',
        from: '',
        when: '',
        reason: '',
      });

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Create a Listing
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
            placeholder='when'
            className='border p-3 rounded-lg'
            id='when'
            required
            onChange={handleChange}
            value={formData.when}
          />
           <input
            type='text'
            placeholder='reason'
            className='border p-3 rounded-lg'
            id='reason'
            required
            onChange={handleChange}
            value={formData.reason}
          />

          {/* Add similar input fields for other properties (from, when, reason) */}
        </div>

        <div className='flex flex-col flex-1 gap-4'>
          <button
            disabled={loading}
            className='p-3 border border-black hover:bg-slate-700 bg-slate-900 text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Creating...' : 'Create listing'}
          </button>
          {error && <p className='text-red-700 text-sm'>{error}</p>}
        </div>
      </form>
    </main>
  );
}
