import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;
  flex-direction: column;
`;
const ProductBox = styled.div`
  height: 80px;
  width: 60%;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  button {
    padding: 20px 20px;
    background-color: red;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: lightblue;
    }
    .button:after {
      content: "";
      background: green;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    .button:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
  }
  img {
    height: 60px;
    width: 60px;
    box-shadow: 0 0 5px 2px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cartProducts);
  console.log(data);
  const removeProduct = (index) => {
    dispatch({
      type: "removeCartData",
      payload: index,
    });
    toast.error("Item Is Removed");
  };
  return (
    <Container>
      <Toaster />
      {data.length === 0 ? (
        <p style={{fontSize:"30px" ,fontWeight: "bold"}}>CART IS EMPTY SHOP NOW!</p>
      ) : (
        data.map((data, index) => {
          return (
            <ProductBox>
              <img src={data.image} alt="" />
              <p>{data.name}</p>
              <p>{data.price}</p>
              <button onClick={() => removeProduct(index)}>
                Remove Product
              </button>
            </ProductBox>
          );
        })
      )}
    </Container>
  );
};

export default Cart;
