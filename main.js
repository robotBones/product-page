(function() {
// accordion logic
var accordion = document.getElementsByClassName("accordion");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("js-active");

    var icon = this.previousElementSibling;
    icon.classList.toggle('js-collapsed');
    icon.classList.toggle('js-expanded');

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

const modal = document.getElementsByClassName("js-modal")[0];
const modalMessage = document.getElementsByClassName("js-modal-message")[0];
function message(msg) {
  modal.classList.remove('js-hidden');
  modalMessage.innerText = msg;

  setTimeout(function() {
    modal.classList.add('js-hidden');
  }, 3000);
}

// form logic
const form = document.getElementsByClassName('cta-cart')[0];
const quantity = document.getElementsByClassName('quantity')[0]
form.onsubmit = function(event) {
  event.preventDefault();
  const msg = "You've added " + quantity.value + " apron(s)!";
  message(msg);
}


const selection = document.getElementsByClassName('selection')[0];
const hero = document.getElementsByClassName('js-product-hero')[0];
let selected = document.getElementsByClassName('js-selected')[0]
selection.addEventListener('click', function(event) {
  const product = event.target;
  if (product.className.split(' ').indexOf('js-product-thumbnail') !== -1) {
    // remove selection outline on previously selected thumbnail
    selected.classList.remove('js-selected');
    // cache new selected item
    selected = product;
    // add selection outline
    product.classList.add('js-selected');
    hero.src = product.src;
  }
});

})();
