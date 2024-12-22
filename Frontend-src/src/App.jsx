import {Box} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import UserProfileEdit from './pages/UserProfileEdit';
import UserProfile from './pages/UserProfile.jsx';
import UserToDoList from './pages/UserToDoList';


function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/" element={<RegisterPage/>} />
          <Route path="/" element={<UserProfileEdit/>} />
          <Route path="/" element={<UserProfile/>} />
          <Route path="/RegisterPage" element={<UserToDoList/>} />
        </Routes>

      </Box>
    </>
  );
}

export default App;
