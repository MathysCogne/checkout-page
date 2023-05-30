document.addEventListener("DOMContentLoaded", function() {
   const inputs = document.querySelectorAll(".styled-input input[type='number']");

   inputs.forEach(function(input) {
      const decreaseBtn = document.createElement("div");
      decreaseBtn.className = "styled-input-minus";
      decreaseBtn.addEventListener("click", function() {
         if (parseInt(input.value) > parseInt(input.min)) {
            input.value = parseInt(input.value) - 1;
         }
      });
      input.parentNode.insertBefore(decreaseBtn, input);

      const increaseBtn = document.createElement("div");
      increaseBtn.className = "styled-input-plus";
      increaseBtn.addEventListener("click", function() {
         if (parseInt(input.value) < parseInt(input.max)) {
            input.value = parseInt(input.value) + 1;
         }
      });
      input.parentNode.insertBefore(increaseBtn, input.nextSibling);
   });
});