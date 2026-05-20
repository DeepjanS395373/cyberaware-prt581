function showSection(sectionId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function loginDemo() {
  const role = document.getElementById("roleSelect").value;
  const message = document.getElementById("loginMessage");

  if (role === "admin") {
    message.textContent = "Admin login successful. Redirecting to administrator dashboard...";
    setTimeout(() => showSection("admin"), 700);
  } else if (role === "trainer") {
    message.textContent = "Trainer login successful. Redirecting to reports dashboard...";
    setTimeout(() => showSection("reports"), 700);
  } else {
    message.textContent = "Learner login successful. Redirecting to learner dashboard...";
    setTimeout(() => showSection("learner"), 700);
  }
}

function selectAnswer(type) {
  const message = document.getElementById("answerMessage");

  if (type === "safe") {
    message.textContent = "Correct. You avoided the suspicious link and verified through official channels.";
  } else {
    message.textContent = "Risky choice. This message has signs of phishing. Review the feedback section.";
  }

  setTimeout(() => showSection("feedback"), 1000);
}