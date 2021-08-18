const Contact = () => {
  return (
    <footer class="contact__container" id="contact-me">
      <h2 class="contact__title">Contact Me</h2>
      <form
        class="contact__form"
        method="post"
        action="MAILTO:p_rajput@hotmail.co.uk"
        enctype="text/plain"
      >
        <p>
          <input
            class="contact__input"
            required
            type="text"
            placeholder="Enter Name"
          />
        </p>
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
        </p>
        <p>
          <input type="submit" value="SUBMIT" />
        </p>
      </form>
    </footer>
  );
};
export default Contact;
