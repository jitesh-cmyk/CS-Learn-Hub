window.subjectCourse = {
  subject: "Bootstrap",
  modules: [
    ["Introduction to Bootstrap", "What is Bootstrap|Features|Advantages"],
    ["Bootstrap Setup", "CDN|Download & Installation|Basic Structure"],
    ["Containers", "Container|Container-fluid|Responsive Containers"],
    ["Grid System", "Rows & Columns|Grid Sizes|Breakpoints"],
    ["Typography", "Headings|Text Classes|Text Alignment"],
    ["Colors & Backgrounds", "Text Colors|Background Colors|Opacity"],
    ["Spacing & Sizing", "Margin|Padding|Width & Height"],
    ["Display & Flexbox", "Display Classes|Flex Direction|Alignment & Justify"],
    ["Buttons", "Button Types|Button Sizes|Button Groups"],
    ["Cards", "Card Structure|Card Images|Card Layouts"],
    ["Navbar", "Navbar Structure|Responsive Navbar|Navbar Components"],
    ["Forms", "Input Fields|Select & Checkbox|Form Validation"],
    ["Tables & Lists", "Bootstrap Tables|List Groups|Responsive Tables"],
    ["Alerts & Badges", "Alerts|Badges|Notifications"],
    ["Bootstrap Components", "Modal|Carousel|Accordion|Dropdown"],
    ["Responsive Design", "Breakpoints|Mobile First|Responsive Utilities"],
    ["Practical Projects", "Login Page|Portfolio|Responsive Website"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
