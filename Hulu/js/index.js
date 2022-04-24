const modalContainerEl = document.querySelector('.modal_container');
const modalCloseEl = document.querySelector('.close_icon');
const loginLinkEl = document.querySelector('.login_link');
const modalOverlayEl = document.querySelector('.modal_overlay');

const IS_OPEN = 'is-open';

const toggleModal = () => modalContainerEl.classList.toggle(IS_OPEN);

modalOverlayEl.addEventListener('click', toggleModal);
modalCloseEl.addEventListener('click', toggleModal);
loginLinkEl.addEventListener('click', toggleModal);

const footerTitleEl = document.querySelectorAll('.footer_section_title');

const toggleExpandSection = Element => () => Element.classList.toggle('.is-expanded');

footerTitleEl.forEach(el => {
    el.addEventListener('click', toggleExpandSection(el.parentElement))
});