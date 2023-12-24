import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styled";
import { useContext, useEffect, useState } from "react";
import { PostDispatchContext, PostStateContext } from "../../../../App";

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
        <div className="QnADetail">
            <h2>상세 페이지</h2>
            <div>
                <div><p>제목</p></div>
                <div className="detail">{data.title}</div>
                
            </div>
            <div>
                <div><p>내용</p></div>
                <div className="detail">{data.content}</div>
                
            </div>
            <div className="btn-container">
                <button className="left-btn" onClick={handleList}>
                    목록보기
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
        </div>
    
    </Container>
  );
   }
    
};

export default QnADetail;