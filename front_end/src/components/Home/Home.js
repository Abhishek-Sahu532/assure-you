import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Metadata from "../Metadata.js";
import Carousel from "react-material-ui-carousel";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import banner6 from "../../assets/images/banner6.jpg";
import banner7 from "../../assets/images/banner7.jpg";
import { Container } from "@material-ui/core";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [
    {
      name: "banner1",
      link: banner1,
    },
    {
      name: "banner2",
      link: banner2,
    },
    {
      name: "banner3",
      link: banner3,
    },
    {
      name: "banner4",
      link: banner4,
    },
    {
      name: "banner5",
      link: banner5,
    },
    {
      name: "banner6",
      link: banner6,
    },
    {
      name: "banner7",
      link: banner7,
    },
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="ECOMMERCE" />
          <div className="banner">
            <Container>
              <Carousel className="carousel" indicators={false}>
                {images.map((image, i) => (
                  <div key={i}>
                    <img src={image.link} alt="" />
                  </div>
                ))}
              </Carousel>
            </Container>
          </div>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.name} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
