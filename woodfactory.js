var cursussen = [{cursusnaam:"houtsoorten herkennen",duurtijd:"4 weken", prijs:259},
    {cursusnaam:"planken zagen",duurtijd:"4 dagen", prijs:138},
    {cursusnaam:"parketvloer leggen",duurtijd:"2 dagen", prijs:57},
    {cursusnaam:"hout beitsen",duurtijd:"4 uren", prijs:21},
    {cursusnaam:"houtbewerking",duurtijd:"2 weken", prijs:204}];
var houtsoorten = [["bangkirai","stuks"],
    ["beukenhout","stuks"],
    ["dennenhout","stuks"],
    ["eikenhout","stuks"],
    ["kastanjehout","stuks"],
    ["lindehout","stuks"],
    ["notenhout","stuks"],
    ["rubberhout","stuks"],
    ["cederhout","kg"]];

window.onload = function(){
    //toevoegen van opties cursussen
    addCursussenSelection();
    //toevoegen van houtsoorten deel pagine
    addHoutsoorten();
    
    var frmUser = document.frmUserform;
    var bangkirai = document.frmVlucht.chk_bangkirai;
    console.log(bangkirai);
    //adding an eventes
    addeventhoutsoort();
    
    //console.log(frmUser);
    
}

function addCursussenSelection(){
    var select =  document.getElementById("woodcursus");
    for(i = 0;i < cursussen.length+1; i++){
        var option = document.createElement("option");
        var j = i-1;
        if(j<0){
            var optiontext = document.createTextNode("---maak een keuze---");
        }else{
            var optiontext = document.createTextNode(cursussen[j].cursusnaam);
        }
        option.appendChild(optiontext);
        select.appendChild(option);
    }
}

function addHoutsoorten(){
    //select van de container
    var houtsoortlock = document.getElementById("houtsoorten");
    for(i=0;i<houtsoorten.length;i++){
        //creatie div element control-group
        var controlgroup = document.createElement("div");
        controlgroup.className = "control-group";
            //creatie label element
            var controllabel = document.createElement("label");
            controllabel.className = "control-label";
            //alles die bij het label hoort
                //arr van 1 houtsoort
                var houtsoort = houtsoorten[i];
                var cntrlblTxt = document.createTextNode(houtsoort[0]);
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = "chk_"+houtsoort[0];

                controllabel.appendChild(cntrlblTxt);
                controllabel.appendChild(checkbox);
            //einde label element
            //creatie div element
            var controls = document.createElement("div");
            controls.className = "controls";
                var inputappend = document.createElement("div");
                inputappend.className = "input-append";
                    var inpbox = document.createElement("input");
                    inpbox.className = "inpbox input-mini";
                    inpbox.type = "text";
                    inpbox.id = houtsoort[0];
                    inpbox.name = houtsoort[0];
                    inpbox.placeholder = houtsoort[1];
                    inpbox.disabled = true;
                    var addon = document.createElement("span");
                    addon.className = "add-on";
                        var addonTxt = document.createTextNode(houtsoort[1]);
                        
                        addon.appendChild(addonTxt);
                        
                inputappend.appendChild(inpbox);
                inputappend.appendChild(addon);
                
            controls.appendChild(inputappend);
            
        controlgroup.appendChild(controllabel);
        controlgroup.appendChild(controls);
    houtsoortlock.appendChild(controlgroup);
    }
}

//function addeventcheckboxes(frm){
//    var addevent=[];
//    for(i=0;i<houtsoorten.length;i++){
//        var houtsoort = houtsoorten[i];
//        addevent[i]= document.frm."chk_"+houtsoort[0];
//        addevent[i].addEventListener('click', function(){
//            changestate(this.value);
//        });
//    }
//}

//function changestate(waarde){
//    console.log("geen idee")
//}

function addeventhoutsoort(){
    for(i=0;i<houtsoorten.length;i++){
        var houtsoort = houtsoorten[i];
        var einputcheckbox = document.getElementById("chk_"+houtsoort[0]);
        einputcheckbox.o = "changestate(i);"
        console.log(einputcheckbox);
    } 
}