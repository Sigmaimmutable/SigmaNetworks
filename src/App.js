import logo from './logo.svg';
import { Col, Row,Button,Alert,Card} from "react-bootstrap";
import './App.scss';
import './asserts/fonts/fonts.css';
import './opening.css';
import Logo from './asserts/images/logo.svg'
import Logo1 from './asserts/images/avalanche-avax-logo.png'
import Logo2 from './asserts/images/base-logo.png'
import Logo3 from './asserts/images/matic-logo.webp'

function App() {

  const redirectToPolygonPrivate = () => {
    window.location.href = 'https://sigmatestversion.vercel.app/';
  }

const redirectToAvalanchePublic = () => {
    window.location.href = 'https://sigmaavalanche-app-poc-ui.vercel.app/';
  }

  const redirectToBasePublic = () => {
    window.location.href = 'https://sigmabase.vercel.app/';
  }

  return (
    <div className="App">
     <div className="container-fluid">
                {/* <Row className="mb-1">
                    <Col md={6} xl={4} xxl={3}> */}
                    <div className="user-card-logo text-center" ><img style={{height:"90px"}} className='img-fluid' src={Logo} alt="logo" /></div>
                    {/* </Col>
                </Row> */}
                <br/><br/>

                   
                <Row>
                    <Col>
                    <Card className="h-100 custom-margin">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Polygon<img style={{height:"40px",marginLeft:"265px"}} className='img-fluid' src={Logo3} alt="logo" /></h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                   <Col xs={6}>
                    <Button variant="dark" disabled = {true}>Public</Button>
                   </Col>
                   <Col xs={6}>
                   <Button variant="dark" onClick={redirectToPolygonPrivate}>Private</Button>
                   </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
                    </Col>
                    <Col>
                    <Card className="h-100 custom-margin">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title"><>Avalanche</><img style={{height:"40px",marginLeft:"250px"}} className='img-fluid' src={Logo1} alt="logo" /></h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                   <Col xs={6}>
                    <Button variant="dark" onClick={redirectToAvalanchePublic}>Public</Button>
                   </Col>
                   <Col xs={6}>
                   <Button variant="dark" disabled = {true}>Private</Button>
                   </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
                    </Col>
                    <Col>
                    <Card className="h-100 custom-margin">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Base<img style={{height:"40px",marginLeft:"295px"}} className='img-fluid' src={Logo2} alt="logo" /></h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                   <Col xs={6}>
                    <Button variant="dark" onClick={redirectToBasePublic}>Public</Button>
                   </Col>
                   <Col xs={6}>
                   <Button variant="dark" disabled = {true}>Private</Button>
                   </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
                    </Col>
                </Row>
                {/* <br/><br/><br/><br/>
              <Row>
                <Col>
                </Col>
                <Col>
                    <Card className="h-100 custom-margin">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Compliance</h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                   <Col xs={6}>
                    <Button variant="dark">Public</Button>
                   </Col>
                   <Col xs={6}>
                   <Button variant="dark">Private</Button>
                   </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
                    </Col>
                <Col>
                </Col>
              </Row> */}

          
               
               
            </div>
  
     
    </div>
  );
}

export default App;
