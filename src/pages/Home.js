import '../App.css';
import '../styles/Home.css';
import React from 'react';
//import Logo from '../components/images/LOGO_ROTSEN_03.png'
import ProfessionalFoto from '../components/images/foto_leonardo.jpeg'
import Button from '../components/Button.js'

export const Home = () => {

    return (
        <>
            <div className='main-box' />
            <h1>Quem sou eu?</h1>
            <section className='about-container'>
                <div className='side-text'>
                    <p>
                    Sou um apaixonado pelo basquete e pela educação física, com uma trajetória de mais de 10 anos dentro do esporte. Fui atleta do Minas Tênis Clube por oito anos, e desde 2017 venho atuando como treinador e professor de basquete.
                    <br/><br/>Minha experiência inclui trabalho na comissão técnica de equipes, ensino para crianças em escolinhas de basquete e treinamento individual de habilidades, auxiliando atletas a aprimorarem seu jogo. Além disso, tive a oportunidade de trabalhar com jogadores profissionais do NBB, ajudando-os a desenvolver seu desempenho.
                    <br/><br/>Atualmente, atuo como professor de educação física e treinador de basquete no Colégio Santo Agostinho, além de prestar treinamentos personalizados de habilidades em basquete. Sou formado em Educação Física pela Universidade Federal de Minas Gerais e possuo certificação FIBA Adelante.
                    <br/><br/>Meu compromisso é com o desenvolvimento dos atletas, proporcionando um treinamento de qualidade e ajudando cada jogador a alcançar seu potencial máximo dentro do esporte.
                    </p>
                    {/* <b>Principais Áreas</b>
                    <ul className='has-bar'>
                        <li className='item'>Treinador Individual de Habilidades</li>
                        <li className='item'>Professor de Educação Física</li>
                        <li className='item'>Treinador de Basquete</li>
                        <li className='item'>Formação de Jovens Atletas</li>
                        <li className='item'>Treinamento de Atletas Profissionais (NBB)</li>
                    </ul>
                    <b>Experiência Profissional</b>
                    <ul className='has-bar'>
                        <li className='item'>Colégio Santo Agostinho - Professor e Treinador de Basquete</li>
                        <li className='item'>FM Basquete - Treinador Individual de Habilidades</li>
                        <li className='item'>Minas Tênis Clube - Atleta por 8 anos</li>
                    </ul>
                    <b>Formação Acadêmica</b>
                    <ul className='tecnologies'>
                        <li className='item'>Bacharelado em Educação Física - Universidade Federal de Minas Gerais</li>
                        <li className='item'>Ensino Médio - Colégio Santo Agostinho</li>
                        <li className='item'>Certificação FIBA Adelante</li>
                    </ul> */}
                    Tenho um grande interesse pelo desenvolvimento esportivo e a evolução de atletas, buscando sempre aprimorar minhas técnicas de treinamento e metodologia de ensino. Acredito que o basquete é uma ferramenta poderosa para a disciplina, superação e trabalho em equipe.
                    <br />
                    <b>Para saber mais, entre em contato!</b>
                    <br />
                </div>
                <div className='professional-image-box'>
                    <img src={ProfessionalFoto} alt='Leonardo Rotsen' className='professional-image' />
                </div>
            </section>
            <div className='btn-contato'>
                <Button path='/trabalhos' buttonSize={'btn--medium'}>Entre em contato</Button>
            </div>
        </>
    )
}