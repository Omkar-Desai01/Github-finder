import { useState, useEffect } from "react";
import UserDisplay from "../components/UserDisplay";
import Repos from "../components/Repos";

import axios from "axios";

function UserPage(props) {
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.userName}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.userName]);
  return (
    <div>
      <UserDisplay data={UserData} />
      <Repos data={props.ReposData} currentRepo={props.currentRepos} />
    </div>
  );
}

export default UserPage;
