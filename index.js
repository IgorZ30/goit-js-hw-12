import{a as q,S as P,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function d(o,t){const s="54828579-b719dea7318382c6ddac3285f";try{return(await q.get("https://pixabay.com/api/",{params:{per_page:15,page:t,key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{return[]}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".more-btn"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:b,downloads:S})=>`<li class="gallery-item">
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
      <p class="value">${b}</p>
    </li>
    <li class="item">
      <p class="descr">Downloads</p>
      <p class="value">${S}</p>
    </li>
  </ul>
</li>`).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){m.innerHTML=""}function y(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}function M(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}const w=document.querySelector(".form"),O=document.querySelector(".more-btn");let v,u,i=1,R=15,c;function x(o){const t=o.getBoundingClientRect();window.scrollBy(0,t.height*2)}w.addEventListener("submit",D);O.addEventListener("click",H);async function D(o){o.preventDefault();const t=w.elements["search-text"].value.trim();if(t!==""){v=t,i=1,B(),y();try{const s=await d(t,i);if(u=s.totalHits,c=Math.ceil(u/R),s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits),M(),i>=c&&(L(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{f()}}}async function H(o){o.preventDefault(),i+=1,y();try{if(i<=c){const t=await d(v,i);h(t.hits);const s=document.querySelector(".gallery-item");x(s)}else l.show({message:"We're sorry, but you've reached the end of search results",position:"topRight"}),L()}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{f()}}
//# sourceMappingURL=index.js.map
