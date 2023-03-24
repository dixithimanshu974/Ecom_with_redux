import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 8vh;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;
const Icon = styled.div``;
const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;

  p {
    color: black;
  }
`;

const CartIcon = styled.div`
  height: 100%;
  position: relative;

  .cart {
    font-size: 25px;
  }
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    background-color: black;
    z-index: 10;
    font-size: 10px;
  }
`;
const Navbar = () => {
  const cartValue = useSelector((state) => state.cart.cartProducts);

  return (
    <Container>
      <Icon>
        <p>Logo Here</p>
      </Icon>
      <MenuItems>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <CartIcon>
          <NavLink to="/cart">
            <AiOutlineShoppingCart className="cart" color="black" />
          </NavLink>
          <span>{cartValue.length}</span>
        </CartIcon>
      </MenuItems>
    </Container>
  );
};

export default Navbar;
