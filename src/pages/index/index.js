import './index.css';
import FormValidator from '../../js/utils/FormValidator.js';
import NewsApi from '../../js/modules/NewsApi.js';
import NewsCard from '../../js/components/NewsCard.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import DataStorage from '../../js/modules/DataStorage.js';
import {
  sevenDays,
  threeCards,
} from '../../js/constants/constants.js';

/* Переменные */
const searchForm = document.querySelector(".search__input-container");
const searchInput = document.querySelector(".search__input");
const newsContainer = document.querySelector(".cardlist");

/* Инстансы */

const validateForm = new FormValidator(searchForm, searchInput);
validateForm.setEventListeners();

const newsApi = new NewsApi(searchInput, sevenDays);
// newsApi.getNews();

const newsCard = new NewsCard();

const newsCardList = new NewsCardList(
  newsApi,
  newsCard,
  searchForm,
  newsContainer
);
// newsCardList.render();

const dataStorage = new DataStorage();


