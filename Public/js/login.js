window.addEventListener('load', function () {

    let formulario = document.querySelector('.form-login');

    let email = document.querySelector('#email');

    let password = document.querySelector('#password')

    let remember = document.getElementById('remember');
    console.log(remember);


    let errores = [];

    //Email

    email.focus();

    email.addEventListener('blur' , function(){ 
        
        let erroresEmail = [];

        let formatoEmailValido = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.value) {
            erroresEmail.push("Debes ingresar un email");
            errores.push("Debes ingresar un email");
            email.classList.remove('correct');
            email.classList.add('default');
            console.log(erroresEmail);

        } else if (!formatoEmailValido.test(String(email.value).toLowerCase())) {
            //console.log("Acá", formatoEmailValido.test(String(email.value).toLowerCase()));
            errores = [];
            erroresEmail = []
            erroresEmail.push("Su correo electrónico debe tener un formato válido");
            errores.push("Su correo electrónico debe tener un formato válido");
            email.classList.remove('correct');
            email.classList.add('default');
            
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
            mensajeEmail.innerHTML = ''
            password.focus();

        }
    })

    //Contraseña
    password.addEventListener('blur' , function(){ 
        
        let erroresPassword = [];

        if (password.value == "") {
            erroresPassword.push("Debes ingresar una contraseña");
            errores.push("Debes ingresar una contraseña");
            password.classList.remove('correct');
            password.classList.add('default');
            console.log(erroresPassword);

        } else if (password.value.length < 8) {
            errores = [];
            erroresPassword = [];
            erroresPassword.push("Su contraseña debe ser de al menos 8 caracteres");
            errores.push("Su contraseña debe ser de al menos 8 caracteres");
            password.classList.remove('correct')
            password.classList.add('default')
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
            mensajePassword.innerHTML = ''
            remember.focus();
        }
    })

        formulario.addEventListener('submit', (e) => {

            console.log(errores);

            if(errores.length > 0){
                e.preventDefault();
            } else {
                formulario.submit();
            }

        })

})

