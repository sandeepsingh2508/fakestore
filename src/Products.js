import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

import useStyles from "./styles";

const Products = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data));
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StoreIcon className={classes.icon} />
          <Typography variant="h6">Fake Store</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product?.id} xs={12} sm={6} md={4} lg={3}>
                <Link
                  to={`/products/${product?.id}`}
                  key={product?.id}
                  style={{ textDecoration: "none" }}
                >
                  <Card className={classes.card} raised={true}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product?.image}
                      title={product?.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        {product?.title.substr(0, 22)}
                      </Typography>
                      <Typography>
                        {product?.description.substr(0, 50)}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" variant="contained" color="primary">
                        View Product Details
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {" "}
          Sandeep Singh ❤️😍 ©️2022{" "}
        </Typography>
      </footer>
    </>
  );
};
export default Products;
