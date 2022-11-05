import moment from "moment";

// asked, modified, answered 
// 매개변수 (timeObj: any)

// interface datesInterface {
//   createdAt: string|undefined,
//   modifiedAt: string|undefined,
//   createdAnsweredAt: string|undefined,
//   modifiedAnsweredAt: string|undefined
// }

export const getLatestTime = (timeObj: any) => {

  // string | undefined로 이루어진 배열 dates 선언
  const dates: (string | undefined)[] = [];

  // 배열 dates에 timeObj의 key값들을 넣는다.
  for (const key in timeObj) {
    dates.push(timeObj[key]);
  }

  // newDates : dates 배열 중, string만 필터링
  const newDates: string[] = dates.filter((e) => typeof e === 'string') as string[];

  // latesUtc : newDates 중, 가장 최근 날짜 리턴
  const latestUtc = newDates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

  // latestDate : 가장 최근 날짜를 형식에 맞춰서 보여줌
  const latestDate = new Date(latestUtc).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // 가장 최근시간과 일치하는 keyword 추출
  let keyWord = getKeywords(latestUtc, timeObj)

  // 키워드별 화면에 표시되는 단어 매칭
  switch (keyWord) {
    case "createdAt":
      keyWord = "asked"
      break;
    case "modifiedAt":
      keyWord = "modified"
      break;
    case "createdAnsweredAt":
      keyWord = "answered"
      break;
    case "modifiedAnsweredAt":
      keyWord = "answered"
      break;
  }

  // return date if the date is past more than 48 hours, 
  // if not, return the time difference from the current date, in a formatted way such as stackoverflow

  // now : 현재 시간
  const now = moment();

  // latestUtcFormat 가장 최근시간 moment 형식으로 formatting
  const latestUtcMoment = moment(latestUtc);
  const latestUtcFormat = latestUtcMoment.format();

  // 단위 별 현재날짜와 최근시간과의 차이들 변수로 선언
  const days = now.diff(latestUtcFormat,"days");
  const hours = now.diff(latestUtcFormat,"hours");
  const minutes = now.diff(latestUtcFormat,"minutes");
  const seconds = now.diff(latestUtcFormat,"seconds");

  let filteredlatestDate;

  if(days > 2){
    filteredlatestDate = latestDate;
  } 
  else if(hours > 24){
    filteredlatestDate = `${days} days ago`;
  } 
  else if(minutes > 60){
    filteredlatestDate = `${hours} hours ago`;
  } 
  else if(seconds > 60){
    filteredlatestDate = `${minutes} minutes ago`;
  } 
  else {
    filteredlatestDate = `${seconds} seconds ago`;
  }

  return { filteredlatestDate, keyWord }
};

// export const timeObj = {
//   createdAt: '2022-10-24 00:00:01',
//   modifiedAt: '2022-10-31 22:22:22',
//   createdAnsweredAt: '2022-10-25 00:00:00',
//   modifiedAnsweredAt: null,
// };

// getLatestTime(timeObj);

// latestUtc와 timeObj를 받아서 timeObj의 key들 중, latestUtc(가장 최근 시간)과 일치하는 시간이 있으면 최근시간과 일치하는 key값을 리턴함.
function getKeywords(latestUtc: string, timeObj: any) {
  let val = "";
  for (const key in timeObj) {
    if (timeObj[key] === latestUtc) {
      val = key;
    }
  }
  return val;
}
