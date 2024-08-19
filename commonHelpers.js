import{A as g,S as b,N as v,a as L,i as l,e as w,d as x}from"./assets/vendor-CM6bRD9B.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const A=document.querySelector(".HeaderMenuButton"),d=document.querySelector(".HeaderMenuList");let m=1;A.addEventListener("click",e=>{e.preventDefault(),m+=1,m%2===0?d.classList.add("MenuIsVisible"):d.classList.remove("MenuIsVisible")});d.addEventListener("click",e=>{m+=1,d.classList.remove("MenuIsVisible")});document.addEventListener("DOMContentLoaded",function(){try{const e=document.querySelector(".main-title");e&&(e.style.animation="slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1");const o=document.createElement("style");o.innerHTML=`
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
        `,document.head.appendChild(o)}catch(e){console.error("Error applying animation to the main-title:",e)}});const F={openOnInit:[0]};new g(".list-about-me",F);let E={modules:[v],slidesPerView:1,lazy:!0,loop:!0,centeredSlides:!1,direction:"horizontal",spaceBetween:0,initialSlide:1,navigation:{nextEl:".about-me-swiper-btn-next"},breakpoints:{320:{slidesPerView:2},500:{slidesPerView:3},700:{slidesPerView:3},1e3:{slidesPerView:4},1280:{slidesPerView:5},1310:{slidesPerView:"auto"}}};new b("div.swiper.about-me-swiper-container",E);new g(".accordion-container",{duration:600,showMultiple:!1,openOnInit:[0]});new b(".swiper.project-swiper",{cssMode:!1,spaceBetween:30,slidesPerView:"auto",freeMode:!0,effect:"cube",cubeEffect:{shadow:!0,shadowOffset:20,shadowScale:.94,slideShadows:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,tabKeys:!0,pageUpDown:!0},touch:{enabled:!0}});const B=new g(".accordion-container",{duration:400,showMultiple:!0});console.log("Accordion initialized:",B);const C=document.querySelectorAll(".faq-item-btn");C.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-btn-icon").classList.toggle("arrow-up")})});document.addEventListener("DOMContentLoaded",()=>{try{document.querySelectorAll(".cover-item").forEach((o,i)=>{o.style.animationDelay=`${i*.2}s`})}catch(e){console.error(e)}});L.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function M(e){return(await L.post("/requests",e)).data}const n={email:"",comment:""},s=document.querySelector(".work-together-form"),h="form-state",q=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,p=document.querySelector(".success"),f=document.querySelector(".error"),c=document.querySelector("input#email"),y=document.querySelector("input#comments");k();S();s.addEventListener("input",I);s.addEventListener("submit",O);function S(){q.test(c.value)?(p.style.display="block",c.style.borderBottomColor="#3CBC81",f.style.display="none"):(f.style.display="block",c.style.borderBottomColor="#E74A3B",p.style.display="none"),y.value&&(y.style.borderBottomColor="rgba(250, 250, 250, 0.50)")}function I(){n.email=s.elements.email.value.trim(),n.comment=s.elements.comments.value.trim(),S(),localStorage.setItem(h,JSON.stringify(n))}async function O(e){if(e.preventDefault(),p.style.display="none",f.style.display="none",c.style.borderBottomColor="rgba(250, 250, 250, 0.20)",y.style.borderBottomColor="rgba(250, 250, 250, 0.20)",!n.email||!n.comment)return l.show({title:"Caution",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Ops.. You have not filled in all the required fields in the form.",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#FFA000",close:"true"});try{return await M(n),s.reset(),localStorage.removeItem(h),l.show({title:"Thank you for your interest in cooperation!",titleColor:"#FAFAFA",titleSize:"20px",titleLineHeight:"30px",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageColor:"rgba(250, 250, 250, 0.60)",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#1C1D20",position:"center",maxWidth:"492px",progressBar:"false",closeOnEscape:"true",close:"true"})}catch(o){return l.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#ED3B44",close:"true"})}}function k(){let e={};try{e=JSON.parse(localStorage.getItem(h))}catch(o){l.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#ED3B44",close:"true"});return}e&&(s.elements.email.value=e.email,s.elements.comments.value=e.comment)}(()=>{const e=document.querySelector(".js-modal-window"),o=document.querySelector(".js-open-btn"),i=document.querySelector(".js-modal-close-btn"),a=document.querySelectorAll(".js-modal-link"),t=()=>{const r=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?w(document.body):x(document.body)};a.forEach(r=>r.addEventListener("click",t)),o.addEventListener("click",t),i.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),w(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
