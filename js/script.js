function nComentario(){
  let li = document.createElement("li");
  let valoringresado = document.getElementById("nuevoComentario").value;
  let texto = document.createTextNode(valoringresado);
  li.appendChild(texto);

  if (valoringresado === '') {
    alert("Debes ingresar un comentario y un usuario");
  }else{
    document.getElementById("comentarios").appendChild(li);
  }

  document.getElementById("nuevoComentario").value = "";

  li.className = "comentario";




  let borrar = document.createElement("p");
  borrar.innerHTML=("Borrar");
  borrar.className = "close";
  li.appendChild(borrar);

  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}