const buttons = document.getElementsByTagName("button")
const song=document.getElementById("song")
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playSong)

}
function playSong(){
    song.play()
    
}
console.log("song")