import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import UserPage from "./page/UserPage";
import Pagination from "./Pagination";

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
  color: #a0a0cc;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  a {
    color: #8888ff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #aaaaff;
    }
  }
`;

function App() {
  const [userName, setUserName] = useState("johnpapa");
  const [currentPage, setCurrentPage] = useState(1);
  const [ReposData, setReposData] = useState([]);
  const [error, setError] = useState(null);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setError(null);
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        const filteredRepos = res.data
          .filter((repo) => !repo.archived && !repo.disabled)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setReposData(filteredRepos);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("User not found. Please check the username and try again.");
        } else {
          setError(
            "An error occurred while fetching data. Please try again later."
          );
        }
        setReposData([]);
      });
  }, [userName]);

  const indexOfLastPage = currentPage * 10;
  const indexOfFirstPage = indexOfLastPage - 10;
  const currentRepos = ReposData.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <Navbar userName={userName} setUserName={setUserName} error={error} />
      <UserPage
        userName={userName}
        setUserName={setUserName}
        ReposData={ReposData}
        currentRepos={currentRepos}
      />
      {ReposData.length > 0 && (
        <Pagination
          ReposPerPage={10}
          totalRepos={ReposData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
      <Footer>
        Made with ❤️ by{" "}
        <a
          href="https://omkardesai-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Omkar Desai
        </a>{" "}
        © {new Date().getFullYear()}
      </Footer>
    </>
  );
}

export default App;
