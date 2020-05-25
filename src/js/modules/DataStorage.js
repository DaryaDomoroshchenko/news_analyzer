export default class DataStorage {

  createDataStorage(result, request) {
    localStorage.setItem('news', JSON.stringify(result));
    localStorage.setItem('keyWord', JSON.stringify(request));
  }

  getDataFromStorage() {
    let news = localStorage.getItem('news');
    return JSON.parse(news);
  }

  getkeyWordFromStorage() {
    let keyWord = localStorage.getItem('keyWord');
    return JSON.parse(keyWord);
  }

}
