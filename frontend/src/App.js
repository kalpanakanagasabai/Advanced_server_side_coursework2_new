// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Register from './pages/Register';
// // import Login from './pages/Login';
// // import Profile from './pages/Profile';
// // import CreatePost from './pages/CreatePost';
// // import EditPost from './pages/EditPost';  // Import EditPost component
// // import PostList from './pages/PostList';  // Import PostList component
// // import PostDetail from './pages/PostDetail';  // Import PostDetail component


// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li><Link to="/">Home</Link></li>
// //             <li><Link to="/login">Login</Link></li>
// //             <li><Link to="/register">Register</Link></li>
// //             <li><Link to="/profile">Profile</Link></li>
// //             <li><Link to="/create">Create Post</Link></li>
// //           </ul>
// //         </nav>

// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/profile" element={<Profile />} />
// //           <Route path="/create" element={<CreatePost />} />
// //           <Route path="/edit/:id" element={<EditPost />} />  {/* Add route for editing a post */}
// //           <Route path="/posts" element={<PostList />} />  {/* Add route for post list */}
// //           <Route path="/posts/:id" element={<PostDetail />} />  {/* Add route for post detail */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';
// import PostList from './pages/PostList';
// import PostDetail from './pages/PostDetail';
// import PrivateRoute from './components/PrivateRoute'; // Import wrapper

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//             {/* <li><Link to="/create">Create Post</Link></li>
//              <li><Link to="/create">Create Post</Link></li> */}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route
//             path="/create"
//             element={
//               <PrivateRoute>
//                 <CreatePost />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/edit/:id" element={<EditPost />} />
//           <Route path="/posts" element={<PostList />} />
//           {/* <Route path="/posts/:id" element={<PostDetail />} /> */}
//          <Route path="/PostDetail" element={<PostDetail />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';
// import PostList from './pages/PostList';
// import PostDetail from './pages/PostDetail';
// import PrivateRoute from './components/PrivateRoute'; // Import wrapper
// import CountryDetails from './pages/CountryDetails'; // Import CountryDetails component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/country-details">Country Details</Link></li> {/* Link to CountryDetails */}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route
//             path="/create"
//             element={
//               <PrivateRoute>
//                 <CreatePost />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/edit/:id" element={<EditPost />} />
//           <Route path="/posts" element={<PostList />} />
//           <Route path="/postdetail" element={<PostDetail />} />
//           <Route path="/country-details" element={<CountryDetails />} /> {/* New route for CountryDetails */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PrivateRoute from './components/PrivateRoute';
import CountryDetails from './pages/CountryDetails';
import Header from './pages/Header';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <CreatePost />
                </PrivateRoute>
              }
            />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/postdetail" element={<PostDetail />} />
            <Route path="/country-details" element={<CountryDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
