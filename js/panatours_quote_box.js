const $d = document,
  $templateRoom = $d.querySelector('#section-quote__template').content,
  $fragment = $d.createDocumentFragment();

const OPERATION = {
  ADD :"add",
  SUBTRACT : "subtract"
};
 

//escuchando todos los clicks del document
const handlerClicks = () => {
  $d.addEventListener('click', (event) => {
  let room = $d.querySelectorAll(".section-quote__room");
    //validando quien desencadeno el evento
    if ((
      event.target.matches('.section-quote__number-person') ||
      event.target.matches('.section-quote__adults') ||
      event.target.matches('.section-quote__rooms') ||
      event.target.matches('.section-quote__childs')
    ) && (room.length < 1)) {
      createBoxNumberPersons((room.length+1));
    }

    if(event.target.matches('.section-quote__add-adult')){
      addAndSubtract(event, OPERATION.ADD);
      changeAcomodationAdd("section-quote__adults",OPERATION.ADD, event);
    }

    if(event.target.matches('.section-quote__remove-adult')){
      changeAcomodationAdd("section-quote__adults", OPERATION.SUBTRACT, event);
      addAndSubtract(event, OPERATION.SUBTRACT)
    }
    if(event.target.matches('.section-quote__add-child')){
      addAndSubtract(event, OPERATION.ADD);
      //addChild();
      changeAcomodationAdd("section-quote__childs", OPERATION.ADD, event)
    }

    if(event.target.matches('.section-quote__remove-child')){

      changeAcomodationAdd("section-quote__childs", OPERATION.SUBTRACT, event)
      addAndSubtract(event, OPERATION.SUBTRACT);
     // removeChild();
    }

    if(event.target.matches('.section-quote__btn-add')|| event.target.matches('.fa-plus') || event.target.matches('.section-quote__span-add')){
        createBoxNumberPersons((room.length+1));
        addRoom();

    }

    if(event.target.matches('.section-quote__remove') || event.target.matches('fa-minus') || event.target.matches('.section-quote__btn-remove')){
      removeRoom(room);
      addButtonAdd();
      //removeRoom2();
      removeRoomAdultChild();
    }
  });
};

const removeRoom = (listnodos) =>{
  listnodos[listnodos.length -1].remove();


}
const handlerTouch = () => {
  $d.addEventListener('touchstart', (event) => {
    if (
      event.target.matches('.section-quote__number-person') ||
      event.target.matches('.section-quote__adults') ||
      event.target.matches('.section-quote__rooms') ||
      event.target.matches('.section-quote__childs')
    ) {
      createBoxNumberPersons();
    }
  });
};


const addRoom = () =>{
    let $spanRooms = $d.querySelector('.section-quote__rooms');
    let numRoom = parseInt($spanRooms.textContent.split(' ')[0]);  
    let $spanAdults = $d.querySelector('.section-quote__adults');
    let numAdult = parseInt($spanAdults.textContent.split(' ')[0]);
    $spanRooms.textContent=`${numRoom +1} ${$spanRooms.textContent.split(' ')[1]}`;
    $spanAdults.textContent=`${numAdult +2} ${$spanAdults.textContent.split(' ')[1]}`;
    
}

const changeAcomodationAdd = (element, operation, control) =>{
    let $containerInfo = $d.querySelector(`.${element}`),
        $input = $d.querySelector(`#${control.target.id}`),
        amount = parseInt($containerInfo.textContent.split(' ')[0]);
    if((operation == OPERATION.ADD) ){
      $containerInfo.textContent = `${amount +1} ${$containerInfo.textContent.split(' ')[1]}`;

    }
    if((operation == OPERATION.SUBTRACT) && (amount !=0) ){
      if(parseInt($input.previousElementSibling.value) > 0){
          $containerInfo.textContent = `${amount -1} ${$containerInfo.textContent.split(' ')[1]}`; 
      }
    }

  if((operation == OPERATION.SUBTRACT) && (amount >1 ) && (control.className == 'section-quote__remove')){
    
    
  }

}

const removeRoomAdultChild = () =>{
  let listAdult = $d.querySelectorAll('.section-quote__input-adult'),
      listChild = $d.querySelectorAll('.section-quote__input-child'),
      totalAdult = test(listAdult),
      totalChild = test(listChild),
      $spanAdults = $d.querySelector('.section-quote__adults'),
      $spanChilds = $d.querySelector('.section-quote__childs'),
      $spanRooms =  $d.querySelector('.section-quote__rooms');
      roomCurrent = parseInt($spanRooms.textContent);
      $spanAdults.textContent= `${totalAdult} ${$spanAdults.textContent.split(' ')[1]}`;
      $spanChilds.textContent = `${totalChild} ${$spanChilds.textContent.split(' ')[1]}`;
      $spanRooms.textContent = `${roomCurrent -1} ${$spanRooms.textContent.split(' ')[1]}`;

      
}
const test = (object) =>{
  let lista = [... object]
  let total=0;
  lista.map((element)=>{
    total += parseInt( element.value);
  });

  return total;
}
const addAndSubtract = (event, operation) =>{
  const $buttonPress = $d.querySelector(`#${event.target.id}`);
  if(OPERATION.ADD == operation){
    let currentAmount = $buttonPress.nextElementSibling;
    currentAmount.value = parseInt(currentAmount.value)+1;
  }
  if(OPERATION.SUBTRACT == operation){
    let currentAmount = $buttonPress.previousElementSibling;
    if(currentAmount.value != 0){
       currentAmount.value = parseInt(currentAmount.value)-1;

    }
  }
          
}

const addButtonAdd = () =>{
  const $listRooms = $d.querySelectorAll('.section-quote__room');
  
  const $containerButton = $d.createElement('div'),
        $iconAdd = $d.createElement("i"),
        $containerButtonDel = $d.createElement('div'),
        $spanbuttonRemove = $d.createElement('span'),
        $spanButton = $d.createElement('span');
        $spanButton.classList.add("section-quote__span-add");
        $spanButton.textContent = "AGREGAR";
        $iconAdd.classList.add("fa-solid", "fa-plus");
        $containerButton.classList.add("section-quote__btn-add");
        $containerButton.appendChild($iconAdd);
        $containerButton.appendChild($spanButton);
        $listRooms[($listRooms.length -1)].appendChild($containerButton);
        
    if($listRooms.length > 1){
      if($listRooms[($listRooms.length -2)].children[3] != undefined ){
        removeButton($listRooms[($listRooms.length -2)]);
      }

        let $iconRemove = $d.createElement("i");
        $iconRemove.classList.add("fa-solid", "fa-minus");
        $spanbuttonRemove.textContent = "ELIMINAR";
        $spanbuttonRemove.classList.add('section-quote__remove');
        $containerButtonDel.appendChild($iconRemove);
        $containerButtonDel.classList.add("section-quote__btn-remove");
        $containerButtonDel.appendChild($spanbuttonRemove);
        $listRooms[($listRooms.length -1)].appendChild($containerButtonDel);
      
    }
   
    if($listRooms.length >2){
      removeButton($listRooms[($listRooms.length -2)]);
    }
}

const removeButton = (parentElement) =>{
  if(parentElement.children[3] != undefined){
    parentElement.children[3].remove();
  }
}

const createBoxNumberPersons = (numberRoom) => {
  
  let $containerBooking = $d.querySelector('.section-quote');
  $templateRoom.querySelector('.section-quote__label').textContent = `Habitacion ${numberRoom}`;
  $templateRoom.querySelector('.section-quote__input-adult').value = 2;
  $templateRoom.querySelector('.section-quote__input-child').value = 0;
  $templateRoom.querySelector('.section-quote__input-child').textContent = 0;

  if($containerBooking.children.length >=4){
    $templateRoom.querySelector('.section-quote__add-adult').setAttribute('id', `addroom${$containerBooking.children.length -3 }`);
    $templateRoom.querySelector('.section-quote__remove-adult').setAttribute('id', `removeroom${$containerBooking.children.length -3}`);
    $templateRoom.querySelector('.section-quote__add-child').setAttribute('id', `addchild${$containerBooking.children.length -3}`);
    $templateRoom.querySelector('.section-quote__remove-child').setAttribute('id', `removechild${$containerBooking.children.length -3}`);
  }

  if($containerBooking.children.length){

  }
  let $clone = $d.importNode($templateRoom, true);
  $fragment.appendChild($clone);
  let $container = $d.querySelector('.section-quote'),
  position = $container.children[$container.children.length - 2];
  $container.insertBefore($fragment, position);
  addButtonAdd();
};

handlerClicks();
//handlerTouch()
//
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
   console.log("movil")
  alert('movil');
} else {
  console.log("comuputador")
  alert('pc');
}
