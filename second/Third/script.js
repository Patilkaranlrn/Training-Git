// Define an array of strings
const Todo = [{ id : 1, taskName: "New To do"},
    { id : 2, taskName: "Plan the project"},
    { id : 3, taskName: "Design the frontend"},
    { id : 4, taskName: "Design the Backend"},
    { id : 5, taskName: "Create the Database"},
    { id : 6, taskName: "Merge the database"},
    { id : 7, taskName: "Test the code"},
    { id : 8, taskName: "Debug the website"},
    { id : 9, taskName: "Deploy the website"},
];

// Select the HTML element to display messages
const messageList = document.getElementById("message-list");

// Use a loop to create and display list items
for (let i = 0; i < Todo.length; i++) {
    // Create a new list item element
    const listItem = document.createElement("li");
    
    // Set the text content to the current message
    listItem.textContent = Todo[i].id+"."+Todo[i].taskName;
    
    // Append the list item to the message list
    messageList.appendChild(listItem);
}
