import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
.prompt([
    /* Pass your questions in here */
    {message: "Type in your URL: ",
     name : "URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;            //we store the ans in url

//    var qr_svg = qr.image('I love QR!', { type: 'svg' });
//     qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
    var qr_svg = qr.image(url);     //i delete type bcz it defaults to create a png img
    qr_svg.pipe(fs.createWriteStream("qr_imag.png"));

    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong  
    }
  });
