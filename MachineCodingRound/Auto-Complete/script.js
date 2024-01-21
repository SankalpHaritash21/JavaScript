let availableKeywords = [
  "technology",
  "programming",
  "design",
  "data",
  "machine learning",
  "web development",
  "coding",
  "artificial intelligence",
  "software",
  "innovation",
  "mobile apps",
  "cloud computing",
  "cybersecurity",
  "user experience",
  "front-end",
  "back-end",
  "open source",
  "agile development",
  "virtual reality",
  "internet of things",
  "HTML",
  "CSS",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Django",
  "Ruby on Rails",
  "Spring Framework",
  "TensorFlow",
  "PyTorch",
  "jQuery",
  "Bootstrap",
  "Sass",
  "Less",
  "Express.js",
  "Tailwind CSS",
  "Exploring the latest trends in technology",
  "Writing code for a new machine learning algorithm",
  "Designing a user-friendly interface for a mobile app",
  "Analyzing big data to extract meaningful insights",
  "Web development is a dynamic and ever-evolving field",
  "Coding is both a science and an art",
  "Artificial intelligence is transforming various industries",
  "Software development requires attention to detail",
  "Innovation drives progress in the tech world",
  "Learning new programming languages enhances skills",
  "Creating innovative solutions for complex problems",
  "The intersection of data and creativity is fascinating",
  "Developing secure mobile apps for iOS and Android platforms",
  "Exploring the potential of cloud computing for scalable solutions",
  "Ensuring cybersecurity measures to protect sensitive data",
  "Prioritizing user experience in the design of digital products",
  "Front-end development focuses on the user interface and interactions",
  "Back-end developers work on server-side logic and databases",
  "Contributing to open-source projects fosters collaboration",
  "Agile development methodologies emphasize adaptability",
  "Creating immersive experiences with virtual reality technologies",
  "Internet of Things (IoT) connects devices for smart solutions",
  "Implementing responsive design for cross-browser compatibility",
  "Collaborating with cross-functional teams for project success",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
