import { FooterView } from "./views/FooterView.js";
import { HomeView } from "./views/HomeView.js";
import { StickyView } from "./views/StickyView.js";

export function firstLoad() {
  const StickyViewC = new StickyView(document.querySelector('.sticky'));
  StickyViewC.updateDom();
  updateLeftColumnDom(window.location.pathname);
}

export function updateLeftColumnDom(pathName = "") {
  
  history.pushState({}, pathName, window.location.origin + pathName);

  const HomeViewC = new HomeView(document.querySelector('.leftColumn'));
  HomeViewC.updateDom(pathName);
}