function sumTo(n) {
  if (n == 1) {
    return n
  } else {
  
  for (let i = 0; i < n; i++) {
  n += n - 1;
    
  }
    return n
  }
}

sumTo(3)


const here = document.getElementByTagName('div')
