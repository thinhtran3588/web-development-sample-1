let b = 2;

function printB() {
  console.log(b);
}

function add(x) {
  b = b + x;
}

function getB() {
  return b;
}

export { printB, add, getB };

// export { printB, add, getB };
