import DateConverter from '../../js/utils/DateConverter.js';

export default class NewsApi {

  constructor(URL_NEWS_API, PROXY_NEWS_API, KEY_NEWS_API, PAGE_SIZE_NEWS_API, LANGUAGE_NEWS_API) {
    this.URL_NEWS_API = URL_NEWS_API;
    this.PROXY_NEWS_API = PROXY_NEWS_API;
    this.KEY_NEWS_API = KEY_NEWS_API;
    this.PAGE_SIZE_NEWS_API = PAGE_SIZE_NEWS_API;
    this.LANGUAGE_NEWS_API = LANGUAGE_NEWS_API;
  }

  getNews(keyWord) {
    const {dateFrom, dateTo} = DateConverter.getDatesForApiReq();

    return fetch(
      `${this.PROXY_NEWS_API}` +
      `${this.URL_NEWS_API}?` +
      `q=${keyWord}&` +
      `from=${dateFrom}&` +
      `to=${dateTo}&` +
      `pageSize=${this.PAGE_SIZE_NEWS_API}&` +
      `language=${this.LANGUAGE_NEWS_API}&` +
      `apiKey=${this.KEY_NEWS_API}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };
}
