window.addEventListener('load', function () {

    // Captura de los elementos en variables

        let form = document.getElementById('form');
        console.log(form);
    
        let select  = document.getElementById('category');
        console.log(select);
    
        let name = document.getElementById('name');
        console.log(name);
    
        let image = document.getElementById('image');
        console.log(image);
    
        let min = document.getElementById('min');
        console.log(min);
    
        let max = document.getElementById('max');
        console.log(max);
    
        let rango = document.getElementById('range');
        console.log(rango);
    
        let botonEnviar = document.querySelector('.button-form');
        console.log(botonEnviar);
    
        let option = document.querySelectorAll("option")
        console.log("este",option);

        let errores = [];
    
    
    // Eventos por variables
    
    // select
    
        select.focus();
    
        select.addEventListener('blur', () => {
            
            let erroresSelect = [];
    
            //let variableSeleccionada
            
            for (let i = 0; i < option.length; i++) {
                
                if(option[0].selected == true){
                    console.log("No seleccioné nada");
                    erroresSelect.push('Debes seleccionar una caregoría');
                    errores.push('Debes seleccionar una caregoría');
                    select.classList.remove('correct');
                    select.classList.add('default');
                } else {
                    errores = [];
                    erroresSelect = [];
                    select.classList.remove('default');
                    select.classList.add('correct');
                }
            }
    
    
        let mensajeSelectError = document.querySelector('.mensajeSelectError');
    
            console.log(mensajeSelectError);
    
            if (erroresSelect.length > 0) {
            
                for (i = 0; i < erroresSelect.length; i++) {
                    mensajeSelectError.innerHTML = erroresSelect[i]
                    mensajeSelectError.style.color = "crimson"
                    mensajeSelectError.style.width = "100%";
                    mensajeSelectError.style.textAlign = "start";
                    mensajeSelectError.style.fontSize = "13px";
              }
          } else {
            mensajeSelectError.innerHTML = '';
            name.focus();
      
          }
            
        });
    
    
    
    // name
    
    name.addEventListener('blur' , function(){ 
         
        let erroresName = []
    
        if (name.value == "") {
            erroresName.push("Debes ingresar un nombre de producto");
            errores.push("Debes ingresar un nombre de producto");
            name.classList.remove('correct');
            name.classList.add('default');
            console.log(erroresName);
    
        } else if (name.value.length < 5) {
            errores = [];
            erroresName = [];
            erroresName.push("Su nombre debe ser de almenos 5 caracteres");
            errores.push("Su nombre debe ser de almenos 5 caracteres");
            name.classList.remove('correct');
            name.classList.add('default');
        } else {
            errores = [];
            erroresName = [];
            name.classList.remove('default');
            name.classList.add('correct');
        }
    
        let mensajename = document.querySelector('.mensajename');
        
        
        if (erroresName.length > 0) {
            
              for (i = 0; i < erroresName.length; i++) {
                mensajename.innerHTML = erroresName[i];
                mensajename.style.color = "crimson";
                mensajename.style.width = "100%";
                mensajename.style.textAlign = "start";
                mensajename.style.fontSize = "13px";
            }
        } else {
            mensajename.innerHTML = '';
            image.focus();
        }
    });
    
    
     // image
     image.addEventListener('blur', () => {
        let erroresImage = [];
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    
    
        if (!image.value) {
            erroresImage.push("Debe seleccionar una imagen");
            errores.push("Debe seleccionar una imagen");
            image.classList.remove('correct');
            image.classList.add('default');
            console.log(erroresImage);
    
        } else if(!allowedExtensions.exec(image.value)){
            errores = [];
            erroresImage = [];
            erroresImage.push("Los formatos de archivos válidos son:/.jpg/.png/.jpeg/.gif");
            errores.push("Los formatos de archivos válidos son:/.jpg/.png/.jpeg/.gif");
            image.classList.remove('correct');
            image.classList.add('default');
            console.log(erroresImage);

        } else {
            errores = [];
            erroresImage = [];
            image.classList.remove('default');
            image.classList.add('correct');
    
        }
    
        let mensajeimage = document.querySelector('.mensajeimage');
    
        if (erroresImage.length > 0) {
            
            for (i = 0; i < erroresImage.length; i++) {
                mensajeimage.innerHTML = erroresImage[i];
                mensajeimage.style.color = "crimson";
                mensajeimage.style.width = "100%";
                mensajeimage.style.textAlign = "start";
                mensajeimage.style.fontSize = "13px";
            }
        } else {
            mensajeimage.innerHTML = '';
            min.focus();
    
    
        }
    
    
    });
    
    
    // Min
    min.addEventListener('blur' , function(){ 
            
        let erroresMin = [];
    
        if (min.value == "") {
            erroresMin.push("Debes ingresar un mínimo");
            errores.push("Debes ingresar un mínimo");
            min.classList.remove('correct');
            min.classList.add('default');
            console.log(erroresMin);
    
        } else if (isNaN(min.value)) {
            errores = [];
            erroresMin = [];
            erroresMin.push("Solo se aceptan números");
            errores.push("Solo se aceptan números");
            min.classList.remove('correct');
            min.classList.add('default');
        } else {
            errores = [];
            erroresMin = [];
            min.classList.remove('default');
            min.classList.add('correct');
        }
    
        let mensajeMin = document.querySelector('.mensajeMin');
        
        
        if (erroresMin.length > 0) {
            
            for (i = 0; i < erroresMin.length; i++) {
                mensajeMin.innerHTML = erroresMin[i];
                mensajeMin.style.color = "crimson";
                mensajeMin.style.width = "100%";
                mensajeMin.style.textAlign = "start";
                mensajeMin.style.fontSize = "13px";
            }
        } else {
            mensajeMin.innerHTML = '';
            max.focus();
    
        }
    })
    
    
    
    // Max
    max.addEventListener('blur' , function(){ 
            
        let erroresMax = [];
    
        if (max.value == "") {
            erroresMax.push("Debes ingresar un máximo");
            errores.push("Debes ingresar un máximo");
            max.classList.remove('correct');
            max.classList.add('default');
            console.log(erroresMax);
    
        } else if (isNaN(max.value)) {
            errores = [];
            erroresMax = [];
            erroresMax.push("Solo se aceptan números");
            max.classList.remove('correct');
            max.classList.add('default');
        } else {
            errores = [];
            erroresMax = [];
            max.classList.remove('default');
            max.classList.add('correct');
        }
    
        let mensajeMax = document.querySelector('.mensajeMax');
        
        
        if (erroresMax.length > 0) {
            
            for (i = 0; i < erroresMax.length; i++) {
                mensajeMax.innerHTML = erroresMax[i];
                mensajeMax.style.color = "crimson";
                mensajeMax.style.width = "100%";
                mensajeMax.style.textAlign = "start";
                mensajeMax.style.fontSize = "13px";
            }
        } else {
            mensajeMax.innerHTML = '';
            max.focus();
    
        }
    })
    
    
    // Rango
    rango.addEventListener('blur' , function(){ 
            
        let erroresRango = [];
    
        if (rango.value == "") {
            erroresRango.push("Debes ingresar un rango");
            errores.push("Debes ingresar un rango");
            rango.classList.remove('correct');
            rango.classList.add('default');
            console.log(erroresRango);
    
        } else if (isNaN(rango.value)) {
            errores = [];
            erroresRango = [];
            erroresRango.push("Solo se aceptan números");
            errores.push("Solo se aceptan números");
            rango.classList.remove('correct');
            rango.classList.add('default');
        } else {
            errores = [];
            erroresRango = [];
            rango.classList.remove('default');
            rango.classList.add('correct');
        }
    
        let mensajeRango = document.querySelector('.mensajeRango');
        
        
        if (erroresRango.length > 0) {
            
            for (i = 0; i < erroresRango.length; i++) {
                mensajeRango.innerHTML = erroresRango[i];
                mensajeRango.style.color = "crimson";
                mensajeRango.style.width = "100%";
                mensajeRango.style.textAlign = "start";
                mensajeRango.style.fontSize = "13px";
            }
        } else {
            mensajeRango.innerHTML = '';
            botonEnviar.focus();
    
        }
    })


        form.addEventListener('submit', (e) => {

            console.log(errores);

            if(errores.length > 0){
                e.preventDefault();
            } else {
                formulario.submit();
            }

        })
        
    
    })
    
    
    