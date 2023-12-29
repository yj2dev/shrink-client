import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styled";
import { useContext, useEffect, useState } from "react";
import { PostDispatchContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";
import axios from 'axios';

const QnADetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const {onRemove} = useContext(PostDispatchContext);

    const handleRemove = async(e) => {
        e.preventDefault();
        
        if(window.confirm('해당 게시글을 삭제하시겠습니까?')){
            try {
                const response = await axios.delete(`/api/query/delete/${id}`);
                console.log('deleted successfully:', response.data);
                onRemove(id);
            } catch (error) {
                console.error('Error deleting post:', error.message);
            }
            navigate("/question");
        }
    };

    const handleEdit = () => {
        navigate(`/question/edit/${id}`);
    }

    const handleList = () => {
        navigate("/question");
    }

    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
              const response = await axios.get(`/api/query/detail/${id}`);
              const postData = response.data;
              console.log("post >>",postData);
              setData(postData);
            } catch (error) {
              console.error('Error post detail:', error.message);
            }
        };

        fetchPostDetail();
    }, [id]);

   if(!data){
    return <div className="QnADetail">로딩중입니다...</div>;
   }else {
    return (
        <Container>
            <section class="notice">
                <div class="page-title">
                    <div class="container">
                    <h3>상세 페이지</h3>
                    </div>
                </div>

            <div id="board-detail">
                <div class="container">
                    <div class="detail-window">
                            <div className="detail-title">
                                <p>{data.post.title}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div id="board-list">
                <div class="container">
                    <table class="board-content">
                    <tr className="detail-plus">
                        <pre>작성일 : {new Date(data.post.created_at).toLocaleString()}  작성자 : {data.post.writer.nickname}</pre>
                    </tr>
                    <tr className="detail-content">
                        <p>{data.post.content}</p>
                    </tr>
                    </table>
                </div>
        </div>

        <div className="btn-container">
                <button className="left-btn" onClick={handleList}>
                    <CiViewList/> 목록
                </button>
                <div className="right-btns">
                <button onClick={handleEdit}>
                    수정하기
                </button>
                <button onClick={handleRemove}>
                    삭제하기
                </button>
                </div>
                
            </div>

    </section>
    
    </Container>
  );
   }
    
};

export default QnADetail;