import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import LeftNav from "./layouts/LeftNav";
import Footer from "./layouts/Footer";

import FavoritePage from "./pages/FavoritePage";
import QnAPage from "./pages/QnAPage";
import ReportPage from "./pages/ReportPage";
import AccountPage from "./pages/AccountPage";
import LandingPage from "./pages/LandingPage";
import React, { useMemo, useReducer, useRef} from "react";
import QnACreate from "./pages/QnAPage/Section/QnACreate";
import QnADetail from "./pages/QnAPage/Section/QnADetail";
import QnAEdit from "./pages/QnAPage/Section/QnAEdit";

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) => it.id === action.data.id ? action.data : it );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();

// 더미데이터 사용
const dummyList = [
    {
      id:1,
      title:"title1",
      date: new Date().getTime(),
      content: "content1"
    },
    {
      id:2,
      title:"title2",
      date: new Date().getTime(),
      content: "content2"
    },
    {
      id:3,
      title:"title3",
      date: new Date().getTime(),
      content: "content3"
    },
    {
      id:4,
      title:"title4",
      date: new Date().getTime(),
      content: "content4"
    },
    {
      id:5,
      title:"title5",
      date: new Date().getTime(),
      content: "content5"
    },
  ];

function App() {

  const [data, dispatch] = useReducer(reducer,dummyList);

  const dataId = useRef(6); // 새로 추가되는 데이터 아이디

  const onCreate = (title, content) => {
    const current_date = new Date().getTime();
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: current_date,
        title,
        content,
      }
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({
      type:"REMOVE", targetId
    });
  }

  const onEdit = (targetId, date, title, content) => {
    dispatch({
      type:"EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content,
      }
    });
  }

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onRemove, onEdit}
  },[])

  return (
    <PostStateContext.Provider value={data}>
      <PostDispatchContext.Provider value={memoizedDispatches}>
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="layout">
          <LeftNav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/question" element={<QnAPage/>} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/question/create" element={<QnACreate/>}/>
            <Route path="/question/:id" element={<QnADetail/>}/>
            <Route path="/question/edit/:id" element={<QnAEdit/>}/>
          </Routes>
        </div>
        {/*<Footer />*/}
      </BrowserRouter>
    </div>
    </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

export default App;
