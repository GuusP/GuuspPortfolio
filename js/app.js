const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_progress_bars = document.querySelectorAll(".skill-progress");


filter_btns.forEach(btn => btn.addEventListener("click", () => {
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    $(".grid").isotope({ filter: filterValue });
}))

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
    skillsEffect();
})

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;

    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;

    skills_progress_bars.forEach(skill => skill.style.width = skill.dataset.progress);
}

function navBar() {
    var el = document.getElementById("links");
    if (el.style.height == "0px") {
        el.style.height = "200px";
    } else {
        el.style.height = "0px";
    }

}

window.addEventListener('resize', () => {
    var newWidth = window.innerWidth;
    var el = document.getElementById("links");
    if (newWidth >= 850) {

        el.style.height = "200px";

    }
})