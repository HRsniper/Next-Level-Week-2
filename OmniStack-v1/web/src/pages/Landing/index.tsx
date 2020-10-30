import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { api } from '../../services/api';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

export function Landing() {

  const [totalConnections, setTotalConnections] = useState(0);

  // useEffect((função call back) => {}, [array de dependências]);
  // quando array de dependências mudar aciona a função call back

  useEffect(() => {
    api.get('/connections')
      .then((response) => {
        // console.warn(response);
        const total = response.data.total;
        // const {total} = response.data;

        setTotalConnections(total);

      }).catch((reject) =>{
        console.error(reject);
      })
  }, []);

  return ( 
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="Imagem" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>

        </div>{/* buttons-container */}

        <span className="total-connections">
          Total de {totalConnections} conexões ja realizadas 
          <img src={purpleHeartIcon} alt="Coração"/>
        </span>

      </div>{/* page-landing-content */}
    </div>/* page-landing */
  );
}
