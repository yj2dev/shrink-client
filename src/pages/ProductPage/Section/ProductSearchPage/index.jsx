// import { Container } from "./styled";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductPage from "../..";

const ProductSearchPage = () => {
  const location = useLocation();
  const [keyword, setKeyword] = useState(location.state.keyword);

  useEffect(() => {
    setKeyword(location.state?.keyword);
  }, [location]);

  return <ProductPage keyword={keyword} />;
};

export default ProductSearchPage;
