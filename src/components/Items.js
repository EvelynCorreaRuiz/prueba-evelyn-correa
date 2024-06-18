import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Items.css';

const items = [
  { id: 1, title: 'Item 1', description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas :P). Mientras puedes navegar en nuestro sitio antiguo.' },
  { id: 2, title: 'Item 1', description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas :P). Mientras puedes navegar en nuestro sitio antiguo.' },
  { id: 3, title: 'Item 1', description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas :P). Mientras puedes navegar en nuestro sitio antiguo.' }
];

const Items = () => {
  return (
    <Container className="items-container">
      <div className="circle bottom-left"></div>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="item">
            <Card className="text-center">
              <Card.Body>
                <div className="icon">
                  <img src={`${process.env.PUBLIC_URL}/cohete.png`} alt="Icono" />
                </div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Items;
