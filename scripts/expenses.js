let ex_ActionButton = document.querySelector(".ex-actionButton")
let ex_detailsWrapper = document.querySelector(".ex-detailsWrapper")
let ex_closeAddSections = document.querySelector(".ex-closeAddSections")
ex_ActionButton.onclick = () => {
    ex_detailsWrapper.classList.remove("-bottom-[100vh]")
    ex_detailsWrapper.classList.add("bottom-0")
    setTimeout(() => {
        ex_closeAddSections.classList.remove("hidden")
    },500)
}

let ex_titles = document.querySelectorAll(".ex-title")
let ex_newExpense = document.querySelector(".ex-newExpense")
let ex_base = document.querySelector(".ex-base")

ex_titles.forEach(title => {
    title.onclick = () => {
        ex_titles.forEach(t => {
            t.classList.remove("border-b-4", "border-double", "border-[#222222]", "dark:border-slate-300")
            t.classList.add("text-slate-400")
        })
        title.classList.add("border-b-4", "border-double", "border-[#222222]", "dark:border-slate-300", "text-[#222222]")
        title.classList.remove("text-slate-400")
        
        if (title.dataset.section === "newExpense") {
            ex_base.classList.add("-left-[100vw]")
            ex_base.classList.remove("left-0")
            ex_newExpense.classList.remove("-left-[100vw]")
            ex_newExpense.classList.add("left-0")
        }

        else if (title.dataset.section === "baseAmount") {
            ex_base.classList.add("left-0")
            ex_base.classList.remove("-left-[100vw]")
            ex_newExpense.classList.add("-left-[100vw]")
            ex_newExpense.classList.remove("left-0")
        }

    }
})

ex_closeAddSections.onclick = () => {
    ex_detailsWrapper.classList.add("-bottom-[100vh]")
    ex_detailsWrapper.classList.remove("bottom-0")
    ex_closeAddSections.classList.add("hidden")
}

let ex_tags = document.querySelectorAll(".ex-tag")
ex_tags.forEach(tag => {
    tag.onclick = () => {
        ex_tags.forEach(tags => {
            tags.classList.remove("bg-black/40")
        })
        tag.classList.add("bg-black/40")
        let ex_tagName = tag.children[1].dataset.tagName
        console.log(ex_tagName)
    }
})

let ex_views = document.querySelectorAll(".ex-view")
let ex_views_ledgerWrapper = document.querySelector(".ex-views-ledgerWrapper")
let ex_views_statsWrapper = document.querySelector(".ex-views-statsWrapper")
ex_views.forEach(view => {
    view.onclick = () => {
        ex_views.forEach(v => {
            v.classList.remove("border-slate-700")
            v.classList.add("text-slate-400", "border-transparent")
        })
        view.classList.add("border-slate-700")
        view.classList.remove("text-slate-400", "border-transparent")
        
        if (view.dataset.view === "ledger") {
            ex_views_statsWrapper.classList.add("-left-[100vw]")
            ex_views_statsWrapper.classList.remove("left-0")
            ex_views_ledgerWrapper.classList.remove("-left-[100vw]")
            ex_views_ledgerWrapper.classList.add("left-0")
        }

        else if (view.dataset.view === "statistics") {
            ex_views_statsWrapper.classList.add("left-0")
            ex_views_statsWrapper.classList.remove("-left-[100vw]")
            ex_views_ledgerWrapper.classList.add("-left-[100vw]")
            ex_views_ledgerWrapper.classList.remove("left-0")
        }
    }
})

