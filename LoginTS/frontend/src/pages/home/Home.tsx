import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthService from '../../helpers/auth'; // Make sure to import your AuthService
import { useEffect, useState } from 'react';

function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("GetCurrentUser error:", error);
      }
    };

    fetchData();
  }, []); // 

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/logout/");
      window.location.reload();
    } catch (error) {
      // Handle any errors here
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <li className="flex">
        {currentUser ? (
          <Link to="/" onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </div>
  );
}

export default Home;
