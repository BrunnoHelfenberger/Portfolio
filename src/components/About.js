import './about.css';
import React, { useState, useEffect } from 'react';
import SimpleCssWaves from "./SimpleCssWaves";

const About = () => {

  const [isVisible, setIsVisible] = useState({
    Info_1: false,
    Info_2: false,
    Info_3: false,
    Info_4: false,
  });

  const handleScroll = () => {
    const elementIds = ['Info_1', 'Info_2', 'Info_3', 'Info_4'];
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      const distanceFromTop = element.offsetTop - scrollPosition;
      const elementHeight = element.offsetHeight;

      if (distanceFromTop < windowHeight - elementHeight / 2 && distanceFromTop > -elementHeight / 2) {
        setIsVisible((prevState) => ({ ...prevState, [id]: true }));
      } else {
        setIsVisible((prevState) => ({ ...prevState, [id]: false }));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <section id="about">


      <div id="Info_1" className={isVisible.Info_1 ? 'visible' : ''}>
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>Olá, eu sou Brunno Helfenberger, um engenheiro de produção apaixonado pela aplicação das últimas tecnologias em processos industriais. Com mais de 7 anos de experiência na indústria, tenho me dedicado ao aprimoramento contínuo de processos através de metodologias como lean manufacturing e a indústria 4.0.</p>
          <p>Além disso, como programador há mais de 10 anos, tenho habilidades em diversas linguagens de programação front-end e back-end, o que me permite desenvolver soluções de automação de processos customizadas e eficientes.</p>
          <p>Como especialista no desenvolvimento de soluções de automação de processos, estou sempre em busca de maneiras de otimizar a produção e maximizar a eficiência em todos os projetos em que trabalho. Combinando minhas habilidades em engenharia de produção e programação, sou capaz de criar soluções inovadoras e personalizadas para cada desafio que surge.</p>
        </div>
      </div>

      <div id="Info_2" className={isVisible.Info_2 ? 'visible' : ''}>

        <div className="about-text">
          <h2>Engenheiro</h2>
          <p>Como consultor em Lean Manufacturing e especialista em mecatrônica. Com minha vasta experiência e conhecimento técnico, estou aqui para ajudar sua empresa a alcançar a excelência em produção e automação.</p>

          <p>Como green belt em Lean Manufacturing, posso ajudá-lo a identificar e eliminar desperdícios, reduzir custos e melhorar a qualidade do produto final. Combinando minha experiência em engenharia de produção com meu conhecimento técnico em mecatrônica, sou capaz de criar soluções de automação personalizadas e eficientes, que podem impulsionar sua empresa para o sucesso.</p>

          <p>Meu conhecimento em mecatrônica permite-me entender a integração de tecnologias como controle de processos, sistemas de visão, controle de movimento e programação de PLC, permitindo a otimização e melhoria do desempenho de processos industriais.</p>

          <p> Além disso, minha formação técnica em mecatrônica me permite entender como máquinas e processos podem ser projetados para operar de maneira mais eficiente, contribuindo para a melhoria contínua dos processos produtivos.</p>

          <p> Se você está procurando um consultor altamente qualificado para ajudar sua empresa a melhorar sua produção e aumentar sua eficiência, não hesite em entrar em contato comigo. Combinando minha experiência em Lean Manufacturing e mecatrônica, sou capaz de oferecer soluções personalizadas e eficientes para atender às necessidades específicas de sua empresa."</p>
        </div>
      </div>

      <div id="Info_3" className={isVisible.Info_3 ? 'visible' : ''}>

        <div className="about-text">
          <h2>Programador</h2>
          <p>Um programador experiente em frontend e backend, especializado em soluções de automação de processos. Com minha ampla experiência em programação, estou aqui para ajudá-lo a melhorar a eficiência e reduzir custos através da automação de processos em sua empresa.</p>

          <p>Como programador frontend, posso ajudá-lo a criar interfaces de usuário intuitivas e agradáveis, que são cruciais para o sucesso de qualquer projeto de automação de processos. Além disso, como programador backend, posso desenvolver soluções de automação de processos personalizadas, que podem ser implementadas para otimizar e melhorar a produtividade em sua empresa.</p>

          <p>Combinando minha experiência em programação com meu conhecimento em automação de processos, sou capaz de criar soluções eficientes e personalizadas para atender às necessidades específicas de sua empresa. Minhas habilidades em programação incluem linguagens como Python, JavaScript, PHP e C++, permitindo-me desenvolver soluções em diferentes plataformas, desde sistemas operacionais desktop até aplicativos móveis.</p>

          <p>Se você está procurando um programador altamente qualificado para ajudar a melhorar a eficiência e reduzir custos através da automação de processos em sua empresa, não hesite em entrar em contato comigo. Estou animado para trabalhar com você e ajudá-lo a atingir seus objetivos de automação e eficiência.</p>        </div>
      </div>

      <div id="Info_4" className={isVisible.Info_4 ? 'visible' : ''}>

        <div className="about-text">
          <h2>Vamos trabalhar juntos</h2>
          <p>Entre em contato comigo agora e deixe-me ajudar a levar a eficiência e a automação de processos em sua empresa para o próximo nível.</p>
        </div>
      </div>

    </section >
  );
}

export default About;
