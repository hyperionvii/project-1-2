
/////>>>>>>>>>>>>////// Login Page ////////>>>>>>>>//////////
$(document).ready(function(){

// Initialize Firebase
  var config = {
      apiKey: "AIzaSyCpRAXgZfRwym9rBEfn_RmA2kpfStrIAXo",
      authDomain: "project-1-88de6.firebaseapp.com",
      databaseURL: "https://project-1-88de6.firebaseio.com",
      projectId: "project-1-88de6",
      storageBucket: "project-1-88de6.appspot.com",
      messagingSenderId: "408567007214"
  };

  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail'); 
  const textPassword = document.getElementById('textPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnkLogout = document.getElementById('btnkLogout');

  //add login event

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

  //sign in

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));


  })

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    //sign in

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

  });

  //signout

    btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });


  // realtime listener

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      redirect();
    }else{
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });


  ///function to redirect user to their main page 
  function redirect() {
    document.location.href ="file:///C:/Users/szell/Desktop/Class/trashie/Project-1/index.html";
    }

});
