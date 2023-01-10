module.exports = function reverse (n) {
  let result = [];

  let splitNumb = n.toString().split('');

  splitNumb.forEach(element => {
    if(element != '-')
    result.unshift(element)
  });

  return +result.join('')

}

