document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change Emoji based on Theme
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = "🌞 Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerHTML = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    // Load theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "🌞 Light Mode";
    }
});
