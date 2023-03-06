function openByDefault(){
    document.getElementById("defaultOpen")?.click();
    openTab({ currentTarget: { className: "tablinks", id:"AboutButton"}})
    const buttons:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".tablinks");
buttons.forEach(button =>{button?.addEventListener("click", openTab)});
console.log(buttons)
}



function openTab(evt: { currentTarget: any; }) {
    // Declare all variables
    var i:number, tabcontent:NodeListOf<HTMLElement>, tablinks:NodeListOf<HTMLElement>;
    let tabName:string = evt.currentTarget.id.slice(0, -6)
    console.log(tabName)
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
    const tab: HTMLElement = document.getElementById(tabName)!
    tab.style.display = "block";

    evt.currentTarget.className += " active";
    if (tabName == 'About'){
      get_comics()
    } else if (document.contains(document.getElementsByClassName("comics")[0])) {
        document.getElementsByClassName("comics")[0].remove();
      }
    }
async function fetch_id(params: string | URLSearchParams){
  let r: string = await (await fetch("https://fwd.innopolis.app/api/hw2?" + params)).json();
  return r;
}
async function fetch_comics(id: string | URLSearchParams){
  let r :Comics= await (await fetch(`https://getxkcd.vercel.app/api/comic?` + id)).json();
  return r;
}
interface Comics {
  img: string;
  alt: string;
  title: string;
  day: number;
  month: number;
  year: number;

}

async function get_comics(){
  let param_email:URLSearchParams = new URLSearchParams("email='t.ivshina@innopolis.university'");
  let id:string = await fetch_id(param_email)
  console.log(id)
  let comics: Comics = await fetch_comics(new URLSearchParams({'num': id}))
  console.log(comics)
  show_comics(comics)
}

function show_comics(comics: Comics){
  let img: string= comics.img
  let alt: string = comics.alt
  let title: string = comics.title
  let date: string = new Date(Date.UTC(comics.year, comics.month, comics.day)).toLocaleDateString()
  console.log(img + ' ' + alt + ' ' + title+' '+ date)

  let addonElement: HTMLElement = document.getElementById('About')!
  let div:HTMLElement = document.createElement("div")
  let comics_image:HTMLImageElement = document.createElement("img")
  let comics_title:HTMLElement= document.createElement("h3")
  let comics_date:HTMLElement = document.createElement("p")
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