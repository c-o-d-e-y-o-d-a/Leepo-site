import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Card2 from "../components/Card2";

let dummyData = [
  {"to": "Jaipur", "from": "Delhi", "when": "01:01:2024", "reason": "Business trip"},
  {"to": "Delhi", "from": "Hyderabad", "when": "15:02:2024", "reason": "Vacation"},
  {"to": "Hyderabad", "from": "Vizag", "when": "30:03:2024", "reason": "Conference"},
  {"to": "Vizag", "from": "Jaipur", "when": "14:04:2024", "reason": "Meeting"},
  {"to": "Jaipur", "from": "Hyderabad", "when": "28:05:2024", "reason": "Wedding"},
];

export default function Profile() {
  const { isLoaded, user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [Cards, setCards] = useState([]);

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (!user) return null;

  const updateUser = async () => {
    try {
      await user.update({
        firstName: firstName,
        lastName: lastName,
      });
      alert("User information updated successfully!");
    } catch (error) {
      console.error("Error updating user information:", error);
      alert("Failed to update user information. Please try again.");
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const deleteListing = (index) => {
    const updatedList = [...dummyData];
    updatedList.splice(index, 1);
    dummyData = updatedList;
    // Update the cards after deleting
    const updatedCards = [...Cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="grid grid-rows-2 align-middle justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <p className="mt-4">Hello, {user?.firstName}</p>
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="border-gray-300 rounded-lg p-2 w-full"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="border-gray-300 rounded-lg p-2 w-full"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button
          onClick={updateUser}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Update Name
        </button>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-60 h-12 mt-20">
        <Link to="/createListing">Create new Listing</Link>
      </button>
      <div className="my-4 text-black text-3xl mb-8">Your current Listings: </div>
      <div className="grid justify-center align-middle grid-cols-1 md:grid-cols-3 gap-10">
        {dummyData.map((item, index) => (
          <Card2
            key={index}
            {...item}
            onDelete={() => deleteListing(index)}
          />
        ))}
      </div>

      

      
    </div>
  );
}
