/**
 * Created by Nico/Dam on 06/06/18....and beyond
 */

//liste de cartes de base en doublons dans un tableau
var listUrls = new Array("Dardevil.jpg", "DrStrange.jpg", "Ghost-Rider.jpg", "Hulk.jpg", "HumanTorch.jpg", "ScarletWitch.jpg", "Spiderman.jpg", "thor.jpg", "Vision.jpg", "Dardevil.jpg", "DrStrange.jpg", "Ghost-Rider.jpg", "Hulk.jpg", "HumanTorch.jpg", "ScarletWitch.jpg", "Spiderman.jpg", "thor.jpg", "Vision.jpg");
//___________________________________________________



//mélange de ce tableau, création d'un nouveau______
var shuffleListUrls = listUrls.sort(function(a, b){
    return 0.5-Math.random();
});




//création d'une div pour chaque carte du tableau mélangé
var page = document.getElementsByClassName("wrapper")[0];

for (var i=0; i<shuffleListUrls.length; i++) {
    var newDiv = document.createElement("DIV");
    newDiv.setAttribute("id",shuffleListUrls[i]);
    newDiv.setAttribute("class", "carte");
    page.appendChild(newDiv);
}




var compteurClickParPaires = 1,
    totalClick = 1;


page.addEventListener("click", function (ev) {

    //Pour chaque choix de carte__________________________________________
    if (ev.target.className === 'carte'){

        ev.target.classList.add("selectedCard");
        ev.target.style.backgroundImage="url('img/"+ev.target.id+"')";

        //Au 1er click__________________
        if (compteurClickParPaires == 1){

            ev.target.classList.add("choix1");

            compteurClickParPaires += 1;
            totalClick += 1;

        }


        //Au 2e click______________________________________________________
        else if (compteurClickParPaires == 2){

            ev.target.classList.add("choix2");

            var carte1 = document.getElementsByClassName('choix1')[0],
                carte2= document.getElementsByClassName('choix2')[0];

            totalClick += 1;
            compteurClickParPaires += 1;

            //Si les 2 cartes sont identiques______________________________
            if (carte1.id == carte2.id){

                carte1.classList.add('appariee');
                carte2.classList.add('appariee');

                var endGame = document.getElementsByClassName('appariee').length;
                if (endGame == 18){

                    alert('Gagné  en '+totalClick+' coups !!!!!');
                }
            }
        }


        //Au 3e clic__________________________________________________
        else if (compteurClickParPaires == 3){

            var carte1 = document.getElementsByClassName('choix1')[0],
                carte2 = document.getElementsByClassName('choix2')[0];
            carte1.classList.remove('selectedCard', 'choix1');
            carte2.classList.remove('selectedCard', 'choix2');

            //Si les 2 cartes sont identiques
            if (carte1.id != carte2.id){
                carte1.style.backgroundImage = "";
                carte2.style.backgroundImage = "";
            }

            compteurClickParPaires = 1;
            compteurClickParPaires += 1;
            totalClick += 1;
            ev.target.classList.add("choix1");

        }
    }

}, false);


//plein de trucs encore à faire!!!!!!