import './about.css';
import Swiper from '../../../node_modules/swiper/js/swiper';
import SwiperParams from '../../js/utils/SwiperParams.js';
import CommitCard from '../../js/components/CommitCard.js';
import CommitCardList from '../../js/components/CommitCardList.js';
import GithubApi from '../../js/modules/GithubApi.js';
import {
  URL_GITHUB_API,
  COMMITS_NUMBER
} from '../../js/constants/constants.js';

const commitsContainer = document.querySelector('.commit-cardlist');

const githubApi = new GithubApi(URL_GITHUB_API);

const createCommitCard = (commit) => new CommitCard(commit);

const commitCardList = new CommitCardList(
  createCommitCard,
  commitsContainer,
  COMMITS_NUMBER
);

// Отрисовывает карточки с коммитами
function render() {
  githubApi.getCommits()
    .then((result) => {
      commitCardList.showCommits(result);
      const swiper = new Swiper (SwiperParams.getSwiperContainer(), SwiperParams.getSwiperParams());
    })
    .catch((err) => {
      console.log(err);
    });
};

render();




















/* var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  freeMode: true,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 1440px
    1440: {
      spaceBetween: 16,
      slidesPerGroup: 2
    },
    // when window width is >= 768px
    768: {
      spaceBetween: 8,
      slidesPerGroup: 1
    },
    // when window width is >= 320px
    320: {
      spaceBetween: 8,
      slidesPerGroup: 1
    }
  }
}); */
