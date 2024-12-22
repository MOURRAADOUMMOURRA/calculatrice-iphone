const buttons = document.getElementsByTagName("button")
const song=document.getElementById("song")
const numbers=document.getElementsByClassName("number")
const operators=document.getElementsByClassName("operator")
const screen=document.getElementById("screen")
const equal= document.getElementById("equal")
const ac=document.getElementById("ac")
const percentage=document.getElementById("percentage")
const negative=document.getElementById("negative")
const point=document.getElementById("point")
let lastIsOperators=false
let result=""
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playSong)

}
for(i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",getNumber)  
}
for(i=0;i<operators.length;i++){
    operators[i].addEventListener("click",getOperators)  
}
function playSong(){
    song.play()
    
    
}
// voici la fonction qu'on execute sur un nombre
function getNumber(event){
    result= result+event.target.innerText
    screen.innerText=result
    lastIsOperators=false
    
    

}
// voici la fonction qu'on execute sur un operators
function getOperators(event){
    if(lastIsOperators==false){
        if(event.target.innerText=="X")
            result=result+"*"
        else
            result= result+event.target.innerText
        screen.innerText=result
        lastIsOperators=true
    }
}
equal.addEventListener("click",()=>{
    screen.innerText=result=eval(result)
})
ac.addEventListener("click",()=>{
    screen.innerText="0"
    result=""
})
percentage.addEventListener("click",()=>{
    result=result/100+"*"
    screen.innerText=result
    lastIsOperators=true
})
negative.addEventListener("click",()=>{
    if(screen.innerText>0){
        result="-"+ result
    }else{
        if(screen.innerText<0){
            result=result.slice(1)
        }else{
            result="-"
            lastIsOperator=true
        }
    }
    screen.innerText=result
})
point.addEventListener("click",()=>{
    result=result+"."
    screen.innerText=result
})