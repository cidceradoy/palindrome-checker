const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.querySelector('input').value;
  const result = document.querySelector('#result');


  // call to checkPalindrome
  if (checkPalindrome(text)) {
    // alert('palindrome');
    result.textContent = 'You got a palindrome';
    result.style.color = 'green';
  } else {
    // alert('not palindrome');
    result.textContent = 'This isn\'t a palindrome';
    result.style.color = 'red';
  }
});


// checks for palindrome
function checkPalindrome(text) {
  console.time('palindromeFunction');
  const parsed = text.toLowerCase().replace(' ', '');
  for (let i = 0; i < Math.floor(parsed.length/2); i++) {
    if (parsed[i] !== parsed[parsed.length-i-1]) {
      console.timeEnd('palindromeFunction');
      return false;
    }
  }
  console.timeEnd('palindromeFunction');
  return true;
}