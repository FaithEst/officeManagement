
document.getElementById("loginBtn").onclick = function(e){
    e.preventDefault();
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .then((userCredential) =>  {
        alert("successful");
        window.location.href = "profile.html";
    }).catch((error) => {
        console.log(error);
    });

}
