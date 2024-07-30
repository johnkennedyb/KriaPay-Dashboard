import React from 'react';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="d-flex">
      <div className="w-25">
        <Sidebar />
      </div>
      <div className="w-75 align-items-center justify-content-center" style={{ display:"flex",
      justifyContent: "center",
      alignItems:'center',
      height:"100vh" }}  >
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
          <Row className="mt-4">
            <Col sm={4} className="text-center">
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
            <Col sm={4} className="text-center">
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
            <Col sm={4} className="text-center">
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
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
