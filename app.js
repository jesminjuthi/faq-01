const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		const showHide = faq.classList.toggle("active");
	});
});
