/* ==========================================================================
   DERMALINK - INITIAL SEED DATA SYSTEM FOR LOCALSTORAGE
   ========================================================================== */

const INITIAL_DATA = {
  treatments: [
    {
      id: "trt-101",
      name: "Lumora AI Multi-Spectrum Skin Diagnostic",
      category: "Rejuvenation",
      image: "assets/images/3.jpg",
      duration: "15-20 Mins",
      technology: "AI Optical Scanning & Sub-dermal Imaging",
      providerType: "Dermatology Clinics & Tech Labs",
      partnershipAvailability: "Global Licensing",
      overview: "Comprehensive multi-spectral skin analysis evaluating hydration, sebum, pore elasticity, and sub-surface hyperpigmentation using neural network algorithms."
    },
    {
      id: "trt-102",
      name: "Derma Luxe PicoSure Laser Resurfacing",
      category: "Laser",
      image: "assets/images/25.jpg",
      duration: "30-45 Mins",
      technology: "Picosecond Photomechanical Laser",
      providerType: "Aesthetic Centers & Laser Clinics",
      partnershipAvailability: "Equipment Co-op & Revenue Share",
      overview: "Advanced ultra-short pulse laser technology targeted at pigment removal, scar remodeling, and skin texture refinement without thermal downtime."
    },
    {
      id: "trt-103",
      name: "VISIA 3D Epigenetic Skin Profiling",
      category: "Rejuvenation",
      image: "assets/images/16.jpg",
      duration: "25 Mins",
      technology: "3D RBX High-Definition Imaging",
      providerType: "Clinical Dermatology Research",
      partnershipAvailability: "Enterprise Data Integration",
      overview: "Interactive 3D quantitative mapping of vascular structures, sun damage, pore congestion, and UV spots for predictive anti-aging protocols."
    },
    {
      id: "trt-104",
      name: "RF Micro-Needling Skin Resurfacing",
      category: "Resurfacing",
      image: "assets/images/17.jpg",
      duration: "45 Mins",
      technology: "Fractional Bipolar Radiofrequency",
      providerType: "Certified Aesthetic Physicians",
      partnershipAvailability: "Consumable Supply Agreement",
      overview: "Delivers controlled thermal energy into deep dermis layers to stimulate collagen synthesis, tighten skin contours, and resolve deep acne scarring."
    },
    {
      id: "trt-105",
      name: "Alma Harmony XL Pro IPL & ClearSkin",
      category: "Laser",
      image: "assets/images/21.jpg",
      duration: "40 Mins",
      technology: "Narrowband AFT & Er:YAG 2940nm",
      providerType: "Enterprise Laser Centers",
      partnershipAvailability: "Provider Lease & Training",
      overview: "Multi-application platform combining intense pulsed light and non-ablative laser to treat vascular lesions, acne vulgaris, and photo-aging."
    },
    {
      id: "trt-106",
      name: "Clinical Glycolic & Salicylic Bio-Peel",
      category: "Acne",
      image: "assets/images/19.jpg",
      duration: "30 Mins",
      technology: "Pharmaceutical Grade Alpha/Beta Hydroxy Acid",
      providerType: "Medical Spas & Clinical Practice",
      partnershipAvailability: "Direct Wholesale Distribution",
      overview: "Targeted chemical exfoliation for acne-prone skin, decongesting follicular channels, balancing sebum production, and enhancing cellular renewal."
    },
    {
      id: "trt-107",
      name: "Onda DEKA Coolwaves Microwave Contouring",
      category: "Anti-Aging",
      image: "assets/images/28.jpg",
      duration: "50 Mins",
      technology: "Controlled 2.45 GHz Microwaves",
      providerType: "Premium Medical Aesthetic Hubs",
      partnershipAvailability: "Exclusive Regional Franchise",
      overview: "Selective microwave frequency system targeting sub-dermal adipose tissue and dermal collagen fibers for precise facial and submental contouring."
    },
    {
      id: "trt-108",
      name: "Observ 520x Sub-Surface Diagnostic Suite",
      category: "Pigmentation",
      image: "assets/images/15.jpg",
      duration: "15 Mins",
      technology: "Fluorescence & Polarized Light Microscopy",
      providerType: "Dermatology Practices & Consultancies",
      partnershipAvailability: "SaaS Software Subscription",
      overview: "Visualizes hidden skin pathology in 6 light modes including Wood's light and cross-polarization to prevent hyperpigmentation before visible onset."
    },
    {
      id: "trt-109",
      name: "Lutronic Clarity II Dual-Wavelength Laser",
      category: "Laser",
      image: "assets/images/23.jpg",
      duration: "35 Mins",
      technology: "755nm Alexandrite & 1064nm Nd:YAG",
      providerType: "Specialist Laser Clinics",
      partnershipAvailability: "Equipment Sponsorship",
      overview: "High-power dual-wavelength system with real-time IntelliTrack technology for rapid pigment clearance and vascular lesion correction."
    },
    {
      id: "trt-110",
      name: "Pro-Dermal Infusion & Hydration Therapy",
      category: "Hydration",
      image: "assets/images/13.jpg",
      duration: "45 Mins",
      technology: "Pneumatic Transdermal Serum Delivery",
      providerType: "Aesthetic Treatment Centers",
      partnershipAvailability: "Active Ingredient Supply",
      overview: "Needle-free high-pressure micro-jet penetration delivering concentrated hyaluronic acid, peptide complexes, and antioxidants into epidermal layers."
    },
    {
      id: "trt-111",
      name: "Skin Renew Pro Robotic Resurfacing System",
      category: "Resurfacing",
      image: "assets/images/22.jpg",
      duration: "60 Mins",
      technology: "Robotic Fractional CO2 Laser Scanner",
      providerType: "Enterprise Hospital Dermatology",
      partnershipAvailability: "Joint Venture & Clinical Trial",
      overview: "Automated robotic arm guidance for uniform energy delivery during severe wrinkle ablation, burn scar reconstruction, and epidermal renewal."
    },
    {
      id: "trt-112",
      name: "EndyMed PRO 3DEEP RF Collagen Tightening",
      category: "Anti-Aging",
      image: "assets/images/20.jpg",
      duration: "40 Mins",
      technology: "Multi-Source Phase-Controlled RF",
      providerType: "Aesthetic Clinics & Dermatologists",
      partnershipAvailability: "Fleet Licensing",
      overview: "Deep volumetric thermal heating without surface discomfort, accelerating neocollagenesis for periorbital and lower jawline skin laxity."
    }
  ],

  partners: [
    {
      id: "prt-201",
      name: "Vanguard Dermatology Alliance",
      type: "Dermatology clinics",
      location: "New York, USA",
      specialties: "Clinical Laser, Epigenetic Diagnostics, Micro-Needling",
      partnershipType: "Clinical Partnership",
      verified: true,
      image: "assets/images/9.jpg",
      rating: 4.9,
      activeSolutions: 18
    },
    {
      id: "prt-202",
      name: "Lumora Skin AI Systems",
      type: "Technology providers",
      location: "Zurich, Switzerland",
      specialties: "3D Neural Diagnostics, Optical Sensors, Sub-dermal Imaging",
      partnershipType: "Technology",
      verified: true,
      image: "assets/images/6.jpg",
      rating: 4.95,
      activeSolutions: 24
    },
    {
      id: "prt-203",
      name: "Derma Luxe Medical Group",
      type: "Aesthetic centers",
      location: "Dubai, UAE",
      specialties: "PicoSure Laser, RF Resurfacing, High-End Aesthetic Suites",
      partnershipType: "Brand Sponsorship",
      verified: true,
      image: "assets/images/4.jpg",
      rating: 4.88,
      activeSolutions: 15
    },
    {
      id: "prt-204",
      name: "Global Beauty Partners Corp",
      type: "Skincare brands",
      location: "Tokyo, Japan",
      specialties: "Pharmaceutical Formulations, Bio-Peels, Serum Distribution",
      partnershipType: "Distribution",
      verified: true,
      image: "assets/images/36.jpg",
      rating: 4.92,
      activeSolutions: 32
    },
    {
      id: "prt-205",
      name: "Promed Bioscience & Co",
      type: "Research organizations",
      location: "Munich, Germany",
      specialties: "Peptide Synthesis, Collagen Matrices, Dermal Clinical Trials",
      partnershipType: "Research",
      verified: true,
      image: "assets/images/44.jpg",
      rating: 4.85,
      activeSolutions: 12
    },
    {
      id: "prt-206",
      name: "VietMedi Healthcare Center",
      type: "Enterprise sponsors",
      location: "Singapore",
      specialties: "Clinic Franchising, CO2 Laser Expansion, Capital Funding",
      partnershipType: "Funding",
      verified: true,
      image: "assets/images/37.jpg",
      rating: 4.9,
      activeSolutions: 22
    },
    {
      id: "prt-207",
      name: "Identity Dermatology Center",
      type: "Dermatology clinics",
      location: "Seoul, South Korea",
      specialties: "Pigmentation Laser, Robotic Resurfacing, Cellular Regeneration",
      partnershipType: "Clinical Partnership",
      verified: true,
      image: "assets/images/43.jpg",
      rating: 4.97,
      activeSolutions: 29
    },
    {
      id: "prt-208",
      name: "Alma Medical Laser Technologies",
      type: "Technology providers",
      location: "Tel Aviv, Israel",
      specialties: "Multi-Platform Lasers, IPL Systems, Ultrasonic Contouring",
      partnershipType: "Technology",
      verified: true,
      image: "assets/images/41.jpg",
      rating: 4.94,
      activeSolutions: 40
    },
    {
      id: "prt-209",
      name: "Aethel Bio-Tech Laboratories",
      type: "Skincare brands",
      location: "Paris, France",
      specialties: "Sub-dermal Serums, Exosome Therapeutics, Peptide Formulations",
      partnershipType: "Brand Sponsorship",
      verified: true,
      image: "assets/images/45.jpg",
      rating: 4.96,
      activeSolutions: 35
    }
  ],

  contracts: [
    {
      id: "cnt-301",
      title: "Master Enterprise Partnership Agreement",
      category: "Partnership Agreement",
      lastUpdated: "2026-09-15",
      status: "Verified Template",
      description: "Standardized enterprise contract governing mutual clinical service access, IP safeguards, revenue distribution, and joint marketing initiatives."
    },
    {
      id: "cnt-302",
      title: "Brand & Clinical Sponsorship Framework",
      category: "Sponsorship Agreement",
      lastUpdated: "2026-09-28",
      status: "Verified Template",
      description: "Comprehensive sponsorship agreement detailing treatment suite branding, device placement, marketing obligations, and performance tiers."
    },
    {
      id: "cnt-303",
      title: "Dermatology Equipment & Service Licensing",
      category: "Service Agreement",
      lastUpdated: "2026-10-01",
      status: "Verified Template",
      description: "Service-level agreement covering hardware maintenance, consumable replenishment, clinical staff training, and uptime guarantees."
    },
    {
      id: "cnt-304",
      title: "Provider Network Inclusion Contract",
      category: "Provider Agreement",
      lastUpdated: "2026-08-20",
      status: "Verified Template",
      description: "Credentialing agreement for clinical dermatology practices seeking verified status on the DERMALINK enterprise discovery hub."
    },
    {
      id: "cnt-305",
      title: "Mutual Healthcare Technology NDA",
      category: "Enterprise NDA",
      lastUpdated: "2026-10-05",
      status: "Verified Template",
      description: "Non-disclosure protocol protecting proprietary AI diagnostics, patient telemetry algorithms, and clinical trial datasets."
    },
    {
      id: "cnt-306",
      title: "R&D Clinical Trial Collaboration",
      category: "Collaboration Agreement",
      lastUpdated: "2026-09-10",
      status: "Verified Template",
      description: "Formal agreement establishing clinical trial parameters, IRB compliance, patient consent standards, and research output sharing."
    }
  ],

  userTeam: [
    { id: "mem-1", name: "Alex Morgan", email: "alex.morgan@dermalink-enterprise.com", role: "Admin", status: "Active", joined: "2025-01-10" },
    { id: "mem-2", name: "Dr. Elena Vance", email: "elena.vance@vanguard-derma.org", role: "Manager", status: "Active", joined: "2025-03-14" },
    { id: "mem-3", name: "Marcus Chen", email: "m.chen@lumora-tech.io", role: "Partner Manager", status: "Active", joined: "2025-06-01" },
    { id: "mem-4", name: "Sophia Reynolds", email: "s.reynolds@globalbeauty.com", role: "Analyst", status: "Active", joined: "2025-08-22" },
    { id: "mem-5", name: "Dr. Kenji Sato", email: "kenji.sato@identity-derma.jp", role: "Viewer", status: "Active", joined: "2025-11-05" },
    { id: "mem-6", name: "Claire Dubois", email: "claire.d@promed-bio.de", role: "Partner Manager", status: "Active", joined: "2026-01-18" },
    { id: "mem-7", name: "David Miller", email: "d.miller@dermaluxe.ae", role: "Manager", status: "Active", joined: "2026-04-02" },
    { id: "mem-8", name: "Dr. Ananya Sharma", email: "a.sharma@vietmedi.sg", role: "Analyst", status: "Active", joined: "2026-07-29" }
  ],

  teamSeatsMax: 12,

  savedSolutions: ["trt-101", "trt-103", "trt-108"],

  userDrafts: [
    {
      id: "draft-901",
      templateTitle: "Master Enterprise Partnership Agreement",
      partnerOrganization: "Lumora Skin AI Systems",
      contactPerson: "Marcus Chen",
      type: "Partnership Agreement",
      startDate: "2026-11-01",
      duration: "24 Months",
      status: "Draft",
      created: "2026-10-06"
    }
  ]
};

// Initialize LocalStorage if empty
(function initStorage() {
  if (!localStorage.getItem("DERMALINK_TREATMENTS")) {
    localStorage.setItem("DERMALINK_TREATMENTS", JSON.stringify(INITIAL_DATA.treatments));
  }
  const existingPartners = JSON.parse(localStorage.getItem("DERMALINK_PARTNERS") || "[]");
  if (!localStorage.getItem("DERMALINK_PARTNERS") || existingPartners.length < 9) {
    localStorage.setItem("DERMALINK_PARTNERS", JSON.stringify(INITIAL_DATA.partners));
  }
  if (!localStorage.getItem("DERMALINK_CONTRACTS")) {
    localStorage.setItem("DERMALINK_CONTRACTS", JSON.stringify(INITIAL_DATA.contracts));
  }
  if (!localStorage.getItem("DERMALINK_TEAM")) {
    localStorage.setItem("DERMALINK_TEAM", JSON.stringify(INITIAL_DATA.userTeam));
  }
  if (!localStorage.getItem("DERMALINK_MAX_SEATS")) {
    localStorage.setItem("DERMALINK_MAX_SEATS", INITIAL_DATA.teamSeatsMax.toString());
  }
  if (!localStorage.getItem("DERMALINK_SAVED_SOLUTIONS")) {
    localStorage.setItem("DERMALINK_SAVED_SOLUTIONS", JSON.stringify(INITIAL_DATA.savedSolutions));
  }
  if (!localStorage.getItem("DERMALINK_DRAFTS")) {
    localStorage.setItem("DERMALINK_DRAFTS", JSON.stringify(INITIAL_DATA.userDrafts));
  }
  if (!localStorage.getItem("DERMALINK_USER_SESSION")) {
    // Default logged in user for demo
    localStorage.setItem("DERMALINK_USER_SESSION", JSON.stringify({
      name: "Alex Morgan",
      organization: "DERMALINK Global Hub",
      email: "alex.morgan@dermalink-enterprise.com",
      role: "Admin"
    }));
  }
})();
