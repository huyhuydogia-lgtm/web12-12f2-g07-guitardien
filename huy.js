// Scroll progress
const progressBar = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// Back to top
const backBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    backBtn.classList.add("back-to-top--visible");
  } else {
    backBtn.classList.remove("back-to-top--visible");
  }
});
backBtn.addEventListener("click", () => {
  window.scrollTo({ top:0, behavior:"smooth" });
});

// Scroll to section with offset (cập nhật để chính xác hơn)
const navItems = document.querySelectorAll('.primary-nav__item[data-target]');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      console.log(`Scrolling to: ${targetId}`); // Debug log
      const headerOffset = 80; // Tăng offset cho header sticky (60px + padding)
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${targetId} not found`); // Debug nếu không tìm thấy
    }
  });
});
