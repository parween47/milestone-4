var startProcess = document.getElementById("getResumeButton");
startProcess.addEventListener("click", function (e) {
    e.preventDefault();
    buildResume();
});
function buildResume() {
    var _a;
    var nameInput = document.getElementById("name");
    var jobTitleInput = document.getElementById("jobTitle");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var linkdinInput = document.getElementById("linkdin");
    var addressInput = document.getElementById("address");
    var personalDetailInput = document.getElementById("personalDetail");
    var certificateInput = document.getElementById("certificate");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    var profileImageInput = document.getElementById("profileImage");
    var currentImage = document.getElementById("profilePic");
    var name = nameInput.value;
    var jobTitle = jobTitleInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var linkdin = linkdinInput.value;
    var address = addressInput.value;
    var personalDetail = personalDetailInput.value;
    var certificate = certificateInput.value
        .split(",")
        .map(function (element) { return element.trim(); });
    var education = educationInput.value
        .split(",")
        .map(function (element) { return element.trim(); });
    var experience = experienceInput.value
        .split(",")
        .map(function (element) { return element.trim(); });
    var skill = skillsInput.value
        .split(",")
        .map(function (element) { return element.trim(); });
    // Updating profile section
    var nameOutput = document.getElementById("nameCv");
    var jobTitleOutput = document.getElementById("jobTitleCv");
    var emailOutput = document.getElementById("emailCv");
    var phoneOutput = document.getElementById("phoneCv");
    var linkdinOutput = document.getElementById("linkdinCv");
    var addressOutput = document.getElementById("addressCv");
    var personalDetailOutput = document.getElementById("personalDetailCv");
    nameOutput.textContent = name || "John Doe";
    jobTitleOutput.textContent = jobTitle || "Job Title";
    emailOutput.textContent = email || "***@gmail.com";
    phoneOutput.textContent = phone || "03*********";
    linkdinOutput.textContent = linkdin || "John Doe";
    addressOutput.textContent = address || "1234 Oakwood Drive";
    personalDetailOutput.innerHTML =
        personalDetail ||
            "Highly motivated and adaptable professional with a strong work ethic and passion for learning. Proven ability to collaborate effectively and drive results in dynamic environment.";
    var skillsCv = document.getElementById("skillsCv");
    skillsCv.innerHTML = "";
    skill.forEach(function (element) {
        var skillElement = document.createElement("li");
        if (element == undefined) {
            skillElement.textContent = "English Communication";
        }
        else {
            skillElement.textContent = element;
        }
        skillsCv.appendChild(skillElement);
    });
    var educationCv = document.getElementById("educationCv");
    educationCv.innerHTML = "";
    for (var i = 0; i < education.length; i += 3) {
        var degree = education[i];
        var place = education[i + 1];
        var year = education[i + 2];
        var yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = "".concat(year || "");
        yearElement.contentEditable = "true";
        var degreeElement = document.createElement("P");
        degreeElement.innerHTML = "<b><span>".concat(degree || "Degree in higher education", "</span></b>");
        degreeElement.contentEditable = "true";
        var placeElement = document.createElement("P");
        placeElement.innerHTML = "".concat(place || "Abc college");
        placeElement.contentEditable = "true";
        var lineBreakElement = document.createElement("br");
        educationCv.appendChild(yearElement);
        educationCv.appendChild(degreeElement);
        educationCv.appendChild(placeElement);
        educationCv.appendChild(lineBreakElement);
    }
    var experienceCv = document.getElementById("experienceCv");
    experienceCv.innerHTML = "";
    for (var i = 0; i < experience.length; i += 3) {
        var postName = experience[i];
        var corporation = experience[i + 1];
        var year = experience[i + 2];
        var yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = "".concat(year || "");
        yearElement.contentEditable = "true";
        var postElement = document.createElement("P");
        postElement.innerHTML = "<b><span>".concat(postName || "ABC Post", "</span></b>");
        postElement.contentEditable = "true";
        var corporationElement = document.createElement("P");
        corporationElement.innerHTML = "".concat(corporation || "Abc corporation");
        corporationElement.contentEditable = "true";
        var lineBreakElement = document.createElement("br");
        experienceCv.appendChild(yearElement);
        experienceCv.appendChild(postElement);
        experienceCv.appendChild(corporationElement);
        experienceCv.appendChild(lineBreakElement);
    }
    var certificationContainer = document.getElementById("certificationContainer");
    certificationContainer.innerHTML = "";
    for (var i = 0; i < certificate.length; i += 3) {
        var courseName = certificate[i];
        var academy = certificate[i + 1];
        var year = certificate[i + 2];
        var yearElement = document.createElement("P");
        yearElement.style.float = "right";
        yearElement.innerHTML = "".concat(year || "");
        yearElement.contentEditable = "true";
        var courseElement = document.createElement("P");
        courseElement.innerHTML = "<b><span>".concat(courseName || "XYZ course", "</span></b>");
        courseElement.contentEditable = "true";
        var academyElement = document.createElement("P");
        academyElement.innerHTML = "".concat(academy || "XYZ institute");
        academyElement.contentEditable = "true";
        var lineBreakElement = document.createElement("br");
        certificationContainer.appendChild(yearElement);
        certificationContainer.appendChild(courseElement);
        certificationContainer.appendChild(academyElement);
        certificationContainer.appendChild(lineBreakElement);
    }
    var file = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        currentImage.src = URL.createObjectURL(file);
    }
}
