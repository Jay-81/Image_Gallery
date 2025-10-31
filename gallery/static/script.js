const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupCaption = document.getElementById('popupCaption');
const closeBtn = document.getElementById('close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
    popupCaption.textContent = img.nextElementSibling.textContent;
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
