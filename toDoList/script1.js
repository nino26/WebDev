//Todo script 

// when you click enter you append what you input to the list
//when you enter nothing in the text box and click enter nothing happens
//when you enter soemthing in th einput and press enter it should get added to the list


let newTodo = document.getElementById('userInput');
let subButton = document.getElementById('submitbutton');
let ul = document.querySelector('ul');
let num = 0

subButton.addEventListener('click', function(){
    if(newTodo.value.length !==0){
        num+=1;

        //stores value of todo string
        let todo = newTodo.value;
        //creates the html li
        let li = document.createElement('li');
        let butt = document.createElement('button');
        li.appendChild(butt);
        li.firstChild.className= 'todoButt btn btn-primary';
        //creates the textnode off the li element and appends it
        li.appendChild(document.createTextNode(todo));
        //appends li to it's parent element ul
        ul.appendChild(li);
        //returns to clear
        ul.childNodes[num].className='item';
        console.log(ul.childNodes[num]);
        newTodo.value= '';



    }

})

