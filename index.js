
var oldHello = function(name) {
  console.log('hello, ' + name + '!');
};


const hello = (name) => {
  console.log(`hello, ${name}!`);
};

oldHello('world');
hello('es6');

$(document).ready(function() {
  var searchBar = document.getElementById('search')
  getContacts(contacts)

  document.addEventListener('click', function(event) {
    buttonClass = event.target.getAttribute('class')
    if (buttonClass === 'alphabetize-button') {
      buttonId = event.target.getAttribute('id')
      sortedContacts = sortByNames(buttonId)
      AddsortedContactsToDom(sortedContacts)
    }
  });

  searchBar.onkeydown = function(event) {
    var contactList = document.getElementsByClassName('contact')
    var letters = event.key
    for(var i=0; i<contactList.length; i++) {
      var contactName = contactList[i].getElementsByClassName('name')[0].innerHTML.toLowerCase()
      if (contactName.indexOf(letters) === -1) {
          $(contactList[i]).hide()
      }
    }
  }
});

function getContacts(contacts) {
  var contactList = document.getElementsByClassName('contact-list')[0]
  for(var i=0; i<contacts.length; i++){
    var contact = '<div class="contact"><p class="name">' + contacts[i] + '</p></div>'
    $(contactList).append(contact)
  }
}

function AddsortedContactsToDom(sortedContacts) {
  var contactList = document.getElementsByClassName('contact')
  for(var i=0; i<contactList.length; i++){
    oldName = contactList[i].getElementsByClassName('name')
    newName = sortedContacts[i]
    $(oldName).text(newName)
  }
}

function sortByNames(name) {
  var element = 0
  if (name === 'last-name') {
    element = 1
  }
  return contacts.sort(function(a, b) {
    nameA = a.split(' ')[element]
    nameB = b.split(' ')[element]
    if(nameA < nameB){
      return -1
    }
    if(nameA > nameB){
      return 1
    }
    return 0
  })
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

