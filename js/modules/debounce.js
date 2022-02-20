export default function debounce(element , delay){

let timer;
return(...args) =>{
if(timer)clearTimeout(timer);
timer = setTimeout(() =>{
   timer = null;
},
delay);
}
}