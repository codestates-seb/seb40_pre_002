import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import pencil from '../../images/pencil.png';
import stack from '../../images/stackimg.png';
import wing from '../../images/wing.png';
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

          <li className="body">
            <li className="icon">
              <img alt="pencil" src={pencil} />
            </li>
            <li className="text">
              <a href="http://localhost:3001/">
                DIY mad science…it’s all about homelabbing !
              </a>
            </li>
          </li>

          <li className="header">Featured on Meta</li>

          <li className="body">
            <div className="icon-wing">
              <img alt="wing" src={wing} />
            </div>
            <div className="text">
              <a href="http://localhost:3001/">
                The 2022 Community-a-thon has begun!
              </a>
            </div>
          </li>
          <li className="body">
            <div className="icon-wing">
              <img alt="wing" src={wing} />
            </div>
            <div className="text">
              <a href="http://localhost:3001/">
                Mobile app infrastructure being decommissioned
              </a>
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
              <a href="http://localhost:3001/">
                Does the JPEG tag cover only legacy JPEG or all related formats?
              </a>
            </div>
          </li>
        </Sidebar1>
      </Right>
      <Outlet />
    </>
  );
};

const Right = styled.aside`
  position: fixed;
  margin-left: 67vw;
  min-width: 30vw;
  margin-top: 165px;
  height: 100vh;
`;

const Sidebar1 = styled.div`
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
export default AsideRight;
