import { FooterView } from "./views/FooterView.js";
import { HomeView } from "./views/HomeView.js";
import { StickyView } from "./views/StickyView.js";


export let firstLoad = () => {
  const StickyViewC = new StickyView(document.querySelector('.sticky'));
  StickyViewC.updateDom();
  updateLeftColumnDom();
}

export let updateLeftColumnDom = () => {
  let pathName = window.location.getPathName;
  const HomeViewC = new HomeView(document.querySelector('.leftColumn'));
  HomeViewC.updateDom(pathName);

}



