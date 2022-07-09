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

const popupImage = document.querySelector(".popup_image");
const popupImageCloseButton = document.querySelector(
  ".popup__close-button_image"
);

const addButton = document.querySelector(".profile__add");
const popupAdd = document.querySelector(".popup_add");
const popupAddCloseButton = document.querySelector(".popup__close-button_add");

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

const popups = document.querySelectorAll(".popup");

function submitEditProfileForm(e) {
  e.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileSubtitle.textContent = popupInputSubtitle.value;
  closePopup(popupEdit);
}

function openPopupEdit() {
  openPopup(popupEdit);
  popupInputTitle.value = profileTitle.textContent;
  popupInputSubtitle.value = profileSubtitle.textContent;
}

function openPopup(item) {
  item.classList.add("popup_opened");
}

function closePopup(item) {
  item.classList.remove("popup_opened");
}

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
    .addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });

  newCardElementImage.addEventListener("click", function () {
    popupImg.src = item.link;
    popupImg.alt = item.name;
    popupTitlePlace.textContent = item.name;
    openPopup(popupImage);
  });
  return newCard;
}
function addCard(item) {
  elements.prepend(item);
}

function submitAddCardForm(e) {
  e.preventDefault();
  const cardData = { name: popupInputPlace.value, link: popupInputUrl.value };

  addCard(createCard(cardData));
  popupInputPlace.value = "";
  popupInputUrl.value = "";
  closePopup(popupAdd);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popapOpened = document.querySelector(".popup_opened");
    popapOpened.classList.remove("popup_opened");
  }
}

popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

const clearPopupAdd = () => {
  const button = document.querySelector(".popup__save-button_add");
  button.setAttribute("disabled", true);
  button.classList.add("popup__save-button_disabled");
  popupInputPlace.value = "";
  popupInputUrl.value = "";
};

document.addEventListener("keyup", closePopupEsc);

popupFormEdit.addEventListener("submit", submitEditProfileForm);

editButton.addEventListener("click", openPopupEdit);

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

addButton.addEventListener("click", () => {
  clearPopupAdd();
  openPopup(popupAdd);
});
popupAddCloseButton.addEventListener("click", () => {
  closePopup(popupAdd);
});

popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
});

popupFormAdd.addEventListener("submit", submitAddCardForm);

initialCards.forEach((item) => {
  addCard(createCard(item));
});
