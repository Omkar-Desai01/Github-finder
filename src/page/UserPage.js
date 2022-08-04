import { useState, useEffect } from "react";
import UserDisplay from "../components/UserDisplay";
import Repos from "../components/Repos";

import axios from "axios";

function UserPage(props) {
  const [UserData, setUserData] = useState({});
  const [ReposData, setReposData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.userName}/repos`)
      .then((res) => {
        setReposData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.userName]);
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
      <Repos data={ReposData} />
    </div>
  );
}

export default UserPage;
