import"./assets/styles-CgLqr5fs.js";function o(e,i){return new Promise((s,t)=>{setTimeout(()=>{i==="fulfilled"?s(e):t(e)},e)})}document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const i=parseInt(e.target.delay.value),s=e.target.state.value;o(i,s).then(t=>{iziToast.success({title:"✅ Fulfilled",message:`Promise in ${t}ms`,position:"topRight"})}).catch(t=>{iziToast.error({title:"❌ Rejected",message:`Promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
