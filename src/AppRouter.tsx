import { Route, Routes } from "react-router-dom";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { Line } from "./Components/ui/Line";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SignUp } from "./Pages/Register/SignUp";
import { Login } from "./Pages/Login/Login";
import { Contact } from "./Pages/contactPage/Contact";
import { Cart } from "modules/Cart/Cart";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Line />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};
