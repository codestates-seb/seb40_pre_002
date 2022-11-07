import styled from 'styled-components';
import teams from '../../images/teams.png';
import questionearth_black from '../../images/questionearth_black.png'
import collectives from '../../images/collectives.png'

const DetailAsideLeft = ({ location }: any) => {
  return (
    <>
      <Left>
        <ETCbars>
          <div>Home</div>
          <div className='Public'>Public</div>
          <div className='Questionbar'><img alt='questionearth' src={questionearth_black}/>Questions<Index /></div>
          <div className='Questions_ele'>Tags</div>
          <div className='Questions_ele'>Users</div>
          <div className='Questions_ele'>Companies</div>
          <div>COLLECTIVS</div>
          <div className='Collective'><img alt='collectives' src={collectives}/>Explore Collectives</div>
          <Teams>TEAMS <button className='teamxbtn'>X</button></Teams>
          <div className='teambox'>
            <span className='teamboxtitle'>Stack Overflow for Teams</span><span>- Start collaborating and sharing organizational knowledge.</span>
            <img alt='teams' src={teams} />
            <button className='createteam'>Create a free Team</button>
            <button className='whyteam'>Why Teams?</button>
          </div>
        </ETCbars>
      </Left>
    </>
  );
};

const Left = styled.aside`
  position: absolute;
  left: 0;
  min-width: 22.5vw;
  height: 100vh;
  border-right: solid 1px lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Index = styled.span`
  position: relative;
  left: 48px;
  width: 5px;
  height: 34px;
  background-color: orange;
`;

const ETCbars = styled.div`
  margin-top: 100px;
  width: 150px;
  height: 550px;
  padding-left: 15px;

  .Questionbar {
  font-size: 13px;
  width: 135px;
  height: 34px;
  padding-left: 15px;
  color: black;
  font-weight: bold;
  background-color: #f1f2f3;
  display: flex;
  align-items: center;
  cursor: pointer;
}

  div {
    cursor: pointer;
    font-size: 13px;
    color: gray;
    height: 34px;
    display: flex;
    align-items: center;
  }
  
  .Questions{
    font-weight: bold;
  }

  .Questions_ele{
      font-weight: bold;
      margin-left: 15px;
    }

  .Collective{
      font-weight: bold;
  }

  .teambox {
    padding: 5px;
    border: solid 1px lightgray;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    height: 280px;
    font-weight: bold;

    .teamboxtitle{
      color: black;
    }

    button{
      cursor: pointer;
      font-size: 12px;
      margin-top: 5px;
      width: 120px;
      height: 25px;
      font-weight: bold;
    }

    .createteam{
        background-color: #ff8800;
        box-shadow: 1px 1px 3px 1px #dadce0;
        border-radius: 5px;
        border: none;
        color: white;
      }

      .whyteam{
        background-color: white;
        border: none;
        color: gray;
      }
  }
`

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  .teamxbtn{
    cursor: pointer;
    background-color: white;
    border: 0px;
    color: gray;
    font-weight: bold;
  }
`

export default DetailAsideLeft;
