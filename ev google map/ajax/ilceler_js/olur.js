if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "./ilceler_xml/Olur_Mahalle.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var x = xmlDoc.getElementsByTagName("Olur_Mahalle");
var mahalleler = document.getElementById("mahalleler");

for (i = 0; i < x.length; i++) {

    var titleName = x[i].getElementsByTagName("Mahalle_adı")[0].innerHTML;
    var nüfus = x[i].getElementsByTagName("Nüfus")[0].innerHTML;
    var TBnüfus = document.getElementById("TBnüfus");
    var mahalle = document.querySelector("#mahalleler");

    mahalleler.innerHTML += `

        <option value="${titleName}" id="orta" data-chained="olur"> 
        ${"(" + nüfus + ")"} ${"&nbsp"} ${titleName}  
        </option> 

    `;
}