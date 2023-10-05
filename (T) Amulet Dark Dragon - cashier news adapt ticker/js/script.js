const apiKey = "7a63133880324995a710a89ebf3fcfbb";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=th&apiKey=${apiKey}`;

async function getThaiNews() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data.articles;
	} catch (error) {
		console.error("Помилка при отриманні новин:", error);
		return [];
	}
}

const createNewsTicker = async () => {
	const newsContainers = document.querySelectorAll(".news-ticker");

	const updateNews = async (newsContainer) => {
		const newsArticles = await getThaiNews();

		newsContainer.innerHTML = "";

		newsArticles.forEach((article) => {
			const newsElement = document.createElement("div");
			newsElement.className = "news-item";
			newsElement.textContent = article.title;
			newsContainer.appendChild(newsElement);
		});

		let position = newsContainer.offsetWidth;

		const moveNews = () => {
			if (position > -newsContainer.scrollWidth) {
				position--;
				newsContainer.style.transform = `translateX(${position}px)`;
				requestAnimationFrame(moveNews);
			} else {
				position = newsContainer.offsetWidth;
				updateNews(newsContainer);
				moveNews();
			}
		};
		moveNews();
	};

	newsContainers.forEach(async (container) => {
		await updateNews(container);
	});
};

document.addEventListener("DOMContentLoaded", function () {
	createNewsTicker();
});
