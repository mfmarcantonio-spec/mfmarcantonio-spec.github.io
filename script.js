document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.querySelector(".nav-toggle"),nav=document.querySelector(".nav");
if(toggle&&nav){toggle.addEventListener("click",()=>{const o=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(o))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
const els=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>ob.observe(e))}else els.forEach(e=>e.classList.add("visible"));
