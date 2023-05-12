import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { TbMessageChatbot } from "react-icons/tb";
import { HiPhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setname] = useState("pawan");
  const [email, setemail] = useState("sutharpawan@gmail.com");
  const [text, settext] = useState("happ coding");

  const callbtn = () => {
    console.log("calling");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
  };

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<TbMessageChatbot fontSize="24px" />}
          />
          <Button
            onClick={callbtn}
            text="VIA CALL"
            icon={<HiPhone fontSize="24px" />}
          />
        </div>
        <Button
          isoutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={style.contact_image}>
        <img src="/main.svg" alt="logo" />
      </div>
    </section>
  );
};

export default ContactForm;
