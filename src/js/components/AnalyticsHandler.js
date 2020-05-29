import DateConverter from '../utils/DateConverter.js';

export default class AnalyticsHandler {

  constructor(dataStorage, requestField, totalNewsNumber, mentionsNewsNumber, diagramMonth, HUNDRED_PERCENT) {
    this.dataStorage = dataStorage;
    this.requestField = requestField;
    this.totalNewsNumber = totalNewsNumber;
    this.mentionsNewsNumber = mentionsNewsNumber;
    this.diagramMonth = diagramMonth;
    this.HUNDRED_PERCENT = HUNDRED_PERCENT;
  }

  // Показывает ключевое слово, общее количество запросов
  // и количество упоминаний в заголовках
  showAnalytics() {
    const keyWord = this.dataStorage.getkeyWordFromStorage();
    const convertedWord = keyWord.substr(0,1).toUpperCase() + keyWord.substr(1).toLowerCase();
    this.requestField.textContent = `Вы спросили: «${convertedWord}»`;

    const news = this.dataStorage.getDataFromStorage();
    const totalResults = news.totalResults;
    this.totalNewsNumber.textContent = totalResults;

    const mentions = news.articles.filter((article) =>
      article.title.toLowerCase().includes(keyWord.toLowerCase())
    );

    this.mentionsNewsNumber.textContent = mentions.length;
  }

  // Показывает месяц в шапке диаграммы
  showMonth() {
    const month = DateConverter.getMonthForAnalitics();
    this.diagramMonth.textContent = `(${month})`;
  }

  // Возвращает даты в строках диаграммы
  showDates() {
    const datesArr = DateConverter.getDaysForDiagram();
    return datesArr;
  }

  // Считает количество упоминаний в заголовках и описании
  countMentions() {
    const groupedArticles = this.groupNews();
    const keyWord = this.dataStorage.getkeyWordFromStorage();
    const regex = new RegExp(keyWord, 'gi');

    groupedArticles.forEach((group) => {
      const concatedText = group.text.reduce((prevArt, art) => {
        return prevArt.concat(art);
      });
      const result = concatedText.match(regex) || [];
      const numberOfMensions = result.length;
      group.mentions = numberOfMensions;
    });

    return groupedArticles;
  }

  // Группирует массив с новостями по датам публикации
  groupNews() {
    const news = this.dataStorage.getDataFromStorage();
    const articlesArr = news.articles;
    const groups = [];

    for (let article of articlesArr) {
      const existingGroups = groups.filter((group) =>
        DateConverter.convertDateForComparison(group.publishedAt) ===
          DateConverter.convertDateForComparison(article.publishedAt));

      if (existingGroups.length > 0) {
        existingGroups[0].text.push(article.title, article.description);
      }
      else {
        const newGroup = {
          publishedAt: article.publishedAt,
          text: [article.title, article.description]
        };
        groups.push(newGroup);
      }
    }

    groups.sort(function(a, b){
      const dateA = new Date(a.publishedAt), dateB = new Date(b.publishedAt);
      return dateA - dateB;
    })

    groups.forEach(group => {
      group.publishedAt = DateConverter.convertDateToDiagram(group.publishedAt);
    });

    return groups;
  }

  countPercentageOfMentions() {
    let totalMentions = 0;
    const groupedArticles = this.countMentions();

    for (let articlesGroup of groupedArticles) {
      totalMentions += articlesGroup.mentions;
    }

    for (let articlesGroup of groupedArticles) {
      const percentageOfMentions = articlesGroup.mentions * this.HUNDRED_PERCENT / totalMentions;
      articlesGroup.percentageOfMentions = Math.round(percentageOfMentions);
    }

    return groupedArticles;
  }
}
