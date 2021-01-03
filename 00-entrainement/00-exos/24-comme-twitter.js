
function compte() {
    let compte = 140 - textarea.value.length;
    afficheTotal.innerHTML = 'Il vous reste ' + compte + ' caractères';
    let decompte = textarea.value.length - 140 ;
    // un if pour stopper le décompte à zero
    if (compte < 0) {
        console.log(compte);
        afficheTotal.classList.remove("bg-warning");
        afficheTotal.classList.add("bg-danger", "text-white");
        // afficheTotal.classList.toggle("bg-danger"); ???
        // textContent sert à changer la chaine de caractère du HTML
        afficheTotal.textContent = 'vous avez ' + decompte + ' caractère(s) à enlever !';
    } else if (compte>=0) {
        afficheTotal.classList.remove("bg-danger");
        afficheTotal.classList.add("bg-warning");
    } 
}//fin de function

textarea.addEventListener('keyup')