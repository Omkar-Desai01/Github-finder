import React from "react";
import Repo from "./Repo";

export default function Repos(props) {
  let allRepos = props.currentRepo.map((repo) => {
    return <Repo data={repo} key={repo.id} />;
  });
  return (
    <>
      <div class="row">{allRepos}</div>
    </>
  );
}
