import { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import axios from "axios";


const ProductPage = ({keyword}) => {

  const [product, setProduct] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get("/api/product/selectall");
      const responseData = response.data;
      if(keyword){
        const filtered = responseData.response.filter((p) =>
          p.product_name.toLowerCase().includes(keyword.toLowerCase()),
        );
        setProduct(filtered);
      }else {
        setProduct(responseData.response);
      }
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [keyword]);

  useEffect(() => {
    fetchProductData();
  }, []);

  // console.log("p",product);
  // console.log("k",keyword);

  return (
    <Container>
      <div className="wrapper">
        <div className="products">
          {product.map((it) => (
            <div className="product" key={it.product_id}>
            <div className="product_img">
                  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnOSHZ%2FbtrLTB8V5DQ%2FnlaUCKg7kzbp7PbVKy63Qk%2Fimg.png" alt="ready-img"/>
            </div>
            <div className="product_details">
              <h3 for="cozyroom">{it.product_name}</h3>
              <div className="address">{it.detail ? it.detail : ""}</div>
              <div className="price">
                <div className="price_l">
                  <span className="price_label">{it.weight}g</span>
                </div>
              </div>
            </div>
    </div>
    ))}

  </div>
  </div>
    </Container>
  );
};

export default ProductPage;
