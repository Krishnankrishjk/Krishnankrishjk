function multiple(step, limit) {
  let result = []; 

  for (let i = step; i <= limit; i += step) {
      result.push(i); 
  }

  console.log(result); 
}

// Example usage
multiple(5,500);
