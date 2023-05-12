import style from "./Button.module.css";
import PropTypes from "prop-types";
// import { TbMessageChatbot } from "react-icons/tb";

const Button = ({ isoutline, icon, text, ...rest }) => {
  return (
    <button {...rest} className={isoutline ? style.o_btn : style.p_btn}>
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isoutline: PropTypes.element.isRequired,
};

export default Button;
