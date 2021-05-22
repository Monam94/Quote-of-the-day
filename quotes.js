//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[random].author}-`;
    setRandomBackground()
    
}
function setRandomBackground(){
    // This function changes the background color to one of 6 pre-defined colors based on a random
    // number generator.  First get the random number
    var randomNumber = Math.floor(Math.random() * 6)
    
    // then check to see what the number equals and assign the corresponding color
     if (randomNumber == 1){
      document.body.style.background = 'blue';
    }else if (randomNumber == 2){
      document.body.style.background = 'green';
    }else if (randomNumber == 3){
      document.body.style.background = 'red';
    }else if (randomNumber == 4){
      document.body.style.background = 'purple';
    }else if (randomNumber == 5){
      document.body.style.background = 'yellow';
    }
  }
  
  // Run the function when the button is pressed...
  document.getElementById('load-quote').addEventListener("click", generateQuote, false);
  // ...or when 30 seconds pass
  window.setInterval(generateQuote, 30000);