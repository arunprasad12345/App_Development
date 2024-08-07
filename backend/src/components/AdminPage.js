
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminPage.css';

// const AdminPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const adminUsername = 'Arunprasad';
//     const adminPassword = '7';

//     if (username === adminUsername && password === adminPassword) {
//       navigate('/dashboard', { state: { adminName: 'Arunprasad' } }); // Redirect to Dashboard with state
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="admin-container">
//       <div className="login-container">
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUsername = 'Arunprasad';
    const adminPassword = '7';

    if (username === adminUsername && password === adminPassword) {
      navigate('/dashboard', { state: { adminName: 'Arunprasad' } }); // Redirect to Dashboard with state
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-container">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
