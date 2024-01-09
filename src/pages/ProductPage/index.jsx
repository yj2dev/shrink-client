import { useEffect, useState } from "react";
import { Container, NoSearchResult, ShrinkResult } from "./styled";
import axios from "axios";
import { FiAlertCircle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const ProductPage = ({ keyword }) => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const response = await axios.get("/api/product/selectall");
      const responseData = response.data;

      //console.log(responseData);
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
      {product !== null ? (
        // 상품조회가 되었을 때

        product.length > 0 ? (
          <>
            {product.map((item) => (
              <article>
                <Link
                  to={`/product/select/detail/${item.product_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="item" key={item.product_id}>
                    <img
                      src={
                        item.image ? item.image : "http://placehold.it/160x160"
                      }
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
                </Link>
              </article>
            ))}
          </>
        ) : (
          <NoSearchResult>
            <FiAlertCircle className="icon" />
            <h1>"{keyword}"에 대한 검색 결과가 없습니다.</h1>
            <button
              className="back-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              이전 페이지로 돌아가기
            </button>
          </NoSearchResult>
        )
      ) : (
        // 상품조회중일 때
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            gap: "1rem",
          }}
        >
          <BounceLoader color="#3f5dfe" />
          <div style={{ fontSize: "4vw" }}>상품 가져오는 중</div>
        </div>
      )}
    </Container>
  );
};

export default ProductPage;
