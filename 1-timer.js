import"./assets/styles-CgLqr5fs.js";const n=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),T=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let i=null,u=null;n.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(u=t,n.disabled=!1)}};flatpickr(c,p);n.addEventListener("click",()=>{u&&(n.disabled=!0,c.disabled=!0,i=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(i),iziToast.success({title:"Success",message:"Time is up!"}),l(0,0,0,0),c.disabled=!1;return}const{days:o,hours:s,minutes:d,seconds:a}=D(t);l(o,s,d,a)},1e3))});function l(e,t,o,s){y.textContent=r(e),S.textContent=r(t),T.textContent=r(o),b.textContent=r(s)}function D(e){const a=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:m,minutes:f,seconds:h}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
