import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
// import { AppContext } from '../context'

const HeroSection = (props) => {
//     const firstName= useContext(AppContext);



    return (
        <Wrapper>
            <div className="container grid grid-two-column">

                <div className="section-hero-data">
                    <p className='hero-top-data'><b>
                    {props.top}</b></p>
                    <h1 className='hero-heading'> {props.name}</h1>
                    <p className='hero-para'>

                        {props.desc}
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/search"> Search </NavLink>
                    </Button>
                    
                </div>
                
                
                <div className="section-hero-image">
                    <picture>
                        <img src={props.image} alt="hero" 
                        className="hero-img"
                        />
                    </picture>

                    {/* for image */}
                </div>

            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
padding: 0rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    padding:1rem;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }`;


export default HeroSection