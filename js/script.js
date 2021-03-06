/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array an array of quote objects
***/

let quotes = [
  {
    quote: "Get your ass to Mars", 
    source: "Arnold Shwarzenegger", 
    citation: "Total Recall",
    year: 1990
  }, 
  {
    quote: "I’ll be back!", 
    source: "Arnold Shwarzenegger", 
    citation: " The Terminator",
    year: 1984
  },
  {
    quote: "Consider that a divorce!", 
    source: "Arnold Shwarzenegger", 
    citation: "Total Recall",
    year: 1990
  },
  {
    quote: "If it bleeds, we can kill it.", 
    source: "Arnold Shwarzenegger", 
    citation: "Predator", 
    year: 1987
  },
  {
    quote: "You are one ugly motherf****r!", 
    source: "Arnold Shwarzenegger", 
    citation: "Predator", 
    year: 1987
  },
  {
    quote: "Hasta la vista, baby!", 
    source: "Arnold Shwarzenegger", 
    citation: "Terminator 2", 
    year: 1991
  },
  {
    quote: "He had to split.", 
    source: "Arnold Shwarzenegger", 
    citation: "The Running Man", 
    year: 1987
  },
  {
    quote: "Stick around.", 
    source: "Arnold Shwarzenegger", 
    citation: "Predator", 
    year: 1987
  },
  {
    quote: "Come with me if you want to live.", 
    source: "Arnold Shwarzenegger", 
    citation: "Terminator 2", 
    year: 1991
  },
  {
    quote: "I’m not into politics, I’m into survival.", 
    source: "Arnold Shwarzenegger", 
    citation: "The Running Man", 
    year: 1987
  },
  {
    quote: "Ice to meet you", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  },
  {
    quote: "What is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!", 
    source: "Arnold Shwarzenegger", 
    citation: "Conan the Barbarian",
    year: 1982,
    tags: "philosophy"
  },
  {
    quote: "You’re a funny guy Sully, I like you. That’s why I’m going to kill you last.", 
    source: "Arnold Shwarzenegger", 
    citation: "Commando", 
    year: 1985
  },
  {
    quote: "Let off some steam.", 
    source: "Arnold Shwarzenegger", 
    citation: "Commando",
    year: 1985
  },
  {
    quote: "Dillon, you son of a bitch!", 
    source: "Arnold Shwarzenegger", 
    citation: "Predator", 
    year: 1987
  },
  {
    quote: "Get to the chopper!!!", 
    source: "Arnold Shwarzenegger", 
    citation: "Predator", 
    year: 1987
  },
  {
    quote: "What killed the dinosaurs? The Ice Age! ", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  },
  {
    quote: "Crom laughs at your four winds. He laughs from his mountain. ", 
    source: "Arnold Shwarzenegger", 
    citation: "Conan the Barbarian",
    year: 1982
  },
  {
    quote: "You think this is the real Quaid? It is", 
    source: "Arnold Shwarzenegger", 
    citation: "Total Recall",
    year: 1990
  },
  {
    quote: "You're not sending ME to the COOLER!", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  },
  {
    quote: "It's NOT a tumor", 
    source: "Arnold Shwarzenegger", 
    citation: "Kindergarten Cop",
    year: 1990
  },
  {
    quote: "I seen you before. You're the asshole on TV.", 
    source: "Arnold Shwarzenegger", 
    citation: "The Running Man", 
    year: 1987
  },
  {
    quote: "STOP WHINING", 
    source: "Arnold Shwarzenegger", 
    citation: "Kindergarten Cop",
    year: 1990
  },
  {
    quote: "Stay cool, Birdboy. ", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  },
  {
    quote: "Now that hit the spot.", 
    source: "Arnold Shwarzenegger", 
    citation: "The Running Man", 
    year: 1987
  },
  {
    quote: "Sue me, dickhead", 
    source: "Arnold Shwarzenegger", 
    citation: "Total Recall",
    year: 1990
  },
  {
    quote: "Killian, here's your Subzero, now plain zero. ", 
    source: "Arnold Shwarzenegger", 
    citation: "The Running Man", 
    year: 1987
  },
  {
    quote: "Let's kick some ice!", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  },
  {
    quote: "Mercy? I'm afraid my condition has left me cold to your pleas of mercy.", 
    source: "Arnold Shwarzenegger", 
    citation: "Batman and Robin", 
    year: 1997
  }
];

/***
 * `getRandomQuote` function generates a random number
 * within the bounds of the quotes array and returns
 * a quote object based on that number
***/
function getRandomQuote()
{
  let i = Math.floor(Math.random() * quotes.length);

  return quotes[i];
}

/***
 * `printQuote` function gets a random quote and writes the properties
 * of the selected quote object to the document
***/
function printQuote()
{
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  if(randomQuote.hasOwnProperty("citation"))
  {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if(randomQuote.hasOwnProperty("year"))
  {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if(randomQuote.hasOwnProperty("tags"))
  {
    html += `<span class="tags">${randomQuote.tags}</span>`;
  }

  html += "</p>";
  document.body.style.backgroundColor = randomColor(); 
  document.getElementById('quote-box').innerHTML = html;

}

/***
 * `randomColor` selects a random color and
 * returns that color. checks to make sure the
 * new color isnt the same as the current one
***/
function randomColor()
{
  let colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan", "magenta"];
  let i = Math.floor(Math.random() * colors.length);
  //console.log(`that last color was ${document.body.style.backgroundColor} changing to ${colors[i]}`);
  if(colors[i] == document.body.style.backgroundColor)
  {
    //console.log("the color wass the same! changing color!!!")
    if(i === colors.length - 1)
      return colors[i - 1];
    else  
      return colors[i + 1];  
  }

  return colors[i];
}

setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);