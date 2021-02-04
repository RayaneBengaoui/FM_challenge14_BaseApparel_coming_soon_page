const emailInput = document.querySelector("#emailInput");
const errorImg = document.querySelector(".error");

const emailSyntaxCheck = (string) => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(string);
};

const removeErrorStyle = () => {
  errorImg.classList.remove("active");
  emailInput.classList.remove("inputError");
};

emailInput.addEventListener("input", (e) => {
  if (!emailSyntaxCheck(e.target.value)) {
    errorImg.classList.add("active");
    emailInput.classList.add("inputError");
  } else {
    removeErrorStyle();
  }
  e.target.value === "" ? removeErrorStyle() : "";
});
