import React from 'react';
import { getYear } from 'date-fns';
import '../styles/Footer.css'


function Footer() {
  const anoAtual = getYear(new Date());

  return (
    <>
      <div className='footer-container'>
        <div className='social-medias'>
          <a href='https://www.linkedin.com/in/leonardo-rotsen-327084229/' target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"/>
          </a>
        </div>
        <div className='copyright'>
          Desenvolvido por Henrique Rotsen - {anoAtual} Todos os direitos reservados ©
        </div>
      </div>
    </>
  );
}

export default Footer;