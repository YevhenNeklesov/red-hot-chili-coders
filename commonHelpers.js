import{S as a,A as d,a as u}from"./assets/vendor-BYw-_Kga.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=new a(".swiper",{cssMode:!1,spaceBetween:30,slidesPerView:"auto",freeMode:!0,effect:"cube",cubeEffect:{shadow:!0,shadowOffset:20,shadowScale:.94,slideShadows:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0},touch:{enabled:!0}});c.on("slideChange",()=>{c.isBeginning?document.querySelector(".swiper-prev").classList.add("swiper-button-disabled"):document.querySelector(".swiper-prev").classList.remove("swiper-button-disabled"),c.isEnd?document.querySelector(".swiper-next").classList.add("swiper-button-disabled"):document.querySelector(".swiper-next").classList.remove("swiper-button-disabled")});new d(".accordion-container",{duration:400,showMultiple:!0});const p=document.querySelectorAll(".faq-item-btn");p.forEach(r=>{r.addEventListener("click",()=>{r.querySelector(".faq-btn-icon").classList.toggle("arrow-up")})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".cover-item").forEach((s,o)=>{s.style.animationDelay=`${o*.2}s`})});const l=document.querySelector(".swiper-wrapper");async function w(){try{return(await u.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(r){return console.error("Ошибка при получении отзывов:",r),[]}}async function f(){const r=await w();r.length===0?l.innerHTML="<p>Not found</p>":(m(r),y())}function m(r){const s=r.map(({_id:o,author:i,avatar_url:e,review:t})=>`
      <div class="reviews-item swiper-slide" id="${o}">
        <img class="reviews-img" src="${e}" alt="foto" />
        <h3 class="reviews-subtitle">${i}</h3>
        <p class="reviews-text">${t}</p>
      </div>`).join("");l.insertAdjacentHTML("beforeend",s)}function y(){new a(".swiper-container",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0})}f();
//# sourceMappingURL=commonHelpers.js.map
