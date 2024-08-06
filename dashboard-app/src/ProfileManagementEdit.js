import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Style.css"



const ProfileEdit = () => {
  const [filterStatus, setFilterStatus] = useState('');

 

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

 


 



  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C9D9D1' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <div style={{ display: 'flex', flexGrow: 1, padding: '20px', overflowY: 'auto' ,height:'733px', width:'1060px' }}>
          <div style={{ flex: 3, backgroundColor: '#072A30', borderRadius: '32px', padding: '20px', color: 'white', marginRight: '20px' }}>
          <div className='row d-flex  align-items-center justify-content-center' style={{ width: '100%', marginBottom: '20px', marginTop:'60px' }}>
  <div className='col-auto '>
    <img
      src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722295300/jfhj54bxh2rpusfkij28.png"
      alt="Profile"
      style={{  width: '50px', height: '50px' }}
    />
  </div>
  <div className='col-auto'>
    <DropdownButton
      id="filter-dropdown"
      title={
        <span className='mx-2'>
          <img
            src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_4_yk2g68.png'
            alt="filter icon"
            style={{ marginRight: '8px' }}
          />
          Active
        </span>
      }
    >
      <Dropdown.Item onClick={() => handleFilter('Active')}> Active</Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilter('Blocked')}> Blocked</Dropdown.Item>
    </DropdownButton>
  </div>
</div>
<div className='mt-5  row  ' style={{ marginLeft:'70px',marginRight:'80px'}} >
  
  <img className='text-center' src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722796616/Vector_21_trejqe.png"/>
  <div className='col-auto me-3'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>User Id</p>
                <input
                  type="text"
                  placeholder="001"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
              <div className='col-auto me-3'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Name</p>
                <input
                  type="text"
                  placeholder="Daniella willams"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
              <div className='col-auto'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Email</p>
                <input
                  type="text"
                  placeholder="daniellawillams@gmail.com"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
</div>

<div className='mt-5  row  ' style={{ marginLeft:'70px',marginRight:'80px'}} >
  
  <img className='text-center' src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722796616/Vector_21_trejqe.png"/>
  <div className='col-auto me-3'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Country</p>
                <input
                  type="text"
                  placeholder="Nigeria"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
              <div className='col-auto me-3'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Date of registration</p>
                <input
                  type="text"
                  placeholder="Daniella willams"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
              <div className='col-auto'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Last login</p>
                <input
                  type="text"
                  placeholder="daniellawillams@gmail.com"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
</div>
<div className='mt-5  row  ' style={{ marginLeft:'70px',marginRight:'80px'}} >
  
  <img className='text-center' src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722796616/Vector_21_trejqe.png"/>
  <div className='col-auto me-3'>
                <p className='text-left pt-2' style={{ color: '#8de5bd', fontSize: '13px', marginBottom:'2px' }}>Tier</p>
                <input
                  type="text"
                  placeholder="001"
                  
                  className="form-control"
                  style={{
                    backgroundColor: '#0a3c43',
                    border: 'none',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '0px',
                    width: '235px',
                    height:'43px',
                    borderEndEndRadius:'10px',
                    borderTopLeftRadius:'10px',
                    borderRadius:'10px'
                    
                  }}
                />
              </div>
              <div className='col-auto me-3'>
               
              </div>
              <div className='col-auto'>
               
              </div>
             

</div>

<div className='row mt-5 pt-5 ms-5 justify-content-center text-center'>
  <div className='col-auto d-flex justify-content-center'>
    <button
      className="btn ms-2 d-flex text-white align-items-center"
      style={{ backgroundColor: '#0a3c43', borderRadius: '10px', fontSize:'16px' }}
    >
      <img
        src='https://res.cloudinary.com/dw7w2at8k/image/upload/v1722776864/close-circle-svgrepo-com_1_wddfsv.png'
        alt="Cancel"
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
      />
     Cancel Changes 
    </button>
  </div>
  <div className='col-auto d-flex justify-content-center'>
    <button
      className="btn py-2 ms-2 d-flex text-white align-items-center"
      style={{ backgroundColor: '#0a3c43', borderRadius: '10px' }}
    >
      <img
                src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_4_yk2g68.png'
                alt="Save"
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
      />
    Save Changes
    </button>
  </div>
</div>

            
          </div>
       
      </div>
    </div>
  </div>
  );
};

export default ProfileEdit;