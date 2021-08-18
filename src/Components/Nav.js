const Nav = () => {
  return (
    <nav>
      <img src="../public/images/PortfolioLogo.png" alt="logo" />
      {/*<!-- <button class="nav__dark-mode">Toggle dark mode</button> -->*/}

      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
      <button>
        <i class="fas fa-bars"></i>
      </button>
      {/*hamburger/nav link toggle is not showing up*/}
    </nav>
  );
};

export default Nav;
