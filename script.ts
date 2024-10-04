const startProcess: any = document.getElementById("getResumeButton");
startProcess.addEventListener("click", (e: any) => {
  e.preventDefault(); 

  buildResume(); 
});

function buildResume() {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const linkdinInput = document.getElementById("linkdin") as HTMLInputElement;
  const addressInput = document.getElementById("address") as HTMLInputElement;
  const personalDetailInput = document.getElementById(
    "personalDetail"
  ) as HTMLTextAreaElement;
  const certificateInput = document.getElementById(
    "certificate"
  ) as HTMLInputElement;
  const educationInput = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const experienceInput = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const profileImageInput: HTMLInputElement = document.getElementById(
    "profileImage"
  ) as HTMLInputElement;
  const currentImage: HTMLImageElement = document.getElementById(
    "profilePic"
  ) as HTMLImageElement;

  const name: string = nameInput.value;
  const jobTitle: string = jobTitleInput.value;
  const email: string = emailInput.value;
  const phone: string = phoneInput.value;
  const linkdin: string = linkdinInput.value;
  const address: string = addressInput.value;
  const personalDetail: string = personalDetailInput.value;
  const certificate: string[] = certificateInput.value
    .split(",")
    .map((element) => element.trim());
  const education: string[] = educationInput.value
    .split(",")
    .map((element) => element.trim());
  const experience: string[] = experienceInput.value
    .split(",")
    .map((element) => element.trim());
  const skill: string[] = skillsInput.value
    .split(",")
    .map((element) => element.trim());

  // Updating profile section
  const nameOutput = document.getElementById("nameCv") as HTMLElement;
  const jobTitleOutput = document.getElementById("jobTitleCv") as HTMLElement;
  const emailOutput = document.getElementById("emailCv") as HTMLElement;
  const phoneOutput = document.getElementById("phoneCv") as HTMLElement;
  const linkdinOutput = document.getElementById("linkdinCv") as HTMLElement;
  const addressOutput = document.getElementById("addressCv") as HTMLElement;
  const personalDetailOutput = document.getElementById(
    "personalDetailCv"
  ) as HTMLElement;

  nameOutput.textContent = name || "John Doe";
  jobTitleOutput.textContent = jobTitle || "Job Title";
  emailOutput.textContent = email || "***@gmail.com";
  phoneOutput.textContent = phone || "03*********";
  linkdinOutput.textContent = linkdin || "John Doe";
  addressOutput.textContent = address || "1234 Oakwood Drive";
  personalDetailOutput.innerHTML =
    personalDetail ||
    "Highly motivated and adaptable professional with a strong work ethic and passion for learning. Proven ability to collaborate effectively and drive results in dynamic environment.";

  const skillsCv = document.getElementById("skillsCv") as HTMLElement;
  skillsCv.innerHTML = "";
  skill.forEach((element) => {
    const skillElement = document.createElement("li");
    if (element == undefined) {
      skillElement.textContent = "English Communication"
    } else{
      skillElement.textContent = element
    }
    skillsCv.appendChild(skillElement);
  });

  const educationCv = document.getElementById("educationCv") as HTMLElement;
  educationCv.innerHTML = "";
  for (let i = 0; i < education.length; i += 3) {
    const degree = education[i];
    const place = education[i + 1];
    const year = education[i + 2];

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year || ""}`;
    yearElement.contentEditable = "true"; 

    const degreeElement = document.createElement("P");
    degreeElement.innerHTML = `<b><span>${
      degree || "Degree in higher education"
    }</span></b>`;
    degreeElement.contentEditable = "true"; 

    const placeElement = document.createElement("P");
    placeElement.innerHTML = `${place || "Abc college"}`;
    placeElement.contentEditable = "true"; 

    const lineBreakElement = document.createElement("br");

    educationCv.appendChild(yearElement);
    educationCv.appendChild(degreeElement);
    educationCv.appendChild(placeElement);
    educationCv.appendChild(lineBreakElement);
  }

  const experienceCv = document.getElementById("experienceCv") as HTMLElement;
  experienceCv.innerHTML = "";
  for (let i = 0; i < experience.length; i += 3) {
    const postName = experience[i];
    const corporation = experience[i + 1];
    const year = experience[i + 2];

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year || ""}`;
    yearElement.contentEditable = "true"; 

    const postElement = document.createElement("P");
    postElement.innerHTML = `<b><span>${postName || "ABC Post"}</span></b>`;
    postElement.contentEditable = "true"; 

    const corporationElement = document.createElement("P");
    corporationElement.innerHTML = `${corporation || "Abc corporation"}`;
    corporationElement.contentEditable = "true"; 

    const lineBreakElement = document.createElement("br");

    experienceCv.appendChild(yearElement);
    experienceCv.appendChild(postElement);
    experienceCv.appendChild(corporationElement);
    experienceCv.appendChild(lineBreakElement);
  }

  const certificationContainer = document.getElementById(
    "certificationContainer"
  ) as HTMLElement;
  certificationContainer.innerHTML = "";
  for (let i = 0; i < certificate.length; i += 3) {
    const courseName = certificate[i];
    const academy = certificate[i + 1];
    const year = certificate[i + 2];

    const yearElement = document.createElement("P");
    yearElement.style.float = "right";
    yearElement.innerHTML = `${year || ""}`;
    yearElement.contentEditable = "true"; 

    const courseElement = document.createElement("P");
    courseElement.innerHTML = `<b><span>${courseName || "XYZ course"}</span></b>`;
    courseElement.contentEditable = "true"; 

    const academyElement = document.createElement("P");
    academyElement.innerHTML = `${academy || "XYZ institute"}`;
    academyElement.contentEditable = "true"; 

    const lineBreakElement = document.createElement("br");

    certificationContainer.appendChild(yearElement);
    certificationContainer.appendChild(courseElement);
    certificationContainer.appendChild(academyElement);
    certificationContainer.appendChild(lineBreakElement);
  }

  const file = profileImageInput.files?.[0];
  if (file) {
    currentImage.src = URL.createObjectURL(file);
  }
}
