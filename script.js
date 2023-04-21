let menu = false;

function mostrarMenu(){
    if(menu){
        document.getElementById("nav").classList ="";
        menu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menu = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menu = false;
}


function efectoAparecer(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=400){
        let cards = document.getElementsByClassName("card");
        for(aux of cards){
            aux.classList.add("active");
        }
    }
}

window.onscroll = function(){
    efectoAparecer();
} 


// envio del correo del formulario
