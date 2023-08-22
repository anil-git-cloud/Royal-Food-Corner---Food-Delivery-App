import "./header.css"
import { AiOutlineHome } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { IoIosRestaurant } from "react-icons/io";
import logo from "./Images/logo.png"

const Header = () => {
  return (
    <>
        <header className="header">
              <div className="logo">
                  <a href="/"><img src={logo} alt="logo" /></a>
                  <a href="/">
                      <h3>ROYAL</h3>
                      <p>Food Corner</p>
                  </a>
              </div>
              <div className="navbar">
                  <ul className="nav-menu">
                      <li className="nav-menu-list">
                          <a href="#">
                              <span className="nav-menu-icon"><AiOutlineHome /></span>Home</a>
                      </li>
                      <li className="nav-menu-list">
                          <a href="#">
                              <span className="nav-menu-icon"><IoIosRestaurant /></span>Restaurants</a>
                      </li>
                      <li className="nav-menu-list">
                          <a href="#">
                              <span className="nav-menu-icon"><BiHelpCircle /></span>Help</a>
                      </li>
                      <li className="nav-menu-list">
                          <a href="#">
                              <span className="nav-menu-icon"><IoMdContact /></span>Contact</a>
                      </li>
                      <li className="nav-menu-list">
                          <a href="#">
                          <span className="nav-menu-icon"><BsPersonAdd/></span>Sign In</a>
                      </li>
                      <li className="nav-menu-list">
                          <a href="#">
                          <span className="nav-menu-icon"><AiOutlineShoppingCart/></span>Cart</a>
                      </li>
                  </ul>
              </div>
        </header>
    </>
  )
}

export default Header
