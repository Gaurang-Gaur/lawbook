import React from 'react'
import styled from 'styled-components'

const Communtiy = () => {
  const Wrapper=styled.section`
  padding: 4rem 0 2rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;
  return (
    <Wrapper>
 <h2 className="common-heading">Join Us</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447958.41056853556!2d77.11483709949198!3d28.699364568255202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1667402328913!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<div className="container">
  <div className="contact-form">
  <form
            action="https://formspree.io/f/xwkzwwzd"
            method="POST"
            className="contact-inputs">
              <h3>Join Our Community Here!</h3>
              <br />
<br />
              <br />
              <br />

            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <br />
            <br />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <br />
            <br />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>
              <br /><br />

            <input type="submit" value="Join" />
          </form>
    
  </div>
</div>
    </Wrapper>
  )
}

export default Communtiy