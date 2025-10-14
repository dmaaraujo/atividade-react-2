import React from 'react';
import './CarComponent.css';
import carro1 from '../img/carro1.jpg'
import carro2 from '../img/carro2.jpeg'
import carro3 from '../img/carro3.jpeg'

function CarGallery() {
  // Dados dos carros definidos dentro do componente
  const carsData = [
    {
      id: 1,
      imageUrl: carro1,
      title: "Carro Super Bacana",
      description: "Um carro veloz e com design moderno.",
      price: "R$ 250.000",
    },
    {
      id: 2,
      imageUrl: carro2,
      title: "Scooby dubi doo",
      description: "Espaçoso, confortável e tecnológico. Ideal para a família e para aventuras.",
      price: "R$ 180.000",
    },
    {
      id: 3,
      imageUrl: carro3,
      title: "Batmaaan",
      description: "Conforto, luxo e sofisticação em um só carro. Perfeito para o dia a dia e viagens.",
      price: "R$ 210.000",
    },
  ];

  return (
    <div className="container-carros">
      {carsData.map(car => (
        <div key={car.id} className="card-carro">
          <img src={car.imageUrl} alt={car.title} />
          <div className="card-content">
            <h2>{car.title}</h2>
            <p>{car.description}</p>
            <div className="card-footer">
              <span className="preco">{car.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarGallery;