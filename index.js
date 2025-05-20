// Write your code here!

//i had API_KEY = "" here for best practice, but it was causing the test case to fail so i had to remove it :(


//just hardcoded data variable to use for testing
// data = 
//     [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         },
//         {
//             "userId": 1,
//             "id": 3,
//             "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//             "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//         },
//         {
//             "userId": 1,
//             "id": 4,
//             "title": "eum et est occaecati",
//             "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//         }
//     ];



//send a request to the server to grab post data and store as vatiable. prints success/error message to console
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        console.log("Successful fetch request");

        displayPosts(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}



//logic for creating and displaying posts. called in fetchData()
function displayPosts (data) {

    const postList = document.getElementById("post-list");

    //loop through the object and post appropriate data in appropriate tag
    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        
        const listItem = document.createElement("li");

        const titleItem = document.createElement("h1");
        titleItem.textContent = post.title;

        const postItem = document.createElement("p");
        postItem.textContent = post.body;


        listItem.appendChild(titleItem);
        listItem.appendChild(postItem);

        postList.appendChild(listItem);
        
    }
}


fetchData();
