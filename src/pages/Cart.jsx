import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../redux/cartRedux";
import { useState } from "react";
import AddressDialog from "../components/AddressDialog";
import { userRequest } from "../requestMethods";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router";

const indigoDye = "#12497Dff";
const charcoal = "#2B3F4Eff";
const darkSlateGray = "#33515Bff";
const silver = "#C0B2A9ff";
const gunmetal = "#17282Fff";


const Container = styled.div`
margin: 0;
padding: 0,
  width: 100vw;
  height: 150vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/photo/mainphoto7.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;


const Wrapper = styled.div`
  width: 84%;
  margin-top: 30px;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: ${indigoDye};
  text-align: center;
  margin-bottom: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? indigoDye : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${darkSlateGray};
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${indigoDye};
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${darkSlateGray};
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleShopping = () => {
      navigate(`/products/all`);
  };

  const handleAddQuantity = (productId) => {
    dispatch(increaseProductQuantity(productId));
  };

  const handleRemoveQuantity = (productId) => {
    dispatch(decreaseProductQuantity(productId));
  };

  const handleCheckout = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = async ({ address }) => {
    const orderData = {
      userId: user,
      products: cart.products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      amount: cart.total,
      address: address,
      status: "pending",
    };

    try {
      const submitOrder = async (orderData) => {
        try {
          const response = await userRequest.post("/order", orderData);
          if (response.status === 200) {
            setDialogOpen(false);
            setIsSuccessAlertOpen(true);
          } else {
            console.error("Order submission failed", response.data);
          }
        } catch (error) {
          console.error("Order submission error", error);
        }
      };

      await submitOrder(orderData);
    } catch (error) {
      console.error("Error handling order submission", error);
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>COȘUL TĂU</Title>
        <Top>
          <TopButton onClick={handleShopping}>Continuă Cumpărăturile</TopButton>
          <TopTexts>
            <TopText>Coș de Cupăraturi({cart.products.length})</TopText>
            <TopText>Lista de Dorințe (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleCheckout}>
            CHECKOUT 
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleAddQuantity(product._id)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove onClick={() => handleRemoveQuantity(product._id)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>COMANDA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} LEI</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Cost livrare</SummaryItemText>
              <SummaryItemPrice>0 LEI</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} LEI</SummaryItemPrice>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      <AddressDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={(data) =>
          handleDialogSubmit({ ...data, address: data.address })
        }
      />

      {isSuccessAlertOpen && (
        <Alert severity="success" onClose={() => setIsSuccessAlertOpen(false)}>
          Order submitted successfully!
        </Alert>
      )}
    </Container>
  );
};

export default Cart;
