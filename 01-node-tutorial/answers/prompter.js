const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Enter your name and two numbers to add below";
let name = '';
let firstNum = 0;
let secondNum = 0;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${item}</p>
  <form method="POST">
  <label for="name">Name</label>
  <input name="name"></input>
  <br>
  <label for="firstNum">First Number</label>
  <input type="number" name="firstNum"></input>
  <br>
  <label for="secondNum">Second Number</label>
  <input type="number" name="secondNum"></input>
  <br>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      console.log(body);
      // here, you can add your own logic
      if (body["name"] && body["firstNum"] && body["secondNum"]) {
        item = `Hi there, ${body["name"]}. <br> The sum of ${body["firstNum"]} and ${body["secondNum"]} is: <br> ${parseInt(body["firstNum"]) + parseInt(body["secondNum"])}!`
      } else {
        item = "Please complete all the fields.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
