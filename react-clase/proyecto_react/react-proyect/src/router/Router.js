import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user-context";

import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import ProductsList from "../page/ProductsList";

export default function MyRouters() {
    const { user } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={user ? <ProductsList /> : <Navigate to="/login" />} />
        </Routes>
    );
}
