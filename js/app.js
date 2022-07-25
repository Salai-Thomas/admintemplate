//start tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//tooltip end

//START TODOLIST
const mode = document.getElementById('todo-switch');
const edits = document.querySelectorAll('#edit');

mode.addEventListener('click',()=>{
    edits.forEach(edit=>{
        edit.classList.toggle('d-inline-block');
    });

    
});
//END TODOLIST

//START MESSAGES
const chatlists = document.getElementById('chat-lists');
const  chatboxs = document.getElementById('chat-box');
const chatcontain = document.getElementById('chats');
const plminus = document.getElementById('plus-minus');
const messbox = document.getElementById('mess-box');
const chatfooters = document.querySelector('.chat-footers');
const comments = document.querySelector('.comments');

chatlists.addEventListener('click',()=>{
  chatcontain.classList.add('d-none');
  chatboxs.classList.remove('d-none');

  if(chatboxs.classList.contains('d-none')){
    chatfooters.classList.add('d-none')
  }else{
    chatfooters.classList.remove('d-none');
    chatfooters.classList.add('d-flex');
  }
});

plminus.addEventListener('click',()=>{
  if(plminus.classList.contains('fa-minus')){
    plminus.classList.remove('fa-minus');
    plminus.className ="fas fa-plus mx-2"
  }else if(plminus.classList.contains('fa-plus')){
    plminus.classList.remove('fa-plus');
    plminus.className ="fas fa-minus mx-2"
  }
});

comments.addEventListener('click',()=>{
  chatcontain.classList.remove('d-none');
  chatboxs.classList.add('d-none');

  if(chatboxs.classList.contains('d-none')){
    chatfooters.classList.add('d-none')
  }else{
    chatfooters.classList.remove('d-none');
    chatfooters.classList.add('d-flex');
  }
});
//END MESSAGES

//START ORDERS
const orderBtn = document.getElementById('or-collapse');

orderBtn.addEventListener('click',()=>{
  if(orderBtn.classList.contains('fa-minus')){
    orderBtn.className = "fas fa-plus";
  }else{
    orderBtn.className = "fas fa-minus";
  }
});
//END ORDERS

//START FOOTER
const year = document.getElementById('year');
const nowDate = new Date().getFullYear();

year.textContent = nowDate;


//END FOOTER

