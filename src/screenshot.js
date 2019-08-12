import HtmlToImage from "html-to-image";
import Download from "downloadjs";

const takeAScreenshot = elementID => {
  let profile = document.getElementById(elementID);
  HtmlToImage.toJpeg(profile)
    .then(function(dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      Download(dataUrl, "afterflood-poster");
    })
    .catch(function(error) {
      console.error("oops, something went wrong!", error);
    });
};

export default takeAScreenshot;
