export default class NewsCard {

  constructor() {
  }

  createNewsCard(article) {
    const newsCard = document.createElement('a');
    newsCard.classList.add("news-card");
    newsCard.setAttribute('href', `${article.url}`);
    newsCard.setAttribute('target', '_blank');

    newsCard.insertAdjacentHTML(
      'afterbegin',
      `<div class="news-card__background-image"></div>
      <div class="news-card__card-content">
        <div class="news-card__wrap">
          <p class="news-card__date"></p>
          <h3 class="news-card__title"></h3>
          <p class="news-card__text"></p>
        </div>
        <p class="news-card__source"></p>
      </div>`
    );

    newsCard.querySelector(".news-card__background-image").style.backgroundImage = `url(${article.urlToImage})`;
    newsCard.querySelector(".news-card__title").textContent = article.title;
    newsCard.querySelector(".news-card__text").textContent = article.description;
    newsCard.querySelector(".news-card__source").textContent = article.source.name;

    const initialDate = article.publishedAt;
    const date = new Date(`${initialDate}`);
    const fullDate = date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    // console.log(fullDate);
    const dateArray = fullDate.split(' ');
    // console.log(dateArray);
    const correctDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;
    // console.log(correctDate);
    newsCard.querySelector(".news-card__date").textContent = correctDate;

    return newsCard;
  }
}
