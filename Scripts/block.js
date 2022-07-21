// home page block 4
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



// home page block 6

let helpDesk_B6 = [
  {
      img1: "https://assets.www.happyfox.com/v2/images/handle-icon.svg",
      head5: "Handle all inbound requests in one ticketing system",
      para: "Convert email, phone, chat and web requests into tickets and keep them organized.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/outsource-icon.svg",
      head5: "Ease your day with a smart help desk software",
      para: "Outsource complex and redundant workflows to a powerful smart rules engine.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/analyse-icon.svg",
      head5: "Analyse help desk metrics & create solid actions",
      para: "A ticketing system that can crunch your support process data.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/setting-icon.svg",
      head5: "Tailor your support ticket system in all forms",
      para: "Create your own custom fields, workflows & personalize the support experience.",
  }
];


let sub6_div = document.createElement("div");
helpDesk_B6.forEach(function (ele) {
  let div = document.createElement("div");
  let div_img = document.createElement("div");
  let img1 = document.createElement("img");
  img1.setAttribute("src", ele.img1);
  let div_rest = document.createElement("div");
  let div_h5_p = document.createElement("div");
  div_h5_p.setAttribute("class", "class");
  let head5 = document.createElement("h5");
  head5.innerText = ele.head5;
  let para = document.createElement("p");
  para.innerText = ele.para;


  div_img.append(img1)
  div_h5_p.append(head5)
  div_rest.append(div_h5_p, para)
  div.append(div_img, div_rest);
  sub6_div.append(div);
  document.querySelector("#block_6").append(sub6_div)
})


// home page block 7
let helpDesk_B7 = [
  {
      img1: "https://assets.www.happyfox.com/v2/images/support-icon.svg",
      head5: "For customer support",
      img2: "https://assets.www.happyfox.com/v2/images/external-link-icon.svg",
      para: "A customer support tool that helps redefine your customer service and ensure customer loyalty.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/opration-icon.svg",
      head5: "For IT operations",
      img2: "https://assets.www.happyfox.com/v2/images/external-link-icon.svg",
      para: "Customer support tool that helps IT and ITES companies deliver outstanding support.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/discuss-icon.svg",
      head5: "For HR &amp; Marketing",
      img2: "https://assets.www.happyfox.com/v2/images/external-link-icon.svg",
      para: "Track and manage issues from your customers and provide speedy resolutions.",
  },
  {
      img1: "https://assets.www.happyfox.com/v2/images/team-icon.svg",
      head5: "For all teams",
      img2: "https://assets.www.happyfox.com/v2/images/external-link-icon.svg",
      para: "All-in-one help desk ticketing system that provides faster and better support for your customers.",
  }
];

let sub7_div = document.createElement("div");
helpDesk_B7.forEach(function (ele) {
  let div = document.createElement("div");
  let div_img = document.createElement("div");
  let img1 = document.createElement("img");
  img1.setAttribute("src", ele.img1);
  let div_rest = document.createElement("div");
  let div_h5_p = document.createElement("div");
  div_h5_p.setAttribute("class", "class");
  let head5 = document.createElement("h5");
  head5.innerText = ele.head5;
  let img2 = document.createElement("img");
  img2.setAttribute("src", ele.img2);
  let span = document.createElement("span")
  let para = document.createElement("p");
  para.innerText = ele.para;


  div_img.append(img1)
  span.append(img2)
  head5.append(span);
  div_h5_p.append(head5)
  div_rest.append(div_h5_p, para)
  div.append(div_img, div_rest);
  sub7_div.append(div);
  document.querySelector("#block_7").append(sub7_div)
})


// home page block 8
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

let sub8_div = document.createElement("div");
accApps_B8.forEach(function (ele) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", ele.image);

  div.append(img);
  sub8_div.append(div);
  document.querySelector("#block_8").append(sub8_div);
});