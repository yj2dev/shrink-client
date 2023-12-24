import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { FaSearch } from "react-icons/fa";
import { PostStateContext } from "../../App";
//import Pagination from "react-js-pagination";

const QnAPage = () => {

  const postList = useContext(PostStateContext);

    // const [currentPage, setCurrentPage] = useState(1);

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // }
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        navigate('/question/create');
    };
    // console.log(postList);
    

  return (
    <Container>
    
    <section class="notice">
        <div class="page-title">
            <div class="container">
                <h3>질문게시판</h3>
            </div>
        </div>

        <div id="board-search">
                <div class="container">
                    
                <div className="write-wrap">
                    <button class="btn write-btn" onClick={handleWriteButtonClick}>글쓰기</button>
                </div>
                    <div class="search-window">
                        <form action="">
                            <div class="search-wrap">
                                <label for="search" class="blind">질문게시판 내용 검색</label>
                                <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value=""/>
                                <button type="submit" class="btn search-btn">검색 <FaSearch className="search-icon"/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="board-list">
                <div class="container">
                    <table class="board-table">
                        <thead>
                        <tr>
                            <th scope="col" class="th-num">번호</th>
                            <th scope="col" class="th-title">제목</th>
                            <th scope="col" class="th-date">등록일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {postList.map((it)=> (
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <th><a href={`/question/${it.id}`}>{it.title}</a></th>
                                <td>{new Date(it.date).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </div>

    </section>
    <div style={{ marginTop: '-40px' }}>
    {/* <Pagination
      activePage={currentPage}
      itemsCountPerPage={5}
      totalItemsCount={5}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    /> */}
    </div>
    </Container>
  );
};

QnAPage.defaultProps = {
    diaryList:[],
};

export default QnAPage;
