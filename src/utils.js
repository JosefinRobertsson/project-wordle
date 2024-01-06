export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/* the range-function generates an array of numbers starting from start (or 0 if start is the only argument) up to, but not including, end, with increments of step. The result is an array containing the generated sequence of numbers. */
export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
