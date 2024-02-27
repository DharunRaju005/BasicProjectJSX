import styled from "styled-components";
const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, name, login } = user;
  const createdDate = new Date(user.created_at);

  return (
    <UserContainer>
      <ProfileImageContainer>
        <Avathar src={avatar_url} alt="User" />
      </ProfileImageContainer>
      <NameContainer>
        <a href={`https://github.com/${login}`}>{name || login}</a>

        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", { month: "short" })} ${createdDate.getFullYear()}`}</p>
      </NameContainer>

      <ProfileInfo>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>

        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>

        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </ProfileInfo>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;

  &p {
    margin: 0px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const ProfileImageContainer = styled.div``;

const Avathar = styled.img`
  height: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export default User;
