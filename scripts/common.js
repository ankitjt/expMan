let pageLinks = document.querySelectorAll(".page-link")
let currentPath = window.location.pathname.split("/").pop()
pageLinks.forEach(link => {
    let linkPath = link.getAttribute("href").split("/").pop()
    if (linkPath === currentPath) {
        link.classList.add("border-[#222222]", "dark:border-white", "text-[#222222]", "dark:text-white")
        link.classList.remove("text-slate-400","border-transparent")
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