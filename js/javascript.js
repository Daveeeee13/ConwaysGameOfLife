function creaTabella(n1){

    

    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    
    x.style.border = "1px solid";
    x.style.borderCollapse="collapse";
    x.width="100%";
    
    

    for(i=0; i<n1; i++){


        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        
        document.getElementById("myTable").appendChild(y);
        var t=document.createTextNode("");
        y.appendChild(t);
        
        
        for(j=0; j<n1; j++){
            
            var z = document.createElement("TD");
            var t = document.createTextNode("");   //testo sulle caselle  
           
            
            //assegno id + onclick
            z.setAttribute("id", "myTd"+j);
            z.setAttribute("onclick", "clickcella(id);")
            //z.addEventListener("click", clickcella();
            //let idcella=document.getElementById("myTd"+j);

            
            
            z.style.border="1px solid";
            z.style.height="20px";
            z.style.width="20px";
            
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }
}

function clickcella(id){
    cella=document.getElementById(id);
    cella.style.backgroundColor='black';
    
    
}