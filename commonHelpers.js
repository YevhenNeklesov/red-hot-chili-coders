import{S as h,A as w,a as g,i as c}from"./assets/vendor-CoOA5DS0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const L=document.querySelector(".HeaderMenuButton"),a=document.querySelector(".HeaderMenuList");let d=1;L.addEventListener("click",e=>{e.preventDefault(),d+=1,d%2===0?a.classList.add("MenuIsVisible"):a.classList.remove("MenuIsVisible")});a.addEventListener("click",e=>{d+=1,a.classList.remove("MenuIsVisible")});document.addEventListener("DOMContentLoaded",function(){try{const e=document.querySelector(".main-title");e&&(e.style.animation="slideInLeft 1s ease forwards, glowAndFade 2s ease-in-out 1");const o=document.createElement("style");o.innerHTML=`
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
        `,document.head.appendChild(o)}catch(e){console.error("Error applying animation to the main-title:",e)}});new h(".swiper",{cssMode:!1,spaceBetween:30,slidesPerView:"auto",freeMode:!0,effect:"cube",cubeEffect:{shadow:!0,shadowOffset:20,shadowScale:.94,slideShadows:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,tabKeys:!0,pageUpDown:!0},touch:{enabled:!0}});const S=new w(".accordion-container",{duration:400,showMultiple:!0});console.log("Accordion initialized:",S);const F=document.querySelectorAll(".faq-item-btn");F.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq-btn-icon").classList.toggle("arrow-up")})});document.addEventListener("DOMContentLoaded",()=>{try{document.querySelectorAll(".cover-item").forEach((o,i)=>{o.style.animationDelay=`${i*.2}s`})}catch(e){console.error(e)}});g.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function A(e){return(await g.post("/requests",e)).data}const s={email:"",comment:""},n=document.querySelector(".work-together-form"),f="form-state",v=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,u=document.querySelector(".success"),m=document.querySelector(".error"),E=document.querySelector("input#email"),y=document.querySelector(".current.work-together-label-email"),b=document.querySelector(".current.work-together-label-comments");C();n.addEventListener("input",x);n.addEventListener("submit",q);function x(){u.style.display="none",m.style.display="none",s.email=n.elements.email.value.trim(),s.comment=n.elements.comments.value.trim(),v.test(E.value)?(u.style.display="block",y.style.setProperty("--after-color","#3CBC81")):(m.style.display="block",y.style.setProperty("--after-color","#E74A3B")),s.comment&&b.style.setProperty("--after-color","rgba(250, 250, 250, 0.50)"),localStorage.setItem(f,JSON.stringify(s))}async function q(e){e.preventDefault(),u.style.display="none",m.style.display="none",document.documentElement.style.setProperty("--after-color","rgba(250, 250, 250, 0.20))"),(!s.email||!s.comment)&&c.show({title:"Caution",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Ops.. You have not filled in all the required fields in the form.",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#FFA000"});try{await A(s),n.reset()}catch(o){c.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"})}localStorage.removeItem(f)}function C(){let e={};try{e=JSON.parse(localStorage.getItem(f))}catch(o){c.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"center",maxWidth:"432px",message:`An error occurred: ${o.message}`,messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"});return}e&&(n.elements.email.value=e.email,n.elements.comments.value=e.comment)}
//# sourceMappingURL=commonHelpers.js.map
