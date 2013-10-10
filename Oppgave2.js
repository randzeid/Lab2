function langlist ()
{
var mylist=document.getElementById("mydropdown");
document.getElementById("lang").value=mylist.options[mylist.selectedIndex].text;
}
