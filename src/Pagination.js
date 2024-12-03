import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PageButton = styled.a`
  background: ${(props) =>
    props.active ? "rgba(136, 136, 255, 0.2)" : "rgba(255, 255, 255, 0.05)"};
  color: ${(props) => (props.active ? "#8888ff" : "#fff")};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(136, 136, 255, 0.1);
    color: #8888ff;
  }
`;

const Pagination = ({ ReposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / ReposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageNumbers>
        {pageNumbers.map((number) => (
          <PageButton
            key={number}
            onClick={(e) => {
              e.preventDefault();
              paginate(number);
            }}
            href="#"
            active={currentPage === number}
          >
            {number}
          </PageButton>
        ))}
      </PageNumbers>
    </PaginationContainer>
  );
};

export default Pagination;
