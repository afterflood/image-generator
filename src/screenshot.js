import HtmlToImage from "html-to-image";
import Download from "downloadjs";

const takeAScreenshot = elementID => {
  let profile = document.getElementById(elementID);
  HtmlToImage.toPng(profile)
    .then(function(dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      Download(dataUrl, "screenshot");
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
};

export default takeAScreenshot;
