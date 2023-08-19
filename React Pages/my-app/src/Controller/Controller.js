import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "../EditProfile";
import Home from "../Home";
import Booking from "../Booking";
import Cart from "../Cart";
import About from "../About";
import Contact from "../Contact";
import Login from "../Login";
import SignUp from "../SignUp";
import Header from "../Header";
import Footer from "../Footer";
import AdminFoodMenu from "../AdminFoodMenu";
import AddAddress from "../AddAddress";
import UserORecords from "../UserORecords";
import Facebook from "../Facebook";
import Twitter from "../Twitter";
import Instagram from "../Instagram";

function Controller() {
    return (<>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route exact path="/menu" element={<AdminFoodMenu />} />
                <Route exact path="/editprofile" element={<EditProfile />} />
                <Route exact path="/orders" element={<UserORecords />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/add_address" element={<AddAddress />} />
                <Route exact path="/facebook" element={<Facebook/>} />
                <Route exact path="/twitter" element={<Twitter/>} />
                <Route exact path="/instagram" element={<Instagram/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>);
}

export default Controller;