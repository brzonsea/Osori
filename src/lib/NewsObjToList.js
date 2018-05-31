const NewsObjToList = (newsObj) => {
  const newsDates = Object.keys(newsObj);
  const newsList = newsDates.map((date) => {
    return {
      [date]: {
        news: newsObj[date]
      }
    }
  });
  // 최신순
  newsList.sort((a, b) => { return Object.keys(b)[0] - Object.keys(a)[0] });
  return newsList;
}

export default NewsObjToList;
