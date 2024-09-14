//Asynchronous reading a file
fs.readFile("./input.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    //Asynchronous writing a file
    fs.writeFile("./output.txt", result.toUpperCase(), (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result);
      
    });
