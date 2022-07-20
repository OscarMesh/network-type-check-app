var check = document.querySelector("#check");
var number = document.querySelector("#number");
var text = document.querySelector("#text");

const prefixes = {
  MTN: [
    "0803",
    "0806",
    "0703",
    "0706",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
    "0916",
  ],
  GLO: [" 0805", "0807", "0811", "0705", "0815", "0905"],
  AIRTEL: ["0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901"],
  "9MOBILE": ["0809", "0817", "0818", "0908", "0909"],
};
check.addEventListener("click", () => {
  var phoneNumber = number.value;

  if (phoneNumber == "") {
    text.innerText = "Please Enter your mobile number!";
    text.style.color = "#da3400";
  } else if (phoneNumber.length.toString() !== "11") {
    text.innerText = "OOPS! You entered non valid phone number";
    text.style.color = "#da3400";
  } else {
    text.innerText = "Enter a valid phone Number";
  }

  for (const property in prefixes) {
    if (prefixes[property].includes(phoneNumber.substring(0, 4)) && phoneNumber.length.toString() == '11') {
      text.innerText = `Your mobile number is ${property}`;
    }
  }
});
