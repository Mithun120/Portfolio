import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// npm i @emailjs/browser


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x72uel8",
        "template_9d4464n",
        form.current,
        "cXL3h5JHP30j0Jdnh"
      )
      .then(() => {
        alert('Mail sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Oops! Something went wrong.');
      });
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(65vh - 50px); 

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
