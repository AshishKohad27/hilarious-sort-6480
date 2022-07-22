// Home Footer Page
let featureFotter = [
  { feature: "Email Ticketing", use: "Help Desk Software" },
  { feature: "Knowledge Base", use: "Ticketing System" },
  { feature: "Community Forums", use: "Shared Inbox Software" },
  { feature: "Help Desk Reporting", use: "Trouble Ticket Management" },
  { feature: "Help Desk Automation", use: "Issue Tracking Software" },
  { feature: "Multilingual Help Desk", use: "Customer Service" },
  { feature: "Self Service Portal", use: "Email Support Software" },
  { feature: "SLA Management", use: "Customer Complaint Management" },
  { feature: "Satisfaction Survey", use: "Internal Help Desk Software" },
  { feature: "Email Notification", use: "Ticket Tracking Software" },
  { feature: "Help Desk Customization", use: "Contact Center Software" },
  { feature: "Help Desk Ticket Features", use: "IT Help Desk Software" },
  { feature: "Multilingual Knowledge Base", use: "Case Management Software" },
  { feature: "Internal Knowledge Base", use: "Cloud Help Desk" },
  { feature: "HappyFox SMS", use: "Mobile Help Desk" },
  { feature: "Asset Management", use: "Remote Customer Support" },
  { feature: "Task Management", use: "Multi-Brand Helpdesk" },
  { feature: "Agent Scripting" },
];

featureFotter.forEach(function (ele) {
  let para1 = document.createElement("p");
  let anchor1 = document.createElement("a");
  anchor1.setAttribute("href", " ");
  anchor1.innerText = ele.feature;

  let para2 = document.createElement("p");
  let anchor2 = document.createElement("a");
  anchor2.setAttribute("href", " ");
  if (ele.use !== undefined) {
    anchor2.innerText = ele.use;
  } else {
    anchor2.innerText = "";
  }

  para1.append(anchor1);
  document.querySelector("#footer_1").append(para1);
  para2.append(anchor2);
  document.querySelector("#footer_3").append(para2);
});
