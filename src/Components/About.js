const About = () => {
  return (
    <section className="about-me__container">
      <p className="about-me__information">
        Hi 👋🏽 I'm Poonam (she/her) - a full-stack developer primarily coding in
        JavaScript.
        <br />
        **Career so far:** I started out coding thanks to CodeFirstGirls and
        then Northcoders. I am currently a coding educator and advocate for tech
        being an "all-in" industry.
        <br />
        **Skills:** I'm not just a diligent developer, I'm a advocate for
        pairing and clean coding practices, a public speaker, a keen leader in
        agile teams and a recently graduated apprentice!
        <br />
        **Passions:** I believe in technology as a tool, humane software and
        healthy connections to the digital world. I believe tech should be
        people-first, equity-centred and sustainably focused.
      </p>
      <p className="about-me__technologies">
        Javascript | React | NodeJS | PSQL | Jest
      </p>
      <img
        className="about-me__headshot"
        src="../images/Poonam-profile.jpg"
        alt="Poonam Rajput"
      />
    </section>
  );
};

export default About;
