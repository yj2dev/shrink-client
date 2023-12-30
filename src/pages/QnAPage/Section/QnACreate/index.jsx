import { useContext, useEffect, useRef, useState } from "react";
import { Container } from "./styled";
import { useNavigate } from "react-router";
import { PostDispatchContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";
import axios from 'axios';

const QnACreate = ({isEdit, originData}) => {

    const titleInput = useRef();
    const contentInput = useRef();
    const navigate = useNavigate();
    const {onCreate, onEdit} = useContext(PostDispatchContext);

    const [formData, setformData] = useState({
       title: "",
       content: "", 
    });

    const handleChangeState = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }

    const handleList = () => {
        navigate("/question");
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

          if(formData.title.length < 1) { // 제목은 최소 1글자 이상 작성
                    titleInput.current.focus();
                    return;
            }
        
          if(formData.content.length < 5) { // 내용은 최소 5글자 이상 작성
                contentInput.current.focus();
                return;
            }
        
          if(window.confirm(isEdit? "질문을 수정하시겠습니까?" : "새로운 질문을 작성하시겠습니까?")){
                if(!isEdit){
                    try {
                        const response = await axios.post('/api/query/create', formData);
                        console.log('created successfully:', response.data);
                        onCreate(formData.title, formData.content);
                    } catch (error) {
                        console.error('Error creating post:', error.message);
                    }
                    
                }
                else {
                    try {
                        const response = await axios.put(`/api/query/update/${originData.id}`, formData);
                        console.log('edited successfully:', response.data);
                        onEdit(originData.id, formData.date, formData.title, formData.content);
                    } catch (error) {
                        console.error('Error editng post:', error.message);
                    }
                    
                }
            }
                
            navigate('/question');
        
    };
    
    useEffect(()=> {
        if(isEdit){ // 수정 페이지
            setformData(originData);
        }
    }, [isEdit, originData]);

    return (
        <Container>
            <article class="QnACreate">
            <h3>{isEdit ? "질문 수정하기" :"질문 작성하기"}</h3>

            <input 
                type="text"
                ref={titleInput}
                value={formData.title}
                name="title" 
                id="titleInPut" 
                placeholder="제목을 입력하세요"
                onChange={handleChangeState}
            />
            <textarea
                ref={contentInput}
                value={formData.content}
                onChange={handleChangeState}
                name="content" 
                id="textInPut" 
                cols="30" 
                rows="10" 
                placeholder="내용을 입력하세요"
            ></textarea>

            {/* <div>
                <div class="filebox">
                    <label for="ex_file">+</label>
                    <input type="file" id="ex_file"/>
                </div>
            </div> */}

            <div className="btn-container">
                <button onClick={handleList}> <CiViewList/> 목록 </button>
                <button onClick={handleSubmit}>등록하기</button>
            </div>
        </article>
        
        </Container>
    );
};

export default QnACreate;