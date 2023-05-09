const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <ul className="links">
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/location">Location</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
