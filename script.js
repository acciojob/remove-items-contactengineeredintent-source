//your JS code here. If required.
let btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click",(event)=>{
  let colorSelect = document.getElementById("colorSelect");
  event.preventDefault();
  let selectedColor = colorSelect.value;
  document.getElementById(`${selectedColor}`).remove();
  // console.log(selectedColor);
});