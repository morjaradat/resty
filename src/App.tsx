import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import "./app.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
