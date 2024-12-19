const links = [
    { name: "Google", url: "https://www.google.com" },
    { name: "OpenWeather", url: "https://openweathermap.org" },
    { name: "GitHub", url: "https://github.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
];

const linksList = document.getElementById("links-list");

links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    li.appendChild(a);
    linksList.appendChild(li);
});