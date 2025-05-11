// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContext';

// function Protected() {
//   const [message, setMessage] = useState('');
//   const { token } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchProtected = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/protected', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMessage(res.data.message);
//       } catch (err) {
//         setMessage('Access denied');
//       }
//     };
//     fetchProtected();
//   }, [token]);

//   return <div>{message}</div>;
// }

// export default Protected;
