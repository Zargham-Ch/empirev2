export const mediaMd = "998px";
export const mediaLg = "1200px";
export const mediaLgPre = "1350px";
export const mediaSm = "600px";
export const mediaXs = "450px";
export const primaryFont = "Cinzel Decorative, cursive";
export const secondaryFont = "DM Sans, sans-serif";
export const tertiaryFont = "Bebas Neue, cursive";
export const RobotoFont = "Roboto Slab, serif";
export const Metrophobic = "Metrophobic', sans-serif";
export const Inter = "Inter";
export const b1 = "400";
export const b2 = "700";
export const b3 = "900";
export const headingImage = "./assets/redLabel.png";
export const listImage = "./assets/list.png";
export const timeLineBg = "./assets/timelineBgv2.png";
export const mintingGame = "./assets/mintingGamev2.png";
export const firstFoldImage = "./assets/girlFirst.png";
export const Banner = "./assets/BannerNew.jpg";
export const gameZoneBg = "./assets/gameZoneBg.png";
export const faqsBg = "./assets/faqsBg.png";
export const closeAcc = "./assets/closeAcc.png";
export const openAcc = "./assets/openAcc.png";
export const pageWrapperImg = "./assets/pageWrapperImg.png";
export const popularBg = "./assets/gameNew.png";

export const gradientScroll = () => {
  let progress = document.getElementById("bar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };
};
