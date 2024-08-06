
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have some CSS for styling

const Dashboard = ({ adminName }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>{adminName}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/add-student">Add Student</Link>
            </li>
            <li>
              <Link to="/student-progress">Student Progress</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className="grids-container">
          <div className="grids-item">
            <h3>Student Enrolled</h3>
            <p>120</p>
          </div>
          <div className="grids-item">
            <h3>Books Completion</h3>
            <p>75</p>
          </div>
          <div className="grids-item">
            <h3>Student Completion Progress</h3>
            <p>80</p>
          </div>
          <div className="grids-item">
            <h3>Games Played</h3>
            <p>30</p>
          </div>
          <div className="grids-item">
            <h3>Saved pdf</h3>
            <p>30</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import './Dashboard.css';

// const chartData = [
//   { name: 'Trucks', value: 15 },
//   { name: 'Goods Transported', value: 500 },
//   { name: 'Orders', value: 200 },
//   { name: 'Active Users', value: 600 }
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const orderData = [
//   { id: 1, orderNumber: 'ORD123', status: 'Delivered', date: '2024-07-25' },
//   { id: 2, orderNumber: 'ORD124', status: 'Pending', date: '2024-07-26' },
//   { id: 3, orderNumber: 'ORD125', status: 'Shipped', date: '2024-07-27' }
// ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">Logistics Management Dashboard</h1>
      
//       <div className="info-cards">
//         <div className="info-card">
//           <h3>Total Trucks</h3>
//           <p>15</p>
//         </div>
//         <div className="info-card">
//           <h3>Total Goods Transported</h3>
//           <p>500</p>
//         </div>
//         <div className="info-card">
//           <h3>Total Orders</h3>
//           <p>200</p>
//         </div>
//         <div className="info-card">
//           <h3>Active Users</h3>
//           <p>600</p>
//         </div>
//       </div>
      
//       <div className="chart-container">
//         <h2>Statistics Overview</h2>
//         <PieChart width={800} height={400}>
//           <Pie
//             data={chartData}
//             cx={400}
//             cy={200}
//             labelLine={false}
//             outerRadius={150}
//             fill="#8884d8"
//             dataKey="value"
//             nameKey="name"
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>
      
//       <div className="table-container">
//         <h2>Recent Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Order Number</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderData.map(order => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.orderNumber}</td>
//                 <td>{order.status}</td>
//                 <td>{order.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import Settings from '../settings/settings';
// import User from '../User/User.js';
// import './dashboard.css';
// import { PieChart, Pie, Cell } from 'recharts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faBookOpen, faBookReader, faCalendarAlt, faBars, faChevronLeft, faChevronRight, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeSection, setActiveSection] = useState('dashboard'); // Default to 'dashboard'

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleSidebarItemClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar
//         isOpen={isSidebarOpen}
//         onSidebarItemClick={handleSidebarItemClick} // Pass click handler to Sidebar
//       />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <div className="top-bar">
//           <button className="sidebar-toggle" onClick={toggleSidebar}>
//             <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
//           </button>
//           {activeSection === 'dashboard' && (
//             <>
//               <div className="header-item">
//                 <FontAwesomeIcon icon={faBook} />
//                 <span>Total Books: 124</span>
//               </div>
//               <div className="header-item">
//                 <FontAwesomeIcon icon={faBookOpen} />
//                 <span>Story-Books Read: 78</span>
//               </div>
//               <div className="header-item">
//                 <FontAwesomeIcon icon={faBookOpen} />
//                 <span>Edu-Books Read: 26</span>
//               </div>
//               <div className="header-item">
//                 <FontAwesomeIcon icon={faBookReader} />
//                 <span>Active Readers: 35</span>
//               </div>
//             </>
//           )}
//         </div>
//         <div className='stats-revenue'>
//           {activeSection === 'dashboard' && (
//             <>
//               <Stats />
//               <ActivityChart />
//               <LatestBooks />
//             </>
//           )}
//           {activeSection === 'books' && <Books />}
//           {activeSection === 'educational' && <EducationalBooks />}
//           {activeSection === 'reports' && <Reports />}
//           {activeSection === 'settings' && <Settings />}
//           {activeSection === 'User' && <User />}
//           {activeSection === 'logout' && <Logout />}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Sidebar = ({ isOpen, onSidebarItemClick }) => (
//   <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//     <ul>
//       <li onClick={() => onSidebarItemClick('dashboard')}>
//         <FontAwesomeIcon icon={faBook} /> {isOpen && 'Dashboard'}
//       </li>
//       <li onClick={() => onSidebarItemClick('books')}>
//         <FontAwesomeIcon icon={faBookOpen} /> {isOpen && 'Books'}
//       </li>
//       <li onClick={() => onSidebarItemClick('educational')}>
//         <FontAwesomeIcon icon={faBookReader} /> {isOpen && 'Educational Books'}
//       </li>
//       <li onClick={() => onSidebarItemClick('reports')}>
//         <FontAwesomeIcon icon={faCalendarAlt} /> {isOpen && 'Reports'}
//       </li>
//       <li onClick={() => onSidebarItemClick('settings')}>
//         <FontAwesomeIcon icon={faCog} /> {isOpen && 'Settings'}
//       </li>
//       <li onClick={() => onSidebarItemClick('User')}>
//         <FontAwesomeIcon icon={faCalendarAlt} /> {isOpen && 'User'}
//       </li>
//       <li onClick={() => onSidebarItemClick('logout')}>
//         <FontAwesomeIcon icon={faSignOutAlt} /> {isOpen && 'Logout'}
//       </li>
//     </ul>
//   </div>
// );

// const chartData = [
//   { name: 'Fiction', value: 50 },
//   { name: 'Non-Fiction', value: 30 },
//   { name: 'Educational', value: 20 }
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// const Stats = () => (
//   <div className="chart-container">
//     <h2>Book Statistics</h2>
//     <PieChart width={800} height={400}>
//       <Pie
//         data={chartData}
//         cx={400}
//         cy={200}
//         labelLine={false}
//         outerRadius={150}
//         fill="#8884d8"
//         dataKey="value"
//         nameKey="name"
//       >
//         {chartData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   </div>
// );

// const activityData = [
//     { name: 'March', revenue: 10000 },
//     { name: 'April', revenue: 15000 },
//     { name: 'May', revenue: 20000 },
//     { name: 'June', revenue: 25000 },
//     { name: 'July', revenue: 30000 },
//     { name: 'August', revenue: 50000 },
// ];

// const ActivityChart = () => (
//     <div className="revenue-chart">
//       <h3>Total Revenue (Last 6 months)</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={activityData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );

// const LatestBooks = () => (
//   <div className="latest-books">
//     <h3>Latest Books</h3>
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Genre</th>
//           <th>Publication Date</th>
//           <th>Pages</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Adventures of Tom Sawyer</td>
//           <td>Mark Twain</td>
//           <td>Fiction</td>
//           <td>6/25/1876</td>
//           <td>274</td>
//         </tr>
//         <tr>
//           <td>Charlotte's Web</td>
//           <td>E.B. White</td>
//           <td>Children's Fiction</td>
//           <td>10/15/1952</td>
//           <td>192</td>
//         </tr>
//         {/* Add more rows as needed */}
//       </tbody>
//     </table>
//   </div>
// );

// const Books = () => (
//   <div className="books">
//     <h3>Book Collection</h3>
//     {/* Add your Books component content here */}
//   </div>
// );

// const EducationalBooks = () => (
//   <div className="educational-books">
//     <h3>Educational Books</h3>
//     {/* Add your Educational Books component content here */}
//   </div>
// );

// const Reports = () => (
//   <div className="reports">
//     <h3>Reports</h3>
//     {/* Add your Reports component content here */}
//   </div>
// );

// const Calendar = () => (
//   <div className="calendar">
//     <h3>Calendar</h3>
//     {/* Add your Calendar component content here */}
//   </div>
// );

// const Logout = () => (
//   <div className="logout">
//     <h3>Logging out...</h3>
//     {/* Handle your logout logic here */}
//   </div>
// );

// export default Dashboard;