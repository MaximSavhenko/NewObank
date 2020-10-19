



function toggleMobileMenu() {
	var btnMenu = document.querySelector('.header__btn-menu'),
		navWrap = document.querySelector('.header__wrap-nav');
  
	btnMenu.onclick = function () {
	  document.body.classList.toggle('overflow');
	  btnMenu.classList.toggle('active');
	  navWrap.classList.toggle('active');
	};
};

toggleMobileMenu();

document.addEventListener("scroll", () => {
	let scrollTop = window.scrollY;
	const headerWrapper = document.querySelector(".header");
  
	if (scrollTop > 100) {
	  headerWrapper.classList.add("active");
	} else {
	  headerWrapper.classList.remove("active");
	}
  });

  
