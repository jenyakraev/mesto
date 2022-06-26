const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const editButton = document.querySelector(".profile__edit");
const popapEdit = document.querySelector(".popap_edit");
const popapEditCloseButton = document.querySelector(
  ".popap__close-button_edit"
);
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popapFormEdit = document.querySelector(".popap__form_edit");
const popapInputTitle = document.querySelector(".popap__input_title");
const popapInputSubtitle = document.querySelector(".popap__input_subtitle");

//Закрытие попапа профиля
function closePopapEdit() {
  popapEdit.classList.remove("popap_opened");
}

//Открытие попапа профиля
function openPopapEdit() {
  popapEdit.classList.add("popap_opened");
  popapInputTitle.value = profileTitle.textContent;
  popapInputSubtitle.value = profileSubtitle.textContent;
}

//Сохранение попапа профиля
function formSubmitHandler(e) {
  e.preventDefault();
  profileTitle.textContent = popapInputTitle.value;
  profileSubtitle.textContent = popapInputSubtitle.value;
  closePopapEdit();
}

popapFormEdit.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", openPopapEdit);
popapEditCloseButton.addEventListener("click", closePopapEdit);

const addButton = document.querySelector(".profile__add");
const popapAdd = document.querySelector(".popap_add");
const popapAddCloseButton = document.querySelector(".popap__close-button_add");

//Закрытие попапа добавления
function closePopapAdd() {
  popapAdd.classList.remove("popap_opened");
}

//Открытие попапа добавления
function openPopapAdd() {
  popapAdd.classList.add("popap_opened");
}

addButton.addEventListener("click", openPopapAdd);
popapAddCloseButton.addEventListener("click", closePopapAdd);

const popapFormAdd = document.querySelector(".popap__form_add");
const elements = document.querySelector(".elements");
const itemTemplate = document.querySelector(".item_template").content;
const elementImage = document.querySelector(".element__image");
const elementTitle = document.querySelector(".element__title");
const elementLike = document.querySelector(".element__like");
const elementLikeActive = document.querySelector(".element__like_active");

const element = document.querySelector(".element");

//Добавляем карточку
function renderItem(item) {
  const newCard = itemTemplate.cloneNode(true);

  newCard.querySelector(".element__title").innerText = item.name;
  newCard.querySelector(".element__image").src = item.link;
  newCard.querySelector(".element__image").alt = item.name;

  newCard
    .querySelector(".element__like")
    .addEventListener("click", function (e) {
      e.target.classList.toggle("element__like_active");
    });

  newCard
    .querySelector(".element__trash")
    .addEventListener("click", function () {
      const elementTrash = document.querySelector(".element__trash");
      const element = elementTrash.closest(".element");
      element.remove();
    });

  newCard
    .querySelector(".element__image")
    .addEventListener("click", function () {
      const popapImg = document.querySelector(".popap__img");
      const popapTitlePlace = document.querySelector(".popap__title-place");
      popapImg.src = item.link;
      popapImg.alt = item.name;
      popapTitlePlace.textContent = item.name;
      openPopapImage();
    });

  elements.prepend(newCard);
}

//Создаем карточку
function createItem(e) {
  e.preventDefault();
  const popapInputPlace = document.querySelector(".popap__input_place").value;
  const popapInputUrl = document.querySelector(".popap__input_url").value;
  const cardData = { name: popapInputPlace, link: popapInputUrl };

  renderItem(cardData);

  closePopapAdd();
}

const popapImage = document.querySelector(".popap_image");
const popapImageCloseButton = document.querySelector(
  ".popap__close-button_image"
);

//Закрытие попапа картинки
function closePopapImage() {
  popapImage.classList.remove("popap_opened");
}

//Открытие попапа картинки
function openPopapImage() {
  popapImage.classList.add("popap_opened");
}

popapImageCloseButton.addEventListener("click", closePopapImage);

popapFormAdd.addEventListener("submit", createItem);
initialCards.forEach(renderItem);
