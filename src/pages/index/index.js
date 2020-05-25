import './index.css';
import FormValidator from '../../js/utils/FormValidator.js';
import SearchInput from '../../js/components/SearchInput.js';
import NewsCard from '../../js/components/NewsCard.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import NewsApi from '../../js/modules/NewsApi.js';
import DataStorage from '../../js/modules/DataStorage.js';
import {
  URL_NEWS_API,
  PROXY_NEWS_API,
  KEY_NEWS_API,
  PAGE_SIZE_NEWS_API,
  LANGUAGE_NEWS_API,
  ADDED_NEWS_NUMBER
} from '../../js/constants/constants.js';

const resultsSection = document.querySelector('.results');
const searchForm = document.querySelector('.search__input-container');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const showMoreButton = document.querySelector('.results__button');
const newsContainer = document.querySelector('.cardlist');
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.not-found');
const error = document.querySelector('.error');

const validateForm = new FormValidator(searchForm, searchInput, searchButton);
validateForm.setEventListeners();

const newsApi = new NewsApi(
  URL_NEWS_API,
  PROXY_NEWS_API,
  KEY_NEWS_API,
  PAGE_SIZE_NEWS_API,
  LANGUAGE_NEWS_API
);

const dataStorage = new DataStorage();

const createNewsCard = (article) => new NewsCard(article);

const newsCardList = new NewsCardList(
  createNewsCard,
  newsContainer,
  dataStorage,
  searchForm,
  showMoreButton,
  ADDED_NEWS_NUMBER
);

// Отрисовывает карточки с новостями при submit
function render() {
  event.preventDefault();

  localStorage.clear();
  preloader.classList.remove('root__hide');
  resultsSection.classList.add('root__hide');
  notFound.classList.add('root__hide');
  error.classList.add('root__hide');
  validateForm.makeFormDisabled();

  newsApi.getNews(searchInput.value)
    .then((result) => {
      validateForm.makeFormActive();

      if (result.articles.length === 0) {
        preloader.classList.add('root__hide');
        notFound.classList.remove('root__hide');
      }
      else {
        resultsSection.classList.remove('root__hide');
        newsCardList.showNews(result.articles);
        dataStorage.createDataStorage(result, searchInput.value);
        preloader.classList.add('root__hide');
      };
    })
    .catch((err) => {
      console.log(err);
      error.classList.remove('root__hide');
      preloader.classList.add('root__hide');
      validateForm.makeFormActive();
    });
}

const searchInputHandler = new SearchInput(searchForm, render).setSubmitListener();

// Отрисовывает карточки с новостями при обновлении страницы
function showNewsCardsAfterReloading() {
  const newsFromStorage = dataStorage.getDataFromStorage();
  const keyWordFromStorage = dataStorage.getkeyWordFromStorage();

  if (newsFromStorage !== null) {
    resultsSection.classList.remove('root__hide');
    newsCardList.showNews(newsFromStorage.articles);
    searchInput.value = keyWordFromStorage;
  }
}

showNewsCardsAfterReloading();
