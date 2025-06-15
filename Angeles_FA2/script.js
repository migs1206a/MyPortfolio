const registrationForm = document.getElementById("registrationForm");
const phoneInput = document.getElementById("phone");

// Prevent non-numeric key input
phoneInput.addEventListener("keydown", function (e) {
  const allowedKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"
  ];
  if (!allowedKeys.includes(e.key) && (e.key < "0" || e.key > "9")) {
    e.preventDefault();
  }
});

// Sanitize pasted input
phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob").value;
  const course = document.getElementById("course").value;
  const terms = document.getElementById("terms").checked;

  const phoneRegex = /^09\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Phone number must start with 09 and contain exactly 11 digits.");
    return;
  }

  if (fullName && email && password && phone && gender && dob && course && terms) {
    alert("Registration Successfully");
    this.reset();
  } else {
    alert("Please fill out all fields and accept the terms.");
  }
});
