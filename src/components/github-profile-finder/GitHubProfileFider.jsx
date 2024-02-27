import { useEffect, useState } from "react";
import styled from "styled-components";
import User from "./User";

const GitHubProfileFider = () => {
  const [userName, setUserName] = useState("DharunRaju005");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    console.log(data);
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    <div>Please Wait !!!!</div>;
  }

  return (
    <ProfileContainer>
      <InputWrapper>
        <input type="text" name="search-by-username" id="" value={userName} placeholder="Search GithubUserName" onChange={(event) => setUserName(event.target.value)} />

        <button type="button" onClick={handleSubmit}>
          Search
        </button>
      </InputWrapper>
      {userData !== null ? <User user={userData} /> : null}
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;

  & input {
    padding: 12px;
    font-size: 16px;
    border: none;
  }

  &button {
    padding: 5px 12px;
    border: none;
    border-radius: 8px;
    background-color: #00f4ec;
    color: #000;
    cursor: pointer;
  }
`;

export default GitHubProfileFider;
