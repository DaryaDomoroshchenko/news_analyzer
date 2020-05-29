export default class FormValidator {

  constructor(searchForm, searchInput, searchButton) {
    this.searchForm = searchForm;
    this.searchInput = searchInput;
    this.searchButton = searchButton;
    this.error = this.searchForm.querySelector('.search__error-message');
  }

  // Валидация поля ввода
  checkInputValidity() {
    if (this.searchInput.validity.valueMissing) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else if (this.searchInput.validity.tooShort) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else if (this.searchInput.validity.patternMismatch) {
      this.searchInput.setCustomValidity('Нужно ввести ключевое слово');

    } else {
      this.searchInput.setCustomValidity('');
    }

    this.error.textContent = this.searchInput.validationMessage;
  }

  // Делает кнопку сабмита активной и неактивной
  setSubmitButtonState() {
    if (!this.searchForm.checkValidity()) {
      this.searchButton.setAttribute('disabled', true);

    } else {
      this.searchButton.removeAttribute('disabled');
    }
  }

  // Добавляет обработчики
  setEventListeners() {
    this.searchInput.addEventListener('input', this.checkInputValidity.bind(this));

    this.searchForm.addEventListener('input', () => {
      this.checkInputValidity(event.target);
      this.setSubmitButtonState(event.target)
    });
  }

  makeFormDisabled() {
    this.searchInput.setAttribute('disabled', true);
    this.searchButton.setAttribute('disabled', true);
  }

  makeFormActive() {
    this.searchInput.removeAttribute('disabled');
    this.searchButton.removeAttribute('disabled');
  }
};
