//JAVASCRIPT
document.querySelectorAll(".section").forEach(section => {
    const header = section.querySelector("h2");
    const content = section.querySelector(".content");

    header.addEventListener("click", () => {
        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

function toggleLightMode() {
    document.body.classList.toggle("light-mode");
}

window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth"});
}

//JQUERY

$(document).ready(function() {
    $("#Header a").click(function(e) {
        e.preventDefault();
        const target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    $(window).on("scroll", function() {
        $(".section").each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 800) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).trigger("scroll");
});