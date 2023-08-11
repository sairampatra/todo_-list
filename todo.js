const inputbox = document.querySelector('.inputbox')
const tasks = document.querySelector('.tasks')
function cut(){

if(inputbox.value=='a'){
let count=0;
  function jhampri(){
    if(count<1000000){ 
 let li =document.createElement('li');
  li.innerHTML='JHAMPRI';
  tasks.appendChild(li);
 let span =document.createElement('span');
      span.innerHTML='\u00d7';
    li.appendChild(span);
      
      count++
      setTimeout(jhampri(),2000)
    }
  }
  jhampri()
  localstorage()
  
}
  else{
    if (inputbox.value==''){
  alert('you must write somthing');
}
else{
  let li =document.createElement('li');
  li.innerHTML=inputbox.value;
  tasks.appendChild(li);
    let span =document.createElement('span');
      span.innerHTML='\u00d7';
    li.appendChild(span);
}
inputbox.value='';
  localstorage();
  } 
}
tasks.addEventListener('click',function(e){
  if(e.target.tagName=='LI'){
    e.target.classList.toggle('done');
    localstorage()
  }
  else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove();
    localstorage()
  }
},false)

function localstorage(){
  localStorage.setItem('data',tasks.innerHTML)
}
function get(){
  tasks.innerHTML=localStorage.getItem('data')
}
get();
