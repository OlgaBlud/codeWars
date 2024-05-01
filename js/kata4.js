/* likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing */
function likeOrDislike(buttons) {
  let btnState = 'Nothing';
  //   if (buttons.length === 0) {
  //     btnState = 'Nothing';
  //   } else if (buttons.length === 1) {
  //     btnState = buttons[0];
  //   } else {
  for (const input of buttons) {
    input === btnState ? (btnState = 'Nothing') : (btnState = input);
  }
  //   }
  return btnState;
}

console.log(likeOrDislike([])); // => N
console.log(likeOrDislike(['Dislike'])); // => Dislike
console.log(likeOrDislike(['Like', 'Like'])); //  => Nothing
console.log(likeOrDislike(['Dislike', 'Like'])); // => Like
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // => Nothing
/* function likeOrDislike2(buttons) {
  return buttons.reduce(
    (state, button) => (button === state ? Nothing : button),
    Nothing
  );
} */
