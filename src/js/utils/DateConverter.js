import {DAYS_AGO_NUMBER} from '../constants/constants.js';

export default class DateConverter {

  // Конвертирует даты в формат "дата месяц, год"
  static сardDateConverter(newsDate) {
    const initialDate = new Date(newsDate);
    const fullDate = initialDate.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const dateArray = fullDate.split(' ');
    const correctDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;

    return correctDate;
  }

  // Конвертирует даты в формат, необходимый для запроса к Api
  static getDatesForApiReq() {
    const currentDate = new Date();
    const dateWeekAgo = new Date(currentDate);
    dateWeekAgo.setDate(currentDate.getDate() - DAYS_AGO_NUMBER + 1);
    const dateTo = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const dateFrom = `${dateWeekAgo.getFullYear()}-${dateWeekAgo.getMonth() + 1}-${dateWeekAgo.getDate()}`;

    return {dateFrom, dateTo};
  }

  // Возвращает название месяца
  static getMonthForAnalitics() {
    const currentDate = new Date();
    const dateWeekAgo = new Date(currentDate);
    dateWeekAgo.setDate(currentDate.getDate() - DAYS_AGO_NUMBER + 1);
    const month = dateWeekAgo.toLocaleString('ru', {
      month: 'long',
    });

    return month;
  }

  // Возвращает массив дат в формате "дата, день недели"
  static getDaysForDiagram() {
    const datesArr = [];
    const correctDatesArr = [];
    const currentDate = new Date();

    for (let i = 0; i < DAYS_AGO_NUMBER; i++) {
      const dateCopy = new Date(currentDate);
      dateCopy.setDate(currentDate.getDate() - i);
      datesArr.unshift(dateCopy);
    }

    datesArr.forEach((date) => {
      const correctDateAndWeek = DateConverter.convertDateToDiagram(date);
      correctDatesArr.push(correctDateAndWeek);
    });

    return correctDatesArr;
  }

  // Конвертирует даты в формат "дата, день недели"
  static convertDateToDiagram(unConvertedDate) {
    const convertedDate = new Date(unConvertedDate);
    const dateAndWeekDay = convertedDate.toLocaleString('ru', {
      day: 'numeric',
      weekday: 'short',
    });
    const dateAndWeekDayArray = dateAndWeekDay.split(', ');
    const correctDate = `${dateAndWeekDayArray[1]}, ${dateAndWeekDayArray[0]}`;

    return correctDate;
  }

  // Конвертирует даты в универсальный для сравнения формат
  static convertDateForComparison(unConvertedDate) {
    const convertedDate = new Date(unConvertedDate).toDateString();

    return convertedDate;
  }

}
