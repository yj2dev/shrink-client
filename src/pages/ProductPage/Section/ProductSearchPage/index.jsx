import { Container } from "./styled";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductSearchPage = () => {
  const location = useLocation();
  const [keyword, setKeyword] = useState(location.state.keyword);

  useEffect(() => {
    setKeyword(location.state?.keyword);
  }, [location]);

  return (
    <Container>
      <h1>Product Page</h1>
      <h2>{keyword}</h2>
    </Container>
  );
};

export default ProductSearchPage;
