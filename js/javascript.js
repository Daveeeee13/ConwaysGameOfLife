var x; //rendo globale tabella; prima era dentro alla funzione creatabella
var numerodicelle;
var m=[]; //dichiarazione globale matrice

function creaForm(){
    //creo la base del form
    var f=document.createElement("form");
    f.setAttribute("id", "formLifeGame");
    
    //creo campo inserimento dato
    var input=document.createElement("input");
    input.setAttribute("id", "ncelle");
    input.setAttribute("type", "number");
    input.setAttribute("min", "20");
    input.setAttribute("max", "100");
    input.setAttribute("placeholder", "N.celle");

    //bottone invio

    var bottoneinvio=document.createElement("input");
    bottoneinvio.setAttribute("type", "submit");
    bottoneinvio.setAttribute("onclick", "creaTabella()");

    var bottonegioca=document.createElement("button");
    bottonegioca.setAttribute("id", "Gioca");
    bottonegioca.setAttribute("onclick", "gioca()");
    
    
    //appendo tutto sulla pagina
    document.body.appendChild(f);
    f.appendChild(input);
    document.body.appendChild(bottoneinvio);
    document.body.appendChild(bottonegioca);
    
}


function creaTabella(n1){

    numerodicelle=document.getElementById("ncelle").value;
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

function crea_matrice(){
 
    //m=[];    matrice si dichiara così perché viene vista come un array che contiene gli array delle righe

    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            if(x.rows[i].cells[j].style.backgroundColor=='black')
                m[i][j]=1;                  //1 è come dire true se avessi un booleano true
        }
    }

}

function inizializza_matrice(){

    for(i=0; i<numerodicelle; i++){
        var r=[];                       //ciclo per le righe
        for(j=0; j<numerodicelle; j++){
            r[j]=0;                     //ciclo per riempire la riga
        }
        m[i]=r;
    }

}

function azzera_matrice(){

    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            console.log("m["+i+","+j+"] ="+m[i][j]);
        }
    }

}

function stampa_matrice(){

    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            console.log("m["+i+","+j+"] ="+m[i][j]);
        }
    }

}



function gioca(){

   
    inizializza_matrice() //test matrice
    crea_matrice();

    stampa_matrice();
}

