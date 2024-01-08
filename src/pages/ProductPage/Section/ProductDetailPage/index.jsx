import { useParams } from "react-router-dom";
import { Container, ProductDetailHeader } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowDownLong } from "react-icons/fa6";


const ProductSearchPage = () => {
 
    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    const [detailProduct, setDetailProduct] = useState({});

    const fetchProductDetail = async () => {
        try {
          const response = await axios.get(`/api/product/select/detail/${product_id}`);
          const productData = response.data.response;
          
          console.log("productData >>",productData);
          setDetailProduct(productData);
          setProduct(productData.product);
         
        } catch (error) {
          console.error("Error product detail:", error.message);
        }
    };

    useEffect(() => {
        fetchProductDetail();
  
    }, [product_id]);
    

    useEffect(() => {
        // console.log("p", product);
        // console.log("d", detailProduct);
        //console.log("DDD", detailProduct.prices[detailProduct.prices.length-1]);
    }, [product]);
    
  return <Container>
    <section>
        <ProductDetailHeader type={product.is_shrink}>
            <h1>{product.is_shrink ? "슈링크플레이션 상품" : "비슈링크플레이션 상품"}</h1>
        </ProductDetailHeader>
        <div data-product-detail>
            <div className="img-card">
                <div className='img'>
                    <img src={product.image_url ? product.image_url : "http://placehold.it/160x160"} alt="product-img"/>
                </div>
                <div className='img-options'>
                    <div><img src={product.image_url ? product.image_url : "http://placehold.it/160x160"} alt="product-img1"/></div>
                    <div><img src={product.image_url ? product.image_url : "http://placehold.it/160x160"} alt="product-img2"/></div>
                    <div><img src={product.image_url ? product.image_url : "http://placehold.it/160x160"} alt="product-img3"/></div>
                    <div><img src={product.image_url ? product.image_url : "http://placehold.it/160x160"} alt="product-img4"/></div>
                </div>
            </div>
            <div className="product-details">
                <h2>{product.product_name}</h2>
                <p>{product.detail ? product.detail : ""}</p>
                <p>최근 상품 가격 <span style={{color: '#0F62FE', fontSize: '16px', top: '0px', textDecoration: 'underline'}}>
                    {detailProduct.prices && detailProduct.prices.length > 0 ?
                     detailProduct.prices[detailProduct.prices.length-1]?.price + "원" : "알수없음"}</span></p>
                <p>용량</p>
                 
                {product.is_shrink ? (
                <p>
                    <span>{detailProduct.shrink.after}g</span><span>{detailProduct.shrink.before}g</span> 
                    <span>{detailProduct.shrink.before - detailProduct.shrink.after}g<FaArrowDownLong/></span>
                </p>
                ) : (
                    <p><span>{product.weight}g</span></p>
                )}
                
                
            </div>    
        </div>
    </section>
  </Container>;
};

export default ProductSearchPage;
