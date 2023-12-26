import { useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { FaSearch } from "react-icons/fa";
import { PostStateContext } from "../../App";
import Pagination from "react-js-pagination";

const QnAPage = () => {

  const postList = useContext(PostStateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 표시할 항목 수
  const [searchResults, setSearchResults] = useState([]);

  // 현재 페이지에 표시할 항목들을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postList.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 개수 동적 계산
  const calculatePageRange = () => {
    const pageCount = Math.ceil(postList / currentItems);
    return Math.min(pageCount, 5); 
  };

  const handleSearchInputChange = (e) => {
    setSearchResults(postList);
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    // 현재는 더미데이터에 검색되도록
    // API 요청을 통해 서버에서 검색 수행해야 함
    e.preventDefault();
    const results = onSearch(searchTerm);
    setSearchResults(results);
  }
  
  const onSearch = (searchTerm) => {
    return postList.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
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
                <p>총 <span>{postList.length}</span>개의 게시물이 있습니다.</p>
                    <button class="btn write-btn" onClick={handleWriteButtonClick}>글쓰기</button>
                </div>
                    <div class="search-window">
                        <form action="">
                            <div class="search-wrap">
                                <label for="search" class="blind">질문게시판 내용 검색</label>
                                <input id="search" type="text" name="" placeholder="검색어를 입력해주세요." value={searchTerm} onChange={handleSearchInputChange}/>
                                <button type="submit" class="btn search-btn" onClick={handleSearch}>검색 <FaSearch className="search-icon"/></button>
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
                        {searchTerm.length !== 0 ? searchResults.map((it) => (
                          <tr key={it.id}>
                            <td>{it.id}</td>
                            <th><Link to={`/question/${it.id}`}>{it.title}</Link></th>
                            <td>{new Date(it.date).toLocaleString()}</td>
                          </tr>
                        ))
                        :
                         currentItems.map((it)=> (
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <th><Link to={`/question/${it.id}`}>{it.title}</Link></th>
                                <td>{new Date(it.date).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        </div>

    </section>
    <div style={{ marginTop: '-40px' }}>
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={postList.length}
      pageRangeDisplayed={calculatePageRange()}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
    </div>
    </Container>
  );
};

QnAPage.defaultProps = {
    diaryList:[],
};

export default QnAPage;
