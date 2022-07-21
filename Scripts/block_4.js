let block_4 = [
    "https://assets.www.happyfox.com/v2/logo/owler-logo.png",
    "https://assets.www.happyfox.com/v2/logo/whirlpool.svg",
    "https://assets.www.happyfox.com/v2/logo/jabra.svg",
    "https://assets.www.happyfox.com/v2/logo/leap-frog.svg",
    "https://assets.www.happyfox.com/v2/logo/harbour.svg"
  ]

  block_4.forEach(function (ele) {
      let div_main = document.createElement("div");
      let image = document.createElement("img");
      image.setAttribute("src",ele);
      div_main.append(image);
      document.querySelector("#block_4>div").append(div_main);
  })