import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './DashBoardss.css';

const chartData = [
  { name: 'Student Enrolled', value: 15 },
  { name: 'Books Completion', value: 500 },
  { name: 'Student Completion Progress', value: 200 },
  { name: 'Games Played', value: 600 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const orderData = [
  { id: 1, orderNumber: 'Sri', status: 'inprogress', date: '2024-07-25' },
  { id: 2, orderNumber: 'Mukund', status: 'completed', date: '2024-07-26' },
  { id: 3, orderNumber: 'Kumar', status: 'inprogress', date: '2024-07-27' }
];

const DashBoardss = () => {
  return (
    <div className="dashbooard">
      <h1 className="dashbooard-title">StuBooks Dashboard</h1>
      
      <div className="info-cards">
        <div className="info-card">
          <h3>Student Enrolled</h3>
          <p>3000</p>
        </div>
        <div className="info-card">
          <h3>Books Completion</h3>
          <p>750</p>
        </div>
        <div className="info-card">
          <h3>Student Completion Progress</h3>
          <p>300</p>
        </div>
        <div className="info-card">
          <h3>Games Played</h3>
          <p>300</p>
        </div>
      </div>
      
      <div className="chart-container">
        <h2>Statistics Overview</h2>
        <PieChart width={800} height={400}>
          <Pie
            data={chartData}
            cx={400}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      
      <div className="table-container">
        <h2>Enrolled Students</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Number</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderNumber}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardss;