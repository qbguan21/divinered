/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
        
        
function myFunction(x){
    x.classList.toggle("change");
}

/*when user click on the button, toggle between hiding and showing the dropdown content*/
function myFunction3(){
    document.getElementbyId("myDropdown").classList.toggle("show");
    
/*Close the dropdowwn if the user click outside of it*/
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
  };
}

function euroConverter(){
    document.converter.dollar.value = document.converter.euro.value * 1.470;
    document.converter.pound.value = document.converter.euro.value * 0.717;
    document.converter.yen.value = document.converter.euro.value * 165.192;
    document.converter.rm.value = document.converter.euro.value * 4.79;
}
    
function dollarConverter(){
    document.converter.euro.value = document.converter.dollar.value * 0.680;
    document.converter.pound.value = document.converter.dollar.value * 0.488;
    document.converter.yen.value = document.converter.dollar.value * 112.36;
    document.converter.rm.value = document.converter.dollar.value * 3.88;
}

function poundConverter(){
    document.converter.dollar.value = document.converter.pound.value * 2.049;
    document.converter.euro.value = document.converter.pound.value * 1.394;
    document.converter.yen.value = document.converter.pound.value * 230.27;
    document.converter.rm.value = document.converter.pound.value * 5.53;
}

function yenConverter(){
    document.converter.dollar.value = document.converter.yen.value * 0.0089;
    document.converter.pound.value = document.converter.yen.value * 0.00434;
    document.converter.euro.value = document.converter.yen.value * 0.00605;
    document.converter.rm.value = document.converter.yen.value * 0.036;
}

function rmConverter(){
    document.converter.dollar.value = document.converter.rm.value * 0.26;
    document.converter.pound.value = document.converter.rm.value * 0.18;
    document.converter.euro.value = document.converter.rm.value * 0.21;
    document.converter.yen.value = document.converter.rm.value * 27.73;
}
 
 
