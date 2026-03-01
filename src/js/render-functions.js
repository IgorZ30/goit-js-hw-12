import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader")
const moreBtn = document.querySelector(".more-btn")
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
   
    const markupGallery = images.map(({ webformatURL, largeImageURL , tags,likes ,views,comments,downloads })=>
`<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <ul class="image-descr">
    <li class="item">
      <p class="descr">Likes</p>
      <p class="value">${likes}</p>
    </li>
    <li class="item">
      <p class="descr">Views</p>
      <p class="value">${views}</p>
    </li>
    <li class="item">
      <p class="descr">Comments</p>
      <p class="value">${comments}</p>
    </li>
    <li class="item">
      <p class="descr">Downloads</p>
      <p class="value">${downloads}</p>
    </li>
  </ul>
</li>`).join("")
    gallery.insertAdjacentHTML("beforeend", markupGallery);
    lightbox.refresh();
}

/*Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.*/
 
export function clearGallery(){
    gallery.innerHTML = "";
}
/*Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.*/ 
export function showLoader() {
    loader.classList.remove("hidden")
}
/*Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.*/ 
export function hideLoader() {
     loader.classList.add("hidden")
}

export function showLoadMoreButton(){
moreBtn.classList.remove("hidden")
}

export function hideLoadMoreButton(){
moreBtn.classList.add("hidden")

}