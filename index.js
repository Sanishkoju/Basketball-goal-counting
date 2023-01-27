/*let n = document.querySelector("#reset").addEventListener('click', ()=>{
    document.querySelector('#box1').textContent = 0;
} )*/

/*let num = 0;
document.querySelector("#plus-Er").addEventListener('click', ()=>{
    
    count = num ++;
   
    document.querySelector("#box1").textContent = count; 
})

document.querySelector("#plus2").addEventListener('click', ()=>{
    
    count = num ++;
    count= num ++;
    document.querySelector("#box1").textContent = count; 
})
document.querySelector("#plus3").addEventListener('click', ()=>{
    
    count = num ++;
    count= num ++;
    count= num ++;
    document.querySelector("#box1").textContent = count; 
})
*/
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("box1")
let winner = document.querySelector(".winnerel")
let winner1 = document.querySelector(".winnere")
let count = 0

let iscount=true
function pluus1() {
    

    count += 1
    countEl.textContent = count;
    if(count>20){
       
       save()
       count=0
       
        
    }
    
    
    
}

function pluus2() {
    
    
    count += 2
    countEl.textContent = count 
    if(count>20){
      
       save()
       count=0
        
    }}


function pluus3() {
    count += 3
    countEl.textContent = count
    if(count>20 ){
       
        
        
       
       save()
       count=0
        
    }
    
}

function save() {
    
    if(count>20){
       
        
        count=""
        countEl.textContent="winner"
        countE2.textContent="looser"
        if(count=0){

        }
        
        
        
        
    }
      
    
    let countStr = count + "-"
    countStr.textContent=0


    
    saveEl.textContent += countStr
   
  
    /*winner="qinner"
   if ( count >= 20){
        save-el.textContent = winner
    }
    */
}
countEl.textContent = count;

 




// document.getElementById("box2").textContent=num2










/*let n = document.querySelector("#reset").addEventListener('click', ()=>{
    document.querySelector('#box1').textContent = 0;
} )*/

/*let num1=0;
document.querySelector("#plusss1").addEventListener('click', ()=>{
    
    count = num1 ++;
   
    document.querySelector("#box2").textContent = count; 
})

document.querySelector("#plusss2").addEventListener('click', ()=>{
    
    count = num1 ++;
    count= num1 ++;
    document.querySelector("#box2").textContent = count; 
})
document.querySelector("#plusss3").addEventListener('click', ()=>{
    
    count = num1 ++;
    count= num1 ++;
    count= num1++;
    document.querySelector("#box2").textContent = count; 
})*/






// document.getElementById("box2").textContent=num2




let saveE2 = document.getElementById("save1-el")
let countE2 = document.getElementById("box2")
let count1 = 0

function pluss1() {
    count1 += 1
    countE2.textContent = count1
    if(count1>20 ){
       
        
        
       
        save1()
        count1=0
         
     }
}

function pluss2() {
    count1 += 2
    countE2.textContent = count1
    if(count1>20 ){
       
        
        
       
        save1()
        count1=0
         
     }
}

function pluss3() {
    count1 += 3
    countE2.textContent = count1
    if(count1>20 ){
       
        
        
       
        save1()
        count1=0
         
     }
 
   
}

function save1() {
    if(count1>20){
       
    
        
        count1=""
        countE2.textContent="winner"
        countEl.textContent="looser"
      
    }
  
    let countStr1 = count1 + " - "
    saveE2.textContent += countStr1
   
    countStr1.textContent=count1
}
countE2.textContent = count1






let time=new Date()
let timer=time.setHours()

function timerr(){

    if(timer>=10 && timer<=12 ){
  dar }
else { return whiteMode }
}
timerr()
