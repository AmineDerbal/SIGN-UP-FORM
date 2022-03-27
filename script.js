const firstName =document.getElementById('first-name');
const lastName =document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const phoneNumberError = document.getElementById('phone-number-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

firstName.addEventListener("input", (e)=>{
if(firstName.value === "") {
  firstNameError.textContent = "Please enter your first name";
}
else{
  firstNameError.textContent ="";
}
});

lastName.addEventListener("input",(e)=>{
  if(lastName.value === "") {
    lastNameError.textContent = "Please enter your last name";
  }
  else{
    lastNameError.textContent ="";
  }
});

email.addEventListener("input",(e)=>{
  if(email.validity.patternMismatch){
   emailError.textContent="Please enter a valid email";
  }
  else{
    emailError.textContent="";
  }
});

phoneNumber.addEventListener("input",(e)=>{
  if(phoneNumber.validity.patternMismatch){
    phoneNumberError.textContent ="please enter a 10 digit phone number";
  }
  else{
    phoneNumberError.textContent ="";
  }
});

password.addEventListener("input",(e)=>{
  if(password.validity.patternMismatch){
    const currentValue = password.value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    let result = '';
    if (regExpCap.test(currentValue)){
      result += '';
    } else {
      result += `Missing at least 1 capital letter. `;
      result += '\n\r';
    }
    
    
    if (regExpDig.test(currentValue)){
      result += '';
    } else {
      result += 'Missing at least 1 number. ';
      result += '\n';
    }
    
    if (currentValue.length < 9){
      result += 'Password must be at least 8 characters. '
      result += '\n';
    } else {
      result += '';
    }

    console.log(result);
    passwordError.textContent = result;


  } else {
    passwordError.textContent = '';
  }
});

confirmPassword.addEventListener("input",(e)=>{
  if (confirmPassword.value != password.value){
    confirmPasswordError.textContent ="Passwords do not match";
  }
  else{
    confirmPasswordError.textContent ="";
  }
} );

