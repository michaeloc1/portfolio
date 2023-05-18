import React, { useState } from 'react';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName == '') {
      setErrorMessage('Please enter your name');
      return;
    }

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is incorrect');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage == '') {
      setErrorMessage('Please enter a message');
      return;
    }


    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
  };

  return (

    <div className="section-format">
      {/*<p>Messaging coming soon</p>
          <p>Please contact me at <a href="mailto:michaeloc@verizon.net">michaeloc@verizon.net</a> or call me at 973-477-1533</p>*/}
      <div className="col-md-4">
        <h1>Contact</h1>

        <form className="form">
          <div className="form-outline mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />

          </div>
          <div className="form-outline mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
            />
          </div>
          <div className="form-outline mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              value={message}
              name="message"
              onChange={handleInputChange}
              rows="4"
              cols="50">
            </textarea>
          </div>
          <button type="button" className="btn btn-secondary btn-block mb-4" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact;