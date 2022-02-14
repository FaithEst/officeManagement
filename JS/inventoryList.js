firebase.firestore().collection("inventory").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        let table = document.getElementById("table");
    let rowOne = document.createElement("tr");
    let rowOnedataOne = document.createElement("td");
    rowOnedataOne.innerHTML = doc.data().dbItemName;
    let rowOnedataTwo = document.createElement("td");
    rowOnedataTwo.innerHTML = doc.data().dbItemNumber;
    let rowOnedataThree = document.createElement("td");
    rowOnedataThree.innerHTML = doc.data().dbItemDes;

    table.appendChild(rowOne);
    rowOne.appendChild(rowOnedataOne);
    rowOne.appendChild(rowOnedataTwo);
    rowOne.appendChild(rowOnedataThree);
    return true;
        
    });
    
});
