import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 90vh;
  width: 75%;
  flex-wrap: wrap;
  padding: 100px;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: black !important;
  background-color: white;
  height: 300px;
  width: 250px;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 50px;

  img {
    height: 80%;
    width: 100%;
    object-fit: cover;
  }
`;

const DetailsBox = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    outline: none;
    border: none;
    width: 60px;
    height: 40px;
    text-align: center;
    background-color: black;
    color: white;
    /* box-shadow: 0 0 5px 2px green; */
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: red;
    }
  }
`;

const FilterContainer = styled.div`
  .filter {
    padding: 20px 40px;
  }
`;

const SeacrhBox = styled.div`
  height: 40px;
  width: 300px;
  position: absolute;
  top: 600px;
  left: 80px;

  input {
    height: 100%;
    width: 100%;
    padding: 0 10px;
    outline: none;
  }
`;

const Products = () => {
  const API = "https://api.pujakaitem.com/api/products";
  const dispatch = useDispatch();
  // use
  const myData = useSelector((store) => store.products);

  const getApiData = async () => {
    const data = await axios.get(API);
    dispatch({
      type: "getProductsData",
      payload: data.data,
    });
  };

  const addToCart = (data) => {
    dispatch({
      type: "getCartData",
      payload: data,
    });
    toast.success("Item Is Added Successfully");
  };

  const getFilterValue = (e) => {
    let value = e.target.value;
    dispatch({
      type: "filterProducts",
      payload: value,
    });
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      let value = e.target.value.toLowerCase();
      dispatch({
        type: "Search",
        payload: value,
      });
    }, 800);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <SeacrhBox>
        <p>SEARCH</p>
        <input type="text" placeholder="search" onChange={handleSearch} />
      </SeacrhBox>
      <FilterContainer>
        <select name="" className="filter" onClick={getFilterValue}>
          <option value="hightolow">FILTER</option>
          <option value="hightolow">High to Low</option>
          <option value="atoz">A-Z</option>
          <option value="ztoa">Z-A</option>
          <option value="lowtohigh">Low to High</option>
        </select>
      </FilterContainer>
      <Container>
        <Toaster />

        {myData.products.map((value) => {
          return value.map((data) => {
            return (
              <ProductBox>
                <img src={data.image} alt="" />
                <DetailsBox>
                  <p>{data.name}</p>
                  <button onClick={() => addToCart(data)}>ADD TO CART</button>
                  <p>{data.price}</p>
                </DetailsBox>
              </ProductBox>
            );
          });
        })}
      </Container>
    </>
  );
};

export default Products;
