function openSite(url) {
  chrome.tabs.create({ url });
}

document.getElementById("canvaBtn").addEventListener("click", () => {
  openSite("https://www.canva.com");
});

document.getElementById("youtubeBtn").addEventListener("click", () => {
  openSite("https://www.youtube.com");
});

document.getElementById("githubBtn").addEventListener("click", () => {
  openSite("https://www.github.com");
});
