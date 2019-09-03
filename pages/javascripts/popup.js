import {PopupRenderer} from "./renderers/popup.js";
import {PresentableItem} from "./models/presentable-item.js";

const renderer = new PopupRenderer();
renderer.renderProgress();

chrome.runtime.getBackgroundPage((window) => {
    window.dataLoaded.then((data) => {
        renderer.renderSuccess(new PresentableItem(data));
    }).catch((error) => {
        renderer.renderFailure(error);
    });
});