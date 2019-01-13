/*OCULTAMOS Y MOSTRAMOS MENSAJE DE BIENVENIDA SI LA COOKIE EXISTE*/
document.getElementById('botonLogin').addEventListener("click",function() {
  var email = checkCookie();
  if(comprobarCookie()){
    document.getElementById('mensaje').innerHTML ="Bienvenido "+email;
    document.getElementById('email').style.display="none";
    document.getElementById('pass').style.display="none";
    document.getElementById('emailLabel').style.display="none";
    document.getElementById('userLabel').style.display="none";
    document.getElementById('botonLogin').style.display="none";
    document.getElementById('eliminar').style.display="block";
  }else{
    alert("Datos incorrectos");
  }
});

/*CONTROLAMOS EL LOGOUT*/
document.getElementById('eliminar').addEventListener("click", function(){
  alert("Sesion cerrada");

});

/*FUNCION OBTENCION DE COOKIE*/
function checkCookie() {
	var listaCookies = document.cookie.split(";");
	var em= document.getElementById('email').value;
	var pss=document.getElementById('pass').value;


    for (var i=0; i<listaCookies.length; i++) {
    	var compara= listaCookies[i].search(em+"="+pss);
      console.log(compara);
      while(compara !== -1){

         return em;
      }
  		
    }
    return em="";
}

/*FUNCION COMPROBAR LA EXISTENCIA DE LA COOKIE*/
function comprobarCookie(){
  var emailCookie = checkCookie();

  if(emailCookie!=""){
    return true;
    
  }

}

/*FUNCION PARA BORRAR LA COOKIE*/
function logOut(name){
  setCookie(name,"",-1);
}




