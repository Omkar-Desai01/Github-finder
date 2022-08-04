import React from "react";
import Repo from "./Repo";

export default function Repos(props) {
  console.log(props.data);
  let allRepos = props.data.map(function (repo) {
    return <Repo data={repo} />;
  });
  return (
    <>
      <div class="row">{allRepos}</div>
    </>
  );
}
