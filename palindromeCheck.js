// FreeCodeCamp project 01 javaScript
function palindrome(str) {
  let limparCaracteres = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let strReverse = limparCaracteres.split('').reverse().join('');
return (limparCaracteres === strReverse);
}
