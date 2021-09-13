window.addEventListener('load', function () {

    let formulario = document.querySelector('.form-registro');

    let firstName = document.querySelector('#firstName');

    let lastName = document.querySelector('#lastName');

    let email = document.querySelector('#email');

    let avatar = document.querySelector('#avatar');

    let birthDate = document.querySelector('.fecha-nac');

    let adress = document.querySelector('#adress');

    let phoneNumber = document.querySelector('#phoneNumber');

    let country = document.querySelector('#country');

    let password = document.querySelector('#password');

    let passwordConfirm = document.querySelector('#passwordConfirm');

    let mediosDePago = document.querySelectorAll('.forma-pago');

    let errores = [];


    //formulario.addEventListener('submit' , function(e){

    // firstName 

    firstName.focus();

    firstName.addEventListener('blur', function () {

        let erroresFirstName = [];

        if (firstName.value == "") {
            //errores.push("Tu campo debe tener contenido")
            erroresFirstName.push("Debes ingresar un nombre");
            errores.push("Debes ingresar un nombre");
            firstName.classList.remove('correct');
            firstName.classList.add('default');
            console.log(erroresFirstName);

        } else if (firstName.value.length < 3) {
            errores = [];
            erroresFirstName = [];
            erroresFirstName.push("Su nombre debe ser de almenos 3 caracteres");
            errores.push("Su nombre debe ser de almenos 3 caracteres");
            //errores.push("Su nombre debe ser de almenos 3 caracteres")
            firstName.classList.remove('correct');
            firstName.classList.add('default');
        } else {
            errores = [];
            erroresFirstName = [];
            firstName.classList.remove('default');
            firstName.classList.add('correct');
        }

        let mensajeFirstName = document.querySelector('.mensajeFirstName');


        if (erroresFirstName.length > 0) {

            for (i = 0; i < erroresFirstName.length; i++) {
                mensajeFirstName.innerHTML = erroresFirstName[i];
                mensajeFirstName.style.color = "crimson";
                mensajeFirstName.style.fontSize = "13px";
            }
        } else {
            mensajeFirstName.innerHTML = '';
            lastName.focus();
        }
    })

    //lastName
    lastName.addEventListener('blur', function () {

        let erroresLastName = [];

        if (lastName.value == "") {
            //errores.push("Tu campo debe tener contenido")
            erroresLastName.push("Debes ingresar un apellido");
            errores.push("Debes ingresar un apellido");
            lastName.classList.remove('correct');
            lastName.classList.add('default');
            console.log(erroresLastName);

        } else if (lastName.value.length < 3) {
            errores = [];
            erroresLastName = [];
            erroresLastName.push("Su apellido debe ser de almenos 3 caracteres");
            errores.push("Su apellido debe ser de almenos 3 caracteres");
            //errores.push("Su nombre debe ser de almenos 3 caracteres")
            lastName.classList.remove('correct');
            lastName.classList.add('default');
        } else {
            errores = [];
            erroresLastName = [];
            lastName.classList.remove('default');
            lastName.classList.add('correct');
        }

        let mensajeLastName = document.querySelector('.mensajeLastName');


        if (erroresLastName.length > 0) {

            for (i = 0; i < erroresLastName.length; i++) {
                mensajeLastName.innerHTML = erroresLastName[i];
                mensajeLastName.style.color = "crimson";
                mensajeLastName.style.fontSize = "13px";
            }
        } else {
            mensajeLastName.innerHTML = '';
            avatar.focus();

        }
    })

    // Avatar
    avatar.addEventListener('blur', () => {
        let erroresAvatar = [];
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;


        if (!avatar.value) {
            errores.push("Debes seleccionar una imagen");
            erroresAvatar.push("Debes seleccionar una imagen");
            avatar.classList.remove('correct');
            avatar.classList.add('default');
            console.log(erroresAvatar);

        } else if (!allowedExtensions.exec(avatar.value)) {
            errores = [];
            erroresAvatar = [];
            erroresAvatar.push("Los formatos de archivos válidos son:/.jpg/.png/.jpeg/.gif");
            errores.push("Los formatos de archivos válidos son:/.jpg/.png/.jpeg/.gif");
            avatar.classList.remove('correct');
            avatar.classList.add('default');
            console.log(erroresAvatar);

        } else {
            errores = [];
            erroresAvatar = [];
            avatar.classList.remove('default');
            avatar.classList.add('correct');

        }

        let mensajeAvatar = document.querySelector('.mensajeAvatar');

        if (erroresAvatar.length > 0) {

            for (i = 0; i < erroresAvatar.length; i++) {
                mensajeAvatar.innerHTML = erroresAvatar[i];
                mensajeAvatar.style.color = "crimson";
                mensajeAvatar.style.fontSize = "13px";
            }
        } else {
            mensajeAvatar.innerHTML = '';
            email.focus;

        }


    })

    //Email
    email.addEventListener('blur', function () {

        let erroresEmail = [];

        let formatoEmailValido = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.value) {
            erroresEmail.push("Debes ingresar un email");
            errores.push("Debes ingresar un email");
            email.classList.remove('correct');
            email.classList.add('default');
            console.log(erroresEmail);

        } else if (!formatoEmailValido.test(String(email.value).toLowerCase()
        )) {
            //console.log("Acá", formatoEmailValido.test(String(email.value).toLowerCase()));
            errores = [];
            erroresEmail = [];
            erroresEmail.push("El correo electrónico debe tener un formato válido");
            errores.push("El correo electrónico debe tener un formato válido");
            email.classList.remove('correct');
            email.classList.add('default');
            console.log("Va mejorando");

        } else {
            errores = [];
            erroresEmail = [];
            email.classList.remove('default');
            email.classList.add('correct');
        }

        let mensajeEmail = document.querySelector('.mensajeEmail');


        if (erroresEmail.length > 0) {

            for (i = 0; i < erroresEmail.length; i++) {
                mensajeEmail.innerHTML = erroresEmail[i];
                mensajeEmail.style.color = "crimson";
                mensajeEmail.style.fontSize = "13px";
            }
        } else {
            mensajeEmail.innerHTML = '';
            birthDate.focus();
        }
    })

    //birthDate
    birthDate.addEventListener('blur', function () {

        let erroresBirthDate = []

        if (birthDate.value == "") {
            erroresBirthDate.push("Debes elegir tu fecha de nacimiento");
            errores.push("Debes elegir tu fecha de nacimiento");
            birthDate.classList.remove('correct');
            birthDate.classList.add('default');
            console.log(erroresBirthDate);
        } else {
            errores = [];
            erroresBirthDate = [];
            birthDate.classList.remove('default');
            birthDate.classList.add('correct');
        }

        let mensajeBirthDate = document.querySelector('.mensajeBirthDate');


        if (erroresBirthDate.length > 0) {

            for (i = 0; i < erroresBirthDate.length; i++) {
                mensajeBirthDate.innerHTML = erroresBirthDate[i];
                mensajeBirthDate.style.color = "crimson";
                mensajeBirthDate.style.fontSize = "13px";
            }
        } else {
            mensajeBirthDate.innerHTML = '';
            adress.focus();
        }
    })


    //adress
    adress.addEventListener('blur', function () {

        let erroresAdress = [];

        if (adress.value == "") {
            erroresAdress.push("Debes ingresar tu dirección");
            errores.push("Debes ingresar tu dirección");
            adress.classList.remove('correct');
            adress.classList.add('default');
            console.log(erroresAdress);

        } else {
            errores = [];
            erroresLastName = [];
            lastName.classList.remove('default');
            lastName.classList.add('correct');
        }

        let mensajeAdress = document.querySelector('.mensajeAdress');


        if (erroresAdress.length > 0) {

            for (i = 0; i < erroresAdress.length; i++) {
                mensajeAdress.innerHTML = erroresAdress[i];
                mensajeAdress.style.color = "crimson";
                mensajeAdress.style.fontSize = "13px";
            }
        } else {
            mensajeAdress.innerHTML = '';
            phoneNumber.focus();
        }
    })


    //phoneNumber
    phoneNumber.addEventListener('blur', function () {

        let erroresPhoneNumber = [];

        if (phoneNumber.value == "") {
            erroresPhoneNumber.push("Ingresa tu número de teléfono");
            errores.push("Ingresa tu número de teléfono");
            phoneNumber.classList.remove('correct');
            phoneNumber.classList.add('default');
            console.log(erroresPhoneNumber);

        } else if (isNaN(phoneNumber.value)) {
            errores = [];
            erroresPhoneNumber = [];
            erroresPhoneNumber.push("Solo se aceptan números");
            errores.push("Solo se aceptan números");
            phoneNumber.classList.remove('correct');
            phoneNumber.classList.add('default');
        } else {
            errores = [];
            erroresPhoneNumber = [];
            phoneNumber.classList.remove('default');
            phoneNumber.classList.add('correct');
        }

        let mensajePhoneNumber = document.querySelector('.mensajePhoneNumber');


        if (erroresPhoneNumber.length > 0) {

            for (i = 0; i < erroresPhoneNumber.length; i++) {
                mensajePhoneNumber.innerHTML = erroresPhoneNumber[i];
                mensajePhoneNumber.style.color = "crimson";
                mensajePhoneNumber.style.fontSize = "13px";
            }
        } else {
            mensajePhoneNumber.innerHTML = '';
            country.focus();
        }
    })

    //country
    country.addEventListener('blur', function () {

        let erroresCountry = [];

        if (country.value == "") {
            erroresCountry.push("Ingresa tu país");
            errores.push("Ingresa tu país");
            country.classList.remove('correct');
            country.classList.add('default');
            console.log(erroresCountry);

        } else {
            errores = [];
            erroresCountry = [];
            country.classList.remove('default');
            country.classList.add('correct');
        }

        let mensajeCountry = document.querySelector('.mensajeCountry');


        if (erroresCountry.length > 0) {

            for (i = 0; i < erroresCountry.length; i++) {
                mensajeCountry.innerHTML = erroresCountry[i];
                mensajeCountry.style.color = "crimson";
                mensajeCountry.style.fontSize = "13px";
            }
        } else {
            mensajeCountry.innerHTML = '';
            password.focus();
        }
    })


    //Contraseña
    password.addEventListener('blur', function () {

        let erroresPassword = [];

        if (password.value == "") {
            errores.push("Ingresa una contraseña");
            erroresPassword.push("Ingresa una contraseña");
            password.classList.remove('correct');
            password.classList.add('default');
            console.log(erroresPassword);

        } else if (password.value.length < 8) {
            errores = [];
            erroresPassword = [];
            erroresPassword.push("Su contraseña debe ser de al menos 8 caracteres");
            errores.push("Su contraseña debe ser de al menos 8 caracteres");
            password.classList.remove('correct');
            password.classList.add('default');
        } else {
            errores = [];
            erroresPassword = [];
            password.classList.remove('default');
            password.classList.add('correct');
        }

        let mensajePassword = document.querySelector('.mensajePassword');


        if (erroresPassword.length > 0) {

            for (i = 0; i < erroresPassword.length; i++) {
                mensajePassword.innerHTML = erroresPassword[i];
                mensajePassword.style.color = "crimson";
                mensajePassword.style.fontSize = "13px";
            }
        } else {
            mensajePassword.innerHTML = '';
            passwordConfirm.focus()
        }
    })

    //ConfirmarContraseña
    passwordConfirm.addEventListener('blur', function () {

        let erroresPasswordConfirm = [];

        if (passwordConfirm.value == "") {
            errores.push("Debes ingresar la misma contraseña");
            erroresPasswordConfirm.push("Debes ingresar la misma contraseña");
            passwordConfirm.classList.remove('correct');
            passwordConfirm.classList.add('default');
            console.log(erroresPasswordConfirm);

        } else if (passwordConfirm.value.length < 8) {
            errores = [];
            erroresPasswordConfirm = [];
            erroresPasswordConfirm.push("Su contraseña debe ser de al menos 8 caracteres");
            errores.push("Su contraseña debe ser de al menos 8 caracteres");
            passwordConfirm.classList.remove('correct');
            passwordConfirm.classList.add('default');

        } else if (passwordConfirm.value != password.value) {
            errores = [];
            erroresPasswordConfirm = [];
            erroresPasswordConfirm.push("Las contraseñas no coinciden");
            errores.push("Las contraseñas no coinciden");
            passwordConfirm.classList.remove('correct');
            passwordConfirm.classList.add('default');

        } else {
            errores = [];
            erroresPasswordConfirm = [];
            passwordConfirm.classList.remove('default');
            passwordConfirm.classList.add('correct');
        }

        let mensajePasswordConfirm = document.querySelector('.mensajePasswordConfirm');


        if (erroresPasswordConfirm.length > 0) {

            for (i = 0; i < erroresPasswordConfirm.length; i++) {
                mensajePasswordConfirm.innerHTML = erroresPasswordConfirm[i];
                mensajePasswordConfirm.style.color = "crimson";
                mensajePasswordConfirm.style.fontSize = "13px";
            }
        } else {
            mensajePasswordConfirm.innerHTML = '';

        }
    })
    console.log(mediosDePago);
    console.log(mediosDePago[0].value);
    //mediosDePago

    for (let i = 0; i < mediosDePago.length; i++) {
        if (mediosDePago[i].checked) {
            console.log(true)
        }
    }

    /**
    mediosDePago.addEventListener('blur', function () {

        let erroresMediosDePago = []
        console.log(mediosDePago.value);

        if (mediosDePago.value == "") {
            erroresMediosDePago.push("Debe seleccionar al menos un medio de pago")
            mediosDePago.classList.remove('correct')
            mediosDePago.classList.add('default')
            console.log(erroresMediosDePago)

        } else {
            erroresMediosDePago = []
            mediosDePago.classList.remove('default')
            mediosDePago.classList.add('correct')
        }

        let mensajeMediosDePago = document.querySelector('.mensajeMediosDePago')


        if (erroresMediosDePago.length > 0) {

            for (i = 0; i < erroresMediosDePago.length; i++) {
                mensajeMediosDePago.innerHTML = erroresMediosDePago[i]
                mensajeMediosDePago.style.color = "crimson"
            }
        } else {
            mensajeMediosDePago.innerHTML = ''

        }
    })**/

    formulario.addEventListener('submit', (e) => {

        console.log(errores);

        if(errores.length > 0){
            e.preventDefault();
        } else {
            formulario.submit();
        }

    })


})


