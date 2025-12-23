(()=>{
    const resNav=document.querySelector(".res-nav");
    const navLinkler=document.querySelector(".nav-linkler");
    resNav.addEventListener("click",()=>{
        navLinkler.classList.toggle("nav-aktif");
        resNav.classList.toggle("res-aktif");
    });
})();