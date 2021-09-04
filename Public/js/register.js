window.addEventListener('load', function(){

    let formulario = document.querySelector('.form-registro');


    formulario.addEventListener('submit' , function(e){
        
        let errorName = []
        
        let firstName = document.querySelector('#firstName');
    // firstName    
    if(firstName.value == "" ){
        errorName.push("Tu campo debe tener contenido")
        firstName.style.backgroundColor = "red"
        
        
     } else if(firstName.value.length < 3 ) {
       errorName.push("Su nombre debe ser de almenos 3 caracteres")
       firstName.style.backgroundColor = "red"
        } else {
           
            firstName.style.backgroundColor = "green"
        }

       if(errorName.length > 0) {
            e.preventDefault()

            let mensajeName = document.querySelector('.mensajeName')

            for(i = 0; i < errorName.length; i++) {
                mensajeName.innerHTML = errorName[i]
            }
        } else {
            mensajeName.innerHTML = ''
            
        }


      
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
    
e.preventDefault()

})
})