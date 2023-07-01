const About = () => {
  return (
    <section className="about-me__container">
      <p className="about-me__information">
        My name's Poonam (she/her) - a full-stack developer and wearer of many
        hats. I believe tech should be people-first, equity-centred and
        sustainably focused.
        <br />
        <br /> I mentor people to become fully capable programmers from no
        coding experience. I believe in technology as a tool, humane software
        and healthy connections to the digital world.
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
