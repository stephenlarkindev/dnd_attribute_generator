const attribute = () => {
  // generate an array of size 4 with random numbers between 1 and 6
  // this is our dice rolls
  const results = Array.apply(null, Array(4)).map(
    _ => Math.floor(Math.random() * 6) + 1
  );

  // remove the smallest value in the array
  results.splice(results.indexOf(Math.min(...results)), 1);

  return results;
};

export default attribute;
