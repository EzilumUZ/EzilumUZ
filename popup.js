function renderSites() {
  chrome.storage.sync.get(["sites"], (data) => {
    const list = document.getElementById("sitesList");
    list.innerHTML = "";
    (data.sites || []).forEach((url) => {
      const btn = document.createElement("button");
      btn.textContent = url;
      btn.addEventListener("click", () => chrome.tabs.create({ url }));
      list.appendChild(btn);
    });
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("siteInput");
  const newSite = input.value.trim();
  if (newSite) {
    chrome.storage.sync.get(["sites"], (data) => {
      const sites = data.sites || [];
      sites.push(newSite);
      chrome.storage.sync.set({ sites }, renderSites);
    });
    input.value = "";
  }
});

renderSites();
