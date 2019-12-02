import React, { Component } from 'react'
import { animateScroll as scroll, Link } from "react-scroll";
import pizzaLogo from '../../assets/pizzaLogo.png'
import Components from '../../container/Components'
import './css/SideNavBar.css'

export class SideNavBar extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <Link
            href="main"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img className="navbar__logo" src={pizzaLogo} alt="pizzaLogo" />
          </Link>
          <ul>
            <li>
              <Link
                href="services"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="pizzaMenu"
                to="pizzaMenu"
                spy={true}
                smooth={true}
                duration={500}
              >
                Pizza Menu
              </Link>
            </li>
            <li>
              <Link
                href="flavorMenu"
                to="flavorMenu"
                spy={true}
                smooth={true}
                duration={500}
              >
                Flavor Menu
              </Link>
            </li>
            <li>
              <Link
                href="drinksMenu"
                to="drinksMenu"
                spy={true}
                smooth={true}
                duration={500}
              >
                Drinks Menu
              </Link>
            </li>
            <li>
              <Link
                href="aboutUs"
                to="aboutUs"
                spy={true}
                smooth={true}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="contacts"
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <Components />
      </div>
    )
  }
}

export default SideNavBar
