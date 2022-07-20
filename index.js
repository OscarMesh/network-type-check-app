var check = document.querySelector("#check");
var containerEl = document.querySelector(".container");
var number = document.querySelector("#number");
// var text = document.querySelector("#text");
var messageEL = document.querySelector(".message");

const logo = {
  MTN: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg",
  "9MOBILE":
    "https://www.seekpng.com/png/full/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png",
  GLO: "https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png",
  AIRTEL:
    "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png",
};
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
  messageEL.innerHTML = "";
  message = document.createElement("p");
  img = document.createElement("img");
  messageEL.appendChild(message);
  messageEL.appendChild(img);
  containerEl.appendChild(messageEL);

  for (const property in prefixes) {
    if (phoneNumber == "") {
      message.innerText = "Please Enter your mobile number!";
      return;
    } else if (phoneNumber.length.toString() !== "11") {
      message.innerText = "OOPS! You entered non valid phone number";
      message.style.color = "#da3400";
      return;
    } else if (prefixes[property].includes(phoneNumber.substring(0, 4))) {
      message.innerText = `Your mobile number is ${property}`;
      img.src = `${logo[property]}`;
      return;
    }
  }
});
