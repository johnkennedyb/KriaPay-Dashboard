import React from 'react';
import Sidebar from './Sidebar';
import { Nav } from 'react-bootstrap';

import { Container, Row, Col } from 'react-bootstrap';

const UserList = () => {
  return (
    <div className="d-flex">
      <div className="w-15">
        <Sidebar />
      </div>
      <div className="w-70 mt-4  mb-5 align-items-center justify-content-center" style={{ display:"flex", background: '#072A30',borderRadius: '32px',
      justifyContent: "center",
      alignItems:'center',
      height: '954px',
      // left: '20px',
      width:'805px' }}  >
        <Container fluid>
          <Row className="mt-4">
            <Col sm={3} className=" text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_2_kgsht4.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div>              
              <h2 className='text-center'>12,345</h2>
              <p className='text-center'>Total transactions</p>
            </Col>
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_2_kgsht4.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div> 
            
              <h2>234</h2>
              <p>Pending transactions</p>
            </Col>
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
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
    />
  </div> 
              <h2>12,111</h2>
              <p>Completed transactions</p>

            </Col>
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298562/Copy_of_check-circle-svgrepo-com_1_5_keycbr.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '498px',
left: '395px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div> 
              <h2>50</h2>
              <p>Failed transactions</p>

            </Col>
          </Row>
          <h5 className='my-5 font-bold ms-5' style={{ fontWeight: "bold"}} >Total transactions</h5>
          <Row className="mt-4">
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_2_kgsht4.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div> 
              <h2>15</h2>
              <p>Today's deposit</p>

            </Col>
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_2_kgsht4.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div> 
  <h2>234</h2>
              <p>Today's transfer</p>
              
            </Col>
            <Col sm={3} className="text-center">
            <div className="  pe-2 mb-2 me-5" >
    <img 
      src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722298541/Copy_of_check-circle-svgrepo-com_1_2_kgsht4.png' 
      alt="Icon"
      style={{width: '25px',
height: '25px',
top: '248px',
left: '1111px',
padding: '2.08px',
gap: '0px',
opacity: '0px',
}}
    />
  </div> 
  <h2>50</h2>
              <p>Today's withdrawal</p>
              
            </Col>
            <Col sm={3} className="text-center"></Col>
          </Row>
        </Container>
      </div>
      <div className="w-15 mt-4  mx-2 mb-5 align-items-center justify-content-center" style={{ display:"flex", background: '#072A30',borderRadius: '32px',
      justifyContent: "center",
      alignItems:'center',
      height: '954px',
      // marginLeft: '12px',
      width:'254px' }}  >
        

        <Nav className="flex-column ">
        <div className=" mb-5 align-items-center">
          <div className="">
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
          <div className="col align-item-start justify-content-end ms-5">
            <img src="https://res.cloudinary.com/djx3ijal6/image/upload/v1722321267/bell-bing-svgrepo-com_2_z8kyxl.png" alt="Notifications"/>
          </div>
        </div>
          <Nav.Item>
            <Nav.Link href="#" className="text-white mb-4 border-top border-bottom py-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328875/SVGRepo_iconCarrier_r39vqs.png' className='mx-1' alt="Dashboard"/>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          
          {/* User Management Dropdown */}
          <Nav.Item className="dropdown">
  <Nav.Link
    href="#"
    className="text-white border-bottom pb-4 pt-4 mb-4 dropdown-toggle"
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
  
</Nav.Item>

          
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-4 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/wallet-2-svgrepo-com_1_h2jdi8.png' className="me-2" alt="Wallet Management"/>
              Wallet Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-4 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/Copy_of_card-transfer-svgrepo-com_1_dr5f2t.png' className="me-2" alt="Transaction Management"/>
              Transaction Management
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-4 mb-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/pen-new-square-svgrepo-com_1_1_lsrgvj.png' className="me-2" alt="Settings"/>
              Settings
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-white border-bottom pb-4 pt-4">
              <img src='https://res.cloudinary.com/djx3ijal6/image/upload/v1722328921/notes-svgrepo-com_1_seibg6.png' className="me-2" alt="Reports"/>
              Reports
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default UserList;
