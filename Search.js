let searchbutton = document.getElementById("searchbutton");
let images = document.querySelector(".images");
let searchimage = document.getElementById("searchimage");
let button = document.querySelector(".button");





let page = 1;
let keyword="";

async function showimage(){
    keyword=searchimage.value;
   
    const apikey ="fGsyaHrHo9t9XYjt8H7ADqdDNjyme3009nEH_-bi4W8";
const url=`https://api.unsplash.com/search/photos?page=${page}&query=`;
   
    const response = await fetch(url+keyword+`&client_id=${apikey}`+`&per_page=12`);
    const data = await response.json();
    if(page === 1){
        images.innerHTML="";
    }
   

    data.results.map((el)=>{
      
        const image = document.createElement("img");
        image.src = el.urls.small;
        images.appendChild(image);
      
    })
    button.style.display="block";
    
  
}


searchbutton.onclick=()=>{
    showimage();
   
    
   
}
button.addEventListener("click",()=>{
    page++;
   
    showimage();
   

})
    
  

