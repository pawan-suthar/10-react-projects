import "../../App.css";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <>
      <nav className={`${style.nav} container `}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
