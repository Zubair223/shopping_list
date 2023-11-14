const inputitem = document.getElementById('item-input');
const inputform = document.getElementById('item-form');
const itemlist = document.getElementById('item-list');

debugger;
const formData = function(e){
    e.preventDefault();
    debugger;
    if(inputitem.value == '')
    {
        alert('Input item is required');
    }
    else{

        li = document.createElement('li');
        itemlist.appendChild(li);
        li.insertAdjacentText('beforeend',inputitem.value);  
        btn = document.createElement('button');
        btn.className = 'remove-item btn-link text-red';
        li.appendChild(btn);
        
        let i = document.createElement('i');
        i.className = 'fa-solid fa-xmark';
        btn.appendChild(i);
        //li.insertAdjacentText('beforeend',inputitem.value);
       
    }

    const button = document.getElementsByClassName('remove-item');
    for(let i = 0; i < button.length;i++) {
    button[i].addEventListener('click',function(e) {
        debugger;
        alert('hello whiteSpace: ');  

this.parentElement.remove();
    });
}
      inputitem.value = '';
//     button.addEventListener('click', function(){
// debugger;
//   alert('hello whiteSpace: ');    
//   btn.remove();
   
// });
    
    
   

    //OR
    // else
    // {
    //     itemlist.innerHTML +=  ` <li>
    //      ${inputitem.value}
    //       <button class="remove-item btn-link text-red">
    //         <i class="fa-solid fa-xmark"></i>
    //       </button>
    //     </li>`;
    // }



    
    
    
    
    
    
   
}
inputform.addEventListener('submit', formData);



//  const buttons = document.getElementsByClassName('remove-item');

//  {
//   itemlist.addEventListener('click', function() {
//     alert('hello whiteSpace');
//     itemlist.remove();
//   });
// }