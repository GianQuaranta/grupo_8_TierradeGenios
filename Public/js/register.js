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
    
    let mediosDePago = document.querySelector('.forma-pago');

    let errores = []


      //formulario.addEventListener('submit' , function(e){

      // firstName 
    firstName.addEventListener('blur' , function(){ 
     
    let erroresFirstName = []

    if (firstName.value == "") {
        //errores.push("Tu campo debe tener contenido")
        erroresFirstName.push("Tu campo debe tener contenido")
        firstName.classList.add('default')
        console.log(erroresFirstName)

    } else if (firstName.value.length < 3) {
        erroresFirstName = []
        erroresFirstName.push("Su nombre debe ser de almenos 3 caracteres")
        //errores.push("Su nombre debe ser de almenos 3 caracteres")
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
        }
    } else {
        mensajeFirstName.innerHTML = ''

    }
})

   /* lastName.addEventListener('blur', function(){ 

        if (firstName.value == "") {
            errores.push("Tu campo debe tener contenido")
            firstName.classList.add('default')
    
    
        } else if (firstName.value.length < 3) {
            errores.push("Su nombre debe ser de almenos 3 caracteres")
            firstName.classList.add('default')
        } else {
    
            firstName.classList.add('correct')
        }
    
        if (errores.length > 0) {
            
    
            let mensajeName = document.querySelector('.mensajeFirstName')
            
    
            for (i = 0; i < errores.length; i++) {
                mensajeName.innerHTML = errores[i]
            }
        } else {
            mensajeName.innerHTML = ''
            
        }

    }) */
    //   e.preventDefault()

    //})
})

/* let lastName = document.querySelector('#lastName');
     if(lastName.value == "" ){
        errorName.push("Tu campo debe tener contenido")
        lastName.style.backgroundColor = "red"
        
        
     } else if(firstName.value.length < 3 ) {
       errorName.push("Su nombre debe ser de almenos 3 caracteres")
       lastName.style.backgroundColor = "red"
        } else {
           
            lastName.style.backgroundColor = "green"
        }

   

        
    ????????? 
    let avatar = document.querySelector('#avatar');
    

    //  
    let email = document.querySelector('#email');
    if(lastName.value == "" ){
        errorName.push("Tu campo debe tener contenido")
        firstName.style.backgroundColor = "red"
        
        
     } else if(firstName.value.length < 3 ) {
       lastName.push("Su nombre debe ser de almenos 3 caracteres")
       firstName.style.backgroundColor = "red"
        } else {
           
            firstName.style.backgroundColor = "green"
        }

    
    let birthDate= document.querySelector('.fecha-nac');
    
    let adress = document.querySelector('#adress');
    
    let phoneNumber = document.querySelector('#phoneNumber');
    
    let country = document.querySelector('#country');
    
    let password = document.querySelector('#password');
    
    let passwordConfirm = document.querySelector('#passwordConfirm');
    
    let mediosDePago = document.querySelector('.forma-pago');



*/