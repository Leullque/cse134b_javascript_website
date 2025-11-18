const darkmodeButton = document.getElementById("darkmode_button");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-theme");
} 
darkmodeButton.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark-theme");
        darkmodeButton.innerText = "Dark";
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark-theme");
        darkmodeButton.innerText = "Light";
    }
});