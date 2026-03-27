document.getElementById("count").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  let result = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      let selectedText = window.getSelection().toString();

      if (!selectedText) {
        return "No text selected 😅";
      }

      let words = selectedText.trim().split(/\s+/);
      return "Words: " + words.length;
    }
  });

  document.getElementById("result").innerText =
    result[0].result;
});