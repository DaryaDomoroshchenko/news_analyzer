export default class NewsCardList {

  constructor(createNewsCard, newsContainer, dataStorage, searchForm, showMoreButton, ADDED_NEWS_NUMBER) {

    this.createNewsCard = createNewsCard;
    this.newsContainer = newsContainer;
    this.dataStorage = dataStorage;
    this.searchForm = searchForm;
    this.showMoreButton = showMoreButton;
    this.ADDED_NEWS_NUMBER = ADDED_NEWS_NUMBER;
    this._setsOfNewsCounter = this.ADDED_NEWS_NUMBER;
    this._newsCounter = 0;

    this.showMoreButton.addEventListener('click', this.showMoreNews.bind(this));
    this.searchForm.addEventListener('submit', this.resetCounters.bind(this));
  }

  // Загружает первые 3 карточки
  showNews(articles) {
    this.clearCardList();
    this.showMoreButton.classList.remove('root__hide');

    for (let i = 0; i < this.ADDED_NEWS_NUMBER; i++) {

      let newsCardElem = this.createNewsCard(articles[i]);
      let newsCard = newsCardElem.createNewsCard(articles[i]);

      this.addNewsCard(newsCard);
      this._newsCounter++;

      if (this._newsCounter === articles.length) {
        this.showMoreButton.classList.add('root__hide');
        break;
      };
    }
  }

  // Загружает +3 карточки при нажатии на кнопку "Показать еще"
  showMoreNews() {
    const articlesFromStorage = this.dataStorage.getDataFromStorage().articles;

    for (let i = this._setsOfNewsCounter; i < (this._setsOfNewsCounter + this.ADDED_NEWS_NUMBER); i++) {

      if (this._newsCounter === articlesFromStorage.length) {
        this.showMoreButton.classList.add('root__hide');
        break;
      };

      let newsCardElem = this.createNewsCard(articlesFromStorage[i]);
      let newsCard = newsCardElem.createNewsCard(articlesFromStorage[i]);

      this.addNewsCard(newsCard);
      this._newsCounter++;
    }

    this._setsOfNewsCounter += this.ADDED_NEWS_NUMBER;

    if (this._newsCounter === articlesFromStorage.length) {
      this.showMoreButton.classList.add('root__hide');
    };
  }

  // Сбрасывает счетчики
  resetCounters() {
    this._setsOfNewsCounter = this.ADDED_NEWS_NUMBER;
    this._newsCounter = 0;
  }

  // Добавляет карточку в список
  addNewsCard(newsCard) {
    this.newsContainer.appendChild(newsCard);
  }

  // Очищает контейнер с карточками
  clearCardList() {
    while (this.newsContainer.firstChild) {
      this.newsContainer.removeChild(this.newsContainer.firstChild);
    };
  }
}
