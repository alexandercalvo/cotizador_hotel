const $d = document,
  $templateRoom = $d.querySelector('#section-quote__template').content,
  $fragment = $d.createDocumentFragment();

//escuchando todos los clicks del document
const handlerClicks = () => {
  $d.addEventListener('click', (event) => {
    //validando quien desencadeno el evento
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
const createBoxNumberPersons = () => {
  console.log('creando ando');
  /*const $boxAcomodatinRoom = $d.createElement('div'),
    $boxNumberAdult = $d.activeElement('div'),
    $boxNumberChilds = $d.createElement('div'),
    $buttonAddAdut = $d.createElement('button'),
    $buttonRemoveAdult = $d.createComment('button'),
    $buttonAddChild = $d.createElement('button'),
    $buttonRemoveChild = $d.createElement('button'),
    $inpuntNumberAdult = $d.createElement('input'),
    $inputNumberChild = $d.createElement('input');

  $boxNumberAdult.appendChild($inpuntNumberAdult);
  $boxNumberAdult.appendChild($buttonAddAdut);
  $boxNumberAdult.appendChild($buttonRemoveAdult);

  $boxNumberChilds.appendChild($inputNumberChild);
  $boxNumberChilds.appendChild($buttonAddChild);
  $boxNumberChilds.appendChild($buttonRemoveChild);
  $boxAcomodatinRoom.classList.add('section-quote__room');*/

  $templateRoom.querySelector('.section-quote__label').textContent = '1';
  $templateRoom.querySelector('.section-quote__input-adult').value = 2;
  $templateRoom.querySelector('.section-quote__input-child').textContent = 0;
  let $clone = $d.importNode($templateRoom, true);
  $fragment.appendChild($clone);
  let $container = $d.querySelector('.section-quote'),
    position = $container.children[$container.children.length - 2];
  $container.insertBefore($fragment, position);
};

handlerClicks();
//handlerTouch();
