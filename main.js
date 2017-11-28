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

function message(msg) {
  const modal = document.getElementsByClassName("js-modal")[0];
  const message = document.getElementsByClassName("js-modal-message")[0];
  modal.classList.remove('js-hidden');
  message.innerText = msg;

  setTimeout(function() {
    modal.classList.add('js-hidden');
  }, 3000);
}

// form logic
var form = document.getElementsByClassName("cta-cart")[0];
form.onsubmit = function(event) {
  event.preventDefault();
  const quantity = document.getElementsByClassName("quantity")[0].value
  const msg = "You've added " + quantity + " apron(s)!";
  message(msg);
}

