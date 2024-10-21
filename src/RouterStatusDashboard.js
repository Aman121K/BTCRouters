import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Import the Firestore instance
import { collection, onSnapshot } from 'firebase/firestore'; // Import necessary Firestore functions
import './RouterStatusDashboard.css'; // Import your CSS file for styling

const RouterStatusDashboard = () => {
  const [routerStatus, setRouterStatus] = useState([]);

  useEffect(() => {
    const routersCollection = collection(db, 'newRouters');

    const unsubscribe = onSnapshot(routersCollection, (snapshot) => {
      const statusList = snapshot.docs.map((doc) => ({
        id: doc.id, // Assuming you want to display the document ID
        cafeName: doc.data().cafeName,
        ispName: doc.data().ispName,
        ipRouter: doc.data().ipRouter,
        phoneNumber: doc.data().phoneNumber,
        alive: doc.data().alive,
      }));
      setRouterStatus(statusList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Router Status</h1>
      <table className="router-status-table">
        <thead>
          <tr>
            <th>Cafe Name</th>
            <th>ISP Name</th>
            <th>IP Address</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {routerStatus.map((router) => (
            <tr key={router.id}>
              <td>{router.cafeName}</td>
              <td>{router.ispName}</td>
              <td>{router.ipRouter}</td>
              <td>{router.phoneNumber}</td>
              <td className={router.alive ? 'active' : 'inactive'}>
                {router.alive ? 'Active' : 'Inactive'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouterStatusDashboard;