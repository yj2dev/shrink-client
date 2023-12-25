import { useContext, useEffect, useRef, useState } from "react";
import { Container } from "./styled";
import { useNavigate } from "react-router";
import { PostDispatchContext } from "../../../../App";

const QnACreate = ({isEdit, originData}) => {

    const titleInput = useRef();
    const contentInput = useRef();
    const navigate = useNavigate();
    const {onCreate, onEdit} = useContext(PostDispatchContext);

    const [state, setState] = useState({
       title: "",
       content: "", 
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    }

    const handleList = () => {
        navigate("/question");
    }

    const handleSubmit = () => {
        if(state.title.length < 1) { // 제목은 최소 1글자 이상 작성
            titleInput.current.focus();
            return;
        }

        if(state.content.length < 5) { // 내용은 최소 5글자 이상 작성
            contentInput.current.focus();
            return;
        }

        if(window.confirm(isEdit? "질문을 수정하시겠습니까?" : "새로운 질문을 작성하시겠습니까?")){
            if(!isEdit){
                onCreate(state.title, state.content);
                // setState({
                //     title:"",
                //     content:""
                // });
            }
            else {
                onEdit(originData.id, state.date, state.title, state.content);
                //console.log(state.title, state.content);
            }
        }
        
         navigate('/question');
    }

    useEffect(()=> {
        if(isEdit){ // 수정 페이지
            setState(originData);
        }
    }, [isEdit, originData]);

    return (
        <Container>
            <div className="QnACreate">
                <h2>{isEdit ? "질문 수정하기" :"무엇이 궁금한가요?"}</h2>
                <div>
                    <div><p>제목</p></div>
                    <input 
                    ref={titleInput}
                    name="title" 
                    value={state.title}
                    placeholder="제목을 입력해주세요"
                    onChange={handleChangeState}/>
                </div>
                <div>
                    <div><p>내용</p></div>
                    <textarea 
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    placeholder="내용을 입력해주세요"
                    onChange={handleChangeState}/>
                </div>
                <div className="btn-container">
                    <button onClick={handleList}>
                        목록보기
                    </button>
                    <button onClick={handleSubmit}>
                        등록하기
                    </button>
                </div>
            </div>
        
        </Container>
    );
};

export default QnACreate;