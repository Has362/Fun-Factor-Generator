// Array of fun facts
const facts = [
"Honey never spoils.",
"A day on Venus is longer than a year on Venus.",
"Bananas are berries, but strawberries aren't.",
"There are more stars in the universe than grains of sand on Earth.",
"Octopuses have three hearts.",
"Dolphins have names for each other.",
"Cows have best friends and can become stressed when separated from them.",
"Honeybees can recognize human faces.",
"Elephants are known for their incredible memory.",
"Axolotls can regenerate lost body parts.",
"Sea otters hold hands while sleeping to keep from drifting apart.",
"Pigeons can do math at a level similar to primates.",
"Sloths can hold their breath longer than dolphins.",
"Crows are incredibly intelligent and can use tools.",
"The Eiffel Tower can be 15 cm taller during the summer.",
"20% of Earth's oxygen is produced by the Amazon rainforest.",
"Some cats are allergic to humans.",
"The inventor of the frisbee was turned into a frisbee after he died.",
"The heart of a shrimp is located in its head.",
"A snail can sleep for three years.",
"The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
"The shortest war in history lasted 38 minutes.",
"A single strand of spaghetti is called a spaghetto.",
"The unicorn is the national animal of Scotland.",
"Bees sometimes sting other bees.",
"The total weight of ants on Earth once equaled the total weight of people.",
"The longest wedding veil was the same length as 63.5 football fields.",
"The world's largest grand piano was built by a 15-year-old in New Zealand.",
"The chicken and the ostrich are the closest living relatives of the Tyrannosaurus rex.",
"A jiffy is an actual unit of time: 1/100th of a second.",
"The inventor of the microwave appliance received only $2 for his discovery.",
"The first oranges weren’t orange.",
"There’s only one letter that doesn’t appear in any U.S. state name: Q.",
"A cow-bison hybrid is called a “beefalo.”",
"Johnny Appleseed’s fruits weren’t for eating.",
"Scotland has 421 words for “snow.”",
"Samsung tests phone durability with a butt-shaped robot.",
"The “Windy City” name has nothing to do with Chicago weather.",
"Peanuts aren’t technically nuts.",
"Armadillo shells are bulletproof.",
"Firefighters use wetting agents to make water wetter.",
"The longest English word is 189,819 letters long.",
"“Running amok” is a medically recognized mental condition.",
"Octopuses lay 56,000 eggs at a time.",
"Cats have fewer toes on their back paws.",
"Kleenex tissues were originally intended for gas masks.",
"Blue whales eat half a million calories in one mouthful.",
"That tiny pocket in jeans was designed to store pocket watches.",
"Turkeys can blush.",
"Most Disney characters wear gloves to keep animation simple.",
  ];
  
  // Theme rotation setup
  const themes = ['theme-1', 'theme-2', 'theme-3'];
  let themeIndex = 0;
  
  // Rotate theme every 5 minutes
  function rotateTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    document.body.className = themes[themeIndex];
  }
  setInterval(rotateTheme, 300000); // 5 minutes
  
  // DOM elements
  const factDisplay = document.getElementById('fun-fact');
  const generateBtn = document.getElementById('generate-btn');
  const historyList = document.getElementById('history-list');
  
  // Generate a random fun fact
  function generateFunFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const newFact = facts[randomIndex];
  
    // Update the display
    factDisplay.style.opacity = 0;
    setTimeout(() => {
        factDisplay.textContent = newFact;
        factDisplay.style.opacity = 1;
    }, 300);
  
    // Add to history
    const listItem = document.createElement('li');
    listItem.textContent = newFact;
    historyList.prepend(listItem);
  }
  
  // Event listener for button
  generateBtn.addEventListener('click', generateFunFact);
  
  // Initial theme setup
  document.body.className = themes[themeIndex];