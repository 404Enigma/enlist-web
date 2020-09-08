function writeData(){
    firebase.database.ref("User").set({
        name : document.getElementById("namefield").value,
        age : document.getElementById("agefield").value
    })
}