import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styled";
import { useContext, useEffect, useState } from "react";
import { PostDispatchContext, PostStateContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";

const QnADetail = () => {

    const {id} = useParams();
    const postList = useContext(PostStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();
    const {onRemove} = useContext(PostDispatchContext);

    const handleRemove = () => {
        if(window.confirm('해당 게시글을 삭제하시겠습니까?')){
            onRemove(data.id);
        }
    };

    const handleEdit = () => {
        navigate(`/question/edit/${id}`);
    }

    const handleList = () => {
        navigate("/question");
    }
    
    useEffect(() => {
        if(postList.length >= 1) {
            const targetPost = postList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );
            //console.log(targetPost);
            if(targetPost) {
                // 해당 게시글이 있을 때
                setData(targetPost);
            }else {
                // 해당 게시글이 없을 때
                alert('존재하지 않는 게시글입니다.');
                navigate('/question', {replace:true});
            }
        }
        
    }, [id, postList]);

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
                                <p>{data.title}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div id="board-list">
                <div class="container">
                    <table class="board-content">
                    <tr className="detail-plus">
                        <p>작성일 : {new Date(data.date).toLocaleString()}</p>
                    </tr>
                    <tr className="detail-content">
                        <p>{data.content}</p>
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