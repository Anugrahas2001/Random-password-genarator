let inputValue = document.querySelector(".password-input");

let pwdGenerateBtn = document.querySelector(".password-button");

let displayPassword = document.querySelector(".sectret-password");

const lowercaseOnly = (inputData) => {
  let lower = /^[a-z]+$/g;
  let result = lower.test(inputData);
  return result;
};

const secretPassword = (inputData) => {
    if(inputData.length!==8){
        alert("Enter 8 digit password");
    }
  // Step 1
  if (!lowercaseOnly(inputData) || inputData.length > 9) {
    console.log("BANG BANG BANG!!!");
    alert("Please Enter valid value")
    return;
  }

  // Step 2
const matchResult = inputData.match(/.{1,3}/g);
if (!matchResult) {
  console.log("Invalid input");
  return;
}
const [firstSet, secondSet, thirdSet] = matchResult;

// Step 3
const firstLetter = firstSet.split("")[0].charCodeAt() - 96;
const secondLetter = firstSet.split("")[1];
const thirdLetter = firstSet.split("")[2].charCodeAt() - 96;
const firstSetArray = [firstLetter, secondLetter, thirdLetter];
console.log(firstSetArray);


  // Step 4
  const secondSetArray = secondSet.split("").reverse();

  // Step 5
  const thirdSetArray = thirdSet.split("");

  // Step 6
  const finalArray = [...secondSetArray, ...thirdSetArray, ...firstSetArray];
  const password = finalArray.join("").toString();
  return password;
};

pwdGenerateBtn.addEventListener("click", function () {
    let inputValue = document.querySelector(".password-input").value;
    let secretPasswordResult = secretPassword(inputValue);
    console.log(secretPasswordResult);
    displayPassword.innerHTML= secretPasswordResult;
  });
