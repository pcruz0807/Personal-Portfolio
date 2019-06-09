  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3aMxDB43Dh4hgs3SD9xoDKNWx2AK16DI",
    authDomain: "portfolio-5c2c9.firebaseapp.com",
    databaseURL: "https://portfolio-5c2c9.firebaseio.com",
    projectId: "portfolio-5c2c9",
    storageBucket: "portfolio-5c2c9.appspot.com",
    messagingSenderId: "943121725447",
    appId: "1:943121725447:web:9896e6d832753806"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}