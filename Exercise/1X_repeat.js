// Theme colours
function normalTheme() {
    document.body.style.backgroundColor = 'white';
}

const themeBtn1 = document.getElementById("make-jaustBlue");
themeBtn1.addEventListener("click", function () {
    document.body.style.backgroundColor = "#54a0ff"
})

function makeBisque() {
    document.body.style.backgroundColor = "bisque";
}

const themeBtn2 = document.getElementById("aurora-btn");
themeBtn2.addEventListener("click", function () {
    document.body.style.backgroundColor = "#78e08f";

})



// Github delete
const deleteInput = document.getElementById("delete-input")
deleteInput.addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById("github-delete-btn")
    const textH3 = document.getElementById("text-h3")

    if (text === "delete") {
        deleteBtn.removeAttribute("disabled");
        deleteBtn.addEventListener("click", function () {
            textH3.style.display = "none"
        })

    } else {
        deleteBtn.setAttribute("disabled", true)
    }
})


// Comment box
document.getElementById("post-comment-btn").addEventListener("click", function () {
    const inputCommentBox = document.getElementById("comment-textarea");
    const comment = inputCommentBox.value;

    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p")
    commentElement.innerText = comment;

    commentContainer.appendChild(commentElement)
    inputCommentBox.value = "";
})


// Add item
const ol = document.getElementById("ol-list");
const itemAddBtn = document.getElementById("item-add-btn");

itemAddBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    li.innerText = "New item added";
    ol.appendChild(li)
})

ol.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target)
})



// Remove card using removeChild()

const cardContainer = document.getElementById("card-container");

cardContainer.addEventListener("click", function (event) {
    const removeBtn = event.target.closest(".remove-card-btn")
    const card = event.target.closest(".card")
    if (removeBtn) {
        cardContainer.removeChild(card)
    }
})

const addCardBtn = document.getElementById("add-new-card");
addCardBtn.addEventListener("click", function () {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.innerHTML = `
            <h2>New Card Added</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis magni voluptates quibusdam
                    necessitatibus explicabo non laboriosam laudantium molestias ipsa iure!</p>
                <button class="remove-card-btn">Remove it</button>
           `;
    cardContainer.appendChild(newCard)

    // নতুন কার্ডগুলোর রিমুভ বাটনে ক্লিক করলে রিমুভ হচ্ছে না কেন ?
    // Find out now!!
})