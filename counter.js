// declaration

var count = document.getElementById('wcount');
var input = document.getElementById('input');
let vowelCount = document.getElementById('vCount');
let consonantCount = document.getElementById('CCount');
//let vowel = "a,e,i,o,u";

// function to count numbers of words
input.addEventListener('keyup', function(e){
    wordCounter(e.target.value);
  });

  function countWords(text) {
      var text = input.value.split;
      let counter = 0;
      for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          wordCount++;
        }
      }
      count.innerText = wordCount;
  }//split the words into an array, so it counts words only and excludes spaces(used as a delimeter)
   

  // function to avoid counting all characters as words

  function onlyWords(str) {
      var alphaNumericFound = false;
      for (var i= 0; i < str.length; i++){
        
            var code = str.charCodeAt(i);
            if ((code > 47 && code < 58) || // numeric (0-9)
                (code > 64 && code < 91) || // upper alpha (A-Z)
                (code > 96 && code < 123)) { // lower alpha (a-z)
              alphaNumericFound = true;
              return alphaNumericFound;
            }
      }
  }

// Now include the only words function into the countWords function

function wordCounter(text) {
    var text = input.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && onlyWords(text[i])) {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }

  //function to count the total numbers of vowels

input.addEventListener('keyup', function(e){
    countVowels(e.target.value);
  });

function countVowels () {
      let Count = 0;
      let vowels = "aeiouAEIOU";
      let str = input.value

        
      for (var i=0; i < str.length; i++){
          for (var j=0; j < vowels.length; j++)
            if ((str[i]) == (vowels[j])){
                Count++;
      }
        
        }
        vowelCount.innerText = Count
  }

   //function to count the total numbers of consonants

input.addEventListener('keyup', function(e){
    countConsonants(e.target.value);
  });

function countConsonants () {
      let Count = 0;
      let str = input.value
      let consonants = "bcdfghjklmnpqrstvwxyBCDFGHJKLMNPQRSTVWXYZ"

        
      for (var i=0; i < str.length; i++){
          for (var z=0; z < consonants.length; z++)
            if ((str[i]) == (consonants[z])){
                Count++;
      }
        
        }
        consonantCount.innerText = Count
  }