const input = document.getElementById("input");
const span_div = document.getElementById("span_div");



document.getElementById("myButton").addEventListener("click", function() {
    if(input.value == "" ) {
        alert("PLease Enter The Task");
    }else{
       let newEl = document.createElement("span");
       newEl.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
       newEl.classList.add("span");
       span_div.appendChild(newEl);
       newEl.addEventListener("click", function() {
        newEl.remove();
       })
    }

});

