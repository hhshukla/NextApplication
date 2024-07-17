import AboutUs from "../components/AboutUs/AboutUs";
import { AboutUsData } from "../components/AboutUs/AboutUs.mock";
import ProductList from "../components/ProductList/ProductList";
import {productData} from "../components/ProductList/ProductList.mock"
const about = () => {
  return (
    <>
      <AboutUs {...AboutUsData} />
      <ProductList name={""} price={""} imageUrl={""} {...productData}/>
    </>
  );
};

export default about;
