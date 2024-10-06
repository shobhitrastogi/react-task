import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../services/api';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUsers();
        const foundUser = response.data.find(u => u.id === parseInt(id));
        setUser(foundUser);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    getUser();
  }, [id]);

  if (!user) return <div className="text-center py-10">Loading user details...</div>;

  return (
    <div className="p-5 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-5">User Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Name:</h3>
        <p>{user.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Email:</h3>
        <p>{user.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Phone:</h3>
        <p>{user.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Website:</h3>
        <p>{user.website}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Company:</h3>
        <p>{user.company?.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Address:</h3>
        <p>
          {user.address?.street}, {user.address?.suite}, {user.address?.city} - {user.address?.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
