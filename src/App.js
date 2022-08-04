import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import UserPage from "./page/UserPage";
import Pagination from "./Pagination";

function App() {
  const [userName, setUserName] = useState("johnpapa");
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [ReposData, setReposData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        setReposData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  const indexOfLastPage = currentPage * 10;
  const indexOfFirstPage = indexOfLastPage - 10;
  const currentRepos = ReposData.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <Navbar userName={userName} setUserName={setUserName} />
      <UserPage
        userName={userName}
        setUserName={setUserName}
        ReposData={ReposData}
        currentRepos={currentRepos}
      />
      <Pagination
        ReposPerPage={10}
        totalRepos={ReposData.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
