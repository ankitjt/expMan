let navLinks = document.querySelectorAll(".nav-link")
let currentPath = window.location.pathname.split("/").pop()
navLinks.forEach(link => {
    let linkPath = link.getAttribute("href").split("/").pop()
    if (linkPath === currentPath) {
        link.classList.add("border-[#222222]", "dark:border-slate-300", "text-[#222222]")
        link.classList.remove("text-slate-400")
    }
})

// Pills 
const body = document.getElementsByTagName("BODY")[0]
let blur_ele = document.createElement("div")
blur_ele.innerHTML = `
    <div class="fixed top-0 -left-[100vw] h-screen w-screen bg-[#222222] opacity-90 z-40 flex items-center justify-center flex-col gap-y-3">
        <div class="pill bg-rose-600 w-2/3 mx-auto rounded-lg p-3 text-center ">This is a pill.</div>
        <div class="pill bg-rose-600 w-2/3 mx-auto rounded-lg p-3 text-center ">This is a pill.</div>
        <div class="pill bg-rose-600 w-2/3 mx-auto rounded-lg p-3 text-center ">This is a pill.</div>
    </div>
`
body.appendChild(blur_ele)