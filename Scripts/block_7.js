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
  },
];

let sub_div = document.createElement("div");
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
  let span = document.createElement("span");
  let para = document.createElement("p");
  para.innerText = ele.para;

  div_img.append(img1);
  span.append(img2);
  head5.append(span);
  div_h5_p.append(head5);
  div_rest.append(div_h5_p, para);
  div.append(div_img, div_rest);
  sub_div.append(div);
  document.querySelector("#block_7").append(sub_div);
});
