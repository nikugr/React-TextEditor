const formats = {
  bold: 1,
  h1: 2,
  h2: 3,
  h3: 4, 
  h4: 5, 
  h5: 6,
  h6: 7,
}

const format = (text) => {
  let processedText = "";

  let list = [];

  for(const char of text) {
    let c = char;

    // Newline
    if(c === "\n") {
      c = "<br>"
    }

    // Bolding
    else if(c === "*") {
      if(!list.includes(formats.bold)) {
        list.push(formats.bold);
        c = "<strong>";
      } else {
        list.splice(list.indexOf(formats.bold), 1);
        c = "</strong>";
      }
    }

    
    // Heading
    else if(c === "1") {
        if(!list.includes(formats.h1)) {
          list.push(formats.h1);
          c = "<h1>";
        } else {
          list.splice(list.indexOf(formats.h1), 1);
          c = "</h1>";
        }
    }

    else if(c === "2") {
      if(!list.includes(formats.h3)) {
        list.push(formats.h3);
        c = "<h3>";
      } else {
        list.splice(list.indexOf(formats.h3), 1);
        c = "</h3>";
      }
  }

  else if(c === "3") {
    if(!list.includes(formats.h4)) {
      list.push(formats.h4);
      c = "<h4>";
    } else {
      list.splice(list.indexOf(formats.h4), 1);
      c = "</h4>";
    }
}
    

    processedText = processedText + c;
  }
  return processedText;
}

export default format;