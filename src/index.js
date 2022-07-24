module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;

  let newArr = []
  let arrItem = bracketsConfig.map(item => item.join('')).reduce((sum, el) => sum.concat(el), []);

  let obj = Object.assign({}, arrItem);

  /*   for (let i = 0; i < str.length / 2; i++) {
    newArr.push(str[i]);
    newArr.push(str[str.length - i - 1])
  } */


  newArr = str.split('');
  for (let i = 0; i < newArr.length / 2; i++) {
    for (let key in obj) {
      if (`${newArr[i]}${newArr[newArr.length - i - 1]}` === `${obj[key]}`) return true
    }
    return false;
  }

}
