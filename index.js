$(document).ready(function() {
  getContacts(contacts);
  filterSearch();
  onClickEvent();


});

function addContacts() {

}

function onClickEvent() {
  document.addEventListener('click', function(event) {
    elementClass = event.target.getAttribute('class')
    elementId = event.target.getAttribute('id')
    if (elementClass === 'alphabetize-button') {
       sortByNames(elementId)
    }
    if (elementId === 'add-contact') {
      createContact()
    }
  });
}

function createContact() {

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

