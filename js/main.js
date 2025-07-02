// ----- 1. Render Skills Section -----
document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.getElementById("skills-container");

  if (!skillsContainer || typeof skillsData === "undefined") return;

  skillsData.forEach(skillCategory => {
    const box = document.createElement("div");
    box.className = "skill-box";

    box.innerHTML = `
      <div class="title">
        <img src="${skillCategory.icon}" alt="${skillCategory.category} Icon">
        <h5>${skillCategory.category}</h5>
      </div>
      <div class="skill-tags card-text">
        ${skillCategory.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    `;

    skillsContainer.appendChild(box);
  });
});

// ----- 2. Render Certificates Section -----
const certificatesContainer = document.getElementById("certificates-container");
const currentLanguage = document.documentElement.lang || "en";

if (certificatesContainer && typeof certificationsData !== "undefined") {
  certificationsData.forEach(certGroup => {
    certGroup.list.forEach(cert => {
      const card = document.createElement("div");
      card.className = "certificate-card";

      const isPrize = certGroup.type === "Prize";
      const viewClass = isPrize ? 'view-details prize-link' : 'view-details';

      card.innerHTML = `
        <div class="certificate-title">
          <img src="${certGroup.icon}" alt="${certGroup.type} Icon" class="certificate-icon">
          <h5>${cert.title}</h5>
        </div>

        <div class="certificate-info">
          <div class="certificate-content">
            <div class="place-date">
              <p class="Place-Date">${cert.issuer}</p>
              <p class="Place-Date">${cert.date.split('-')[0]}</p>
            </div>
            <p>${cert.description}</p>
          </div>

          <div class="certificate-footer">
            <a href="${cert.image}" class="${viewClass}" target="_blank">
              ${currentLanguage === "ar" ? "عرض الشهادة" : "View Certificate"}
            </a>
          </div>
        </div>
      `;

      certificatesContainer.appendChild(card);
    });
  });
}

// ----- 2.1 Certificate Scroll Arrows -----
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".certificates-grid-wrapper");
  const leftArrow = document.getElementById("cert-left");
  const rightArrow = document.getElementById("cert-right");

  if (leftArrow && rightArrow && wrapper) {
    const isRTL = document.documentElement.lang === "ar";
    const card = document.querySelector(".certificate-card");

    let gap = parseInt(getComputedStyle(wrapper).gap) || 20;
    let cardWidth = card ? card.offsetWidth + gap : 400;

    window.addEventListener("resize", () => {
      cardWidth = card ? card.offsetWidth + gap : 400;
    });

    rightArrow.addEventListener("click", () => {
      const direction = isRTL ? -1 : 1;
      const nextScroll = Math.round(wrapper.scrollLeft + direction * cardWidth);
      wrapper.scrollTo({ left: nextScroll, behavior: "smooth" });
      rightArrow.blur(); 
    });

    leftArrow.addEventListener("click", () => {
      const direction = isRTL ? 1 : -1;
      const nextScroll = Math.round(wrapper.scrollLeft + direction * cardWidth);
      wrapper.scrollTo({ left: nextScroll, behavior: "smooth" });   
      leftArrow.blur();    
    });
  }
});


// ----- 3. Render Projects Section + Filter Buttons -----
const projectsContainer = document.querySelector("#project-container");
const section = document.querySelector("#Projects");
const sectors = [...new Set(projectsData.map(p => p.sector))];
const filterBar = document.createElement("div");
filterBar.className = "filter-bar";

const allBtn = document.createElement("a");
allBtn.textContent = currentLanguage === "ar" ? "الكل" : "All";
allBtn.classList.add("filter-btn", "active", "animate-right", "delay-1");
allBtn.dataset.sector = "All";
filterBar.appendChild(allBtn);

sectors.forEach(sector => {
  const btn = document.createElement("a");
  btn.textContent = sector;
  btn.classList.add("filter-btn", "animate-right", "delay-1");
  btn.dataset.sector = sector;
  filterBar.appendChild(btn);
});

section.insertBefore(filterBar, projectsContainer);

function renderProjects(data) {
  projectsContainer.innerHTML = "";
  data.forEach(project => {
    const roleLabel = currentLanguage === "ar" ? "الدور" : "Role";
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title} Image" class="project-img" />
      <div class="project-content">
        <div class="project-title">
          <h5>${project.title}</h5>
          <p>${project.sector}</p>
        </div>
        <p class="card-text"><span style="font-weight:600;">${roleLabel}:</span> ${project.role || ""}</p>
        <p class="card-text">${project.shortDescription}</p>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank"><svg class="proj-links" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/></svg></a>` : ""}
          <a href="#" class="proj-links" onclick='event.preventDefault(); openPdfModal("${project.pdf}")'>
            ${currentLanguage === "ar" ? "عرض التفاصيل" : "View Details"}
          </a>
        </div>
      </div>
    `;
    projectsContainer.appendChild(card);
  });
}

renderProjects(projectsData);

filterBar.addEventListener("click", (e) => {
  if (!e.target.matches(".filter-btn")) return;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  const sector = e.target.dataset.sector;
  const filtered = sector === "All" ? projectsData : projectsData.filter(p => p.sector === sector);
  renderProjects(filtered);
});

// ----- 4. PDF Modal -----
function openPdfModal(pdfUrl) {
  const modal = document.getElementById("pdfModal");
  const container = document.getElementById("pdfViewerContainer");

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  container.innerHTML = "";

  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });

  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    const pagePromises = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      pagePromises.push(
        pdf.getPage(i).then(page => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          const viewport = page.getViewport({ scale: 1.5 });

          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.style.background = "transparent";
          canvas.style.margin = "0";
          canvas.style.padding = "0";
          canvas.style.boxShadow = "none";
          canvas.classList.add("pdf-page");

          return page.render({ canvasContext: context, viewport: viewport }).promise.then(() => canvas);
        })
      );
    }

    Promise.all(pagePromises).then(canvases => {
      canvases.forEach(canvas => container.appendChild(canvas));
    });
  }).catch(err => {
    container.innerHTML = `<p style="color: red;">Failed to load PDF: ${err.message}</p>`;
  });
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// ----- 5. Light/Dark Theme Toggle -----
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const logoImg = document.getElementById("logo-img");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
    themeIcon.src = "assets/icons/Dark.svg";
    themeIcon.alt = "Switch To Dark Mode";
    if (logoImg) logoImg.src = "assets/icons/Logo56pxDark.svg";
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    themeIcon.src = "assets/icons/Sun.svg";
    themeIcon.alt = "Switch To Light Mode";
    if (logoImg) logoImg.src = "assets/icons/Logo56pxLight.svg";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    if (body.classList.contains("light")) {
      themeIcon.src = "assets/icons/Dark.svg";
      themeIcon.alt = "Switch To Dark Mode";
      if (logoImg) logoImg.src = "assets/icons/Logo56pxDark.svg";
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.src = "assets/icons/Sun.svg";
      themeIcon.alt = "Switch To Light Mode";
      if (logoImg) logoImg.src = "assets/icons/Logo56pxLight.svg";
      localStorage.setItem("theme", "dark");
    }
  });
});

// ----- 6. Side Bar -----
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = (sidebar.style.display === 'flex') ? 'none' : 'flex';
}

document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = 'none';
  });
});


// ----- 7. Animation -----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.animate-up, .animate-down, .animate-left, .animate-right')
.forEach(el => observer.observe(el));

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});


// ----- 8. Contact Form Email Validation and Submission -----
const scriptURL = 'https://script.google.com/macros/s/AKfycbyePJ4v84e5V6uQe2Zlzz71CWTaDWdCQKL005JGhUKYqD_xtu2FLHealyWbYgstneFxGA/exec'
const form = document.forms['submit-to-google-sheet'];
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailInput = form.elements['Email'];


  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
    const errorMsg = currentLanguage === 'ar' 
      ? 'الرجاء إدخال بريد إلكتروني صحيح يحتوي على نقطة ونطاق صالح (مثل example.com)' 
      : 'Please enter a valid email address including a dot and a valid domain (e.g. example.com)';
    
    alert(errorMsg);
    emailInput.focus();
    return;
  }

  fetch('https://script.google.com/macros/s/AKfycbyePJ4v84e5V6uQe2Zlzz71CWTaDWdCQKL005JGhUKYqD_xtu2FLHealyWbYgstneFxGA/exec', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      successMessage.style.display = 'block';
      form.reset();

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 4000);
    } else {
      throw new Error('Form submission failed.');
    }
  })
  .catch(error => {
    const errorMsg = currentLanguage === 'ar' 
      ? 'لقد حدث خطأ! حاول مرة أخرى' 
      : 'An error occurred! Please try again.';
    alert(errorMsg);
    console.error('Submission error:', error);
  });
});
