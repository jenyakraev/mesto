/*
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.popup__input-error_${inputElement.id}`
  );
  inputElement.classList.add("popup__input_invalid");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.popup__input-error_${inputElement.id}`
  );
  inputElement.classList.remove("popup__input_invalid");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = function (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-button_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__save-button_disabled");
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__save-button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation();
*/

const myObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};

const showInputError = (formElement, inputElement, errorMessage, myObj) => {
  const errorElement = formElement.querySelector(
    `.popup__input-error_${inputElement.id}`
  );
  inputElement.classList.add(myObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(myObj.errorClass);
};

const hideInputError = (formElement, inputElement, myObj) => {
  const errorElement = formElement.querySelector(
    `.popup__input-error_${inputElement.id}`
  );
  inputElement.classList.remove(myObj.inputErrorClass);
  errorElement.classList.remove(myObj.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, myObj) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      myObj
    );
  } else {
    hideInputError(formElement, inputElement, myObj);
  }
};

const hasInvalidInput = function (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, myObj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(myObj.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(myObj.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, myObj) => {
  const inputList = Array.from(
    formElement.querySelectorAll(myObj.inputSelector)
  );
  const buttonElement = formElement.querySelector(myObj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, myObj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, myObj);
      toggleButtonState(inputList, buttonElement, myObj);
    });
  });
};

function enableValidation(myObj) {
  const formList = Array.from(document.querySelectorAll(myObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, myObj);
  });
}

enableValidation(myObj);
