const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-note').textContent =
    'Təşəkkür edirik! Bu, nümayiş formasıdır. Növbəti mərhələdə sorğuların göndərilməsini aktivləşdirəcəyik.';
});

const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const selectedCategory = filterButton.dataset.filter;

    projectFilters.forEach((button) => {
      button.classList.remove("active");
    });

    filterButton.classList.add("active");

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      const shouldShow =
        selectedCategory === "all" ||
        selectedCategory === cardCategory;

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
