import React from "react";
import {
    BrowserRouter, 
    Routes, 
    Route
} from "react-router-dom";

//components
import Home from "./Home";
import Search from "./Search";
import Footer from "../components/Footer";

const Principal = () => {
    return (
        <div className="Principal">
            <div className="Content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}

export default Principal;