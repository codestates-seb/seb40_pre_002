import styled from 'styled-components';
import pencil from '../../images/pencil.png';
import stack from '../../images/stackimg.png';
import wing from '../../images/wing.png';
import { ReactComponent as Spotsearch } from '../../images/spotsearch.svg';

const AsideRight = () => {
  return (
    <>
      <Right>
        <Sidebar1>
          <li className="header">The Overflow Blog</li>
          <li className="body">
            <div className="icon">
              <img alt="pencil" src={pencil} />
            </div>
            <div className="text">
              Flutter vs. React Native: Which is the right cross-platform
              framework for you?{' '}
            </div>
          </li>

          <ul className="body">
            <li className="icon">
              <img alt="pencil" src={pencil} />
            </li>
            <li className="text">
              DIY mad science…it’s all about homelabbing !
            </li>
          </ul>

          <li className="header">Featured on Meta</li>

          <li className="body">
            <div className="icon-wing">
              <img alt="wing" src={wing} />
            </div>
            <div className="text">The 2022 Community-a-thon has begun!</div>
          </li>
          <li className="body">
            <div className="icon-wing">
              <img alt="wing" src={wing} />
            </div>
            <div className="text">
              Mobile app infrastructure being decommissioned
            </div>
          </li>
          <li className="body">
            <div className="icon-stackoverflow">
              <img alt="stacklogo" src={stack} />
            </div>
            <div className="text">
              <a href="http://localhost:3001/">
                The Ask Wizard (2022) has graduated
              </a>
            </div>
          </li>
          <li className="body">
            <div className="icon-stackoverflow">
              <img alt="stacklogo" src={stack} />
            </div>
            <div className="text">
              <a href="http://localhost:3001/">
                Staging Ground Workflow: Canned Comments
              </a>
            </div>
          </li>
          <li className="body">
            <div className="icon-stackoverflow">
              <img alt="stacklogo" src={stack} />
            </div>
            <div className="text">
              <a href="http://localhost:3001/">
                2022 Moderator Election Q&A – Question Collection
              </a>
            </div>
          </li>

          <li className="header">Hot Meta Posts</li>

          <li className="body">
            <div className="num">12</div>
            <div className="text">
              Does the JPEG tag cover only legacy JPEG or all related formats?
            </div>
          </li>
        </Sidebar1>

        <Sidebarwidget2>
          <div className="header">Custom Filters</div>
          <ul>
            <li>
              <a href="http://localhost:3001/">Create a custom filter</a>
            </li>
          </ul>
        </Sidebarwidget2>
        <Sidebarwidget3>
          <div className="header">Watched Tags</div>
          <div className="body">
            <div className="container">
              <div className="icon-spotsearch">
                <Spotsearch width="48" height="48" fill="#0a95ff"></Spotsearch>
              </div>
              <p>Watch tags to curate your list of questions.</p>
              <div className="button">
                <button>Watch a tag</button>
              </div>
            </div>
          </div>
        </Sidebarwidget3>
      </Right>
    </>
  );
};

const Right = styled.aside`
  position: absolute;

  min-width: 30vw;
  margin-top: 100px;
  height: 100vh;
  @media only screen and (max-width: 1500px) {
    display: none;
    background-color: black;
  }
`;

const Sidebar1 = styled.div`
  position: relative;
  list-style: none;
  background-color: #fdf7e2;
  width: 19rem;

  border: 1px solid hsl(47, 65%, 84%);
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;
  border-radius: 3px;

  .header {
    background-color: #fbf3d5;
    border-top: 1px solid hsl(47, 65%, 84%);
    border-bottom: 1px solid hsl(47, 65%, 84%);
    color: #525960;
    font-size: 12px;
    font-weight: 700;
    padding: 12px 15px;
  }

  .body {
    background-color: #fdf7e2;
    list-style: none;
    color: #232629;
    font-size: 13px;
    margin: 12px 0px;
    padding: 0px 16px;
    display: flex;
  }

  .text {
    padding-left: 0.4rem;
    line-height: 1.1rem;
  }

  img {
    width: 17px;
    height: 17px;
  }
  li .icon-wing img {
    width: 25px;
    margin-left: 0;
    height: 25px;
  }

  li .icon-stackoverflow img {
    width: 25px;
    height: 25px;
    padding-left: 0.1rem;
  }

  li .num {
    width: 13px;
    height: 13px;
    padding-left: 0.2rem;
    color: #525960;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Sidebarwidget2 = styled.div`
  width: 19rem;
  margin-top: 18px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }
  ul {
    list-style: none;
    padding: 2px 15px;
  }

  li {
    font-size: 13px;
    font-weight: 500;
    color: #0074cc;

    &:hover {
      font-weight: 500;
      color: #0a95ff;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Sidebarwidget3 = styled.div`
  width: 19rem;
  margin-top: 20px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding-left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 6px 0px;

  .img {
    width: '20px';
    height: '48px';
  }
  .header {
    padding: 12px 15px;
    font-size: 15px;
    background-color: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
    font-weight: 500;
    color: #525960;
  }

  .body {
    padding: 16px 15px;
  }

  .container {
    .icon-spotsearch {
      text-align: center;
    }

    p {
      color: #6a737c;
      font-size: 13px;
      margin: 14px 12px 11px 12px;
      text-align: center;
    }

    .button {
      width: 6rem;
      height: 35px;
      outline: 0;
      border: 0;
      margin: auto;
      padding: 9.5px 9.5px 0 9.5px;
      font-size: 12px;
    }
  }
`;
export default AsideRight;
