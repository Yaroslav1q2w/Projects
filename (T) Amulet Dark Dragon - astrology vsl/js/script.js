const chatContentList = document.querySelector(".chat-content-list");
let items = chatContentList.querySelectorAll(".chat-content-item");

document.addEventListener("DOMContentLoaded", () => {
	const firstBlock = document.getElementById("video-block1");
	const firstButton = firstBlock.querySelector(".test__button");

	const initializeVideo = (videoId) => {
		const playBtn = document.querySelector(`#video-block${videoId} .play-btn`);
		const video = document.querySelector(`#video-block${videoId} .video`);

		playBtn.addEventListener("click", () => {
			if (video.paused) {
				video.play();
				playBtn.style.display = "none";
			} else {
				video.pause();
				playBtn.style.display = "block";
			}
		});

		if (videoId === 1) {
			// Додаткова логіка тільки для першого відео-блоку
			video.addEventListener("timeupdate", () => {
				let threshold = 0.8;

				if (video.currentTime / video.duration >= threshold) {
					firstButton.style.display = "block";
				}
			});
		}
	};

	// Ініціалізація для кожного відео
	for (let i = 1; i <= 7; i++) {
		initializeVideo(i);
	}

	const secondBlock = document.getElementById("video-block2");
	const thirdBlock = document.getElementById("video-block3");
	const fourthBlock = document.getElementById("video-block4");
	const fifthBlocks = document.getElementById("video-block5");
	const sixthBlock = document.getElementById("video-block6");
	const seventhBlock = document.getElementById("video-block7");

	const secondButtons = secondBlock.querySelectorAll(".test__button");
	const thirdButtons = thirdBlock.querySelectorAll(".test__button");
	const fourthButtons = fourthBlock.querySelectorAll(".test__button");
	const fifthButtons = fifthBlocks.querySelectorAll(".test__button");

	let video1 = firstBlock.querySelector(".video");
	let video2 = secondBlock.querySelector(".video");
	let video3 = thirdBlock.querySelector(".video");
	let video4 = fourthBlock.querySelector(".video");
	let video5 = fifthBlocks.querySelector(".video");
	let video6 = sixthBlock.querySelector(".video");
	let video7 = seventhBlock.querySelector(".video");

	firstButton.addEventListener("click", () => {
		firstBlock.classList.add("fade-out");
		firstBlock.addEventListener("transitionend", () => {
			firstBlock.classList.add("hidden");
			secondBlock.classList.remove("hidden");
			secondBlock.classList.add("fade-in");

			video1.pause();
		});
	});

	secondButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (secondBlock.classList.contains("fade-in")) {
				secondBlock.classList.remove("fade-in");
			}
			secondBlock.classList.add("fade-out");
			secondBlock.addEventListener("transitionend", () => {
				secondBlock.classList.add("hidden");
				thirdBlock.classList.remove("hidden");
				thirdBlock.classList.add("fade-in");

				video2.pause();
			});
		});
	});

	thirdButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (thirdBlock.classList.contains("fade-in")) {
				thirdBlock.classList.remove("fade-in");
			}
			thirdBlock.classList.add("fade-out");
			thirdBlock.addEventListener("transitionend", () => {
				thirdBlock.classList.add("hidden");
				fourthBlock.classList.remove("hidden");
				fourthBlock.classList.add("fade-in");

				video3.pause();
			});
		});
	});

	fourthButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const selectedYear = button.textContent;

			if (fourthBlock.classList.contains("fade-in")) {
				fourthBlock.classList.remove("fade-in");
			}

			fourthBlock.classList.add("fade-out");
			fourthBlock.addEventListener("transitionend", () => {
				fourthBlock.classList.add("hidden");
				fifthBlocks.classList.remove("hidden");
				fifthBlocks.classList.add("fade-in");

				video4.pause();
			});

			const selectedFifthBlock = fifthBlocks.querySelector(
				`.test-block__buttons[data-year="${selectedYear}"]`
			);

			if (selectedFifthBlock) {
				selectedFifthBlock.classList.remove("hidden");
				selectedFifthBlock.classList.add("fade-in");
			}
		});
	});

	fifthButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (fifthBlocks.classList.contains("fade-in")) {
				fifthBlocks.classList.remove("fade-in");
			}
			fifthBlocks.classList.add("fade-out");
			fifthBlocks.addEventListener("transitionend", () => {
				fifthBlocks.classList.add("hidden");
				sixthBlock.classList.remove("hidden");
				sixthBlock.classList.add("fade-in");

				video5.pause();
			});
		});
	});

	const birthTimeInput = document.getElementById("birth-time");
	const unknownTimeBtn = document.getElementById("unknown-time-btn");
	const continueBtn = document.getElementById("continue-btn");

	birthTimeInput.addEventListener("input", () => {
		let input = birthTimeInput.value.replace(/\D/g, "");
		if (input.length > 4) {
			input = input.slice(0, 4);
		}

		const formattedInput = input.replace(/^(\d{2})(\d{0,2})$/, "$1:$2");

		birthTimeInput.value = formattedInput;

		continueBtn.classList.toggle("hidden", formattedInput.length < 5);
	});

	continueBtn.addEventListener("click", () => {
		showNextBlock();
	});

	unknownTimeBtn.addEventListener("click", () => {
		showNextBlock();
	});

	function showNextBlock() {
		sixthBlock.classList.add("fade-out");
		sixthBlock.classList.remove("fade-in");

		sixthBlock.addEventListener("transitionend", () => {
			sixthBlock.classList.add("hidden");
			seventhBlock.classList.remove("hidden");
			seventhBlock.classList.add("fade-in");

			video6.pause();
		});
	}

	const nameInputBtn = document.getElementById("name-input-btn");
	const nameForm = document.getElementById("name-form");
	const videoBlock = document.querySelector(".video-block");
	const chatBlock = document.querySelector(".chat-block");
	const headerTitle = document.querySelector(".header__title");

	const nameUserElem = document.getElementById("name__user-elem");

	nameInputBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const nameInput = document.getElementById("name-input").value; // отримати актуальне значення

		if (nameForm.checkValidity()) {
			// Якщо ім'я відповідає валідації, виконати код
			if (seventhBlock.classList.contains("fade-in")) {
				seventhBlock.classList.remove("fade-in");
			}

			nameUserElem.textContent = nameInput;

			seventhBlock.classList.add("fade-out");
			seventhBlock.addEventListener("transitionend", () => {
				seventhBlock.classList.add("hidden");
				videoBlock.classList.add("d-none");
				headerTitle.classList.add("d-none");

				video7.pause();

				chatBlock.classList.remove("d-none");
				showItemsWithDelay(0);
			});

			if (seventhBlock.classList.contains("fade-in")) {
				seventhBlock.classList.remove("fade-in");
			}
		}
	});
});

function showItemsWithDelay(index) {
	if (index < items.length) {
		const currentItem = items[index];

		const isManagerBlock = currentItem.classList.contains("manager");
		const isUserBlock = currentItem.classList.contains("user");

		// Делаем проверку на блок Manager
		if (isManagerBlock) {
			//начинаем печатать сообщение через 2 секунды
			setTimeout(() => {
				currentItem.scrollIntoView({ behavior: "smooth" });

				currentItem.classList.remove("d-none");
				//через 5 секунд проходит анимация "печатает" и выводится сообщение
				setTimeout(() => {
					showManagerMsg();
					showItemsWithDelay(index + 1);
				}, 5000);
			}, 2000);

			//функция отрисовки сообщения Manager
			function showManagerMsg() {
				const managerText = currentItem.querySelector(".manager-text");
				const typingBounce = currentItem.querySelector(".chat-content-typing");
				managerText.classList.remove("d-none");
				typingBounce.classList.add("d-none");
			}
		}
		// делаем проверку на блок User
		else if (isUserBlock) {
			// блок User выводится через 1 секунду
			setTimeout(() => {
				currentItem.scrollIntoView({ behavior: "smooth" });

				currentItem.classList.remove("d-none");
				setUserMsg();
			}, 1000);

			// функция обработки сообщения User
			function setUserMsg() {
				const userText = currentItem.querySelector(".user-text");
				const userMsg = currentItem.querySelector(".chat-content-desc");
				const interactiveBlock =
					currentItem.querySelector(".interactive-block");

				interactiveBlock.addEventListener("click", (e) => {
					const context = e.target.innerText;
					const day = currentItem.querySelector(".select-day");
					const month = currentItem.querySelector(".select-month");
					const year = currentItem.querySelector(".select-year");

					if (
						(interactiveBlock.id === "gender" ||
							interactiveBlock.classList.contains("only-next-button")) &&
						e.target.tagName === "BUTTON"
					) {
						showUserMsg(context);
					} else if (
						interactiveBlock.id === "b-day" &&
						e.target.tagName === "BUTTON" &&
						day.value &&
						month.value &&
						year.value
					) {
						let selectS = `${day.value}.${month.value}.${year.value}`;
						showUserMsg(selectS);
					} else if (interactiveBlock.id === "photo") {
						const inputPhoto = currentItem.querySelector(".input-photo");
						inputPhoto.addEventListener("change", handleFileUpload);

						function handleFileUpload() {
							const file = inputPhoto.files[0];
							if (file && file.type.startsWith("image/")) {
								const reader = new FileReader();
								reader.onload = function (e) {
									const imageSrc = e.target.result;
									userText.innerHTML = `<img src="${imageSrc}" alt="Uploaded Image" style="max-width: 100%;">`;
									userMsg.classList.remove("d-none");
									interactiveBlock.classList.add("d-none");
									const alternativeResponse = document.querySelectorAll(
										".alternative-response"
									);
									let randomIndex = Math.floor(
										Math.random() * alternativeResponse.length
									);
									const randomBlock = alternativeResponse[randomIndex];
									console.log(randomBlock);
									items = randomBlock.querySelectorAll(".chat-content-item");
									const loader = document.querySelector(".loader");
									loader.classList.remove("d-none");
									setTimeout(() => {
										loader.classList.add("d-none");
										showItemsWithDelay(0);
									}, 20000);
								};
								reader.readAsDataURL(file);
							}
						}
					}
				});

				// функция отрисовки сообщения User и скрытия интерактивного блока
				function showUserMsg(context) {
					if (context) {
						userText.innerText = context;
					}
					userMsg.classList.remove("d-none");
					interactiveBlock.classList.add("d-none");
					showItemsWithDelay(index + 1);
				}
			}
		}
	} else {
		setTimeout(() => {
			const afterChat = document.querySelector(".after-chat");
			const afterText = document.querySelector(".after-text");
			afterChat.classList.remove("d-none");
			afterText.classList.remove("d-none");
		}, 1500);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// playVideo();
	// showItemsWithDelay(0);
	// const afterChatPlayBtn = document.querySelector('.after-chat-play-btn');
	// const afterChatVideo = document.querySelector('.after-chat-video');
	// afterChatPlayBtn.addEventListener('click', () => {
	//   afterChatVideo.play();
	//   afterChatPlayBtn.style.display = 'none';
	// });
});

document.addEventListener("DOMContentLoaded", function () {
	var mySwiper = new Swiper(".swiper-container", {
		loop: true, // Нескінченна прокрутка
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
