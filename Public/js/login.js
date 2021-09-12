window.addEventListener('load', function () {

    let formulario = document.querySelector('.form-login');

    let email = document.querySelector('#email');

    let password = document.querySelector('#password')


    let errores = []

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

})

