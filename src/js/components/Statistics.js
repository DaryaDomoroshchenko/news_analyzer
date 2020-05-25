import DateConverter from '../utils/DateConverter.js';

export default class Statistics {

  constructor(dataStorage) {
    this.dataStorage = dataStorage;
  }

  createDiagramRow(date, number) {
    const diagramRow = document.createElement('div');
    diagramRow.classList.add('diagram__row');

    diagramRow.insertAdjacentHTML(
      'afterbegin',
      `<p class="diagram__row-day"></p>
      <div class="diagram__rows-wrap">
        <div class="diagram__colored-block">
          <p class="diagram__number"></p>
        </div>
      </div>`
    );

    diagramRow.querySelector('.diagram__row-day').textContent = date;
    diagramRow.querySelector('.diagram__number').textContent = number;
    diagramRow.querySelector('.diagram__colored-block').setAttribute('style', `width: ${number}%`);

    return diagramRow;
  }
}
