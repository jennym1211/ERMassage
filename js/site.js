$(function () {

    $("#header").load("/header.html");
    $("#footer").load("footer.html");
});

function toggleSidebar(ref) {
    document.getElementById("sidebar").classList.toggle('active');
}
