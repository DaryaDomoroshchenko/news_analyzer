import DateConverter from '../../js/utils/DateConverter.js';

export default class CommitCard {

  createCommitCard(commit) {
    const commitCard = document.createElement('div');
    commitCard.classList.add('commit-card', 'swiper-slide');

    commitCard.insertAdjacentHTML(
      'afterbegin',
      `<p class="commit-card__date"></p>
      <div class="commit-card__container">
        <img class="commit-card__image">
        <div class="commit-card__wrap">
          <h4 class="commit-card__name"></h4>
          <p class="commit-card__email"></p>
        </div>
      </div>
      <p class="commit-card__text"></p>`
    );

    const dateToConvert = commit.commit.author.date;
    const commitDate = DateConverter.сardDateConverter(dateToConvert);
    commitCard.querySelector('.commit-card__date').textContent = commitDate;

    commitCard.querySelector('.commit-card__image').style.backgroundImage = `url(${commit.author.avatar_url})`;
    commitCard.querySelector('.commit-card__name').textContent = commit.commit.author.name;
    commitCard.querySelector('.commit-card__email').textContent = commit.commit.committer.email;
    commitCard.querySelector('.commit-card__text').textContent = commit.commit.message;

    return commitCard;
  }
}
