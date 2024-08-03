// src/components/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column  ms-3 p-3 mt-4 mb-4 text-white" style={{
        // position: 'absolute',
        width: '269px',
        height: '748px',
        // left: '20px',
        background: '#072A30',
        borderRadius: '32px',
        fontSize: '13px'
      }}
    >
        <div className="row mb-2  align-items-center">
          <div className="col ">
            <img
              src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722295300/jfhj54bxh2rpusfkij28.png"
              alt="Profile"
              // className="img-fluid rounded-circle"
              style={{height:'40px',
            width:"40px",
            top: ""
            }}
            />
          </div>
          <div className="col  mt-3">
            <p className="text-white mb-0" style={{fontSize:'10px', fontWeight:"400px"}}>Welcome,</p>
            <h4 className="text-white" style={{fontSize:'17px', fontWeight:"500px"}}>Vincent</h4> 
          </div>
          <div className="col align-item-start justify-content-end ms-5">
            <img src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722321267/bell-bing-svgrepo-com_2_z8kyxl.png" alt="Notifications"/>
          </div>
        </div>

        <Nav className="flex-column mt-5">
          <Nav.Item>
            <Nav.Link href="#" className="text-white mb-3 border-top border-bottom pt-4 pb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328875/SVGRepo_iconCarrier_r39vqs.png' className='mx-1' alt="Dashboard"/>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          
          {/* User Management Dropdown */}
          <Nav.Item className="dropdown">
  <Nav.Link
    href="#"
    className="text-white border-bottom pb-4   mb-3 dropdown-toggle"
    id="user-management-dropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img 
      src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/user-check-svgrepo-com_1_v5z1fq.png" 
      className="me-2" 
      alt="User Management" 
    />
    User Management
  </Nav.Link>
  <ul className="dropdown-menu" aria-labelledby="user-management-dropdown">
    <li><Nav.Link href="#user-list" className="dropdown-item">User List</Nav.Link></li>
    <li><Nav.Link href="#profile-management" className="dropdown-item">Profile Management</Nav.Link></li>
    <li><Nav.Link href="#verification-management" className="dropdown-item">Verification Management</Nav.Link></li>
    <li><Nav.Link href="#payment-info-verification" className="dropdown-item">Payment Information Verification</Nav.Link></li>
  </ul>
</Nav.Item>

          
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-3 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/wallet-2-svgrepo-com_1_h2jdi8.png' className="me-2" alt="Wallet Management"/>
              Wallet Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-3 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/Copy_of_card-transfer-svgrepo-com_1_dr5f2t.png' className="me-2" alt="Transaction Management"/>
              Transaction Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-3 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/pen-new-square-svgrepo-com_1_1_lsrgvj.png' className="me-2" alt="Settings"/>
              Settings
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-3">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/notes-svgrepo-com_1_seibg6.png' className="me-2" alt="Reports"/>
              Reports
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
        <div className="mt-auto text-center">
          <img src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722303391/Kriapay_wordmark_logo_2_1_ahd3mq.png" 
            style={{
              width: '87.94px',
              height: '20.91px'
            }}
            alt="Logo"
          />
        </div>
    </div>
  );
};

export default Sidebar;

