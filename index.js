import{a as P,S as $,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function m(o,t){const s="54828579-b719dea7318382c6ddac3285f";try{return(await P.get("https://pixabay.com/api/",{params:{per_page:15,page:t,key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{return[]}}const p=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".more-btn"),B=new $(".gallery a",{captionsData:"alt",captionDelay:250});function f(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
    />
  </a>
  <ul class="image-descr">
    <li class="item">
      <p class="descr">Likes</p>
      <p class="value">${r}</p>
    </li>
    <li class="item">
      <p class="descr">Views</p>
      <p class="value">${n}</p>
    </li>
    <li class="item">
      <p class="descr">Comments</p>
      <p class="value">${S}</p>
    </li>
    <li class="item">
      <p class="descr">Downloads</p>
      <p class="value">${q}</p>
    </li>
  </ul>
</li>`).join("");p.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){p.innerHTML=""}function y(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function w(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}const v=document.querySelector(".form"),O=document.querySelector(".more-btn");let b,d,i=1,R=15,u;function x(o){if(!o)return;const t=o.getBoundingClientRect();window.scrollBy(0,t.height*2)}v.addEventListener("submit",D);O.addEventListener("click",H);async function D(o){o.preventDefault();const t=v.elements["search-text"].value.trim();if(t!==""){b=t,i=1,M(),c(),y();try{const s=await m(t,i);if(d=s.totalHits,u=Math.ceil(d/R),s.hits.length===0){c(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits),w(),i>=u&&(c(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}}}async function H(o){o.preventDefault(),i+=1,c(),y();try{const t=await m(b,i);f(t.hits);const s=document.querySelector(".gallery-item");x(s),i>=u?(c(),l.show({message:"We're sorry, but you've reached the end of search results",position:"topRight"})):w()}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
