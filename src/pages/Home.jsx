import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const Home = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setEditingUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-5">
      <UserList onEdit={(user) => { setEditingUser(user); openModal(); }} onCreate={openModal} />
      {isModalOpen && (
        <UserForm user={editingUser} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
