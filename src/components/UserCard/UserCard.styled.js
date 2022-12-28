import styled from 'styled-components';
export const Card = styled.div`
  width: 454px;
  height: 547px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  position: relative;
  margin: 0 auto;
`;
export const Logo = styled.img`
  width: 88px;
  height: 26px;
  position: absolute;
  left: 5.29%;
  right: 75.33%;
  top: 4.39%;
`;
export const Image = styled.img`
  width: 357px;
  height: 194px;
  margin: 34px 45px 0 52px;
  padding: 0;
`;
export const Button = styled.button`
  width: 226px;
  height: 56px;
  background: #ebd8ff;
  background-color: ${({ FollowStatus }) =>
    FollowStatus ? '#ebd8ff' : '#5cd3a8'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  color: #373737;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  position: absolute;
  left: 114px;
  top: 443px;
  cursor: pointer;
  transition: 250ms;
`;

export const Line = styled.span`
  position: absolute;
  width: 454px;
  height: 8px;
  left: 0px;
  top: 251px;
  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;
export const Icon = styled.div`
  position: absolute;
  left: 181px;
  top: 209px;
`;
export const Tweets = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  margin-top: 105px;
`;
export const Followers = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
  margin-top: 20px;
`;
