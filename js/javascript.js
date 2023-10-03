function creaTabella(n1, n2){
    /*var tabella = document.getElementById("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(tabella); */

    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    
    

    for(i=0; i<n1; i++){

        /*var y = document.createElement("tr");
        y.setAttribute("id", "myTr");
        tabella.appendChild(y);*/

        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        document.getElementById("myTable").appendChild(y);
        var t=document.createTextNode("prova");
        y.appendChild(t);
        

        for(j=0; j<n2; j++){
            /*var z = document.createElement("td");
            var t = document.createTextNode("cell");
            y.appendChild(t);
            tabella.appendChild(z);*/
            
            var z = document.createElement("TD");
            var t = document.createTextNode("prova");
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }
}