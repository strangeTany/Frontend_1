function openByDefault() {
    document.getElementById("defaultOpen")?.click();
    openTab({ currentTarget: { className: "tablinks", id: "AboutButton" } });
    const buttons = document.querySelectorAll(".tablinks");
    buttons.forEach(button => { button?.addEventListener("click", openTab); });
    console.log(buttons);
}
function openTab(evt) {
    // Declare all variables
    var i, tabcontent, tablinks;
    let tabName = evt.currentTarget.id.slice(0, -6);
    console.log(tabName);
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    const tab = document.getElementById(tabName);
    tab.style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName == 'About') {
        get_comics();
    }
    else if (document.contains(document.getElementsByClassName("comics")[0])) {
        document.getElementsByClassName("comics")[0].remove();
    }
}
async function fetch_id(params) {
    let r = await (await fetch("https://fwd.innopolis.app/api/hw2?" + params)).json();
    return r;
}
async function fetch_comics(id) {
    let r = await (await fetch(`https://getxkcd.vercel.app/api/comic?` + id)).json();
    return r;
}
async function get_comics() {
    let param_email = new URLSearchParams("email='t.ivshina@innopolis.university'");
    let id = await fetch_id(param_email);
    console.log(id);
    let comics = await fetch_comics(new URLSearchParams({ 'num': id }));
    console.log(comics);
    show_comics(comics);
}
function show_comics(comics) {
    let img = comics.img;
    let alt = comics.alt;
    let title = comics.title;
    let date = new Date(Date.UTC(comics.year, comics.month, comics.day)).toLocaleDateString();
    console.log(img + ' ' + alt + ' ' + title + ' ' + date);
    let addonElement = document.getElementById('About');
    let div = document.createElement("div");
    let comics_image = document.createElement("img");
    let comics_title = document.createElement("h3");
    let comics_date = document.createElement("p");
    comics_image.alt = alt;
    comics_image.src = img;
    div.className = 'comics';
    comics_title.textContent = title;
    comics_date.textContent = date;
    addonElement.appendChild(div);
    div.appendChild(comics_title);
    div.appendChild(comics_image);
    div.appendChild(comics_date);
}
window.onload = openByDefault;
