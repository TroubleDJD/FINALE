import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function About() {
  const [amenities, setAmenities] = useState([]);
  const [newAmenity, setNewAmenity] = useState({ name: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAmenities();
  }, []);

  const fetchAmenities = () => {
    fetch('https://6601a5cb9d7276a75551e1cd.mockapi.io/week16')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch amenities');
        }
        return response.json();
      })
      .then(data => {
        setAmenities(data);
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error fetching amenities:', error);
        setErrorMessage('Failed to fetch amenities. Please try again later.');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAmenity({ ...newAmenity, [name]: value });
  };

  const addAmenity = () => {
    if (!newAmenity.name.trim() || !newAmenity.description.trim()) {
      setErrorMessage('Both fields must be completed to add the amenity');
      return;
    }

    fetch('https://6601a5cb9d7276a75551e1cd.mockapi.io/week16', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAmenity),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add amenity');
      }
      return response.json();
    })
    .then(data => {
      setAmenities([...amenities, data]);
      setErrorMessage('');
      setNewAmenity({ name: '', description: '' });
    })
    .catch(error => {
      console.error('Error adding amenity:', error);
      setErrorMessage('Failed to add amenity. Please try again later.');
    });
  };

  const deleteAmenity = (id) => {
    fetch(`https://6601a5cb9d7276a75551e1cd.mockapi.io/week16/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete amenity');
      }
      setAmenities(amenities.filter(amenity => amenity.id !== id));
    })
    .catch(error => {
      console.error('Error deleting amenity:', error);
      setErrorMessage('Failed to delete amenity. Please try again later.');
    });
  };

  const editAmenity = (id) => {
    const amenityToEdit = amenities.find(amenity => amenity.id === id);
    setEditIndex(id);
    setNewAmenity(amenityToEdit);
  };

  const updateAmenity = () => {
    const { id, name, description } = newAmenity;
    if (!name.trim() || !description.trim()) {
      setErrorMessage('Both fields must be completed to update the amenity');
      return;
    }

    fetch(`https://6601a5cb9d7276a75551e1cd.mockapi.io/week16/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update amenity');
      }
      setAmenities(amenities.map(amenity => amenity.id === id ? { ...amenity, name, description } : amenity));
      setErrorMessage('');
      setNewAmenity({ name: '', description: '' });
      setEditIndex(null);
    })
    .catch(error => {
      console.error('Error updating amenity:', error);
      setErrorMessage('Failed to update amenity. Please try again later.');
    });
  };

  return (
    <Container className="mt-5">
      <h1>About</h1>
      <div className="nav-buttons mt-3">
        <Link to="/" className="btn btn-primary mr-3">Home</Link>
        <Link to="/about" className="btn btn-primary mr-3">About</Link>
        <Link to="/contact" className="btn btn-primary mr-3">Information</Link>
      </div>
      <h2 className="mt-5">Historical Santa Marta, Colombia</h2>
      {/* Image section */}
      <Row className="mt-3">
        <Col>
          <img src="https://www.visitsantamarta.com/storage/blogs/centro%20historico.jpg" alt="Historical Santa Marta" className="img-fluid" />
        </Col>
      </Row>

      {/* Add/Edit Amenity form */}
      <h2 className="mt-5">{editIndex !== null ? 'Edit' : 'Add'} Amenity</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="name" value={newAmenity.name} onChange={handleInputChange} placeholder="Amenity Name" />
          </Col>
          <Col>
            <Form.Control type="text" name="description" value={newAmenity.description} onChange={handleInputChange} placeholder="Description" />
          </Col>
          <Col>
            <Button variant="primary" onClick={editIndex !== null ? updateAmenity : addAmenity}>{editIndex !== null ? 'Update' : 'Add'} Amenity</Button>
          </Col>
        </Row>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </Form>

      {/* Display Amenities */}
      {!isLoading && amenities.length > 0 && (
        <>
          <h2 className="mt-5">Amenities</h2>
          <Row className="mt-3">
            {amenities.map((amenity, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{amenity.name}</Card.Title>
                    <Card.Text>{amenity.description}</Card.Text>
                    <Button variant="danger" onClick={() => deleteAmenity(amenity.id)}>Delete</Button>
                    <Button variant="primary" onClick={() => editAmenity(amenity.id)}>Edit</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default About;
