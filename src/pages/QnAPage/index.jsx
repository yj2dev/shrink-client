import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { FaSearch } from "react-icons/fa";
import Pagination from "react-js-pagination";
import axios from 'axios';

const QnAPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 표시할 항목 수
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  // 현재 페이지에 표시할 항목들을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/query');
        const responseData = response.data.post_list;

        setData(responseData);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
    
  }, []);
  
  // 페이지 개수 동적 계산
  const calculatePageRange = () => {
    const pageCount = Math.ceil(data.length / currentItems);
    return Math.min(pageCount, 5); 
  };

  const handleSearchInputChange = (e) => {
    setSearchResults(data);
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = onSearch(searchTerm);
    setSearchResults(results);
  }
  
  const onSearch = (searchTerm) => {
    return data.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        navigate('/question/create');
    };
    

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
                <p>총 <span>{data.length}</span>개의 게시물이 있습니다.</p>
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
                            <td>{new Date(it.created_at).toLocaleString()}</td>
                          </tr>
                        ))
                        :
                        data.map((it)=> (
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <th><Link to={`/question/${it.id}`}>{it.title}</Link></th>
                                <td>{new Date(it.created_at).toLocaleString()}</td>
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
      totalItemsCount={data.length}
      pageRangeDisplayed={calculatePageRange()}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
    </div>
    </Container>
  );
};

export default QnAPage;
