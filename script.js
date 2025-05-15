const input = document.querySelector("#birthday");
const formBtn = document.querySelector(".form-btn");
const result = document.querySelector("#result");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const birthdayValue = input.value;
  if (birthdayValue === "") {
    alert("Please enter your date of birth");
  } else {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthdayDate = new Date(birthdayValue);
    const birthYear = birthdayDate.getFullYear();
    const birthMonth = birthdayDate.getMonth() + 1;
    const birthDay = birthdayDate.getDate();

    let age = currentYear - birthYear;

    // Adjust age if birthday hasn't occurred yet this year
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }
    result.textContent = `Your age is ${age} years old`;
  }
});
