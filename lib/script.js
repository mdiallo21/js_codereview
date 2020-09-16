/** This should build a sentence and display it in the main browser window. */

let getSentence = ()  => {
  console.log('starting function');
  //Initializing local variables and constants
  let myStr = 'I like to eat';
  const x = ['apples', 'bananas', 'cookies'];
  console.log('so far so good');
  
  //String concatenation with arrays elements.
  myStr = myStr + ' ' + x.join(' ');
  
  //JQuery logic
  $('body')
    .find('h1')
    .text(myStr);
  console.log(myStr);
};

getSentence();