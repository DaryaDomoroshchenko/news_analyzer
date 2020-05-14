export default class NewsCardList {

  constructor(newsApi, newsCard, searchForm, newsContainer) {
    this.newsApi = newsApi;
    this.newsCard = newsCard;
    this.searchForm = searchForm;
    this.newsContainer = newsContainer;

    // обработчик submit
    this.searchForm.addEventListener('submit', this.render.bind(this));
  }

  render() {
    event.preventDefault();
    this.newsApi.getNews()
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        /* const firstArticle = result.articles[0];
        console.log(firstArticle); */
        const threeArticles = result.articles.slice(0, 3);
        console.log(threeArticles);

        for (let i = 0; i < threeArticles.length; i++) {
          let newsCard = this.newsCard.createNewsCard(result.articles[i]);
          console.log(newsCard);
          this.addNewsCard(newsCard);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Добавляет карточку в список
  addNewsCard(newsCard) {
    this.newsContainer.appendChild(newsCard);
    console.log('addNewsCard()');
  }

}
