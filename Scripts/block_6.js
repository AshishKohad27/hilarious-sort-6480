let helpDesk_B7 = [
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
  let para = document.createElement("p");
  para.innerText = ele.para;

  div_img.append(img1);
  div_h5_p.append(head5);
  div_rest.append(div_h5_p, para);
  div.append(div_img, div_rest);
  sub_div.append(div);
  document.querySelector("#block_6").append(sub_div);
});
