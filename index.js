/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/ 

/*Now in order to create this project, we're going to be using two packages from NPM.
One is called Inquirer, and this is something that's going to allow us to get inputs from the user.
And another package called QR image, which is going to generate images as a PNG for us to save into
our local file system. */
/*first pass a prompt to user and then wait for them to give us a ans and then we see if there 
are any errors to catch and to handle */

/*In order to create a QR image, we need to use an object called QR from the QR image module.
And then we're going to use a method called image to turn a piece of text, which is the first input
into a QR image.
And the second part can take a object where we have a whole bunch of options, such as the type of image,
the size of the image margin, etcetera.
And you can see that it actually defaults to create a PNG, which is what we want to create.
So we actually don't even need to provide this option.
And then we take this QR image and then we use the FS module to write it into the file stream.
These two lines of code seem to pretty much do what we need, so let's copy it and paste it into the
part where we get hold of our answers from the user.*/

/* Now all we have left is the final part where we're going to use the FS module to create a text file
to save the user input.
We've already got hold of our FS module imported right up here.
So down here, in addition to our SR image, we can use the file system method of Pfswrite file to create
our new text file.
I'm just going to copy this sample code over here and I'm going to paste it right below the other lines
of code.
So we're going to need FS dot to call the write file method from the file system.
And then we're going to create a file called URL dot Text.
And the data is going to be the URL that we got over here.
Now let's go ahead and hit save and hopefully our final step should also work.
And once I hit enter, we've got our image created and we've got our URL text.
It's saved the text that we've typed in right here.
It's generated our QR image and we've now completed all three steps of the project right here.
Now, this project might have required you to do some digging around and getting used to reading documentation
and understanding how it works. */

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


  /*If you need a little bit of reminding what the back end is, again, remember that we said the server
is just simply any computer and in most cases a server is a big and powerful computer that's on 24 over
seven and it's always listening for any requests, looking for a particular resource, like an HTML
file of a website or the CSS or the JavaScript, etcetera.
Now, in addition to the server, the back end also consists of an application that is written using
some sort of code, and that application is running on the server computer.
This could just be an index.js file that is on this server computer.
In addition, usually the back end also has a database, but this is usually in the case where you have
a more complex back end, a more complex website where you have maybe user data or company data, etcetera.
But a very simple back end can just consist of an application running on a server computer.
All of these things together are what we would usually think of when we think of a website back end.
Now when a client, which in most cases will just be a particular user trying to access your website,

they'll go via the internet to reach your server computer and they're going to make the request for
the website they're interested in looking at.
Let's say they type in Google.com.
Then this request goes through the internet to Google's servers somewhere in the world.
And on this server computer there is an application that's running listening for this particular request.
And once it finds it, it's going to send back that home page.
Maybe in this case it could be an index.html or it could have the CSS or the JavaScript.
But all of this goes back over to the client and that is what our server is trying to do.
Now, in most cases you'll hear people refer to the client side as the front end facing side.
So this is the side which your user is going to access and interact with your website.
But in addition, you'll also hear this term called the server side.
And the server side refers to everything that's on our back end.
And sometimes you'll hear people referring to all of this instead of the back end as the server.
This is what we're going to try and build today.
We're going to try and build our server using Express.js.
Now what that means is that we're going to be creating an application in JavaScript using Express and
node.
Now Express is the one that's going to use Node so we don't have to explicitly interact with the cumbersome
code that is inside Node, and we're going to use our local computer as the server.
So as I mentioned, servers are usually 24 over seven, but in this case our computer is just on for
the time being when we want to test and when we want to make the request to the server side to retrieve
any website data so it doesn't actually have to be 24 over seven, but it just has to be there listening
for any requests when it comes through. */

/*There are six steps to creating an express server.

First, we have to create a directory, so a folder where we're going to have all our project files

in that folder, we're going to create a JavaScript file, the Index.js, and then we're going to initialize

NPM to be able to install the express package into this directory that we created in step one.

And then we'll be able to use the express package to write a application using JavaScript inside our

index.js.

Finally, we can start our server and see what happens when we try to send a request to our server. */