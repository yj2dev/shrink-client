import { useEffect, useState } from "react";
import { Container } from "./styled";
import { useNavigate, useParams } from "react-router";
import QnACreate from "../QnACreate";
import axios from 'axios';

const QnAEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [originData, setOriginData] = useState();
    const [postList, setPostList] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try {
              const response = await axios.get('/api/query');
              const responseData = response.data.post_list;
      
              setPostList(responseData);
              
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
          };

        fetchData();
        //console.log("edit postlist >>", postList);
    }, []);

    useEffect(()=> {
        
        if(postList.length >= 1) {
            const targetPost = postList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );
            console.log("target >> ", targetPost);

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