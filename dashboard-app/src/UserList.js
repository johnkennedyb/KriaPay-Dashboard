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

const UserList = () => {
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
    <div className="d-flex text-white" style={{ background: '#C9D9D1' }}>
      <div className="w-15">
        <Sidebar />
      </div>
      <div className="d-flex flex-grow-1 mt-4 mb-5">
        <div className="flex-column" style={{ background: '#072A30', borderRadius: '32px', height: '759px', width: '805px', padding: '20px' }}>
          <h6 className="text-left pt-3 pb-5" style={{ width: "164px", height: "22px", top: "62px", left: "323px", gap: "0px", textAlign: "left", display: "flex", alignItems: "flex-start" }}>User list</h6>
          <div className="d-flex justify-content-between align-items-center w-100 mb-4">
            <div>
              <p style={{ color:'#8de5bd', fontSize:'13px' , marginBottom:'-10px'}} >Search</p>
              <input
                type="text"
                placeholder=""
                value={searchTerm}
                onChange={handleSearch}
                className="form-control w-20 border-0 border-bottom border-gray-500 text-white bg-transparent no-border-radius"
                style={{borderRadius: '0px' , width: '317.56px'}}
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
                style={{ backgroundColor: '#0a3c43', color: 'white', borderColor: '#0a3c43' }}
                className="ms-2 custom-dropdown-button"
              >
                <Dropdown.Item onClick={() => handleFilter('Active')}>Filter Active</Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilter('Blocked')}>Filter Blocked</Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilter('')}>Clear Filter</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <button className="btn ms-2 d-flex text-white align-items-center" style={{ backgroundColor: '#0a3c43' }} onClick={() => handleSort('name')}>
                <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722468855/SVGRepo_iconCarrier_2_zu15h0.png' alt='arrow' className="me-2" />
                <p className="mb-0" style={{fontSize:"13px"}}>Sort</p>
                <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722468075/chevron-right_kittpn.png' alt='sort' className="ms-2" />
              </button>
            </div>
          </div>
          <table
            style={{
              backgroundColor: 'transparent',
              borderCollapse: 'separate',
              borderSpacing: '0 2rem',
              width: '100%',
            }}
          >
            <thead style={{ borderBottom: '1px solid #ffffff' }}>
              <tr>
                <th style={{ borderBottom: '1px solid #ffffff' }}>User ID</th>
                <th style={{ borderBottom: '1px solid #ffffff' }}>Name</th>
                <th style={{ borderBottom: '1px solid #ffffff' }}>Email</th>
                <th style={{ borderBottom: '1px solid #ffffff' }}>Phone Number</th>
                <th style={{ borderBottom: '1px solid #ffffff' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr
                  key={row.userId}
                  onClick={() => handleRowClick(row)}
                  style={{
                    // backgroundColor: selectedUser?.userId === row.userId ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <td style={{ borderBottom: '1px solid #ffffff' , marginBottom:'20px' }} >{row.userId}</td>
                  <td style={{ borderBottom: '1px solid #ffffff' }} >{row.name}</td>
                  <td style={{ borderBottom: '1px solid #ffffff' }} >{row.email}</td>
                  <td style={{ borderBottom: '1px solid #ffffff' }} >{row.phoneNumber}</td>
                  <td style={{ borderBottom: '1px solid #ffffff' }} >{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedUser && (
         <div className="w-15 flex-column  ms-2 p-3" style={{ backgroundColor: '#072A30', borderRadius: '32px', width: '269px' , height:'748px'}}>
       <img
  src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722295300/jfhj54bxh2rpusfkij28.png"
  alt="Profile"
  class="d-block mx-auto"
style={{marginTop:'54px'}}
/>
         <h4 className='text-center' style={{fontSize:'13px', borderBottom: '1px solid #ffffff'}}>   <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_4_yk2g68.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />Active</h4>
         <p style={{fontSize:'13px'}}><strong>Name:</strong> {selectedUser.name}</p>
         <p style={{fontSize:'13px'}}><strong>Email:</strong> {selectedUser.email}</p>
         <p style={{fontSize:'13px'}}><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
         <p style={{fontSize:'13px', borderBottom: '1px solid #ffffff'}}><strong>Status:</strong> {selectedUser.status}</p>
         <h5 style={{fontSize:'13px'}}>Recent Transactions</h5>
         <div style={{ overflowX: 'auto' }}>
           <table
             style={{
               backgroundColor: 'transparent',
               borderCollapse: 'collapse',
               width: '100%',
               marginTop: '20px',
             }}
           >
             <tbody>
               {selectedUser.transactions.slice(0, 3).map((transaction, index) => (
                 <React.Fragment key={index}>
                   <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'left', fontSize:'13px', borderBottom: '1px solid #ffffff' }}>
                     <td style={{ padding: '8px' }}>{transaction.recipient}</td>
                     
                     <td style={{ padding: '8px' }}>{transaction.amount}</td>
                   </tr>
                   <tr style={{fontSize:'13px', borderBottom: '1px solid #ffffff'}}>
                   <td style={{ padding: '8px' ,color:'red'}}>{transaction.details}</td>

                     <td colSpan="2" style={{ padding: '8px', color: 'green', textAlign: 'right' }}>
                       {transaction.status}
                     </td>
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
  );
};

export default UserList;

