var show = [];
let vid = 11;//wont change

for (var i = 0; i < vid; i++) {
    show.append(false);
}

function IFRAMEChange(){
    var obj1,obj2;
    
    for (var i = 1; i<=vid; i++){
        var idss = "IFrameid" + i;
        if (show[i-1] == false){
            console.log(idss);
            obj1 = document.getElementById(idss);
            if(obj1!=null){
                obj1.style.display = "none";   
                show[i-1] = true;}
        }
        else{  
            obj2 =  document.getElementById(idss)
            if(obj2!=null)
                obj2.style.display= "inline";
                show[i-1] = false;
        }
    }

}
