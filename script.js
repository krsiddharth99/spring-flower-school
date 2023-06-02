var gradient = [
  "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
  "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
  "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
  "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
];
/******************** LOGIN PAGE VARIABLE ******************************/
var emailElement = document.querySelector(".email");
var passwordElement = document.querySelector(".password");
var emailErrorText = document.querySelector(".email-error-text");
var passwordErrorText = document.querySelector(".password-error-text");
var logoutBox = document.getElementById('loading-popup');

/******************** LOGIN DATA VALUE ************************************/
var email = "";
var password = "";
var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/******************** ACTIVITY PAGE VARIABLE ******************************/

var activityTitleElement = document.querySelector(".activity-title");
var activityTimeElement = document.querySelector(".activity-date-time");
var activityDescElement = document.querySelector(".activity-desc");
var activityTitleErrorText = document.querySelector(
  ".activity-title-error-text"
);
var activityTimeErrorText = document.querySelector(".activity-time-error-text");
var activityDescErrorText = document.querySelector(".activity-desc-error-text");

/******************** ACTIVITY DATA VALUE ************************************/
var activityTitle = "";
var activityTime = "";
var activityDesc = "";

/******************* ACTIVITY FIELD UPDATE **************************************/
document
  .querySelector(".activity-title")
  ?.addEventListener("change", function (event) {
    activityTitle = event.target.value;
  });
document
  .querySelector(".activity-date-time")
  ?.addEventListener("change", function (event) {
    activityTime = event.target.value;
  });
document
  .querySelector(".activity-desc")
  ?.addEventListener("change", function (event) {
    activityDesc = event.target.value;
  });

/******************* LOGIN FIELD UPDATE **************************************/
document.querySelector(".email")?.addEventListener("change", function (event) {
  email = event.target.value;
});
document
  .querySelector(".password")
  ?.addEventListener("change", function (event) {
    password = event.target.value;
  });

document
  .querySelector(".logout-btn")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userActivity");
    window.location.replace("http://127.0.0.1:5500/login.html");
  });

document
  .querySelector(".submit-button")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      (email.length === 0 || email.length === null) &&
      (password.length === 0 || password.length === null)
    ) {
      emailElement.style.border = "1px solid red";
      emailErrorText.innerHTML = "Please enter your email.";
      passwordElement.style.border = "1px solid red";
      passwordErrorText.innerHTML = "Please enter your password.";
    } else {
      if (email.match(mailRegEx)) {
        if (password.length === 0 || password.length === null) {
          emailElement.style.border = "1px solid #d8d8d8";
          emailErrorText.innerHTML = "";
          passwordElement.style.border = "1px solid red";
          passwordErrorText.innerHTML = "Please enter your password.";
        } else if (email !== "demo@gmail.com" || password !== "demo@1234") {
          emailElement.style.border = "1px solid red";
          emailErrorText.innerHTML = "Invalid email.";
          passwordElement.style.border = "1px solid red";
          passwordErrorText.innerHTML = "Invalid password.";
        } else {
          emailElement.style.border = "1px solid #d8d8d8";
          emailErrorText.innerHTML = "";
          passwordElement.style.border = "1px solid #d8d8d8";
          passwordErrorText.innerHTML = "";
          logoutBox.show()
          localStorage.setItem(
            "userInfo",
            JSON.stringify([
              {
                firstName: "Siddharth",
                middleName: "",
                lastName: "Kumar",
                age: 22,
                dob: "21-02-2001",
                sibling: 3,
                fatherName: "Hemant Kumar",
                motherName: "Pushplata Devi",
                totalFamily: 5,
                addressLine1: "M IIC/112,Sector-C",
                addressLine2: "Aliganj,Yojanakipuram, Sitapur Road",
                city: "Lucknow",
                country: "India",
                pincode: "226021",
                citizen: "India",
              },
            ])
          );
          localStorage.setItem("userActivity", JSON.stringify([]));
          setTimeout(()=>{
            logoutBox.close()
            window.location.replace("http://127.0.0.1:5500/index.html");
          },6000)
        }
      } else {
        emailElement.style.border = "1px solid red";
        emailErrorText.innerHTML =
          "Please Fill the valid email 'ex : xyz@gmail'";
      }
    }
  });

document
  .querySelector(".extra-activity-button")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      (activityTime.length === null || activityTime.length === 0 || activityTime === "") &&
      (activityDesc.length === null || activityDesc.length === 0 || activityDesc === "") &&
      (activityTitle.length === null ||
      activityTitle.length === 0 || activityTitle === "")
    ) {
      activityTitleElement.style.border = "1px solid red";
      activityTitleErrorText.innerHTML = "Please enter your title.";
      activityTimeElement.style.border = "1px solid red";
      activityTimeErrorText.innerHTML = "Please enter your time.";
      activityDescElement.style.border = "1px solid red";
      activityDescErrorText.innerHTML = "Please enter your Description.";
    }else if (
      (activityTime.length !== null || activityTime.length !== 0 || activityTime !== "") &&
      (activityDesc.length === null || activityDesc.length === 0 || activityDesc === "") &&
      (activityTitle.length === null ||
      activityTitle.length === 0 || activityTitle === "")
    ) {
      activityTitleElement.style.border = "1px solid red";
      activityTitleErrorText.innerHTML = "Please enter your title.";
      activityTimeElement.style.border = "1px solid #d8d8d8";
      activityTimeErrorText.innerHTML = "";
      activityDescElement.style.border = "1px solid red";
      activityDescErrorText.innerHTML = "Please enter your Description.";
    }else if (
      (activityTime.length === null || activityTime.length === 0 || activityTime === "") &&
      (activityDesc.length !== null || activityDesc.length !== 0 || activityDesc !== "") &&
      (activityTitle.length === null ||
      activityTitle.length === 0 || activityTitle === "")
    ) {
      activityTitleElement.style.border = "1px solid red";
      activityTitleErrorText.innerHTML = "Please enter your title.";
      activityTimeElement.style.border = "1px solid red";
      activityTimeErrorText.innerHTML = "Please enter your time.";
      activityDescElement.style.border = "1px solid #d8d8d8";
      activityDescErrorText.innerHTML = "";
    }else if (
      (activityTime.length === null || activityTime.length === 0 || activityTime === "") &&
      (activityDesc.length === null || activityDesc.length === 0 || activityDesc === "") &&
      (activityTitle.length !== null ||
      activityTitle.length !== 0 || activityTitle !== "")
    ) {
      activityTitleElement.style.border = "1px solid #d8d8d8";
      activityTitleErrorText.innerHTML = "";
      activityTimeElement.style.border = "1px solid red";
      activityTimeErrorText.innerHTML = "Please enter your time.";
      activityDescElement.style.border = "1px solid red";
      activityDescErrorText.innerHTML = "Please enter your Description.";
    }else if((activityTime.length !== null || activityTime.length !== 0 || activityTime !== "") &&
    (activityDesc.length !== null || activityDesc.length !== 0 || activityDesc !== "") &&
    (activityTitle.length !== null ||
    activityTitle.length !== 0 || activityTitle !== "")){
      var data = JSON.parse(localStorage.getItem("userActivity")) || [];
      data.push({
        title: activityTitle,
        time: activityTime,
        desc: activityDesc,
      });
      localStorage.setItem("userActivity", JSON.stringify(data));
      renderActivityCard();
    }
  });

function renderActivityCard() {
  var activityElementSection = document.querySelector(".activity-card-section");
  var userActivities = JSON.parse(localStorage.getItem("userActivity")) || [];
  activityElementSection.innerHTML = "";
  if (userActivities.length <= 0) {
    activityElementSection.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center h-100">
                <b class="mb-4">No Data Available</b>
                <img src="./assets/imgs/empty.svg" alt="empty" width="200" />
            </div>`;
  } else {
    userActivities.map((activity) => {
      var activityCard = document.createElement("div");
      activityCard.className = "activity-card";
      activityCard.style.background = gradient[Math.round(Math.random() * (gradient.length-1))];

      var innerDiv = document.createElement("div");
      innerDiv.className = "d-flex justify-content-between align-items-center";

      var titleElement = document.createElement("h4");
      titleElement.textContent = activity.title;

      var timeElement = document.createElement("time");
      timeElement.className = "date-time-container";
      timeElement.textContent = activity.time;

      var underLine = document.createElement("hr");
      underLine.className = "mt-1 mb-1";

      innerDiv.appendChild(titleElement);
      innerDiv.appendChild(timeElement);

      var paragraphElement = document.createElement("p");
      paragraphElement.textContent = activity.desc;

      activityCard.appendChild(innerDiv);
      activityCard.appendChild(underLine);
      activityCard.appendChild(paragraphElement);

      activityElementSection.appendChild(activityCard);
    });
  }
}
