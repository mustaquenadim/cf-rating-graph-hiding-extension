const article = document.querySelector("article");

const currentTabUrl = async function getCurrentTabUrl() {
  const tabs = await chrome.tabs.query({ active: true })
  return tabs[0].url
}

console.log("Here is my key" + currentTabUrl);