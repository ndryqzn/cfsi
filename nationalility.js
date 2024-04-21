// Function to handle nationality selection
function handleNationalitySelection() {
  var nationalitySelect = document.getElementById("nationality");
  var otherNationalityInput = document.getElementById("otherNationality");

  // If "Other" is selected, show the text input for other nationality; otherwise, hide it
  otherNationalityInput.style.display = nationalitySelect.value === "Other" ? "inline" : "none";
}

document.getElementById("nationality").addEventListener("change", handleNationalitySelection);

function checkContactNumber(input) {
  const value = input.value;
  if (value.length > 11) {
    input.value = value.slice(0, 11);
  }
  if (value.length >= 2 && value.slice(0, 2)!== '09') {
    input.setCustomValidity('The first two digits must be 09');
  } else {
    input.setCustomValidity('');
  }
}

function checkLRN(input) {
  const value = input.value;
  if (value.length > 12) {
    input.value = value.slice(0, 12);
  }
  if (value.length < 12) {
    input.setCustomValidity('Please enter exactly 12 digits');
  }else{
    input.setCustomValidity('');
  }
}