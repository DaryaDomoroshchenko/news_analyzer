export default class NewsApi {

  constructor(searchInput, sevenDays) {
    this.searchInput = searchInput;
    this.sevenDays = sevenDays;
  }

  getDateWeekAgo(currentDate, days) {
    const dateCopy = new Date(currentDate);
    dateCopy.setDate(currentDate.getDate() - days);
    return dateCopy;
  }

  getNews() {
    console.log('getNews()');
    const currentDate = new Date();
    const dateWeekAgo = this.getDateWeekAgo(currentDate, this.sevenDays);
    const dateTo = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    // console.log(dateTo);
    const dateFrom = `${dateWeekAgo.getFullYear()}-${dateWeekAgo.getMonth() + 1}-${dateWeekAgo.getDate()}`;
    // console.log(dateFrom);

    return fetch(
      'http://newsapi.org/v2/everything?' +
      `q=${this.searchInput.value}&` +
      // `q=природа&` +
      `from=${dateFrom}&` +
      `to=${dateTo}&` +
      // 'pageSize=100&' +
      'pageSize=25&' +
      'sortBy=relevancy&' +
      'apiKey=796fafb2a8354017a5435efcf2076cfa'
    )
  };
}
