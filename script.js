let string = "";
let buttons = document.querySelectorAll('.button');
let inputT = document.querySelector('input');

inputT.disabled = true; 
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);    //eval
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";           
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string += e.target.innerHTML;   //string = string + e.target.innerHTML
            document.querySelector('input').value = string;
        }
      
    })
})