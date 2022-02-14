firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("user signed in");
        let email = user.email;
        console.log(email);
        var uid = user.uid;
        console.log(uid)
        firebase.firestore().collection("users").where("userId", "==", uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {


              var theUserName = doc.data().userName;
              var userEmail = doc.data().userEmail;
              var userPhone = doc.data().userPhone;

              console.log(theUserName)
              document.getElementById("profileName").innerHTML = theUserName;
              document.getElementById("profileEmail").innerHTML = userEmail;
              document.getElementById("profilePhone").innerHTML = userPhone;

            });
        });
    }else{
        window.location.href = "index.html";
    }
});

