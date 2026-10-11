//your JS code here. If required.
let btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click",(event)=>{
  let colorSelect = document.getElementById("colorSelect");
  event.preventDefault();
  colorSelect.options[colorSelect.selectedIndex].remove();
  // console.log(selectedColor);
});