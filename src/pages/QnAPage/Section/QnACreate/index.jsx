import { useContext, useEffect, useRef, useState, useMemo } from "react";
import 'react-quill/dist/quill.snow.css';
import { Container } from "./styled";
import { useNavigate } from "react-router";
import { PostDispatchContext } from "../../../../App";
import { CiViewList } from "react-icons/ci";
import axios from 'axios';
import ReactQuill from 'react-quill';



const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
    'size',
    'h1',
  ];

  

const QnACreate = ({isEdit, originData}) => {

    const titleInput = useRef();
    const contentInput = useRef();
    const navigate = useNavigate();
    const {onCreate, onEdit} = useContext(PostDispatchContext);
    const [formData, setformData] = useState({
        title: "",
        content: "", 
     });

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  [{ 'align': [] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [
                    {
                      'color': [],
                    },
                    { 'background': [] },
                  ],
                ],
            },
            
        };
      }, []);



    const handleChangeState = (e) => {
        setformData({
            ...formData,
            title : e.target.value,
        });
    }

    const handleChangeEditor = (value) => {
        setformData({
            ...formData,
            content : value,
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
                        await axios.post('/api/query/create', formData);
                        onCreate(formData.title, formData.content);
                    } catch (error) {
                        console.error('Error creating post:', error.message);
                    }
                    navigate('/question');
                }
                else {
                    try {
                        await axios.put(`/api/query/update/${originData.id}`, formData);
                        onEdit(originData.id, formData.date, formData.title, formData.content);
                    } catch (error) {
                        console.error('Error editng post:', error.message);
                    }
                    navigate(`/question/${originData.id}`);
                }
            }
                
            
        
    };
    
    useEffect(()=> {
        if(isEdit){ // 수정 페이지
            setformData(originData);
            //console.log("origin>>",originData);
        }
    }, [isEdit, originData]);

    return (
        <Container>
            <article className="QnACreate">
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
             <ReactQuill
                ref={contentInput}
                value={formData.content}
                onChange={handleChangeEditor}
                name="content"
                id="textInPut" 
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder="내용을 입력하세요"
        />

            <div className="btn-container">
                <button onClick={handleList}> <CiViewList/> 목록 </button>
                <button onClick={handleSubmit}>{isEdit ? "수정하기" : "등록하기"}</button>
            </div>
        </article>
        
        </Container>
    );
};

export default QnACreate;