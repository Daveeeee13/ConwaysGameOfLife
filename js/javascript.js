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
    
    
    
    
    document.body.appendChild(f);
    f.appendChild(input);
    document.body.appendChild(bottoneinvio);
    
}


function creaTabella(n1){

    var numerodicelle=document.getElementById("ncelle").value;
    if(numerodicelle<20 || numerodicelle>100){
        numerodicelle=0;
    }

    var x = document.createElement("TABLE");
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
                        
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }
}

function clickcella(td){
    td.style.backgroundColor='black';
    
    
}