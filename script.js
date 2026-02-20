function calculate() {
  // Get input values
  let adults = parseInt(document.getElementById("adults").value) || 0;
  let kids = parseInt(document.getElementById("kids").value) || 0;


  let baseCost = 50; 
  let total = (baseCost + adults*20 + kids*10);


  document.getElementById("result").innerText = "$" + total.toFixed(2);
}
