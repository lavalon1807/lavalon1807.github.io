			var link = document.querySelector(".map-button");
			var popup = document.querySelector(".modal");
			var close = popup.querySelector(".modal-close");
			var form = popup.querySelector("form");
			var login = popup.querySelector("[name=login]");
			var email = popup.querySelector("[name=email]");
			var coment = popup.querySelector("[name=coment]");
			var storage = localStorage.getItem("login");

			var isStorageSupport = true;
			var storage = "";

			try {
				storage = localStorage.getItem("login");
			} catch (err) {
				isStorageSupport = false;
			}

			link.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.add("modal-show");
				login.focus();
				if (storage) {
					login.value = storage;
					email.focus();
				} else {
					login.focus();
				}
			});

			close.addEventListener("click", function (evt) {
				evt.preventDefault();
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			})

			form.addEventListener("submit", function (evt) {
				if (!login.value || !email.value || !coment.value) {
					evt.preventDefault();
					popup.classList.remove("modal-error");
					popup.offsetWidth = popup.offsetWidth;
					popup.classList.add("modal-error");
					console.log(login.value);
					console.log(email.value);
					console.log(coment.value);
				} else {
					if (isStorageSupport) {
						localStorage.setItem("login", login.value);
					}
				}
			});

			window.addEventListener("keydown", function (evt) {
				if (evt.keyCode === 27) {
					if (popup.classList.contains("modal-show")) {
						evt.preventDefault();
						popup.classList.remove("modal-show");
						popup.classList.remove("modal-error");
					}
				}
			})