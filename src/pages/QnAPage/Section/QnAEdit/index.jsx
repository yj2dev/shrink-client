import { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import { useNavigate, useParams } from "react-router";
import { PostStateContext } from "../../../../App";
import QnACreate from "../QnACreate";

const QnAEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const postList = useContext(PostStateContext);
    const [originData, setOriginData] = useState();

    useEffect(()=> {
        if(postList.length >= 1) {
            const targetPost = postList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );
            console.log(targetPost);

            if(targetPost){
                setOriginData(targetPost);
            } else { // 해당 게시글이 없을 때
                navigate("/", {replace: true});
            }
        }
    }, [id, postList])

    return (
        <Container>
                {originData && <QnACreate isEdit={true} originData={originData}/>}
        </Container>
    );
};

export default QnAEdit;