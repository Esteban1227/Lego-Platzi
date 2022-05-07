//SpiderMan
const btn_spiderMan = document.getElementById("btn-spiderMan");
const modalSpiderMan = document.getElementById("modalSpiderMan") 
btn_spiderMan.addEventListener("click", () =>{
    openModal(modalSpiderMan);
    openOverlay();
})
//Batman
const btn_batman = document.getElementById("btn-batman");
const modalBatman = document.getElementById("modalBatman") 
btn_batman.addEventListener("click", () =>{
    openModal(modalBatman);
    openOverlay();
})
//Robin
const btn_robin = document.getElementById("btn-robin");
const modalRobin = document.getElementById("modalRobin");
btn_robin.addEventListener("click", () =>{
    openModal(modalRobin);
    openOverlay();
})


const closeX = document.querySelectorAll(".modal__container--close");
const overlay = document.getElementById("overlay")




closeX.forEach(btn =>{
    btn.addEventListener("click", () =>{
        closeModal(modalSpiderMan)
        closeModal(modalBatman)
        closeModal(modalRobin)
        closeOverlay()
    })
})

overlay.addEventListener("click", () =>{
    closeOverlay()
    closeModal(modalSpiderMan)
    closeModal(modalBatman)
    closeModal(modalRobin)
})

function openModal(modal){
    modal.classList.remove("hidden")
    modal.classList.add("visible")
}
function closeModal(modal){
    modal.classList.add("hidden")
    modal.classList.remove("visible")
}

function openOverlay(){
    overlay.classList.add("visible")
    overlay.classList.remove("hidden")
}
function closeOverlay(){
    overlay.classList.remove("visible")
    overlay.classList.add("hidden")
}