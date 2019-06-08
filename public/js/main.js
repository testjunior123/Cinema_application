
function main() {

  (function () {
     'use strict';
     
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });
  
    
      // Show Menu on Book
      $(window).bind('scroll', function() {
          var navHeight = $(window).height() - 600;
          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
          } else {
              $('.navbar-default').removeClass('on');
          }
      });
  
      $('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      });
  
    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
  
  }());
  
  
  }
  main();


//Displaying selected place in cinema
function displayPosition(row, seat) {
  document.querySelector('#row').innerHTML = row;
  document.querySelector('#seat').innerHTML = seat;

var row = document.getElementById('row')
var price = document.getElementById("price")
 if (row.innerHTML == "1"){
  price.innerHTML = "100PLN";
  console.log(row.innerHTML);
  return false;
 } else if (row.innerHTML == "2") {
  price.innerHTML = "200PLN";
  return false;
 }
 else {
   price.innerHTML = "300PLN";
   return false;
 }
}

// displaying hour & date

function getOption() {
  var data = document.getElementById("mySelect1");
  document.getElementById("date").innerHTML = 
  data.options[data.selectedIndex].text;
}


// returning option

function getOption1() {
	var hour = document.getElementById("mySelect2");
	document.getElementById("hour").innerHTML = 
  hour.options[hour.selectedIndex].text;
}


function registration(){
  document.getElementById('modal-wrapper').style.display='none';
  document.getElementById('modal-wrapper1').style.display='block';
}

function loginBack(){
  document.getElementById('modal-wrapper1').style.display='none';
  document.getElementById('modal-wrapper').style.display='block';
}


function loginBackOrder(){
document.getElementById('modal-wrapper2').style.display='none';
document.getElementById('modal-wrapper1').style.display='none';
document.getElementById('modal-wrapper').style.display='none';
}

//---------------
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyA0t1W39vk8lAvU9LIIUVpylkvlL-xfK-g",
    authDomain: "my-project-1548703234888.firebaseapp.com",
    databaseURL: "https://my-project-1548703234888.firebaseio.com",
    projectId: "my-project-1548703234888",
    storageBucket: "my-project-1548703234888.appspot.com",
    messagingSenderId: "782433397370",
    appId: "1:782433397370:web:a7ad2124efa82b7f"
};
firebase.initializeApp(config);

const db = firebase.firestore();

// get password and email from firestore

var email_db;
var password_db;

db.collection("User").doc("test_user").onSnapshot(function(doc)
    {
        console.log(doc.id, " => ", doc.data());
        email_db = doc.data().email;
        password_db = doc.data().password;

    })


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email1');
  var password = getInputVal('password1');
 

  // Save message
  saveMessage(email, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password){
  db.collection("User").doc("test_user").update({
    "email": email,
    "password":password
  });
}

// login form validation

function validateForm() {
  var un = document.loginForm.email.value;
  var pw = document.loginForm.psw1.value;

  
  if ((un == email_db) && (pw == password_db)) {
    alert ("Zostales zalogwany, dokonaj zakupu");
     document.getElementById('modal-wrapper').style.display='none';
     document.getElementById('modal-wrapper2').style.display='none';
     document.getElementById('res_btn').style.display='none';
     document.getElementById('buy_btn').style.display='block';
      return false;
  }
  else {
      alert ("Logowanie nie powiodlo sie, nie poprawny email lub haslo");
      return false;
  }
}

// ticket form validation
  function validateOrder() {
    var hour = document.form2.mySelect2.value;
    var date = document.form1.mySelect1.value;
    var price = document.getElementById("price").innerHTML;

  if (date == "-1" || hour == "-1") {
     alert( "Wybierz date i/lub godzine seansu" );
     return false;
   } else if (price == ""){
    alert( "Wybierz miejsce" );
    return false;
   }
   else {
    document.getElementById('modal-wrapper2').style.display='block';
    return false;
   }
  }

  document.getElementById('button1').addEventListener("click", happy_alert);

function happy_alert() {
  document.getElementById('button1').style.display='none';
  document.querySelector(".alert2").style.display = 'block';
}


//parse json file

var obj = JSON.parse(film_desc);

//json objects
document.getElementById("title").innerHTML = obj.title;
document.getElementById("title1").innerHTML = obj.title;
document.getElementById("desc").innerHTML = obj.desc;
document.getElementById("Cat").innerHTML = obj.Category;
