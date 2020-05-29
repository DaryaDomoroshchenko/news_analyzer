export default class DataStorage {

  createDataStorage(result, request) {
    localStorage.setItem('news', JSON.stringify(result));
    localStorage.setItem('keyWord', JSON.stringify(request));
  }

  getDataFromStorage() {
    const news = localStorage.getItem('news');
    return JSON.parse(news);
  }

  getkeyWordFromStorage() {
    const keyWord = localStorage.getItem('keyWord');
    return JSON.parse(keyWord);
  }

}
