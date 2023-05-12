import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <main className="maincontainr">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
