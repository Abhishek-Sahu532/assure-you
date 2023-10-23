import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../assets/images/logo.png";

import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#eb4034"
      burgerColorHover="#a62d24"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="##eb4034"
      link1Text="Home"
      link2Text="Product"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.2vmax"
      link1Color="rgba(35,35,35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link2ColorHover="#eb4034"
      link3ColorHover="#eb4034"
      link4ColorHover="#eb4034"
      link2Margin="1vmax"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIcon="true"
      ProfileIconElement={MdAccountCircle}
      searchIcon="true"
      searchIconColor="rgba(35, 35, 35,0.8)"
      SearchIconElement={MdSearch}
      cartIcon="true"
      cartIconColor="rgba(35, 35, 35,0.8)"
      CartIconElement={MdAddShoppingCart}
      profileIconColor="rgba(35,35,35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconHoverColor="#eb4034"
      cartIconHoverColor="#eb4034"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
