const eltodoForm = document.querySelector('.todoForm')
const eltodoTextInp = document.querySelector('.todoTextInp')
const eltodoList = document.querySelector('.todoList')
const eltodoIteam = document.querySelector('.todoIteam')
const todoForm__btn = document.querySelector('.todoForm__btn')
let todoTextInp = document.querySelector('.todoTextInp')







const userToken = JSON.parse(localStorage.getItem('token'))

let aRR = []
eltodoForm.addEventListener('click', (e)=>{
  e.preventDefault()
  
JSON.stringify(eltodoTextInp.value)




  // eltodoList.innerHTML += `
  
  
  // `


  let inpText = eltodoTextInp.value

  fetch('https://todo-for-n92.cyclic.app/todos/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-access-token" : userToken 
    },
    body: JSON.stringify({
      task : inpText
    }) 
  })
  .then((response) => response.json())
  .then((data) => {

    console.log('Success:', data);
  })
  .catch((error) => {

    console.error('Error:', error);
  });
    
  allTodo()
})


function allTodo() {
  fetch('https://todo-for-n92.cyclic.app/todos/all', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "x-access-token" : userToken 
    },
  })
  .then((response) => response.json())
  .then((data) => {

    console.log('Success:', data);
  })
  .catch((error) => {
    
    console.error('Error:', error);
  });
}




todoForm__btn.addEventListener('click', () => {
   let aR = todoTextInp.value
   let dop = {
    text: aR,
  } 
  aRR.push(dop);
  console.log(aRR)
  console.log(todoTextInp.value)
  console.log(aR)
  render()
 })









 function render (){
  let result = ""
  for(let i=0; i<aRR.length; i++){
    result = `
    <li class="todoIteam">
                <p class="todoIteam__text">${aRR[i].text}</p>
                <div class="todoIteam__btnWrap">
                    <button class="todoIteam__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                           <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </button>
                    <button class="todoIteam__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                    <button class="todoIteam__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </li>
    `
  }


  eltodoList.innerHTML += result
}



