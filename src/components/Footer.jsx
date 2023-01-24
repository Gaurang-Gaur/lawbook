import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

  return (

    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <br />
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button>
                Get Started
              </Button>
            </NavLink>
          </div>
        </div>

      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Law Book</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>



          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Feel Free to Ask us any Question.</h3>
            <br>
            </br>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Any Query" />
            </form>
          </div>



          {/* 3rs column  */}
          <div className="footer-social">

            <h3>Follows Us </h3>
            <br />
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              {/* Remenber important section  */}
              <div>
                <a
                  href="#"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
               <br />
               <br />
              <div className="footer-contact">
                  
                  <h3>91+125481548</h3>
              </div>





            
            
            
            
            
            
            
            
            </div>

          </div>
        </div>



      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`


.contact-short {
  
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(70%);
}

.contact-short-btn {
  justify-self: end;
  align-self: center;
}
footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};
}

h4{
  color:yellow;
}

h3 {
  color:#EE4B2B;
}
  margin-bottom: 2.4rem;
}
p {
  color:rgb(254,254,254);
}

.footer-social--icons {
  display: flex;
  gap: 2rem;
  div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
    }
  }
}


 `;
export default Footer