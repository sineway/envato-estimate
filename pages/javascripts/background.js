import {Catalog} from "./gateways/catalog.js";

const pattern = new RegExp([
    "^https:\\/\\/",
    "(?:themeforest|codecanyon|videohive|audiojungle|graphicriver|photodune|3docean)\\.net",
    "\\/item",
    "\\/[a-z-0-9]+",
    "\\/([0-9]+)"
].join(""));

const loadData = (tabId, tabUrl) => {
    chrome.storage.sync.get(["apiToken"], (data) => {
        const [matchedUrl, itemId] = pattern.exec(tabUrl);
        window.dataLoaded = new Catalog(data.apiToken).getItem(itemId);
        chrome.pageAction.show(tabId);
    });
};

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (tab.status === "complete" && pattern.test(tab.url)) {
        loadData(tab.id, tab.url);
    }
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (!changes.apiToken) {
        return;
    }
    chrome.tabs.query({active: true}, ([tab]) => {
        loadData(tab.id, tab.url);
    });
});