import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-info">
        <h2>Informações de contato</h2>
        <p><strong>Nome:</strong> Seu Nome</p>
        <p><strong>Email:</strong> seuemail@exemplo.com</p>
        <p><strong>Telefone:</strong> (00) 00000-0000</p>
        <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer"><button>Contato pelo Whatsapp</button></a>
        <div className="social">
          <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://codepen.io/seu-usuario" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.191166012135!2d-49.2649564850229!3d-25.50202628376135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4af48e0fcf5%3A0x6d81ef129ec5c6e5!2sR.%20Tucum%2C%2073%20-%20Uberaba%2C%20Curitiba%20-%20PR%2C%2081912-270!5e0!3m2!1sen!2sbr!4v1650056343125!5m2!1sen!2sbr" width="100%" height="450" style={{ border: 15 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default Contact;
