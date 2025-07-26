import React from 'react';
import './Testimonials.css'; // Opcional si quieres estilos separados

const testimonials = [
  {
    name: 'María Rodríguez',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'ViveSaludRD me ayudó a mejorar mi alimentación. ¡100% recomendado!',
  },
  {
    name: 'Carlos Pérez',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Gracias a sus consejos, tengo más energía en el día a día.',
  },
  {
    name: 'Ana López',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Los productos recomendados en la página han sido muy útiles.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonios</h2>
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
