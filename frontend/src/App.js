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
