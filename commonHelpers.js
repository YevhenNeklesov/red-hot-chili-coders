import{A as y,S as g,N as x,a as h,i as l,e as v,d as A}from"./assets/vendor-CM6bRD9B.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const E=document.querySelector(".HeaderMenuButton"),d=document.querySelector(".HeaderMenuList");let m=1;E.addEventListener("click",e=>{e.preventDefault(),m+=1,m%2===0?d.classList.add("MenuIsVisible"):d.classList.remove("MenuIsVisible")});d.addEventListener("click",e=>{m+=1,d.classList.remove("MenuIsVisible")});document.addEventListener("DOMContentLoaded",function(){try{const e=document.querySelector(".main-title");e&&(e.style.animation="slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1");const o=document.createElement("style");o.innerHTML=`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes glowAndFade {
          0% {
            text-shadow: 0 0 10px #fff;
          }
          100% {
            text-shadow: 0 0 0px #fff;
          }
        }

        .main-title {
          animation: slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1;
        }
        `,document.head.appendChild(o)}catch(e){console.error("Error applying animation to the main-title:",e)}});const F={openOnInit:[0]};new y(".list-about-me",F);let B={modules:[x],slidesPerView:1,lazy:!0,loop:!0,centeredSlides:!1,direction:"horizontal",spaceBetween:0,initialSlide:1,navigation:{nextEl:".about-me-swiper-btn-next"},breakpoints:{320:{slidesPerView:2},500:{slidesPerView:3},700:{slidesPerView:3},1e3:{slidesPerView:4},1280:{slidesPerView:5},1310:{slidesPerView:"auto"}}};new g("div.swiper.about-me-swiper-container",B);new y(".accordion-container",{duration:600,showMultiple:!1,openOnInit:[0]});new g(".swiper.project-swiper",{cssMode:!1,spaceBetween:30,slidesPerView:"auto",freeMode:!0,effect:"cube",cubeEffect:{shadow:!0,shadowOffset:20,shadowScale:.94,slideShadows:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,tabKeys:!0,pageUpDown:!0},touch:{enabled:!0}});const C=new y(".accordion-container",{duration:400,showMultiple:!0});console.log("Accordion initialized:",C);const M=document.querySelectorAll(".faq-item-btn");M.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-btn-icon").classList.toggle("arrow-up")})});document.addEventListener("DOMContentLoaded",()=>{try{document.querySelectorAll(".cover-item").forEach((o,s)=>{o.style.animationDelay=`${s*.2}s`})}catch(e){console.error(e)}});const L=document.querySelector(".swiper-wrapper");async function q(){try{return(await h.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Ошибка при получении отзывов:",e),[]}}async function I(){const e=await q();e.length===0?L.innerHTML="<p>Not found</p>":(k(e),O())}function k(e){const o=e.map(({_id:s,author:i,avatar_url:t,review:r})=>`
      <div class="reviews-item swiper-slide" id="${s}">
        <img class="reviews-img" src="${t}" alt="foto" />
        <h3 class="reviews-subtitle">${i}</h3>
        <p class="reviews-text">${r}</p>
      </div>`).join("");L.insertAdjacentHTML("beforeend",o)}function O(){new g(".swiper-container",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:5}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0})}I();h.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function P(e){return(await h.post("/requests",e)).data}const a={email:"",comment:""},n=document.querySelector(".work-together-form"),b="form-state",z=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,p=document.querySelector(".success"),f=document.querySelector(".error"),c=document.querySelector("input#email"),w=document.querySelector("input#comments");D();S();n.addEventListener("input",V);n.addEventListener("submit",H);function S(){z.test(c.value)?(p.style.display="block",c.style.borderBottomColor="#3CBC81",f.style.display="none"):(f.style.display="block",c.style.borderBottomColor="#E74A3B",p.style.display="none"),w.value&&(w.style.borderBottomColor="rgba(250, 250, 250, 0.50)")}function V(){a.email=n.elements.email.value.trim(),a.comment=n.elements.comments.value.trim(),S(),localStorage.setItem(b,JSON.stringify(a))}async function H(e){if(e.preventDefault(),p.style.display="none",f.style.display="none",c.style.borderBottomColor="rgba(250, 250, 250, 0.20)",w.style.borderBottomColor="rgba(250, 250, 250, 0.20)",!a.email||!a.comment)return l.show({title:"Caution",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Ops.. You have not filled in all the required fields in the form.",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#FFA000",close:"true"});try{return await P(a),n.reset(),localStorage.removeItem(b),l.show({title:"Thank you for your interest in cooperation!",titleColor:"#FAFAFA",titleSize:"20px",titleLineHeight:"30px",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageColor:"rgba(250, 250, 250, 0.60)",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#1C1D20",position:"center",maxWidth:"492px",progressBar:"false",closeOnEscape:"true",close:"true"})}catch(o){return l.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#ED3B44",close:"true"})}}function D(){let e={};try{e=JSON.parse(localStorage.getItem(b))}catch(o){l.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#ED3B44",close:"true"});return}e&&(n.elements.email.value=e.email,n.elements.comments.value=e.comment)}(()=>{const e=document.querySelector(".js-modal-window"),o=document.querySelector(".js-open-btn"),s=document.querySelector(".js-modal-close-btn"),i=document.querySelectorAll(".js-modal-link"),t=()=>{const r=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?v(document.body):A(document.body)};i.forEach(r=>r.addEventListener("click",t)),o.addEventListener("click",t),s.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),v(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
