
function validate() {
    let firstname = document.getElementById("firstname").value;

    let lastname = document.getElementById("lastname").value;

    let email = document.getElementById("email").value;

    let phonenumber = document.getElementById("phonenumber").value;

    let gender = document.getElementById("gender").value;

    let state = document.getElementById("state").value;

    let check = document.getElementById("check").checked;

    console.log(firstname, lastname, email, phonenumber, gender);


    if (firstname == '') {
        document.getElementById("firstnameinvalid").style.display = "block";
        document.getElementById("firstnamevalid").style.display = "none";

    } else {
        document.getElementById("firstnamevalid").style.display = "block";
        document.getElementById("firstnameinvalid").style.display = "none";

    }

    if (lastname == '') {
        document.getElementById("lastnameinvalid").style.display = "block";
        document.getElementById("lastnamevalid").style.display = "none";

    } else {
        document.getElementById("lastnamevalid").style.display = "block";
        document.getElementById("lastnameinvalid").style.display = "none";

    }


    if (email == '' || !email.includes('@') || email.startsWith('@') || !email.includes('.com') || email.indexOf(".com") < email.length - 4) {
        document.getElementById("emailinvalid").style.display = "block";
        document.getElementById("emailvalid").style.display = "none";

    } else {
        document.getElementById("emailvalid").style.display = "block";
        document.getElementById("emailinvalid").style.display = "none";

    }

    if (phonenumber.length != 10 || phonenumber[0] < 6) {
        document.getElementById("phonenumberinvalid").style.display = "block";
        document.getElementById("phonenumbervalid").style.display = "none";

    } else {
        document.getElementById("phonenumbervalid").style.display = "block";
        document.getElementById("phonenumberinvalid").style.display = "none";

    }

    if (gender == '') {
        document.getElementById("genderinvalid").style.display = "block";
        document.getElementById("gendervalid").style.display = "none";

    } else {
        document.getElementById("gendervalid").style.display = "block";
        document.getElementById("genderinvalid").style.display = "none";

    }
    if (state == '') {
        document.getElementById("stateinvalid").style.display = "block";
        document.getElementById("statevalid").style.display = "none";

    } else {
        document.getElementById("statevalid").style.display = "block";
        document.getElementById("stateinvalid").style.display = "none";

    }

    if (!check) {
        document.getElementById("checkinvalid").style.display = "block"
    } else {
        document.getElementById("checkinvalid").style.display = "none"

    }

}