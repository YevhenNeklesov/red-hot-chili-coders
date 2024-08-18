import{S as h,A as S,a as g,i as c}from"./assets/vendor-CoOA5DS0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const w=document.querySelector(".HeaderMenuButton"),i=document.querySelector(".HeaderMenuList");let u=1;w.addEventListener("click",e=>{e.preventDefault(),u+=1,u%2===0?i.classList.add("MenuIsVisible"):i.classList.remove("MenuIsVisible")});i.addEventListener("click",e=>{u+=1,i.classList.remove("MenuIsVisible")});new h(".swiper",{cssMode:!1,spaceBetween:30,slidesPerView:"auto",freeMode:!0,effect:"cube",cubeEffect:{shadow:!0,shadowOffset:20,shadowScale:.94,slideShadows:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,tabKeys:!0,pageUpDown:!0},touch:{enabled:!0}});const v=new S(".accordion-container",{duration:400,showMultiple:!0});console.log("Accordion initialized:",v);const F=document.querySelectorAll(".faq-item-btn");F.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-btn-icon").classList.toggle("arrow-up")})});document.addEventListener("DOMContentLoaded",()=>{try{document.querySelectorAll(".cover-item").forEach((r,a)=>{r.style.animationDelay=`${a*.2}s`})}catch(e){console.error(e)}});g.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function A(e){return(await g.post("/requests",e)).data}const s={email:"",comment:""},n=document.querySelector(".work-together-form"),p="form-state",b=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,m=document.querySelector(".success"),d=document.querySelector(".error"),L=document.querySelector("input#email"),y=document.querySelector(".current.work-together-label-email"),E=document.querySelector(".current.work-together-label-comments");C();n.addEventListener("input",x);n.addEventListener("submit",q);function x(){m.style.display="none",d.style.display="none",s.email=n.elements.email.value.trim(),s.comment=n.elements.comments.value.trim(),b.test(L.value)?(m.style.display="block",y.style.setProperty("--after-color","#3CBC81")):(d.style.display="block",y.style.setProperty("--after-color","#E74A3B")),s.comment&&E.style.setProperty("--after-color","rgba(250, 250, 250, 0.50)"),localStorage.setItem(p,JSON.stringify(s))}async function q(e){e.preventDefault(),m.style.display="none",d.style.display="none",document.documentElement.style.setProperty("--after-color","rgba(250, 250, 250, 0.20))"),(!s.email||!s.comment)&&c.show({title:"Caution",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Ops.. You have not filled in all the required fields in the form.",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#FFA000"});try{await A(s),n.reset()}catch(r){c.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${r.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"})}localStorage.removeItem(p)}function C(){let e={};try{e=JSON.parse(localStorage.getItem(p))}catch(r){c.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${r.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"});return}e&&(n.elements.email.value=e.email,n.elements.comments.value=e.comment)}
//# sourceMappingURL=commonHelpers.js.map
