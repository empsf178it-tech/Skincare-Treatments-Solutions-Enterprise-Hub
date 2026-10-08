/* ==========================================================================
   DERMALINK - SHARED APPLICATION SCRIPT & CORE ENGINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initFallingLettersAnimation();
  initScrollReveal();
  initScrollProgress();
  initBackToTopButton();
  initCardSpotlight();
  initHeroSparkles();
  initChartBarAnimations();
  initCounters();
  updateAuthUI();
});

/* Top Reading Scroll Progress Indicator */
function initScrollProgress() {
  let progress = document.querySelector(".scroll-progress-bar");
  if (!progress) {
    progress = document.createElement("div");
    progress.className = "scroll-progress-bar";
    document.body.appendChild(progress);
  }

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = (scrolled || 0) + "%";
  }, { passive: true });
}

/* Floating Back To Top Button */
function initBackToTopButton() {
  let btn = document.querySelector(".back-to-top-btn");
  if (!btn) {
    btn = document.createElement("button");
    btn.className = "back-to-top-btn";
    btn.setAttribute("aria-label", "Back to Top");
    btn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* Card Mouse Movement Spotlight Effect */
function initCardSpotlight() {
  const cards = document.querySelectorAll(".enterprise-card, .kpi-card, .matchmaker-box, .chart-container, .trust-item");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* Hero Ambient Floating Sparkles & Interactive FX */
function initHeroSparkles() {
  const heroWrapper = document.querySelector(".hero-section");
  if (!heroWrapper) return;

  // Add ambient mesh laser line
  if (!heroWrapper.querySelector(".hero-mesh-laser")) {
    const meshBg = document.createElement("div");
    meshBg.className = "hero-mesh-bg";
    const laser = document.createElement("div");
    laser.className = "hero-mesh-laser";
    heroWrapper.appendChild(meshBg);
    heroWrapper.appendChild(laser);
  }

  // Create floating sparkling stars
  for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "hero-sparkle";
    sparkle.style.left = Math.random() * 82 + 8 + "%";
    sparkle.style.top = Math.random() * 85 + 8 + "%";
    sparkle.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
    sparkle.style.animationDuration = (2.5 + Math.random() * 2.5).toFixed(2) + "s";
    heroWrapper.appendChild(sparkle);
  }

  // Interactive Cursor Sparkle Trail in Hero
  let lastSparkleTime = 0;
  heroWrapper.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSparkleTime < 65) return;
    lastSparkleTime = now;

    const rect = heroWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const particle = document.createElement("div");
    particle.className = "cursor-sparkle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 40;
    const dy = -15 - Math.random() * 25;
    particle.style.setProperty("--dx", `${dx}px`);
    particle.style.setProperty("--dy", `${dy}px`);

    heroWrapper.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 850);
  });

  // Hero Video 3D Tilt Effect
  const imgWrapper = heroWrapper.querySelector(".hero-image-wrapper");
  if (imgWrapper) {
    if (!imgWrapper.querySelector(".hero-video-flare")) {
      const flare = document.createElement("div");
      flare.className = "hero-video-flare";
      imgWrapper.appendChild(flare);
    }

    imgWrapper.addEventListener("mousemove", (e) => {
      const rect = imgWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      imgWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      imgWrapper.style.setProperty("--mouse-x", `${x}px`);
      imgWrapper.style.setProperty("--mouse-y", `${y}px`);
    });

    imgWrapper.addEventListener("mouseleave", () => {
      imgWrapper.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  }
}

/* Chart Bar Fill Scroll Grow Animation */
function initChartBarAnimations() {
  const bars = document.querySelectorAll(".bar-fill");
  if (!bars.length) return;

  // Store target heights and initialize height to 0
  bars.forEach(bar => {
    const targetHeight = bar.style.height || "60%";
    bar.dataset.targetHeight = targetHeight;
    bar.style.height = "0%";
    bar.style.transition = "height 1s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.height = bar.dataset.targetHeight;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));
}

/* Falling Letters Animation Engine with Shiny Highlight Support */
function initFallingLettersAnimation() {
  const headings = document.querySelectorAll(".heading-xl, .heading-xl-modern, .heading-lg, .animate-falling-text");
  headings.forEach(heading => {
    if (heading.dataset.animatedLetters === "true") return;
    heading.dataset.animatedLetters = "true";

    // Track shiny text words if present
    const shinySpans = heading.querySelectorAll(".hero-shimmer-highlight, .shiny-text-accent");
    const shinyWords = new Set();
    shinySpans.forEach(span => {
      span.textContent.trim().split(/\s+/).forEach(w => shinyWords.add(w.toUpperCase()));
    });

    const fullText = heading.textContent.trim();
    if (!fullText) return;

    const words = fullText.split(/\s+/);
    heading.innerHTML = "";

    let charIndex = 0;
    words.forEach((word, wordIdx) => {
      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      const isShiny = shinyWords.has(cleanWord) || shinyWords.has(word.toUpperCase());

      const wordSpan = document.createElement("span");
      wordSpan.classList.add("falling-word");
      if (isShiny) {
        wordSpan.classList.add("hero-shimmer-highlight");
      }

      for (let i = 0; i < word.length; i++) {
        const charSpan = document.createElement("span");
        charSpan.classList.add("falling-letter");
        if (isShiny) {
          charSpan.classList.add("hero-shimmer-highlight");
        }
        charSpan.textContent = word[i];
        const delay = (charIndex * 0.03 + 0.08).toFixed(3);
        charSpan.style.animationDelay = `${delay}s`;
        wordSpan.appendChild(charSpan);
        charIndex++;
      }

      heading.appendChild(wordSpan);

      if (wordIdx < words.length - 1) {
        const spaceSpan = document.createElement("span");
        spaceSpan.classList.add("falling-space");
        spaceSpan.innerHTML = "&nbsp;";
        heading.appendChild(spaceSpan);
      }
    });
  });
}

/* Navbar Scroll Behavior */
function initNavbarScroll() {
  const navbar = document.querySelector(".enterprise-navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* Mobile Menu Control */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-menu-drawer");
  const closeBtn = document.querySelector(".mobile-menu-close");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  // Close when clicking link inside mobile menu
  const mobileLinks = drawer.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* Scroll Reveal Intersection Observer with Auto-Staggering */
function initScrollReveal() {
  // Auto-add reveal classes to card grids if not already marked
  const cardContainers = document.querySelectorAll(".row.g-4, .row.g-3, .hero-grid, .footer-grid");
  cardContainers.forEach(container => {
    const children = container.children;
    if (children.length > 1) {
      Array.from(children).forEach((child, idx) => {
        if (!child.classList.contains("reveal") && 
            !child.classList.contains("reveal-up") && 
            !child.classList.contains("reveal-left") && 
            !child.classList.contains("reveal-right") && 
            !child.classList.contains("reveal-scale")) {
          child.classList.add("reveal-up");
        }
        if (!child.classList.contains("delay-1") && !child.classList.contains("delay-2") && !child.classList.contains("delay-3")) {
          const delayClass = `delay-${(idx % 5) + 1}`;
          child.classList.add(delayClass);
        }
      });
    }
  });

  const reveals = document.querySelectorAll(".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* Number Counter Animation */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute("data-counter-target"));
        const prefix = el.getAttribute("data-counter-prefix") || "";
        const suffix = el.getAttribute("data-counter-suffix") || "";
        const decimals = parseInt(el.getAttribute("data-counter-decimals") || "0", 10);
        animateCounter(el, target, 1500, prefix, suffix, decimals);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target, duration, prefix = "", suffix = "", decimals = 0) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quad formula
    const easeProgress = progress * (2 - progress);
    const currentValue = start + (target - start) * easeProgress;

    el.innerText = prefix + currentValue.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerText = prefix + target.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }) + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* Universal Toast System */
function showToast(message, type = "success") {
  let container = document.querySelector(".toast-container-custom");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container-custom";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast-custom toast-${type}`;
  
  const icon = type === "success" ? "fa-circle-check" : type === "danger" ? "fa-circle-exclamation" : "fa-info-circle";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color: ${type === 'success' ? '#A7C7C3' : '#FF6B6B'}; font-size: 1.2rem;"></i>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* Update Navbar CTA UI */
function updateAuthUI() {
  const authContainer = document.querySelectorAll(".auth-btn-area");
  authContainer.forEach(container => {
    container.innerHTML = `
      <a href="contact.html" class="btn-enterprise-primary ms-2">Contact Sales</a>
    `;
  });
}

function getAuthSession() {
  const data = localStorage.getItem("DERMALINK_USER_SESSION");
  return data ? JSON.parse(data) : null;
}

function logoutUser() {
  localStorage.removeItem("DERMALINK_USER_SESSION");
  showToast("Logged out successfully.", "info");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
}

/* Treatment Detail Modal Opener */
function openTreatmentModal(treatmentId) {
  const treatments = JSON.parse(localStorage.getItem("DERMALINK_TREATMENTS") || "[]");
  const treatment = treatments.find(t => t.id === treatmentId);
  if (!treatment) return;

  const savedIds = JSON.parse(localStorage.getItem("DERMALINK_SAVED_SOLUTIONS") || "[]");
  const isSaved = savedIds.includes(treatment.id);

  let modalEl = document.getElementById("treatmentDetailModal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.id = "treatmentDetailModal";
    modalEl.className = "modal fade modal-enterprise";
    modalEl.setAttribute("tabindex", "-1");
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span class="badge-tag me-2">${treatment.category}</span>
            <h5 class="modal-title d-inline-block align-middle me-2">${treatment.name}</h5>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div class="row g-4">
            <div class="col-md-5">
              <img src="${treatment.image}" alt="${treatment.name}" class="img-fluid rounded-3 shadow-sm w-100" style="height: 280px; object-fit: cover;">
            </div>
            <div class="col-md-7">
              <h6 class="fw-bold text-dark mb-2">Overview & Clinical Scope</h6>
              <p class="text-muted small mb-3">${treatment.overview}</p>

              <div class="bg-light p-3 rounded-3 mb-3 border">
                <div class="row g-2 text-dark small">
                  <div class="col-6"><strong>Required Tech:</strong> ${treatment.technology}</div>
                  <div class="col-6"><strong>Duration:</strong> ${treatment.duration}</div>
                  <div class="col-6"><strong>Provider Type:</strong> ${treatment.providerType}</div>
                  <div class="col-6"><strong>Partnership:</strong> ${treatment.partnershipAvailability}</div>
                </div>
              </div>

              <div class="d-flex gap-2 mt-4">
                <button onclick="requestTreatmentInfo('${treatment.name}')" class="btn-enterprise-primary flex-grow-1">
                  <i class="fa-solid fa-paper-plane me-1"></i> Request Information
                </button>
                <button onclick="toggleSaveSolution('${treatment.id}')" id="modalSaveBtn" class="btn-enterprise-secondary">
                  <i class="${isSaved ? 'fa-solid text-danger' : 'fa-regular'} fa-bookmark me-1"></i> ${isSaved ? 'Saved' : 'Save Solution'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

function requestTreatmentInfo(name) {
  showToast(`Inquiry sent for ${name}. Our enterprise team will contact you.`, "success");
  const modalEl = document.getElementById("treatmentDetailModal");
  if (modalEl) {
    const instance = bootstrap.Modal.getInstance(modalEl);
    if (instance) instance.hide();
  }
}

function toggleSaveSolution(id) {
  let saved = JSON.parse(localStorage.getItem("DERMALINK_SAVED_SOLUTIONS") || "[]");
  if (saved.includes(id)) {
    saved = saved.filter(item => item !== id);
    showToast("Solution removed from saved list.", "info");
  } else {
    saved.push(id);
    showToast("Solution saved to your Enterprise Dashboard.", "success");
  }
  localStorage.setItem("DERMALINK_SAVED_SOLUTIONS", JSON.stringify(saved));
  
  // Re-render or update save button state if in modal
  const btn = document.getElementById("modalSaveBtn");
  if (btn) {
    const isSaved = saved.includes(id);
    btn.innerHTML = `<i class="${isSaved ? 'fa-solid text-danger' : 'fa-regular'} fa-bookmark me-1"></i> ${isSaved ? 'Saved' : 'Save Solution'}`;
  }

  // Trigger callback if function exists on page
  if (typeof updateSavedSolutionsUI === "function") {
    updateSavedSolutionsUI();
  }
}
