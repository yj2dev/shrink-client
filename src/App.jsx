import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./layouts/Header";
import LeftNav from "./layouts/LeftNav";
import Footer from "./layouts/Footer";

import FavoritePage from "./pages/FavoritePage";
import QnAPage from "./pages/QnAPage";
import ReportPage from "./pages/ReportPage";
import AccountPage from "./pages/AccountPage";
// import LandingPage from "./pages/LandingPage";
import LandingPage from "./pages/LandingPage-re";
import React, { useEffect, useMemo, useReducer } from "react";
import QnACreate from "./pages/QnAPage/Section/QnACreate";
import QnADetail from "./pages/QnAPage/Section/QnADetail";
import QnAEdit from "./pages/QnAPage/Section/QnAEdit";
import AnalysisPage from "./pages/AnalysisPage";
import axios from "axios";
import ProductPage from "./pages/ProductPage";
import ProductSearchPage from "./pages/ProductPage/Section/ProductSearchPage";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
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
      newState = state.map((it) =>
        it.id === action.data.id ? action.data : it,
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const PostDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/query");
        const responseData = response.data.post_list;

        dispatch({ type: "INIT", data: responseData });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const onCreate = (title, content) => {
    const current_date = new Date().getTime();
    dispatch({
      type: "CREATE",
      data: {
        date: current_date,
        title,
        content,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  const onEdit = (targetId, date, title, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content,
      },
    });
  };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  return (
    <PostDispatchContext.Provider value={memoizedDispatches}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="layout">
            {/*<LeftNav />*/}
            <Routes>
              {/* 작성자: 이유진
                  작성일: 2024.01.05
                  설명: LandingPage 로딩시 부하가 심해 ReportPage 교체 후 개발
                       필요시 주석 해제 할 것

              */}
              {/*<Route path="/" element={<LandingPage />} />*/}
              <Route path="/" element={<LandingPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/search" element={<ProductSearchPage />} />
              <Route path="/favorite" element={<FavoritePage />} />
              <Route path="/question" element={<QnAPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/question/create" element={<QnACreate />} />
              <Route path="/question/:id" element={<QnADetail />} />
              <Route path="/question/edit/:id" element={<QnAEdit />} />
            </Routes>
          </div>
          {/*<Footer />*/}
        </BrowserRouter>
      </div>
    </PostDispatchContext.Provider>
  );
}

export default App;
