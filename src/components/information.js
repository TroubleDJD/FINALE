import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import React Bootstrap components

function Information() {
  return (
    <Container className="mt-5">
      <h1>Information</h1>
      <div className="nav-buttons mt-3">
        <Link to="/" className="btn btn-primary mr-3">Home</Link>
        <Link to="/about" className="btn btn-primary mr-3">About</Link>
        <Link to="/contact" className="btn btn-primary mr-3">Information</Link>
      </div>
      <Row className="mt-5">
      <div>
  <Col className="d-flex justify-content-center">
    <div className="border rounded p-3 border-info">
      <img 
        src="/IMG_3929.jpeg" 
        alt="dusky view at Casa Del Rio" 
        style={{ maxWidth: '800px', maxHeight: '500px' }} 
        className="img-fluid" 
      />
    </div>
  </Col>
</div>

        
      </Row>
      <h4 className="mt-3">Please provide contact information</h4>
      <Form>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control type="number" placeholder="Phone" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Email Address" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control as="textarea" rows={3} placeholder="Special instructions or requests" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-5">
        <Col>
          <h2>Nightly Rates</h2>
          <p>*2 night minimum</p>
          <table className="table">
            <thead>
              <tr>
                <th>Qty.</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>$200.79</td>
              </tr>
              <tr>
                <td>3</td>
                <td>$301.18</td>
              </tr>
              <tr>
                <td>4</td>
                <td>$401.57</td>
              </tr>
              <tr>
                <td>5</td>
                <td>$501.96</td>
              </tr>
            </tbody>
          </table>
          <p>Review or book directly through <a href="https://airbnb.com/h/cdr201">Airbnb</a></p>
        </Col>
      </Row>
      <Row className="mt-5">
      <Col>
  <h2>Locations of Interest</h2>
  <div className="d-inline-block border border-dark border-3 rounded p-3">
    <img 
      src="https://www.tomplanmytrip.com/wp-content/uploads/2022/07/MAPA-SANTA-MARTA-1.jpg" 
      alt="Map of Santa Marta" 
      className="img-fluid" 
    />
  </div>
</Col>

      </Row>
    </Container>
  );
}

export default Information;
