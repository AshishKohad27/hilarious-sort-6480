// home page block 4
let block_4 = [
  "https://assets.www.happyfox.com/v2/logo/owler-logo.png",
  "https://assets.www.happyfox.com/v2/logo/whirlpool.svg",
  "https://assets.www.happyfox.com/v2/logo/jabra.svg",
  "https://assets.www.happyfox.com/v2/logo/leap-frog.svg",
  "https://assets.www.happyfox.com/v2/logo/harbour.svg",
];

block_4.forEach(function (ele) {
  let div_main = document.createElement("div");
  let image = document.createElement("img");
  image.setAttribute("src", ele);
  div_main.append(image);
  document.querySelector("#block_4>div").append(div_main);
});

// block_55
// catching all element
let image = document.querySelector("#block_55>div>img");
// console.log(image)
let quotes = document.querySelector(
  "#block_55>div:nth-child(2)>div:first-child>p"
);
// console.log(quotes);
let name = document.querySelector(
  "#block_55>div:nth-child(2)>div:last-child>p:first-child"
);
// console.log(name);
let position = document.querySelector(
  "#block_55>div:nth-child(2)>div:last-child>p:last-child"
);
// console.log(position)

let block_55Arr = [
  {
    image: "https://assets.www.happyfox.com/v2/images/keep_everything.svg",
    quotes:
      "“We consider HappyFox a one-stop shop for help desk software to support our global customer network.”",
    name: "Martin Hartvigsen",
    position: "Director, Global Technical Support at Jabra GN",
  },
  {
    image: "https://assets.www.happyfox.com/v2/images/stay_control.svg",
    quotes:
      "“We LOVE HappyFox. It has changed our work lives. Support requests no longer fall through the cracks and get lost in an email or some random spreadsheet.”",
    name: "Bill Bates",
    position: "Director of Technology - Pinewood Private School",
  },

  {
    image: "https://assets.www.happyfox.com/v2/images/things_fast.svg",
    quotes:
      "“With 95% of the support tickets being responded to within 2 hours. Our customers are impressed!”",
    name: "James Powell",
    position: "Director &amp; IT Business Consultant - FatCat IT",
  },
];

// catching click part :- Slider 1
let slider1 = document
  .getElementById("slider1")
  .addEventListener("click", function () {
    image.src = block_55Arr[0].image;
    // console.log(image.src)
    quotes.innerHTML = block_55Arr[0].quotes;
    name.innerHTML = block_55Arr[0].name;
    position.innerHTML = block_55Arr[0].position;
  });

// catching click part :- Slider 2
let slider2 = document
  .getElementById("slider2")
  .addEventListener("click", function () {
    image.src = block_55Arr[1].image;
    // console.log(image.src)
    quotes.innerHTML = block_55Arr[1].quotes;
    name.innerHTML = block_55Arr[1].name;
    position.innerHTML = block_55Arr[1].position;
  });

// catching click part :- Slider 3
let slider3 = document
  .getElementById("slider3")
  .addEventListener("click", function () {
    image.src = block_55Arr[2].image;
    // console.log(image.src)
    quotes.innerHTML = block_55Arr[2].quotes;
    name.innerHTML = block_55Arr[2].name;
    position.innerHTML = block_55Arr[2].position;
  });

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
  },
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

  div_img.append(img1);
  div_h5_p.append(head5);
  div_rest.append(div_h5_p, para);
  div.append(div_img, div_rest);
  sub6_div.append(div);
  document.querySelector("#block_6").append(sub6_div);
});

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
  },
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
  let span = document.createElement("span");
  let para = document.createElement("p");
  para.innerText = ele.para;

  div_img.append(img1);
  span.append(img2);
  head5.append(span);
  div_h5_p.append(head5);
  div_rest.append(div_h5_p, para);
  div.append(div_img, div_rest);
  sub7_div.append(div);
  document.querySelector("#block_7").append(sub7_div);
});

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


  // block_9
  let desc = document.querySelector("#block_9>div:first-child>p");
  // console.log(desc);
  let name1 = document.querySelector("#name>p:first-child");
  // console.log(name);
  let post1 = document.querySelector("#name>p:last-child");
  // console.log(post);
  let image1 = document.querySelector("#name+div>img");
  // console.log(image);

  let companyCall_B9 = [
    {
      desc: "“With HappyFox we have a specialized partner, whose vast customer portfolio across multiple industries, sees and knows the next “big thing” in customer support, and integrates this into a compact and cost-effective solution, saving considerable effort, time and cost for us. In short, it allows us to focus on happy customers the rest we leave to HappyFox.”",
      name: "Martin Hartvigsen",
      post: "Director, Global Technical Support",
      image: "https://assets.www.happyfox.com/v2/logo/jabra.svg"
    },

    {
      desc: "“With HappyFox, I finally feel that I can trust the data I’m able to export from the system. We implemented the solution for email tracking but are now leveraging it to track incoming invoices as well. If a business is facing similar problems to ours in terms of tracking incoming emails or a high number of incoming emails from the same customers or suppliers, in my opinion HappyFox really is the best solution to resolve this. With HappyFox, you really are able to track everything that is coming in, and analyze the data in real-time.”",
      name: "Pankaj Kumar",
      post: "Manager, Accounts Payable Whirlpool Global Finance Center",
      image: "https://assets.www.happyfox.com/v2/logo/whirlpool.svg",
    },

    {
      desc: "“So far we have Facilities and Security using this system. There is nothing I do not use in HappyFox and our team likes the app, the reports, the smart rules, and the tags. We enter tickets and complete them daily and HappyFox has improved our average number of tickets completed per month. My customers (Health Center Staff) have all responded very positively to the change; they love that they can see all the tickets for their site and comment on whether they’re still needed.”",
      name: "Karin Stopforth",
      post: "Facilities Administrator",
      image: "https://assets.www.happyfox.com/v2/logo/planned-parenthood.png",
    },
  ];
let left_btn = document.getElementById("left-btn");
let right_btn = document.getElementById("right-btn");
let companyCall_B9_State=0;
right_btn.addEventListener("click",function(){
  companyCall_B9_State++;
  if(companyCall_B9_State===companyCall_B9.length){
    companyCall_B9_State=0;
  }
  desc.innerHTML = companyCall_B9[companyCall_B9_State].desc;
  name1.innerHTML = companyCall_B9[companyCall_B9_State].name;
  post1.innerHTML = companyCall_B9[companyCall_B9_State].post;
  image1.src = companyCall_B9[companyCall_B9_State].image;
  console.log(companyCall_B9_State);
})
left_btn.addEventListener("click",function(){
  companyCall_B9_State--;
  if(companyCall_B9_State<0){
    companyCall_B9_State=companyCall_B9.length-1;
  }
  desc.innerHTML = companyCall_B9[companyCall_B9_State].desc;
  name1.innerHTML = companyCall_B9[companyCall_B9_State].name;
  post1.innerHTML = companyCall_B9[companyCall_B9_State].post;
  image1.src = companyCall_B9[companyCall_B9_State].image;
  console.log(companyCall_B9_State);
  console.log(companyCall_B9_State);
})
