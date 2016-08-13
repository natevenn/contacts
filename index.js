
var oldHello = function(name) {
  console.log('hello, ' + name + '!');
};


const hello = (name) => {
  console.log(`hello, ${name}!`);
};

oldHello('world');
hello('es6');

$(document).ready(function() {
  getContacts(contacts)
});

function getContacts(contacts) {
  var contactList = document.getElementsByClassName('contact-list')[0]
  for(var i=0; i<contacts.length; i++){
    var contact = '<div class="contact"><p class="name">' + contacts[i] + '</p></div>'
    $(contactList).append(contact)
  }
}

var contacts = [
  'Andy Mention',
  'Emily Davis',
  'Eric Fransen',
  'Jessica Goulding',
  'Jonmichael Chambers',
  'Marc Garreau',
  'Tan Doan',
  'Alan Smith',
  'Allison Larson',
  'Andrew Watkins',
  'Chad Brading',
  'Corey Davis',
  'Gustavo Villagrana',
  'Hilary Denton',
  'Horacio Chavez',
  'Tim Proctor',
  'Will Faurot'
]

