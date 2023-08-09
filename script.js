/******************** Fetching data **********************/
let userData = [];
fetch('./user.json')
.then((response) => response.json())
.then((json) => {
  userData.push(JSON.parse(JSON.stringify(json))['users']);
});

let gradient = [
  "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
  "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
  "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
  "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
];
/******************** LOGIN PAGE VARIABLE ******************************/
let emailElement = document.querySelector(".email");
let passwordElement = document.querySelector(".password");
let emailErrorText = document.querySelector(".email-error-text");
let passwordErrorText = document.querySelector(".password-error-text");
let logoutBox = document.getElementById('loading-popup');
let isPasswordVisible = false;

/******************** LOGIN DATA VALUE ************************************/
let email = "";
let password = "";
let mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/******************** ACTIVITY PAGE VARIABLE ******************************/

let activityTitleElement = document.querySelector(".activity-title");
let activityTimeElement = document.querySelector(".activity-date-time");
let activityDescElement = document.querySelector(".activity-desc");
let activityTitleErrorText = document.querySelector(
  ".activity-title-error-text"
);
let activityTimeErrorText = document.querySelector(".activity-time-error-text");
let activityDescErrorText = document.querySelector(".activity-desc-error-text");

/******************** ACTIVITY DATA VALUE ************************************/
let activityTitle = "";
let activityTime = "";
let activityDesc = "";

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
  .querySelectorAll(".logout-btn").forEach(btn =>{
    btn.onclick = (event) =>{
      event.preventDefault();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userActivity");
      window.location.replace("http://127.0.0.1:5500/login.html");
    }
  });

document.querySelectorAll('.input-suffix').forEach(iconBtn=>{
  iconBtn.onclick = () =>{
    let eye1 = document.querySelector('.fa-eye');
    let eye2 = document.querySelector('.fa-eye-slash');

    isPasswordVisible = !isPasswordVisible;

    if(isPasswordVisible){
      document.getElementById('password').type = "text";
      eye1.style.display = "inline";
      eye2.style.display = "none";
    }else{
      document.getElementById('password').type = "password";
      eye2.style.display = "inline";
      eye1.style.display = "none";
    }
  }
});

document
  .querySelector(".submit-button")?.addEventListener("click", function (event) {
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
        } else {
          let validUser = false;
          let validUserdata = {};
          for (let i = 0; i< userData[0].length;i++) {
            if (email == userData[0][i]['username'] && password == userData[0][i]['password']) {
              console.log('done');
              validUser = true;
              validUserdata = userData[0][i]
              break;
            }
          }
          if(validUser){
            emailElement.style.border = "1px solid #d8d8d8";
              emailErrorText.innerHTML = "";
              passwordElement.style.border = "1px solid #d8d8d8";
              passwordErrorText.innerHTML = "";
              logoutBox.show()
              localStorage.setItem(
                "userInfo",
                JSON.stringify([
                  validUserdata
                ])
              );
              localStorage.setItem("userActivity", JSON.stringify([]));
              setTimeout(()=>{
                logoutBox.close()
                window.location.replace("http://127.0.0.1:5500/index.html");
              },6000)
          }else{
              emailElement.style.border = "1px solid red";
              emailErrorText.innerHTML = "Invalid email.";
              passwordElement.style.border = "1px solid red";
              passwordErrorText.innerHTML = "Invalid password.";
              console.log('if')
          }

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
      activityTitleElement.style.border = "1px solid #d8d8d8";
      activityTitleElement.value = ""
      activityTitleErrorText.innerHTML = "";
      activityTimeElement.style.border = "1px solid #d8d8d8";
      activityTimeElement.value = ""
      activityTimeErrorText.innerHTML = "";
      activityDescElement.style.border = "1px solid #d8d8d8";
      activityDescElement.value = "";
      activityDescErrorText.innerHTML = "";
      let data = JSON.parse(localStorage.getItem("userActivity")) || [];
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
  let activityElementSection = document.querySelector(".activity-card-section");
  let userActivities = JSON.parse(localStorage.getItem("userActivity")) || [];
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
