import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', body: '' });

  return (
    <footer className="contact__container" id="contact-me">
      <h2 className="contact__title">Contact Me</h2>
      <form
        className="contact__form"
        method="POST"
        action="mailto:p_rajput@hotmail.co.uk"
        encType="text/plain"
        name="EmailForm"
      >
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(event) => {
            return setFormData({ ...formData, name: event.target.value });
          }}
          value={formData.name}
        />

        <label htmlFor="ContactCommentt">Message:</label>
        <textarea
          id="ContactCommentt"
          rows="6"
          cols="20"
          onChange={(event) => {
            return setFormData({ ...formData, body: event.target.value });
          }}
          value={formData.body}
        />
        {/*         
        <p>
          <input
            class="contact__input"
            required
            type="text"
            placeholder="Enter Email"
          />
        </p>
        <p>
          <input
            class="contact__input"
            type="text"
            placeholder="Enter Contact No"
          />
        </p>
        <p>
          <textarea
            class="contact__input"
            placeholder="Enter Message"
            required
          ></textarea>
        </p> */}
        {/* <p> */}
        <input type="submit" value="send" />
        {/* </p> */}
      </form>
    </footer>
  );
};
export default Contact;
