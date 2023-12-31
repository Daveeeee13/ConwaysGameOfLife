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

    var bottoneinvio=document.createElement("button");
    bottoneinvio.setAttribute("id", "invio");
    bottoneinvio.setAttribute("onclick", "creaTabella()");
    bottoneinvio.innerHTML = "Invio";

    //bottone gioca
    var bottonegioca=document.createElement("button");
    bottonegioca.setAttribute("id", "Gioca");
    bottonegioca.setAttribute("onclick", "gioca()");
    bottonegioca.innerHTML = "Gioca";

    //contenitore div
    var contenitore=document.createElement("div");
    contenitore.setAttribute("id", "contenitore");
    //contenitore.setAttribute("marginTop", );

    
    //appendo tutto sulla pagina
    document.body.appendChild(f);
    f.appendChild(input);
    document.body.appendChild(bottoneinvio);
    document.body.appendChild(bottonegioca);
    document.body.appendChild(contenitore);
    
}


function creaTabella(){

    numerodicelle=document.getElementById("ncelle").value;
    if(numerodicelle<20 || numerodicelle>100){
        numerodicelle=0;
    }

    x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("contenitore").appendChild(x);
    
    
    x.style.border = "1px solid";
    x.style.borderCollapse="collapse";
    //x.width="100%";
    


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
            z.style.height="1em";
            z.style.width="1em";
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

function aggiorna_matrice(){
 
    //m=[];    matrice si dichiara così perché viene vista come un array che contiene gli array delle righe

    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            if(x.rows[i].cells[j].style.backgroundColor=='black'){
                m[i][j]=1;                  //1 è come dire true se avessi un booleano true
            }else m[i][j]=0;
                
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
    var str="";
    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            //console.log("m["+i+","+j+"] ="+m[i][j]);
            str=str+m[i][j]+" ";
        }
        str=str+"\n";
        console.log(str);
    }

}

function verifica_cella(r,c) {
	var cont=0;
//	for(var i = r-1;i <= r+1;r++){ ERRORE!
	for(var i = r-1;i <= r+1; i++){
		for(var j = c-1;j <= c+1;j++){
			if (!((i==r && j==c) || i<0 || j<0 || j>=numerodicelle || i>=numerodicelle)){
				if(m[i][j]==1)
					cont++;
			}	
		}
	}	
	return cont;
}

function verifica_cella2(r, c)
{
    var cont = 0;
    for (var i = r - 1; i <= r + 1; i++)
        for (var j = c - 1; j <= c + 1; j++)
            if (!( (i == r && j == c) || i < 0 || j < 0 || i >= numerodicelle || j >= numerodicelle ))
                if ( m[i][j] == 1)
                    cont++;
    return cont;
}

function controlla_matrice(){    
    var conteggio;

    aggiorna_matrice();

    for(i=0; i<numerodicelle; i++){
        for(j=0; j<numerodicelle; j++){
            conteggio=verifica_cella(i, j);
            console.log("m["+i+","+j+"] = "+conteggio);
            if(m[i][j]==1 && conteggio<2){
                //m[i][j]=0;
                x.rows[i].cells[j].style.backgroundColor="white";
            }else if(m[i][j]==1 && conteggio>3){
                //m[i][j]=0;
                x.rows[i].cells[j].style.backgroundColor="white";
            }else if(m[i][j]==0 && conteggio==3){
                //m[i][j]=1;
                x.rows[i].cells[j].style.backgroundColor="black";
            }
        }
    }
    stampa_matrice();
}

/*function gioca(){

   
    inizializza_matrice();
	
	for (var i = 0; i <= 10; i++) {
		aggiorna_matrice();
		// Applico le regole di Life
		controlla_matrice();
		stampa_matrice();
	}

}*/

function gioca(){
    inizializza_matrice();
        
        setInterval("controlla_matrice()", 1000);
    
    
        

}
