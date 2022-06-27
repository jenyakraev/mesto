const editButton = document.querySelector(".profile__edit");
const popupEdit = document.querySelector(".popup_edit");
const popupEditCloseButton = document.querySelector(
  ".popup__close-button_edit"
);
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupFormEdit = document.querySelector(".popup__form_edit");
const popupInputTitle = document.querySelector(".popup__input_title");
const popupInputSubtitle = document.querySelector(".popup__input_subtitle");

//Закрытие попапа профиля
function closePopupEdit() {
  popupEdit.classList.remove("popup_opened");
}

//Открытие попапа профиля
function openPopupEdit() {
  popupEdit.classList.add("popup_opened");
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
}

//Сохранение попапа профиля
function submitEditProfileForm(e) {
  e.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileSubtitle.textContent = popupInputSubtitle.value;
  closePopupEdit();
}

popupFormEdit.addEventListener("submit", submitEditProfileForm);
editButton.addEventListener("click", openPopupEdit);
popupEditCloseButton.addEventListener("click", closePopupEdit);

const addButton = document.querySelector(".profile__add");
const popupAdd = document.querySelector(".popup_add");
const popupAddCloseButton = document.querySelector(".popup__close-button_add");

//Закрытие попапа добавления
function closePopupAdd() {
  popupAdd.classList.remove("popup_opened");
}

//Открытие попапа добавления
function openPopupAdd() {
  popupAdd.classList.add("popup_opened");
}

addButton.addEventListener("click", openPopupAdd);
popupAddCloseButton.addEventListener("click", closePopupAdd);

const popupFormAdd = document.querySelector(".popup__form_add");
const elements = document.querySelector(".elements");
const itemTemplate = document.querySelector(".item_template").content;
const elementImage = document.querySelector(".element__image");
const elementTitle = document.querySelector(".element__title");
const elementLike = document.querySelector(".element__like");
const elementLikeActive = document.querySelector(".element__like_active");

const element = document.querySelector(".element");
const popupImg = document.querySelector(".popup__img");
const popupTitlePlace = document.querySelector(".popup__title-place");

const popupInputPlace = document.querySelector(".popup__input_place");
const popupInputUrl = document.querySelector(".popup__input_url");

//Добавляем карточку
function createCard(item) {
  const newCard = itemTemplate.cloneNode(true);
  const newCardElementImage = newCard.querySelector(".element__image");

  newCard.querySelector(".element__title").innerText = item.name;
  newCardElementImage.src = item.link;
  newCardElementImage.alt = item.name;

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

  newCardElementImage.addEventListener("click", function () {
    popupImg.src = item.link;
    popupImg.alt = item.name;
    popupTitlePlace.textContent = item.name;
    openPopupImage();
  });
  return newCard;
}
function addCard(item) {
  elements.prepend(item);
}
debugger;

function submitAddCardForm(e) {
  e.preventDefault();
  const cardData = { name: popupInputPlace.value, link: popupInputUrl.value };

  addCard(createCard(cardData));
  closePopupAdd();
}

const popupImage = document.querySelector(".popup_image");
const popupImageCloseButton = document.querySelector(
  ".popup__close-button_image"
);

//Закрытие попапа картинки
function closePopupImage() {
  popupImage.classList.remove("popup_opened");
}

//Открытие попапа картинки
function openPopupImage() {
  popupImage.classList.add("popup_opened");
}

popupImageCloseButton.addEventListener("click", closePopupImage);

popupFormAdd.addEventListener("submit", submitAddCardForm);

initialCards.forEach((item) => {
  addCard(createCard(item));
});
