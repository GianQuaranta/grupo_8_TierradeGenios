window.addEventListener('load', function () {

    let formulario = document.querySelector('.form-registro');

    let firstName = document.querySelector('#firstName');

    let lastName = document.querySelector('#lastName');

    let email = document.querySelector('#email');

    let avatar = document.querySelector('#avatar');
    
    let birthDate= document.querySelector('.fecha-nac');
    
    let adress = document.querySelector('#adress');
    
    let phoneNumber = document.querySelector('#phoneNumber');
    
    let country = document.querySelector('#country');
    
    let password = document.querySelector('#password');
    
    let passwordConfirm = document.querySelector('#passwordConfirm');
    
    let mediosDePago = document.querySelectorAll('.forma-pago');

    let errores = []


      //formulario.addEventListener('submit' , function(e){

      // firstName 
    firstName.addEventListener('blur' , function(){ 
     
    let erroresFirstName = []

    if (firstName.value == "") {
        //errores.push("Tu campo debe tener contenido")
        erroresFirstName.push("Tu campo debe tener contenido")
        firstName.classList.remove('correct')
        firstName.classList.add('default')
        console.log(erroresFirstName)

    } else if (firstName.value.length < 3) {
        erroresFirstName = []
        erroresFirstName.push("Su nombre debe ser de almenos 3 caracteres")
        //errores.push("Su nombre debe ser de almenos 3 caracteres")
        firstName.classList.remove('correct')
        firstName.classList.add('default')
    } else {
        erroresFirstName = []
        firstName.classList.remove('default')
        firstName.classList.add('correct')
    }

    let mensajeFirstName = document.querySelector('.mensajeFirstName')
    
    
    if (erroresFirstName.length > 0) {
        
          for (i = 0; i < erroresFirstName.length; i++) {
            mensajeFirstName.innerHTML = erroresFirstName[i]
            mensajeFirstName.style.Color = "red"
        }
    } else {
        mensajeFirstName.innerHTML = ''

    }
})

//lastName
    lastName.addEventListener('blur' , function(){ 
        
        let erroreslastName = []

        if (lastName.value == "") {
            //errores.push("Tu campo debe tener contenido")
            erroresLastName.push("Tu campo debe tener contenido")
            lastName.classList.remove('correct')
            lastName.classList.add('default')
            console.log(erroresLastName)

        } else if (lastName.value.length < 3) {
            erroresLastName = []
            erroresLastName.push("Su apellido debe ser de almenos 3 caracteres")
            //errores.push("Su nombre debe ser de almenos 3 caracteres")
            lastName.classList.remove('correct')
            lastName.classList.add('default')
        } else {
            erroresLastName = []
            lastName.classList.remove('default')
            lastName.classList.add('correct')
        }

        let mensajeLastName = document.querySelector('.mensajeLastName')
        
        
        if (erroresLastName.length > 0) {
            
            for (i = 0; i < erroresLastName.length; i++) {
                mensajeLastName.innerHTML = erroresLastName[i]
                mensajeLastName.style.color = "red"
            }
        } else {
            mensajeLastName.innerHTML = ''

        }
    })

    // Avatar
    avatar.addEventListener('blur', () => {
        let erroresAvatar = [];
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;


        if (!avatar.value) {
            erroresAvatar.push("Debe seleccionar una imagen")
            avatar.classList.remove('correct')
            avatar.classList.add('default')
            console.log(erroresAvatar)

        } else if(!allowedExtensions.exec(avatar.value)){
            erroresAvatar.push("Los formatos de archivos válidos son:/.jpg/.png/.jpeg/.gif")
            avatar.classList.remove('correct')
            avatar.classList.add('default')
            console.log(erroresAvatar)
        
        } else {
            erroresAvatar = []
            avatar.classList.remove('default')
            avatar.classList.add('correct')

        }

        let mensajeAvatar = document.querySelector('.mensajeAvatar')

        if (erroresAvatar.length > 0) {
            
            for (i = 0; i < erroresAvatar.length; i++) {
                mensajeAvatar.innerHTML = erroresAvatar[i]
                mensajeAvatar.style.color = "red"
            }
        } else {
            mensajeAvatar.innerHTML = ''

        }


    })

    //Email
    email.addEventListener('blur' , function(){ 
        
        let erroresEmail = []

        let formatoEmailValido = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.value) {
            erroresEmail.push("Tu campo debe tener contenido")
            email.classList.remove('correct')
            email.classList.add('default')
            console.log(erroresEmail)

        } else if (!formatoEmailValido.test(String(email.value).toLowerCase()
        )) {
            console.log("Acá", formatoEmailValido.test(String(email.value).toLowerCase()
            ))
            erroresEmail = []
            erroresEmail.push("Su correo electrónico debe tener un formato válido")
            email.classList.remove('correct')
            email.classList.add('default')
            console.log("Va mejorando")
            
        } else {
            erroresEmail = []
            email.classList.remove('default')
            email.classList.add('correct')
        }

        let mensajeEmail = document.querySelector('.mensajeEmail')
        
        
        if (erroresEmail.length > 0) {
            
            for (i = 0; i < erroresEmail.length; i++) {
                mensajeEmail.innerHTML = erroresEmail[i]
                mensajeEmail.style.color = "red"
            }
        } else {
            mensajeEmail.innerHTML = ''

        }
    })

    //birthDate
    birthDate.addEventListener('blur' , function(){ 
        
        let erroresBirthDate = []

        if (birthDate.value == "") {
            erroresBirthDate.push("Tu campo debe tener contenido")
            birthDate.classList.remove('correct')
            birthDate.classList.add('default')
            console.log(erroresBirthDate)
        } else {
            erroresBirthDate = []
            birthDate.classList.remove('default')
            birthDate.classList.add('correct')
        }

        let mensajeBirthDate = document.querySelector('.mensajeBirthDate')
        
        
        if (erroresBirthDate.length > 0) {
            
            for (i = 0; i < erroresBirthDate.length; i++) {
                mensajeBirthDate.innerHTML = erroresBirthDate[i]
                mensajeBirthDate.style.color = "red"
            }
        } else {
            mensajeBirthDate.innerHTML = ''

        }
    })

    //adress
    adress.addEventListener('blur' , function(){ 
        
        let erroresAdress = []

        if (adress.value == "") {
            erroresAdress.push("Tu campo debe tener contenido")
            adress.classList.remove('correct')
            adress.classList.add('default')
            console.log(erroresAdress)

        } else {
            erroresLastName = []
            lastName.classList.remove('default')
            lastName.classList.add('correct')
        }

        let mensajeAdress = document.querySelector('.mensajeAdress')
        
        
        if (erroresAdress.length > 0) {
            
            for (i = 0; i < erroresAdress.length; i++) {
                mensajeAdress.innerHTML = erroresAdress[i]
                mensajeAdress.style.color = "red"
            }
        } else {
            mensajeAdress.innerHTML = ''

        }
    })

    //phoneNumber
    phoneNumber.addEventListener('blur' , function(){ 
        
        let erroresPhoneNumber = []

        if (phoneNumber.value == "") {
            erroresPhoneNumber.push("Tu campo debe tener contenido")
            phoneNumber.classList.remove('correct')
            phoneNumber.classList.add('default')
            console.log(erroresPhoneNumber)

        } else if (isNaN(phoneNumber.value)) {
            erroresPhoneNumber = []
            erroresPhoneNumber.push("Solo se aceptan números")
            phoneNumber.classList.remove('correct')
            phoneNumber.classList.add('default')
        } else {
            erroresPhoneNumber = []
            phoneNumber.classList.remove('default')
            phoneNumber.classList.add('correct')
        }

        let mensajePhoneNumber = document.querySelector('.mensajePhoneNumber')
        
        
        if (erroresPhoneNumber.length > 0) {
            
            for (i = 0; i < erroresPhoneNumber.length; i++) {
                mensajePhoneNumber.innerHTML = erroresPhoneNumber[i]
                mensajePhoneNumber.style.color = "red"
            }
        } else {
            mensajePhoneNumber.innerHTML = ''

        }
    })

    //country
    country.addEventListener('blur' , function(){ 
        
        let erroresCountry = []

        if (country.value == "") {
            erroresCountry.push("Tu campo debe tener contenido")
            country.classList.remove('correct')
            country.classList.add('default')
            console.log(erroresCountry)

        } else {
            erroresCountry = []
            country.classList.remove('default')
            country.classList.add('correct')
        }

        let mensajeCountry = document.querySelector('.mensajeCountry')
        
        
        if (erroresCountry.length > 0) {
            
            for (i = 0; i < erroresCountry.length; i++) {
                mensajeCountry.innerHTML = erroresCountry[i]
                mensajeCountry.style.color = "red"
            }
        } else {
            mensajeCountry.innerHTML = ''

        }
    })


    //Contraseña
    password.addEventListener('blur' , function(){ 
        
        let erroresPassword = []

        if (password.value == "") {
            erroresPassword.push("Tu campo debe tener contenido")
            password.classList.remove('correct')
            password.classList.add('default')
            console.log(erroresPassword)

        } else if (password.value.length < 8) {
            erroresPassword = []
            erroresPassword.push("Su contraseña debe ser de al menos 8 caracteres")
            password.classList.remove('correct')
            password.classList.add('default')
        } else {
            erroresPassword = []
            password.classList.remove('default')
            password.classList.add('correct')
        }

        let mensajePassword = document.querySelector('.mensajePassword')
        
        
        if (erroresPassword.length > 0) {
            
            for (i = 0; i < erroresPassword.length; i++) {
                mensajePassword.innerHTML = erroresPassword[i]
                mensajePassword.style.color = "red"
            }
        } else {
            mensajePassword.innerHTML = ''

        }
    })

    //ConfirmarContraseña
    passwordConfirm.addEventListener('blur' , function(){ 
        
        let erroresPasswordConfirm = []

        if (passwordConfirm.value == "") {
            erroresPasswordConfirm.push("Tu campo debe tener contenido")
            passwordConfirm.classList.remove('correct')
            passwordConfirm.classList.add('default')
            console.log(erroresPasswordConfirm)

        } else if (passwordConfirm.value.length < 8) {
            erroresPasswordConfirm = []
            erroresPasswordConfirm.push("Su contraseña debe ser de al menos 8 caracteres")
            passwordConfirm.classList.remove('correct')
            passwordConfirm.classList.add('default')

        } else if (passwordConfirm.value != password.value) {
            erroresPasswordConfirm = []
            erroresPasswordConfirm.push("Las contraseñas no coinciden")
            passwordConfirm.classList.remove('correct')
            passwordConfirm.classList.add('default')

        } else {
            erroresPasswordConfirm = []
            passwordConfirm.classList.remove('default')
            passwordConfirm.classList.add('correct')
        }

        let mensajePasswordConfirm = document.querySelector('.mensajePasswordConfirm')
        
        
        if (erroresPasswordConfirm.length > 0) {
            
            for (i = 0; i < erroresPasswordConfirm.length; i++) {
                mensajePasswordConfirm.innerHTML = erroresPasswordConfirm[i]
                mensajePasswordConfirm.style.color = "red"
            }
        } else {
            mensajePasswordConfirm.innerHTML = ''

        }
    })
    console.log(mediosDePago)
    console.log(mediosDePago[0].value) 
    //mediosDePago

    for(let i = 0; i < mediosDePago.length; i++){
        if(mediosDePago[i].checked){
            console.log(true)
        }
    }

    mediosDePago.addEventListener('blur' , function(){ 
        
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
                mensajeMediosDePago.style.color = "red"
            }
        } else {
            mensajeMediosDePago.innerHTML = ''

        }
    })

})


