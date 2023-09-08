import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
