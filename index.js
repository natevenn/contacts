$(document).ready(function() {
  getContacts(contacts);
  filterSearch();
  onClickEvent();
});


function onClickEvent() {
  document.addEventListener('click', function(event) {
    var elementClass = event.target.getAttribute('class')
    var elementId = event.target.getAttribute('id')
    var id = document.getElementsByClassName('contact-form')
    if (elementClass === 'alphabetize-button') {
       sortByNames(elementId)
    }
    if (elementId === 'add-contact') {
      showContactForm(id)
    }
    if (elementClass === 'create-contact-button') {
      getNewContact(event, id)
    }
  });
}

function getNewContact(event, id) {
  var contactInfo = document.getElementsByClassName('input-box')
  var newContact = []
  $(contactInfo).each(function(index, input) {
    newContact[index] = input.value
    input.value = ""
  })
  addNewContact(newContact)
  hideContactForm(id)
}

function addNewContact(newContact) {
  if(newContact[0,1]) {
    var contactList = document.getElementsByClassName('contact-list')[0]
    var contact = '<div class="contact"><p class="name">' + newContact[0] + ' ' + newContact[1] + '</p></div>'
    $(contactList).append(contact)
  } else {
    console.log('missing name')
  }
}

function showContactForm(id) {
 $(id).removeClass('contact-form-js')
}

function hideContactForm(id) {
  $(id).addClass('contact-form-js')
}

function filterSearch() {
  var searchBar = document.getElementById('search')
  searchBar.onkeyup = function() {
    var letters = this.value.toLowerCase()
    showSearchResults(letters)
  }
}

function showSearchResults(letters) {
  var contactList = document.getElementsByClassName('contact')
  $(contactList).each(function() {
    var name = $(this).text().toLowerCase();
    (name.indexOf(letters) >= 0) ? $(this).slideDown() : $(this).slideUp()
  });
}

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
  sortedContacts = contacts.sort(function(a, b) {
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
  AddsortedContactsToDom(sortedContacts)
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

