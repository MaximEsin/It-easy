import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import OurProducts from "./pages/OurProducts";
import Services from "./pages/Services";
import { useDispatch } from "react-redux";
import { English, Russian } from "./data/Data";
import { useEffect } from "react";
import { getLanguage } from "./services/actions";
import FireAlarm from "./pages/projects/FireAlarm";
import IP from "./pages/IP";
import Security from "./pages/projects/Security";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.language === "Russian") {
      dispatch(getLanguage(Russian));
    } else if (localStorage.language === "English") {
      dispatch(getLanguage(English));
    } else {
      dispatch(getLanguage(Russian));
      localStorage.setItem("language", "Russian");
    }
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/IP" element={<IP />} />
        <Route path="/fire-alarm" element={<FireAlarm />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
