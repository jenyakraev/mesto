let editButton = document.querySelector(".profile__edit");
let popap = document.querySelector(".popap");
let popapCloseButton = document.querySelector(".popap__close-button");

let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popap__form");
let popapTitle = document.querySelector(".popap__input_type_title");
let popapSubtitle = document.querySelector(".popap__input_type_subtitle");

function closePopap() {
  popap.classList.remove("popap_type_opened");
}

function openPopap() {
  popap.classList.add("popap_type_opened");
  popapTitle.value = profileTitle.textContent;
  popapSubtitle.value = profileSubtitle.textContent;
}

function formSubmitHandler(e) {
  e.preventDefault();

  let popapTitleInput = popapTitle.value;
  let popapSubtitleInput = popapSubtitle.value;

  profileTitle.textContent = popapTitleInput;
  profileSubtitle.textContent = popapSubtitleInput;

  closePopap();
}

formElement.addEventListener("submit", formSubmitHandler);

editButton.addEventListener("click", openPopap);

popapCloseButton.addEventListener("click", closePopap);