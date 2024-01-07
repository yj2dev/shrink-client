import { useEffect, useState } from "react";
import { Container, NoSearchResult, ShrinkResult } from "./styled";
import axios from "axios";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ keyword }) => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const response = await axios.get("/api/product/selectall");
      const responseData = response.data;

      console.log(responseData);
      if (keyword) {
        const filtered = responseData.response.filter((p) =>
          p.product_name.toLowerCase().includes(keyword.toLowerCase()),
        );
        setProduct(filtered);
      } else {
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

  //console.log("p",product);
  // console.log("k",keyword);

  return (
    <Container>
      {keyword && product.length === 0 ? (
        <NoSearchResult>
          <FiAlertCircle className="icon" />
          <h1>"{keyword}"에 대한 검색 결과가 없습니다.</h1>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            이전 페이지로 돌아가기
          </button>
        </NoSearchResult>
      ) : (
        <>
          {product.map((item) => (
            <article>
              <div className="item" key={item.product_id}>
                <img
                  src={item.image ? item.image : "http://placehold.it/160x160"}
                  alt="상품 이미지"
                />

                <div className="content">{item.product_name}</div>
                <div className="weight">{item.weight}g</div>
              </div>
              <ShrinkResult className="shrink-result" type={item.is_shrink}>
                {item.is_shrink === null && "정보없음"}
                {item.is_shrink === true && "슈링크"}
                {item.is_shrink === false && "비슈링크"}
              </ShrinkResult>
            </article>
          ))}
        </>
      )}
    </Container>
  );
};

export default ProductPage;
