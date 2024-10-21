// src/AddRouter.js
import React, { useState } from 'react';
import { db } from './firebaseConfig'; // Import the Firestore instance
import { collection, addDoc } from 'firebase/firestore';

const AddRouter = () => {
  const [newRouter, setNewRouter] = useState({
    cafeName: '',
    ispName: '',
    ipRouter: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRouter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'newRouters'), {
        cafeName: newRouter.cafeName,
        ispName: newRouter.ispName,
        ipRouter: newRouter.ipRouter,
        phoneNumber: newRouter.phoneNumber,
        alive: true, // Assuming new routers are active by default
      });
      // Reset the form after submission
      setNewRouter({
        cafeName: '',
        ispName: '',
        ipRouter: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error adding router:', error);
    }
  };

  return (
    <div>
      <h1>Add New Router</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cafeName"
          placeholder="Cafe Name"
          value={newRouter.cafeName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ispName"
          placeholder="ISP Name"
          value={newRouter.ispName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ipRouter"
          placeholder="IP Router"
          value={newRouter.ipRouter}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newRouter.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRouter;