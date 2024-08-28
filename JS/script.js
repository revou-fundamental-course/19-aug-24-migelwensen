// ini JavaScript //
function replaceName() {
    let nama = prompt("Isi nama anda","")
    document.getElementById("nama").innerHTML = nama
}
replaceName();

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak boleh kosong")
        return false;
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}


function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}