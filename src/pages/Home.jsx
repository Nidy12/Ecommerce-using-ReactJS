import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { Helmet } from 'react-helmet';

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();

  return (
    <Fragment>
      <Helmet>
        <title>Home | Multimart</title>
        <meta name="description" content="Welcome to Your Store Name. Explore our latest arrivals, best sales, and big discounts on electronics and accessories." />
        <meta name="keywords" content="electronics, mobile phones, wireless accessories, sofas, discounts, new arrivals" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount on Products"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
