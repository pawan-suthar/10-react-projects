import Dashboardlayout from "../../components/Dashboardlayout";
import Supportcard from "./components/Supportcard";
import Contactform from "./components/Contactform";
import { AiFillMail } from "react-icons/ai";
import { RiMessageLine } from "react-icons/ri";
import Infcards from "../Dashboard/components/Infcards";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <Dashboardlayout>
      <Stack spacing="5rem">
        <Supportcard
          leftcomponent={<Contactform />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={AiFillMail}
        />
        <Supportcard
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={RiMessageLine}
          leftcomponent={
            <Infcards
              img="/contact-bg.svg"
              text="Chat with us now"
              tagtext="Contact"
              inverted={true}
            />
          }
        />
      </Stack>
    </Dashboardlayout>
  );
};

export default Support;
