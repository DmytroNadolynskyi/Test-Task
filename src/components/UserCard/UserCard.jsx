import { Component } from 'react';
import css from './UserCard.module.css';
import icon from '../../images/icon.png';
import logo from '../../images/logo.png';
import image from '../../images/image.png';

export class UserCard extends Component {
  state = {
    followers: this.props.followers,
    follow: false,
  };

  componentDidUpdate(prevState) {
    if (prevState.isFollowing !== this.state.follow) {
      localStorage.setItem('follow', JSON.stringify(this.state.follow));
    }
  }

  componentDidMount() {
    const parsedStatus = JSON.parse(localStorage.getItem('follow'));

    if (parsedStatus) {
      this.setState({ isFollowing: parsedStatus });
    }
  }

  onToggle = () => {
    this.setState(prevState => ({
      follow: !prevState.follow,
    }));
  };

  render() {
    return (
      <div className={css.Card}>
        <img src={logo} alt="Logo" className={css.Logo} />
        <img src={image} alt="Background" className={css.Background} />
        <span className={css.Line}></span>
        <div className={css.Avatar}>
          <img src={icon} alt="Avatar" />
        </div>
        <ul>
          <li className={css.Tweets}>777 tweets</li>
          <li className={css.Followers}>
            {this.state.follow
              ? (this.state.followers + 1).toLocaleString('en-US')
              : this.state.followers.toLocaleString('en-US')}{' '}
            followers
          </li>
        </ul>

        <div className={css.BtnContainer}>
          <button
            type="button"
            onClick={this.onToggle}
            className={this.state.follow ? css.BtnActive : css.Btn}
          >
            {this.state.follow ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    );
  }
}
