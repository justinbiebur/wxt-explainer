export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

 setInterval(async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    browser.tabs.sendMessage(tab.id, { message: Date.now() });
  }
 }, 1500);
});
