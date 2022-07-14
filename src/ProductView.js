import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import "./ProductView.css";
const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => setProduct(res.data));
  return (
    <>
    <AppBar position="relative">
        <Toolbar>
          <StoreIcon styles={{marginRight:"200px"}}/>
          <Typography variant="h6">Fake Store</Typography>
        </Toolbar>
      </AppBar>
    <div className="wrapper">
      <div className="row-co">
        <div className="img-box">
          <img alt="images" src={product?.image}></img>
        </div>
        <div className="col-co">
          <p>
            <b>{product?.title}</b>
          </p>
          <p>
            {" "}
            <b>Category: </b> {product?.category}
          </p>
          <p>
            <b>Price: </b>
            {product?.price}
          </p>
          <p>
            <b>Rating:</b> {product?.rating?.rate}
          </p>
          <p>
            <b>Number of Rating:</b> {product?.rating?.count}
          </p>
          <p>
            <b>Description: </b>
            {product?.description}
          </p>
          <button>Buy</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductView;
