import React from "react";
import Repo from "./Repo";
import styled from "styled-components";

const ReposGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function Repos({ currentRepo }) {
  return (
    <ReposGrid>
      {currentRepo.map((repo) => (
        <Repo data={repo} key={repo.id} />
      ))}
    </ReposGrid>
  );
}
