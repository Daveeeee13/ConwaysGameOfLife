var x; //rendo globale tabella

function creaForm(){
    //creo la base del form
    var f=document.createElement("form");
    f.setAttribute("id", "formLifeGame");
    
    //creo campo inserimento dato
    var input=document.createElement("input");
    input.setAttribute("id", "ncelle");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Inserisci il n di celle");

    //bottone invio

    var bottoneinvio=document.createElement("input");
    bottoneinvio.setAttribute("type", "submit");
    bottoneinvio.setAttribute("onclick", "creaTabella()");

    var bottonegioca=document.createElement("button");
    bottonegioca.setAttribute("id", "Gioca");
    bottonegioca.setAttribute("onclick", "gioca()");
    
    
    
    
    document.body.appendChild(f);
    f.appendChild(input);
    document.body.appendChild(bottoneinvio);
    document.body.appendChild(bottonegioca);
    
}


function creaTabella(n1){

    var numerodicelle=document.getElementById("ncelle").value;
    if(numerodicelle<20 || numerodicelle>100){
        numerodicelle=0;
    }

    x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    
    x.style.border = "1px solid";
    x.style.borderCollapse="collapse";
    x.width="100%";
    
    

    for(i=0; i<numerodicelle; i++){


        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        
        document.getElementById("myTable").appendChild(y);
        var t=document.createTextNode("");
        y.appendChild(t);
        
        
        for(j=0; j<numerodicelle; j++){
            
            var z = document.createElement("TD");
            var t = document.createTextNode("");   //testo sulle caselle  
           
            //assegno id + onclick
            z.setAttribute("id", "myTd"+j);
            z.setAttribute("onclick", "clickcella(this);")

            z.style.border="1px solid";
            z.style.height="20px";
            z.style.width="20px";
            z.style.backgroundColor='white';
                        
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }
}

function clickcella(td){

    if(td.style.backgroundColor=='white'){
        td.style.backgroundColor='black';
    }else td.style.backgroundColor='white';   
}

function crea_modello(){
 
    var m=[];    //matrice si dichiara così perché viene vista come un array che contiene gli array delle righe
    

}

function gioca(){

    crea_modello();

}

