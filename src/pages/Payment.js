import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { paymentSchema } from "../schemas";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .cardbox {
    position: absolute;
    top: 100px;
    background: linear-gradient(
      90deg,
      rgba(28, 81, 135, 1) 0%,
      rgba(30, 30, 195, 0.9878326330532213) 35%,
      rgba(2, 0, 36, 1) 100%
    );
    height: 350px;
    width: 600px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    flex-direction: column;
    transition: all 1s ease;
    backface-visibility: hidden;
  }
  .backcardbox {
    position: absolute;
    top: 100px;
    background: linear-gradient(
      90deg,
      rgba(28, 81, 135, 1) 0%,
      rgba(30, 30, 195, 0.9878326330532213) 35%,
      rgba(2, 0, 36, 1) 100%
    );
    height: 350px;
    width: 600px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    flex-direction: column;
    transition: all 1s ease;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
  .cardbox.rotate {
    transform: rotateY(180deg);
  }

  .backcardbox.rotate {
    transform: rotateY(360deg);
  }
`;

const Inputontainer = styled.div`
  background-color: white;
  height: 600px;
  width: 800px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  border-radius: 10px;
  padding: 0 70px;

  input {
    outline: none;
    width: 300px;
    border-radius: 5px;
    height: 50px;
    border: 1px solid gray;
    padding: 10px;
  }
  p {
    color: black;
  }

  .holderdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    gap: 10;
  }
`;

const InputBox = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 50px;
  }

  .detailscontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    height: 100px;
    width: 50%;
    .form-error {
      color: red;
      text-transform: capitalize;
    }
  }

  .button {
    padding: 30px 20px;
    background-color: blue;
    color: white;
    outline: none;
    border: none;
  }
`;

const CardContainer = styled.div`
  /* backface-visibility: hidden; */
`;

const Box = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CardNumber = styled.div`
  height: 33.33%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 10px;
  position: relative;
  p {
    font-size: 22px;
    font-style: italic;
  }
  div {
    position: absolute;
    top: -50px;
    height: 60px;
    width: 100%;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    color: gray;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 33.33%;

  img {
    height: 100%;
    width: 90px;
    object-fit: cover;
  }

  .chip {
    height: 80%;
    width: 70px;
    object-fit: cover;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 33.33%;
`;

const initialValues = {
  cardnumber: "",
  holdername: "",
};

const Payment = () => {
  const [cardNumber, setCarNumber] = useState("##################");
  const [holder, setHolderName] = useState("XXX");
  const [expiry, setExpiryDate] = useState("XXXX XXXX");
  const [cvv, setTheCvv] = useState("##########");

  let { values, errors, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: paymentSchema,
    onSubmit: (values) => {
      console.log(errors);
    },
  });
  console.log(errors);

  const setNumber = (e) => {
    values.cardnumber = e.target.value;
    setCarNumber(e.target.value);
    if (e.target.value === "") {
      setCarNumber("##################");
    }
  };
  const setHolder = (e) => {
    values.holdername = e.target.value;
    setHolderName(e.target.value);
    if (e.target.value === "") {
      setHolderName("XXX");
    }
  };
  const setExpiry = (e) => {
    setExpiryDate(e.target.value);
    if (e.target.value === "") {
      setExpiryDate("XXXX XXXX");
    }
  };

  const showCvv = (e) => {
    var element = document.getElementById("cardcontainer");
    var element2 = document.getElementById("backcardcontainer");
    element.classList.add("rotate");
    element2.classList.add("rotate");
  };

  const setCvv = (e) => {
    setTheCvv(e.target.value);
    if (e.target.value === "") {
      setTheCvv("XXXX XXXX");
    }
  };

  const rotatecvv = (e) => {
    var element = document.getElementById("cardcontainer");
    var element2 = document.getElementById("backcardcontainer");

    element.classList.remove("rotate");
    element2.classList.remove("rotate");
  };

  return (
    <Container>
      <Inputontainer>
        <InputBox>
          <form onSubmit={handleSubmit}>
            <div className="detailscontainer">
              <p>Enter Card Number</p>
              <input
                type="text"
                name="cardnumber"
                onChange={setNumber}
                onBlur={handleBlur}
                value={values.cardnumber}
              />
              <p className="form-error">{errors.cardnumber}</p>
            </div>
            <div className="detailscontainer">
              <p>Holder Name</p>
              <input
                type="text"
                onChange={setHolder}
                name="holdername"
                onBlur={handleBlur}
                value={values.holdername}
              />
              <p className="form-error">{errors.holdername}</p>
            </div>{" "}
            <div className="detailscontainer">
              <p>Expiry</p>
              <input type="text" onChange={setExpiry} />
            </div>
            <div className="detailscontainer">
              <p>CVV</p>
              <input
                type="text"
                onClick={showCvv}
                onChange={setCvv}
                onBlur={rotatecvv}
              />
            </div>
            <div className="detailscontainer">
              <input type="submit" value="SEND" className="button" />
            </div>
          </form>
        </InputBox>
      </Inputontainer>
      <CardContainer id="cardcontainer" className="cardbox">
        <Box>
          <LogoContainer>
            <img className="chip" src="images/chip.png" alt="" />
            <img src="images/mastercard.png" alt="" />
          </LogoContainer>
          <CardNumber>
            <p className="number">{cardNumber}</p>
          </CardNumber>
          <Details>
            <div className="holderdiv">
              <p>Card Holder Name</p>
              <p>{holder}</p>
            </div>
            <div className="holderdiv">
              <p>Expires</p>
              <p>{expiry}</p>
            </div>
          </Details>
        </Box>
      </CardContainer>
      <CardContainer id="backcardcontainer" className="backcardbox">
        <Box>
          <LogoContainer>
            <img className="chip" src="images/chip.png" alt="" />
            <img src="images/mastercard.png" alt="" />
          </LogoContainer>
          <CardNumber>
            <p>CVV</p>
            <div>
              <p>{cvv}</p>
            </div>
          </CardNumber>
        </Box>
      </CardContainer>
    </Container>
  );
};

export default Payment;
