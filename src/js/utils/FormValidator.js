export default class FormValidator {

  constructor(searchForm, searchInput) {
    this.searchForm = searchForm;
    this.searchInput = searchInput;
    this.searchButton = searchForm.querySelector('.search__button');
  }

  // Показывает ошибку, если кнопка нажата при пустом поле
  /* showError() {
    console.log('showError()');

    event.preventDefault();
    this.searchButton.setAttribute('disabled', true);

    const error = this.searchForm.querySelector(".search__error-message");

    if (this.searchInput.validity.valueMissing) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');
    }

    error.textContent = this.searchInput.validationMessage;
  } */

  // Валидация поля ввода
  checkInputValidity() {
    // console.log('checkInputValidity()');

    const error = this.searchForm.querySelector(".search__error-message");

    if (this.searchInput.validity.valueMissing) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else if (this.searchInput.validity.tooShort) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else if (this.searchInput.validity.patternMismatch) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else {
      this.searchInput.setCustomValidity('');
    }

    error.textContent = this.searchInput.validationMessage;
  }

  // Делает кнопку сабмита активной и неактивной
  setSubmitButtonState() {
    // console.log('setSubmitButtonState()');

    if (!this.searchForm.checkValidity()) {
      this.searchButton.setAttribute('disabled', true);

    } else {
      this.searchButton.removeAttribute('disabled');
    }
  }

  // Добавляет обработчики
  setEventListeners() {
    // console.log('setEventListeners()');

    this.searchInput.addEventListener('input', this.checkInputValidity.bind(this));

    this.searchForm.addEventListener('input', () => {
      this.checkInputValidity(event.target);
      this.setSubmitButtonState(event.target)
    });

    // this.searchButton.addEventListener('click', this.showError.bind(this));
  }
};
