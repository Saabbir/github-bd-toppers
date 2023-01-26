import React from "react";
import github from "../api/github";
import "../scss/BestOfBdDevsOnGithub.scss";

const queryString =
  "q=" +
  encodeURIComponent(
    "type:user repos:>=20 location:bangladesh followers:>=1000"
  );

class BestOfBdDevsOnGithub extends React.Component {
  state = { users: [] };

  async componentDidMount() {
    const res = await github.get(`/search/users?${queryString}`);
    const results = res.data.items;
    const userPromises = results.map(async ({ login }) => {
      const user = await github.get(`/users/${login}`);
      return user.data;
    });
    Promise.all(userPromises).then((users) => {
      this.setState({ users });
    });
  }

  render() {
    const usersList = this.state.users.map((user) => {
      const {
        name,
        bio,
        login: username,
        avatar_url,
        html_url: github_url,
        id,
      } = user;

      return (
        <div className="c-user" key={id}>
          <a
            className="c-user__thumbnail"
            href={github_url}
            target="_blank"
            rel="noreferrer"
          >
            <img className="c-user__img" src={avatar_url} alt={name} />
          </a>
          <div className="c-user__info">
            <h4 className="c-user__name">
              {name} <span>{username}</span>
            </h4>
            <p className="c-user__bio">{bio}</p>
          </div>
        </div>
      );
    });

    return <div className="c-users-list">{usersList}</div>;
  }
}

export default BestOfBdDevsOnGithub;
