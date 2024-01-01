import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styled";
import { useContext, useEffect, useRef, useState } from "react";
import { PostDispatchContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userState } from "../../../../state/selectors/userSelectors";
import { FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";


const QnADetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [comment, setComment] = useState("");
    const commentInput = useRef();
    const [showEditMenu, setShowEditMenu] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [editingCommentId, setEditingCommentId] = useState(null); 
    const [editingCommentContent, setEditingCommentContent] = useState(""); 
    const {onRemove} = useContext(PostDispatchContext);
    const [user, setUser] = useRecoilState(userState);

    const handelCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = async() => {
        try{
            if(!user){
                window.confirm("로그인 후 이용해주세요.");
                window.location.reload();
                return;
            }
            if(comment.length < 1){ // 댓글 최소 1글자 이상
                commentInput.current.focus();
                return;
            }
            await axios.post(`/api/query/comment/create/${id}`, {
                content: comment,
            });
            setComment('');
            fetchPostDetail();
            setSelectedCommentId(null);
        }catch(error){
            console.error('comment error:', error.message);
        }
    };

    const handleEditComment = async(commentId, content) => {
        setEditingCommentId(commentId);
        setEditingCommentContent(content);

        if(editingCommentId) {
        const response = await axios.put(`/api/query/comment/update/${editingCommentId}`, {
            content : editingCommentContent,
        });
        console.log("comment edit>>",response.data);
        fetchPostDetail();
        setEditingCommentId(null);
        setEditingCommentContent("");
        setShowEditMenu(!showEditMenu);
        }
        
    }

    const handleRemoveComment = async (commentId) => {
        if (window.confirm('해당 댓글을 삭제하시겠습니까?')) {
            try {
                await axios.delete(`/api/query/comment/delete/${commentId}`);
                fetchPostDetail();
            } catch (error) {
                console.error('Error deleting comment:', error.message);
            }
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
          //console.log("post >>",postData);
          setData(postData);
          //console.log("data >>", data.post.writer.nickname);
        } catch (error) {
          console.error('Error post detail:', error.message);
        }
    };
  
    const boardLike = async() => {
        try {
            if(!user){
                window.confirm("로그인 후 이용해주세요.");
                return;
            } 
            await axios.post(`/api/query/like/${id}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error liking post:', error.message);
        }
    }

    const boardDislike = async() => {
        try {
            if(!user){
                window.confirm("로그인 후 이용해주세요.");
                return;
            } 
            await axios.post(`/api/query/dislike/${id}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error disliking post:', error.message);
        }
    }

    const commentLike = async(commentId) => {
        try {
            if(!user){
                window.confirm("로그인 후 이용해주세요.");
                return;
            } 
            await axios.post(`/api/query/comment/like/${commentId}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error liking comment:', error.message);
        }
    }

    const commentDislike = async(commentId) => {
        try {
            if(!user){
                window.confirm("로그인 후 이용해주세요.");
                return;
            } 
            await axios.post(`/api/query/comment/dislike/${commentId}`);
            fetchPostDetail();
        } catch (error) {
            console.error('Error disliking comment:', error.message);
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
                        <p id="postuser">
                            <img src={data.post.writer.profile_url} alt="profile-img"/>
                            <span style={{marginLeft: '5px'}}>{data.post.writer.nickname}</span>
                        </p>
                        <div>
                            <p><b>조회수</b>{data.post.view}</p>
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

                        <div className="like-container">
                                <div class="wrapper">
                                        <div class="action" onClick={boardLike}>
                                            <FaRegThumbsUp/>
                                            <div class="count">
                                                {data.post.like}
                                            </div>
                                        </div>
                                        <div class="separator"></div>
                                        <div class="action" onClick={boardDislike}>
                                            <FaRegThumbsDown/>
                                            <div class="count">
                                                {data.post.dislike}
                                            </div>
                                        </div>
                                </div>
                        </div>
 

                        {user && data.post.writer.nickname === user.nickname ? (
                            <div className="right-btns">
                            <button onClick={handleEdit}>
                                수정하기
                            </button>
                            <button onClick={handleRemove}>
                                삭제하기
                            </button>
                        </div>
                        ) : (
                            <></>
                        )}
                        
                    </div>
                </div>

                <div class="commentsz">
                    <p>댓글 {data.post.comments.length}개</p>

                    {data.post.comments.map((it) => (
                        <section class="readPost" key={it.id}>
                        <div className="readdiv">
                            <img src={it.writer.profile_url} alt="profile-img"/>
                            <span>
                                <p><b>{it.writer.nickname}</b></p>
                                {editingCommentId === it.id ? (
                                    <textarea
                                        id="edit-area"
                                        onChange={(e)=> setEditingCommentContent(e.target.value)}
                                        value={editingCommentContent}
                                    />
                                ) : (
                                    <p>
                                    <p>{it.content}</p>
                                    <small>{new Date(it.created_at).toLocaleString()}</small>
                                    </p>
                                    
                                )}
                            </span>
                        </div>
                        {editingCommentId === it.id ? (<></>) : (
                                <div className="like-container" id="commentlike-container">
                                    <div class="wrapper">
                                            <div class="action" onClick={() => commentLike(it.id)}>
                                                <FaRegThumbsUp/>
                                                <div class="count">
                                                    {it.likes_count}
                                                </div>
                                            </div>
                                            <div class="separator"></div>
                                            <div class="action" onClick={() => commentDislike(it.id)}>
                                                <FaRegThumbsDown/>
                                                <div class="count">
                                                    {it.dislikes_count}
                                                </div>
                                            </div>
                                    </div>
                                </div>                              
                        )}
                        <div className="right-wrap">
                        <div className="editmenu-wrap">
                        {user && it.writer.nickname === user.nickname ? (
                            <BsThreeDotsVertical
                            className="threedot" 
                            onClick={()=> {
                            setShowEditMenu(!showEditMenu);
                            setSelectedCommentId(it.id);
                        }}/>
                        ) : (
                            <></>
                        )}
                        
                        {showEditMenu && selectedCommentId === it.id && (
                                <div className="editmenu">
                                    <button onClick={() => handleEditComment(it.id, it.content)}>{editingCommentId ? "등록" : "수정"}</button>
                                    <button onClick={() => handleRemoveComment(it.id)}>삭제</button>
                                </div>
                        )}
                        </div>
                        </div>
                    </section>
                    ))}
                    
                    <textarea
                        id="comment-area" 
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