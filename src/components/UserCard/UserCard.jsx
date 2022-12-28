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
    if (prevState.follow !== this.state.follow) {
      localStorage.setItem('follow', JSON.stringify(this.state.follow));
    }
  }
  
  componentDidMount() {
    const parsedStatus = JSON.parse(localStorage.getItem('follow'));

    if (parsedStatus) {
      this.setState({ follow: parsedStatus });
    }
  }

  onToggle = () => {
    this.setState(prevState => ({
      follow: !prevState.follow,
    }));
  };

  render() {
    const { followers,follow } = this.state;
    return (
      
      <div className={css.UserCard}>
        <img src={logo} alt="Logo" className={css.Logo} />
        <img src={image} alt="Background" className={css.Background} />
        <span className={css.Line}></span>
        <div className={css.Icon}>
          <img src={icon} alt="Avatar" />
        </div>
        <ul>
          <li className={css.Tweets}>777 tweets</li>
          <li className={css.Followers}>
            {follow
              ? (followers + 1).toLocaleString('en-US')
              : followers.toLocaleString('en-US')}{' '}
            followers
          </li>
        </ul>

        <div className={css.BtnContainer}>
          <button
            type="button"
            onClick={this.onToggle}
            className={follow ? css.BtnActive : css.Button}
          >
            {follow ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    );
  }
}
