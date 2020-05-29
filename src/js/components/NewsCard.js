import DateConverter from '../../js/utils/DateConverter.js';

export default class NewsCard {

  createNewsCard(article) {
    const newsCard = document.createElement('a');
    newsCard.classList.add('news-card');
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

    newsCard.querySelector('.news-card__background-image').style.backgroundImage = `url(${article.urlToImage})`;
    newsCard.querySelector('.news-card__title').textContent = article.title;
    newsCard.querySelector('.news-card__source').textContent = article.source.name;

    const dateToConvert = article.publishedAt;
    const newsDate = DateConverter.сardDateConverter(dateToConvert);
    newsCard.querySelector('.news-card__date').textContent = newsDate;

    const regex = new RegExp('(<[\/a-z0-9]+>)|(https?:\/\/[^\s]+\.[a-z]{2,}(\.[a-z]{2,})?)', 'gi');

    if (article.description !== null) {
      const validatedDescription = article.description.replace(regex, '');
      newsCard.querySelector('.news-card__text').textContent = validatedDescription;
    }
    else {
      const validatedDescription = article.description;
      newsCard.querySelector('.news-card__text').textContent = validatedDescription;
    }

    return newsCard;
  }
}
