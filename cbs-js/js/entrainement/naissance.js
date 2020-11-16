// naissace

let naissace = parseInt(prompt('Quelle est votre année de naissace ? '));
let annéeCourante = new Date().getFullYear();
if(naissace < 0 || naissace < 1900){
    console.log('vous avez rentrer',naissace ,'êtes vous sûr de votre age ? ');
}else{
    console.log('vous êtes agé de ',annéeCourante-naissace,'ans');

}
