import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styled";
import { useContext, useEffect, useRef, useState } from "react";
import { PostDispatchContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';

const QnADetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [comment, setComment] = useState("");
    const commentInput = useRef();
    const {onRemove} = useContext(PostDispatchContext);

    const handelCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = async() => {
        try{
            if(comment.length < 1){ // 댓글 최소 1글자 이상
                commentInput.current.focus();
                return;
            }

            await axios.post(`/api/query/comment/create/${id}`, {
                content: comment,
            });
            fetchPostDetail();
            setComment('');
        }catch(error){
            console.error('comment error:', error.message);
        }
    };

    const handleRemove = async(e) => {
        e.preventDefault();
        
        if(window.confirm('해당 게시글을 삭제하시겠습니까?')){
            try {
                await axios.delete(`/api/query/delete/${id}`);
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

    const fetchPostDetail = async () => {
        try {
          const response = await axios.get(`/api/query/detail/${id}`);
          const postData = response.data;
          //console.log("post >>",postData.post.comments);
          setData(postData);
          //console.log("data>>",data.post.comments);
        } catch (error) {
          console.error('Error post detail:', error.message);
        }
    };

    const boardLike = async() => {
        try {
            await axios.post(`/api/query/like/${id}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error liking post:', error.message);
        }
    }

    const boardDislike = async() => {
        try {
            await axios.post(`/api/query/dislike/${id}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error disliking post:', error.message);
        }
    }

    useEffect(() => {
        const incrementViews = async() => {
            try {
                await axios.post(`/api/query/increase_view/${id}`);
            } catch (error) {
                console.error('Error increase_view:', error.message);
            }
        }
    
        fetchPostDetail();
        incrementViews();

    }, [id]);

   if(!data){
    return <div className="QnADetail">로딩중입니다...</div>;
   }else {
    return (
        <Container>
            <article class="readPosting">
                <h3>게시글 보기</h3>
                <div>
                    <h2>{data.post.title}</h2>

                    <div class="dates">
                        <p>{new Date(data.post.created_at).toLocaleString()}</p>
                        <p>{data.post.writer.nickname}</p>
                        <div>
                            <p><b>조회수</b>{data.post.view}</p>
                            <p><b>좋아요</b>{data.post.like}</p>
                            <p><b>싫어요</b>{data.post.dislike}</p>
                        </div>
                    </div>
                </div>

                <div class="contents">
                    <p>{data.post.content}</p>

                    {/* <div class="btns">
                        <button><img src="https://super.so/icon/light/heart.svg" alt="heart"/></button>
                    </div> */}

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
                </div>

                <div class="commentsz">
                    <p>댓글 {data.post.comments.length}개</p>

                    {data.post.comments.map((it) => (
                        <section class="readPost" key={it.id}>
                        <div>
                            <img src={it.writer.profile_url}/>
                            <span>
                                <p><b>{it.writer.nickname}</b></p>
                                <p>{it.content}</p>
                                <small>{new Date(it.created_at).toLocaleString()}</small>
                            </span>
                        </div>
                        <BsThreeDotsVertical/>
                    </section>
                    ))}
                    
                    

                    <textarea 
                        name=""
                        onChange={handelCommentChange}
                        value={comment}
                        ref={commentInput}
                        cols="10"
                        rows="5" 
                        placeholder="댓글을 입력하세요">
                    </textarea>
                    
                </div>
                <div className="active-btn">
                        <button onClick={handleCommentSubmit}>등록하기</button>
                </div>

            </article>
    
    </Container>
  );
   }
    
};

export default QnADetail;