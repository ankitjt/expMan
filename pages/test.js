let navLinks = document.querySelectorAll(".nav-link")
let arrow = document.querySelector(".arrow")
let fullNavWrapper = document.querySelector(".fullNavWrapper")
let showFullNav = document.querySelector(".showFullNav")

arrow.onclick = () => {
    fullNavWrapper.classList.toggle("left-0")
}

showFullNav.onclick = () => {
    fullNavWrapper.classList.toggle("left-0")
}

let exSections = document.querySelectorAll(".ex-sections")
let ex_newExpenseWrapper = document.querySelector(".ex-newExpenseWrapper")
let ex_ledgerWrapper = document.querySelector(".ex-ledgerWrapper")
let ex_statsWrapper = document.querySelector(".ex-statsWrapper")
let ex_baseAmountWrapper = document.querySelector(".ex-baseAmountWrapper")

navLinks.forEach(link => {

    link.onclick = () => {

        navLinks.forEach(nav => {
            nav.classList.remove('border-white', 'text-white')
            nav.classList.add('text-slate-400', 'border-transparent')
        })
        link.classList.add("text-white", 'border-white')

        exSections.forEach(section => {
            section.classList.add("-left-[100vw]")
            section.classList.remove('left-0')
            window.scrollTo({top:0})
        })

        if (link.dataset.name === "Add") {
            ex_newExpenseWrapper.classList.remove("-left-[100vw]")
            ex_newExpenseWrapper.classList.add("left-0")
        }
        if (link.dataset.name === "Ledger") {
            ex_ledgerWrapper.classList.remove("-left-[100vw]")
            ex_ledgerWrapper.classList.add("left-0")
        }
        if (link.dataset.name === "Stats") {
            ex_statsWrapper.classList.remove("-left-[100vw]")
            ex_statsWrapper.classList.add("left-0")
        }
        if (link.dataset.name === "Base") {
            ex_baseAmountWrapper.classList.remove("-left-[100vw]")
            ex_baseAmountWrapper.classList.add("left-0")
        }
        // Reset scroll after section change
        document.querySelector('.ex-menuData').scrollTop = 0;
    }
})