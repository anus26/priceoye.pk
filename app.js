const nav =document.querySelector(".nav")
searchIcon=document.querySelector('#searchIcon')

searchIcon.addEventlistener('click',() =>{
nav.classList.toggle("opensearch")
if(nav.classList.contains)("opensearch"){
    searchIcon.classList.replace("uil-search","uil-times")
}
searchIcon.classList.replace("uil-times","uil-search")
})
