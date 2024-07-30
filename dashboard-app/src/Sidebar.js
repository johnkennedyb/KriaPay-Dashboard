// src/components/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUsers, FaWallet, FaExchangeAlt, FaCog, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 mt-4  mb-4 text-white"  style={{
        position: 'absolute',
        width: '300px',
        height: '954px',
        left: '20px',
        // top: 'calc(50% - 477px)', // 477px is 954px/2
        background: '#072A30',
        borderRadius: '32px'
      }}
    >
        
        <div className="row mb-4 align-items-center">
  <div className="col-auto">
    <img
      src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722295300/jfhj54bxh2rpusfkij28.png"
      alt="Profile"
      className="img-fluid rounded-circle"
    />
  </div>
  <div className="col mt-3">
    <p className="text-white mb-0">Welcome,</p>
    <h4 className="text-white">Vincent</h4>
  </div>
</div>



      <Nav className="flex-column mt-5">
        <Nav.Item>
          <Nav.Link href="#" className="text-white mb-4">
            <FaHome className="me-2" />
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white  mb-4">
            <FaUsers className="me-2" />
            User Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white  mb-4">
            <FaWallet className="me-2" />
            Wallet Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white  mb-4">
            <FaExchangeAlt className="me-2" />
            Transaction Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white  mb-4">
            <FaCog className="me-2" />
            Settings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-white ">
            <FaChartLine className="me-2" />
            Reports
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
