import React from "react";
import github from "../api/github";

const queryString =
  "q=" +
  encodeURIComponent(
    "type:user repos:>=20 location:bangladesh followers:>=1000"
  );

class FetchUsers extends React.Component {
  state = { users: [], errorMsg: null, isLoading: true };

  async componentDidMount() {
    try {
      const res = await github.get(`/search/users?${queryString}`);
      const results = res.data.items;
      const userPromises = results.map(async ({ login }) => {
        try {
          const user = await github.get(`/users/${login}`);
          return user.data;
        } catch (error) {
          console.log("Saabbir:", "error", error);

          this.setState({
            errorMsg: error.response?.data?.message || error.message,
            isLoading: false,
          });
        }
      });
      Promise.all(userPromises).then((users) => {
        this.setState({ users, isLoading: false });
      });
    } catch (error) {
      console.log("Saabbir:", "error", error);

      this.setState({
        errorMsg: error.response?.data?.message || error.message,
        isLoading: false,
      });
    }
  }

  render() {
    const usersList = this.state.users.map((user = {}) => {
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
            <img
              className="c-user__img"
              src={avatar_url}
              alt={name}
              width="300"
            />
          </a>
          <div className="c-user__info">
            <h4 className="c-user__name">
              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
                className="c-user__name-link"
              >
                {name} <span className="c-user__username">{username}</span>
              </a>
            </h4>
            <p className="c-user__bio">{bio}</p>
          </div>
        </div>
      );
    });

    return (
      <>
        {this.state.isLoading && <p>Is loading...</p>}
        {!this.state.errorMsg && (
          <div className="c-users-list">{usersList}</div>
        )}
        {this.state.errorMsg && (
          <>
            <p>{this.state.errorMsg.match(/^[^(]+/)[0]}</p>
            <p>Possible solutions would be:</p>
            <ul>
              <li>to check your internet connection</li>
              <li>
                if that is okay then change your IP using vpn. it will work!
              </li>
            </ul>
          </>
        )}
      </>
    );
  }
}

export default FetchUsers;
