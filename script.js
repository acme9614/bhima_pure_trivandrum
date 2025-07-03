function openDrawer() {
  document.getElementById("drawer").classList.remove("-translate-x-full");
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("menuButton").classList.add("hidden");
}

function closeDrawer() {
  document.getElementById("drawer").classList.add("-translate-x-full");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("menuButton").classList.remove("hidden");
}




// drawers menu

function navigateToScheme() {
  Toaster.postMessage("navigateToScheme");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateToCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}





// brandSwiper
const brandSwiper = new Swiper(".brandSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//   collectionSwiper
const collectionSwiper = new Swiper(".collectionSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// tabsSwiper 

      const tabSwiper = new Swiper(".tabsSwiper", {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        },
      });


// scrollTopBtn

const scrollTopBtn = document.getElementById("scrollTopBtn");
const heroSection = document.getElementById("brandSwiper");

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  if (heroBottom < 0) {
    scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
    scrollTopBtn.classList.add("opacity-100", "pointer-events-auto");
  } else {
    scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
    scrollTopBtn.classList.remove("opacity-100", "pointer-events-auto");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
