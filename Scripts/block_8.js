 let accApps_B8 = [
    { image: " https://assets.www.happyfox.com/v2/images/google-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/salesforce-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/app3-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/ring-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/fb-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/twitter-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/magento-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/ms-dynamics-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/github-icon.svg" },
    { image: "https://assets.www.happyfox.com/v2/images/shopify-icon.svg" },
  ];

  let sub_div = document.createElement("div");
  accApps_B8.forEach(function (ele) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);

    div.append(img);
    sub_div.append(div);
    document.querySelector("#block_8").append(sub_div);
  });