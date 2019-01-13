
/*ASI VALIDAMOS NUESTROS CAMPOS*/

var form= document.forms["form_reg"];

form["nombreA"].addEventListener("keyup",function() {

    if(form['nombreA'].value==="" || form['nombreA'].value===null){
        form['nombreA'].setCustomValidity("No se puede quedar vacio");
        
    }else{
        var controlNom =true;
    }
    
});

form["apellidoA"].addEventListener("keyup",function() {

    if(form['nombreA'].value==="" || form['nombreA'].value===null){
        form['nombreA'].setCustomValidity("No se puede quedar vacio");
        
    }else{
        form['nombreA'].setCustomValidity("");
        var controlApe=true;
    }
    
});

form["email"].addEventListener("keyup",function(){

var expresionEm=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/g;


if(!expresionEm.test(form["email"].value)){
    form["email"].setCustomValidity("Espero este tipo de email aaaaa@pufosa.es");

}else{
    form["email"].setCustomValidity("");
    var controlEm = true;
}


});

form["contrato"].addEventListener("keyup",function() {

    if(form['contrato'].value==="" || form['contrato'].value===null){
        form['contrato'].setCustomValidity("No se puede quedar vacio");
    }else{
        form['contrato'].setCustomValidity("");
        var controlContr = true;
    }
    
});

form["salario"].addEventListener("keyup",function() {

    if(form['salario'].value==="" || form['salario'].value===null || form['salario'].value<853.55 || form['salario'].value>12000){
        form['salario'].setCustomValidity("El salario no puede ser menor de 853,55, mayor a 12.000 o estar vacio");
    }else{
        form['salario'].setCustomValidity("");
        var controlSal=true;
    }
    
});

form["password"].addEventListener("keyup",function() {
    var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if(!regexp_password.test(form["password"].value)){
        form["password"].setCustomValidity("Espero que tenga mayuscula,miniscula,numero, caracter especial");
    }else{
        form["password"].setCustomValidity("");
        var controlPass = true;
    }
    
});

form["rePassword"].addEventListener("keyup",function() {
    var confPass =form["rePassword"].value;
    var pass=form["password"].value;

    if(pass!==confPass){
        form["rePassword"].setCustomValidity("comprueba la contraseña, deben coincidir");
    }else{
        form["rePassword"].setCustomValidity("");
        var controlRePass = true;
    }
    
});


/*
PRUEBAS MENSAJE
form["botReg"].addEventListener("click", function(){
    document.getElementById('mensaje').innerHTML = "Se ha registrado correctamente";

});

function reg(){
    document.getElementById('mensaje').innerHTML = "Se ha registrado correctamente";
}*/


/*FUNCION CON LA QUE CREAREMOS UNA COOKIE*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(exdays){
         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         var expires = "expires="+d.toUTCString();
    }else{
        expires="";
    }

    document.cookie = cname + "=" +cvalue + ";" + expires + ";path=/";
      
}
    



