/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si no se recibe un string retornará -1.
*/

function contarVocales(texto) {
  let contador=0;
if(typeof(texto) == "string"){
for(let vocal of texto.toLowerCase()){
  if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u" ){
  contador+=1
    }
   }
  }else {
  contador--
}
return contador
}
/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  let repo = "https://github.com/leo-it/tp1_fizzmod.git"
  return repo
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/

const crearClase = () => {
  class Ejercicio3 {
    static contadorInstancias = 0;
      constructor(texto){
      this.texto=texto
      Ejercicio3.contadorInstancias++ ;
    }
    contadorPalabras(){
if(typeof this.texto!="string"){
  return -1
}
         else if(this.texto=="") {
        return 0
      }else{
        return this.texto.split(' ').length
    }
     }
    hayNumeros(){

      if(typeof this.texto!="string"){
        return -1
      } else if(/\d/.test(this.texto)==true){
        return true;
      }else{
        return false;
      }

 
    
      
    }  


  }

  return Ejercicio3
}


module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
