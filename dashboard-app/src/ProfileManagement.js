import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Style.css"

const data = [
  { 
    userId: '001', 
    name: 'Daniella Williams', 
    email: 'daniellawilliams@gmail.com', 
    phoneNumber: '+2348142810677', 
    status: 'Active',
    transactions: [
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful' , details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'Transfer' },
    ]
  },
  { 
    userId: '002', 
    name: 'John Doe', 
    email: 'johndoe@gmail.com', 
    phoneNumber: '+2348142810678', 
    status: 'Active',
    transactions: [
      { recipient: 'Jane Doe', type: 'Transfer', amount: 'NGN 30,000.00', status: 'Successful', details:'Transfer' },
      { recipient: 'Mary Johnson', type: 'Payment', amount: 'NGN 15,000.00', status: 'Failed',details:'Transfer' },
      { recipient: 'Mark Spencer', type: 'Transfer', amount: 'NGN 20,000.00', status: 'Successful', details:'Transfer' },
    ]
  },
  { 
    userId: '003', 
    name: 'Jane Smith', 
    email: 'janesmith@gmail.com', 
    phoneNumber: '+2348142810679', 
    status: 'Blocked',
    transactions: [
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Failed' , details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'Transfer' },
    ]
  },
  { 
    userId: '004', 
    name: 'Mary Johnson', 
    email: 'maryjohnson@gmail.com', 
    phoneNumber: '+2348142810680', 
    status: 'Active',
    transactions: [
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful' , details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'Transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful' , details:'Transfer' },
    ]
  },
  { 
    userId: '005', 
    name: 'James Brown', 
    email: 'jamesbrown@gmail.com', 
    phoneNumber: '+2348142810681', 
    status: 'Blocked',
    
    transactions: [
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Failed' , details:'transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful' , details:'transfer' },
      { recipient: 'Daniel Williams', type: 'Transfer', amount: 'NGN 50,000.00', status: 'Successful', details:'transfer' },
    ]
  }
];

const Profile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedUser, setSelectedUser] = useState(data[0]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const isReversed = sortConfig.direction === 'asc' ? 1 : -1;
      return isReversed * a[sortConfig.key].localeCompare(b[sortConfig.key]);
    }
    return 0;
  });

  const filteredData = sortedData.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterStatus || row.status === filterStatus)
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C9D9D1' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <div style={{ display: 'flex', flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
          <div style={{ flex: 3, backgroundColor: '#072A30', borderRadius: '32px', padding: '20px', color: 'white', marginRight: '20px' }}>
            <h6>User list</h6>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
              <div>
                <p style={{ color: '#8de5bd', fontSize: '13px', marginBottom: '-10px' }}>Search</p>
                <input
                  type="text"
                  placeholder=""
                  value={searchTerm}
                  onChange={handleSearch}
                  className="form-control"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #ffffff',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '317.56px'
                  }}
                />
              </div>
              <div>
                <DropdownButton
                  id="filter-dropdown"
                  title={
                    <span className='mx-2'>
                      <img
                        src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722469345/sort-svgrepo-com_2_1_dfp0wm.png'
                        alt="filter icon"
                        style={{ marginRight: '8px' }}
                      />
                      Filter
                    </span>
                  }
                  style={{}}
                >
                  <Dropdown.Item onClick={() => handleFilter('Active')}>Filter Active</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilter('Blocked')}>Filter Blocked</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilter('')}>Clear Filter</Dropdown.Item>
                </DropdownButton>
              </div>
              <div>
                <button
                  className="btn ms-2 d-flex text-white align-items-center"
                  style={{ backgroundColor: '#0a3c43', borderRadius: '10px' }}
                  onClick={() => handleSort('name')}
                >
                  <img
                    src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722468855/SVGRepo_iconCarrier_2_zu15h0.png'
                    alt='arrow'
                    className="me-2"
                  />
                  <p className="mb-0" style={{ fontSize: "13px" }}>Sort</p>
                  <img
                    src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722468075/chevron-right_kittpn.png'
                    alt='sort'
                    className="ms-2"
                  />
                </button>
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 2rem', backgroundColor: 'transparent', fontSize: '13px' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>User ID</th>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>Name</th>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>Email</th>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>Phone Number</th>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>Status</th>
                  <th style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>Edit</th>

                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.userId} onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>{row.userId}</td>
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>{row.name}</td>
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>{row.email}</td>
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>{row.phoneNumber}</td>
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px', textAlign: 'left' }}>
                      <div style={{ backgroundColor: '#0a3c43', borderRadius: '10px', fontSize: '13px' }} className="btn d-flex text-white align-items-center">
                        {row.status === 'Active' ? (
                          <>
                            <img
                src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_4_yk2g68.png'
                alt="Active"
                              style={{ width: '20px', height: '20px', marginRight: '8px' }}
                            />
                            Active
                          </>
                        ) : (
                          <>
                            <img
                              src='https://res.cloudinary.com/dw7w2at8k/image/upload/v1722776864/close-circle-svgrepo-com_1_wddfsv.png'
                              alt="Blocked"
                              style={{ width: '20px', height: '20px', marginRight: '8px' }}
                            />
                            Blocked
                          </>
                        )}
                      </div>
                    </td> 
                    <td style={{ borderBottom: '1px solid #ffffff', padding: '10px' }}>
                      <button className="btn btn-link" style={{ padding: 0 }}>
                        <img 
                          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1722777466/Copy_of_pen-2-svgrepo-com_3_u1ysgq.png" 
                          alt="Edit" 
                          style={{ width: '20px', height: '20px' }} 
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {selectedUser && (
          <div style={{ flex: 1, backgroundColor: '#072A30', borderRadius: '32px', padding: '20px', color: 'white' }}>
            <img
              src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722295300/jfhj54bxh2rpusfkij28.png"
              alt="Profile"
              className="d-block mx-auto"
              style={{ marginTop: '54px' }}
            />
            <h4 className="text-center" style={{ fontSize: '13px', borderBottom: '1px solid #ffffff' ,  paddingBottom:'7px',
}}>
              <img
                src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_4_yk2g68.png'
                alt="Icon"
                style={{
                  width: '25px',
                  height: '25px',
                  padding: '2.08px',
                  gap: '0px',
                  opacity: '0px',
                }}
              />Active
            </h4>
            <p style={{ fontSize: '13px' }}><strong>Name:</strong> {selectedUser.name}</p>
            <p style={{ fontSize: '13px' }}><strong>Email:</strong> {selectedUser.email}</p>
            <p style={{ fontSize: '13px' }}><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
            <p style={{ fontSize: '13px', borderBottom: '1px solid #ffffff' }}><strong>Status:</strong> {selectedUser.status}</p>
            <h5 style={{ fontSize: '13px' }}>Recent Transactions</h5>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px'}}>
                <tbody>
                  {selectedUser.transactions.slice(0, 3).map((transaction, index) => (
                    <React.Fragment key={index}>
                      <tr style={{  textAlign: 'left', fontSize: '13px'}}>
                        <td style={{ padding: '8px' }}>{transaction.recipient}</td>
                        <td style={{ padding: '8px' }}>{transaction.date}</td>
                        <td style={{ padding: '8px', textAlign: 'right' }}>{transaction.amount}</td>
                      </tr>
                      <tr style={{ fontSize: '13px', borderBottom: '1px solid #ffffff' }}>
                        <td style={{ padding: '8px', color: 'red' }}>{transaction.details}</td>
                        <td colSpan="2" style={{ padding: '8px', color: 'green', textAlign: 'right' }}>{transaction.status}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Profile;