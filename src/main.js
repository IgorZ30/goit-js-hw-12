import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {clearGallery} from "./js/render-functions.js";
import {showLoader,hideLoader,hideLoadMoreButton,showLoadMoreButton} from "./js/render-functions.js";

const form = document.querySelector(".form")
const moreBtn = document.querySelector(".more-btn")
let currentQuerry;
let totalImages;
let page = 1;
let limit = 15;
let totalPages;


function scrollPage(card) {
    const cardHeight = card.getBoundingClientRect()
    window.scrollBy(0,cardHeight.height * 2)
}


form.addEventListener("submit", handleSubmit)
moreBtn.addEventListener("click", handleClick);
async function handleSubmit(e) {
    e.preventDefault()
    const query = form.elements["search-text"].value.trim()
    if (query === "") {
        return;
    }
    currentQuerry = query;
    page = 1;
    clearGallery()
    showLoader()
      try{
          const imagesLoader = await getImagesByQuery(query, page)
          totalImages = imagesLoader.totalHits
        totalPages = Math.ceil(totalImages / limit);
            if (imagesLoader.hits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
                return;
            }
          createGallery(imagesLoader.hits);
          showLoadMoreButton()
          if (page >= totalPages) {
    hideLoadMoreButton();
    iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight"
    });
}
      }
    
        catch(error){
            iziToast.error({
                message: "Something went wrong. Please try again!",
                position: "topRight"
            });
        }
        finally{
            hideLoader();
        }
}
async function handleClick(e) {
    e.preventDefault()
    page += 1;
    showLoader()
  
    try {
        if (page<= totalPages) {
            const imagesLoader = await getImagesByQuery(currentQuerry, page)
            createGallery(imagesLoader.hits)
             const card = document.querySelector(".gallery-item")
    scrollPage(card)
        }
        else{
           iziToast.show({
                message: "We're sorry, but you've reached the end of search results",
                position: "topRight"
           });
        hideLoadMoreButton()
        }
            
        }
    catch(error){
            iziToast.error({
                message: "Something went wrong. Please try again!",
                position: "topRight"
            });
        }
        finally {
            hideLoader();
    }
}
   
