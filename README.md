# shopping_cart-react (EN)
App description:
A simple shopping cart app that I made using React, and that you can run on your web browser.
It contains counters: each counter object simulates an articles that a customer added to his shopping cart.
This counter object contains an increment button, a decrement button, a delete button and an area that shows the number of incrementations or decrementations of the counter. This number is positive because it simulates the quantity of an article, that a customer wants to buy.
It also contains a reset button, to reset all counters values to zero, and a navbar that shows the number of counters that have a strictly positive value.

Here are the steps to make this React app runs in your web browser:
1. I used VSCode (Visual Studio Code) as a code editor. So if you don't have it, go to this link and install it:
https://code.visualstudio.com/

2. Install Node.js:
Then if you don't have "Node.js", go to: https://nodejs.org/en/download/
and install its LTS version.
We're not going to use "Node.js", but one of its built-in tools, called "NPM" (Node Package Manger).
NPM is used to install third party librairies.

3. Create a new React app:
a. Go to the directory where you want to create your project.
b. If you are on Linux/Mac, open the "Terminal" in the directory where you want to create your project.
iI you are on Windows, open the "Command Prompt", and go to the directory where you want to create your project, using the "cd" command (cd <directory_name>),
and the "dir" command, to help you list the content of the current directory (dir <directory_name>).
OR
a. Open VSCode
b. In VSCode, go to "View", then "Terminal", to display the Terminal
c. Then go to the directory where you want to create your project. (use "cd" and "ls" commands to help you)

d. Then once in the specified directory, enter these 3 commands:
npx create-react-app my-app         
cd my-app
code .

create-react-app: package that we want to install
my-app:     your app name
cd my-app:  go to "my-app" folder
code .:     open your project in VSCode

Here's the full documentation on how to create a new React app: https://reactjs.org/docs/create-a-new-react-app.html

4.In the Terminal, enter these commands:
npm i bootstrap@4.1.1           (install Bootstrap v4.1.1)
npm install react-icons --save  (to use react-icons)

Finally:
npm start (to launch the development server)

5. In your newly created React project folder, replace the original "src" folder, with the "src" folder that you downloaded.

DONE

If you have any issue, ask me in the Discussion tab ;)
Have fun and don't forget to like!

preview 1:
![shopping_cart-1](https://user-images.githubusercontent.com/72648203/108029876-8bba9700-702e-11eb-901e-5d94d2f8770f.png)

preview 2:
![shopping_cart-2](https://user-images.githubusercontent.com/72648203/108029882-8cebc400-702e-11eb-8f1a-bb1c00b6b2b8.png)
