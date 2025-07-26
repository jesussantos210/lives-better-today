import React from 'react';
import './Testimonials.css'; // Opcional si quieres estilos separados

const Testimonials: React.FC = () => {
  const testimonials = [
  {
    name: 'María Rodríguez',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'ViveSaludRD helped me improve my nutrition. 100% recommended!',
  },
  {
    name: 'Carlos Pérez',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Thanks to their tips, I have more energy throughout the day.',
  },
  {
    name: 'Ana López',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'The recommended products on the site have been very helpful.',
  },
];

  return (
    <div className="testimonials">
      <h2>Testimonial</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
