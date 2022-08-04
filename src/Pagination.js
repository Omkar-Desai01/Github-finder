import React from "react";

const Pagination = ({ ReposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / ReposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="">
        <div className="">
          {pageNumbers.map((number) => (
            <a
              onClick={() => paginate(number)}
              href="#"
              className="btn btn-primary"
              key={number}
            >
              {number}{" "}
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
