/*=============== SHOW MENU ===============*/
const nav = document.getElementById("nav-menu"),
			navToggle = document.getElementById("nav-toggle"),
			navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', ()=>{
		nav.classList.add('show-menu');
	})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', ()=>{
		nav.classList.remove('show-menu');
	})
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart"),
			cartShop = document.getElementById("cart-shop"),
			cartClose = document.getElementById("cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
	cartShop.addEventListener('click', ()=>{
		cart.classList.add('show-cart');
	})
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
	cartClose.addEventListener('click', ()=>{
		cart.classList.remove('show-cart');
	})
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById("login"),
			loginBtn = document.getElementById("login-button"),
			loginClose = document.getElementById("login-close");

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginBtn){
	loginBtn.addEventListener('click', ()=>{
		login.classList.add("show-login")
	})
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
	loginClose.addEventListener('click', ()=>{
		login.classList.remove("show-login");
	})
}

/*=============== HOME SWIPER ===============*/
const homeSwiper = new Swiper(".home-swiper", {
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true'
	},
	  // Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	// when the scroll is greater than 50 viewport height , add background color
	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');

}
window.addEventListener('scroll', scrollHeader);

/*=============== NEW SWIPER ===============*/
const newSwiper = new Swiper(".new-swiper", {
	slidesPerView: 4,
	spaceBetween: 16,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
	}
})

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
	const scrollUpBtn = document.getElementById("scroll-up");
	// when the scroll is greater than 50 viewport height , add background color
	if(this.scrollY >= 600) scrollUpBtn.classList.add('show-scroll'); else scrollUpBtn.classList.remove('show-scroll');

}
window.addEventListener('scroll', scrollUp);

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/