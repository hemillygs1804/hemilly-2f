function tocaSom(idElementoaudio){
    const elemento=
document.querySelector(idElementoaudio); 
if(elemento && elemento.localName ==='audio'){
    elemento.play()
}else{
    console.timeLog("Elemento não encontrado ou seletor inválido");
}
}
const listaDeTeclas=document.querySelectorAll(".tecla");