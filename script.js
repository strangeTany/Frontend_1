function openByDefault(){
    document.getElementById("defaultOpen").click();
}


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName == 'About'){
      get_comics()
    } else if (document.contains(document.getElementsByClassName("comics")[0])) {
        document.getElementsByClassName("comics")[0].remove();
      }
    }
function fetch_id(params){
  return fetch("https://fwd.innopolis.app/api/hw2?" + params)
  .then(r => r.json())
}
function fetch_comics(id){
  return fetch(`https://getxkcd.vercel.app/api/comic?`+id)
  .then(r => r.json())
}
async function get_comics(){
  const param_email = new URLSearchParams("email='t.ivshina@innopolis.university'");
  const id = await fetch_id(param_email)
  console.log(id)
  var comics = await fetch_comics(new URLSearchParams({'num': id}))
  console.log(comics)
  show_comics(comics)
}

function show_comics(comics){
  const img = comics.img
  const alt = comics.alt
  const title = comics.title
  const date = new Date(Date.UTC(comics.year, comics.month, comics.day)).toDateString()
  console.log(img + ' ' + alt + ' ' + title+' '+ date)

  let addonElement = document.getElementById('About')
  let div = document.createElement("div")
  let comics_image = document.createElement("img")
  let comics_title = document.createElement("h3")
  let comics_date = document.createElement("p")
  comics_image.alt = alt
  comics_image.src = img
  div.className = 'comics'
  comics_title.textContent = title
  comics_date.textContent = date
  addonElement.appendChild(div)
  div.appendChild(comics_title)
  div.appendChild(comics_image)
  div.appendChild(comics_date)
  


}
 window.onload = openByDefault