const fs = require("fs");

// Create a file named "welcome.txt" with content
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log("File created successfully!");

    // Read the content of the file
    fs.readFile("welcome.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
});
