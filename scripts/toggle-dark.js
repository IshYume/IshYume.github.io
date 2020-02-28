function toggleDark(){
    var element=document.body;
    element.classList.toggle("dark-mode");

}
var elm=document.getElementsByClassName("nav-link")
$(elm).hover(
    function(){ $(this).addClass('glow') },
    function(){ $(this).removeClass('glow') }
)