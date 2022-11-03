// asked, modified, answered 


export const getLatestTime = (dates: Array<string | undefined>) => {
  const newDates: string[] = dates.filter(
    (e) => typeof e !== 'undefined'
  ) as string[];

  const latestUtc = newDates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  )[0];

  const latestDate = new Date(latestUtc).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return [latestDate, latestUtc];
};

