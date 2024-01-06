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
              <ShrinkResult className="shrink-result" type={item.shrink}>
                {item.shrink === null && "알 수 없음"}
                {item.shrink === true && "슈링크"}
                {item.shrink === false && "비슈링크"}
              </ShrinkResult>
            </article>
          ))}
        </>
      )}

      {/*  {keyword && product.length === 0 ? (*/}
      {/*    <div className="nosearch-wrap">*/}
      {/*      <FiAlertCircle className="nosearch"/>*/}
      {/*      <h1>"{keyword}"에 대한 검색 결과가 없습니다.</h1>*/}
      {/*      <button*/}
      {/*        onClick={() => {*/}
      {/*          navigate(-1);*/}
      {/*        }}>*/}
      {/*        이전 페이지로 돌아가기*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    <div className="wrapper">*/}
      {/*    <div className="products">*/}
      {/*      {product.map((it) => (*/}
      {/*        <div className="product" key={it.product_id}>*/}
      {/*        <div className="product_img">*/}
      {/*              <img src={it.image ? it.image : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnOSHZ%2FbtrLTB8V5DQ%2FnlaUCKg7kzbp7PbVKy63Qk%2Fimg.png"} alt="product-img"/>*/}
      {/*        </div>*/}
      {/*        <div className="product_details">*/}
      {/*          <h3>{it.product_name}</h3>*/}
      {/*          <div className="detail">{it.detail ? it.detail : ""}</div>*/}
      {/*          <div className="price">*/}
      {/*            <div className="price_l">*/}
      {/*              /!* <span className="weight_label">{it.weight}g</span> *!/*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="shrink-notice">꼬리표</div>*/}
      {/*  </div>*/}
      {/*  ))}*/}

      {/*</div>*/}
      {/*</div>*/}
      {/*  )}*/}
      {/*  */}
    </Container>
  );
};

export default ProductPage;
