function creaTabella(n1, n2){
    


    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    
    x.style.border = "1px solid";
    x.style.borderCollapse="collapse";
    
    

    for(i=0; i<n1; i++){


        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        document.getElementById("myTable").appendChild(y);
        var t=document.createTextNode("");
        y.appendChild(t);
        

        for(j=0; j<n2; j++){
            
            var z = document.createElement("TD");
            var t = document.createTextNode(" ");   //esto sulle caselle
            z.style.border="1px solid";
            z.style.height="20px";
            z.style.width="20px";
            
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }
}