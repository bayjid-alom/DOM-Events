## 🚀 Milestone 04 — DOM Events

<div align="center">


![Session](https://img.shields.io/badge/M23-DOM_Events-blue?style=for-the-badge)
![Milestone](https://img.shields.io/badge/Milestone-04-success?style=for-the-badge)

</div>
<br>

[Visit : DOM Events 🔥](https://bayjid-alom.github.io/DOM-Events/)


- Exploring DOM Events through Event Listeners, User Interactions, Event Bubbling, Delegation, and Dynamic Web Page Behavior. 

### ✔️ What is DOM Events?

- DOM Event হলো ওয়েব পেজে user বা browser-এর কোনো action বা interaction-এর ফলে ঘটে যাওয়া একটি ঘটনা, যা JavaScript detect করতে পারে এবং তার response হিসেবে নির্দিষ্ট কাজ সম্পন্ন করতে পারে।
 
- Examples 🔥:
- Button-এ click করা → click event
- Mouse move করা → mousemove event
- Keyboard-এ key press করা → keydown event
- Input field-এ লেখা → input event
- Form submit করা → submit event
- Page load হওয়া → load event
---


```
🟢 Way - 02
<button onclick="console.log(7)">Click me</button>
```


```
🟢 Way - 02 [Function name in onclick]

<button onclick="makeEnergos()">Make Energos</button>

function makeYellow() {
            document.body.style.backgroundColor = "yellow";
}
```


```
🟢 Way - 03  [Get by id & ]

<button id="btn-make-old-gera">Make Old Gera</button>

const makeOldGera = document.getElementById("btn-make-old-gera");
        console.log(makeOldGera)
        makeOldGera.onclick = function makeOldGera() {
            document.body.style.backgroundColor = "#cf6a87";
 }
```

```
🟢 Way - 04 (Not used it - You can ignore)

<button id="btn-make-purple">Make Purple</button>

const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;  // Not Call

function makePurple() {
            document.body.style.backgroundColor = "purple";
}
```
```
🟢 Way - 05 addEventListener('event type', handler) 🔥

<button id="make-green-btn">Make Green</button>

const btnGreen = document.getElementById("make-green-btn");
btnGreen.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = "green";
})
```

```
document.getElementById("make-gold-btn")
     .addEventListener('click', function makeGold() {
            document.body.style.backgroundColor = 'gold';
 })
 ```

### What are different ways to add event to html element and which one is the best. explain why?
- Check : Notes

## DOM Events - Short Note

| Category         | Examples                               |
|------------------|----------------------------------------|
| Mouse Events     | click, dblclick, mouseenter, mouseleave |
| Keyboard Events  | keydown, keyup, keypress              |
| Form Events      | submit, input, change, focus, blur    |
| Window Events    | load, resize, scroll, unload          |



```
 <div class="box">
        <h3 id="name-change">There is no name..!</h3>
        <input type="text" name="" id="input" placeholder="Your name">
        <button id="update-btn">Update</button>
 </div>

document.getElementById("update-btn")
    .addEventListener("click", function () {
        const inputElement = document.getElementById("input");
        const valueOfInput = inputElement.value
        const name = document.getElementById("name-change");
        name.style.fontSize = "20px"
        name.innerText = valueOfInput;
    })
```

<br>


```
✔️ Post your comment :

  <script>

        document.getElementById('post-btn').addEventListener("click", function () {
            console.log("Post button clicked")

            const commentBox = document.getElementById("textarea");
            const comment = commentBox.value;

            const commentContainer = document.getElementById("comment-container")

            const commentElement = document.createElement("p");
            commentElement.classList.add("comment")

            commentElement.innerText = comment;

            commentContainer.appendChild(commentElement);

            commentBox.value = "";
        });

    </script>

```


## ✔️ focus - blur - keydown - keyup
- document.getElementById("user-name").addEventListener("focus", function () {});
- document.getElementById("user-email").addEventListener("focus", function () {});
- document.getElementById("user-email").addEventListener("blur", function () {});

```
document.getElementById("user-name")
    .addEventListener("keydown", function (event) {
        console.log('typing', event.target.value) // Event কোথায় হচ্ছে?
    })


document.getElementById("user-name")
    .addEventListener("keyup", function (event) {
        console.log('typing', event.target.value) 
    })
```


## ✔️ Github delete
```
(.addEventListener can nested )

document.getElementById("input-delete")
    .addEventListener("keyup", function (event) {
        const text = event.target.value;
        const btnDelete = document.getElementById("btn-delete");

        if (text === "delete") {
            btnDelete.removeAttribute("disabled")
            const scretTag = document.getElementById("secret-info");
            scretTag.style.display = 'none';
        }
        else {
            btnDelete.setAttribute("disabled", true)
        }
    })
```


## ✅ Event Bubble & stop Propagating

- Event Bubbling = কোনো element-এ event ঘটলে সেই event ধাপে ধাপে তার parent → grandparent → document পর্যন্ত উপরে উঠতে থাকে।
---
- উদাহরণ: button এর ভিতরে click করলে event যাবে:
- button → div → body → html → document
---
- stopPropagation()
- Event-এর এই উপরে ওঠা (bubbling) বন্ধ করে দেয়।
---
```
button.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Button clicked");
});
```


### ✔️ 3 Phase of bubbling :
| Phase | কী হয়? |
|--------|---------|
| **1. Capturing Phase** | Event উপরের element থেকে নিচের target element-এর দিকে যায়। |
| **2. Target Phase** | Event যে element-এ ঘটেছে সেখানে পৌঁছে। |
| **3. Bubbling Phase** | Event target element থেকে parent elements-এর দিকে উপরে উঠতে থাকে। |

<br>

## ✅ Event Delegation কী?

```
Event Delegation হলো parent element-এর মধ্যে event listener বসিয়ে তার child elements-এর event handle করার technique।

কারণ event bubble করে parent পর্যন্ত আসে, তাই parent-এর listener দিয়েই child-এর event ধরা যায়।

<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    console.log(event.target.innerText);
});
```



## ✔️ To clear input field after click Post button
- nameInput.value = "";     ❗(Input tag will be Empty)








---
### ✔️ DOM Event Handlers:

- onclick       → click করলে  (Most used)
- oninput       → input value type করলে সাথে সাথে
- onkeydown     → key press শুরু হলে
- onkeyup       → key ছেড়ে দিলে
- onchange      → value change করে focus ছাড়লে→
- onsubmit      → form submit করলে
- onmouseenter  → mouse element এর ভিতরে ঢুকলে
- onmouseleave  → mouse element থেকে বের হলে
- onfocus       → input element focus হলে
- onblur        → focus হারালে
- onload        → page/resource load হলে





```
```


--- 
### ✔️ Topics :
01. What is Event, different types of event in web
02. Add onclick handler directly or via javascript
03. Different ways to use addEventListener on a button
04. Integrate Event innerText and Text update by Event Handlers
05. Create a comment box and display comment
06. Explore more event type and simple github like delete confirmation
07. (Semi-advanced) Event bubble and stop propagating
08. (Advanced) Event delegate and benifit or Event bubble
09. All about Events (Summary)
10. Basic Js Events all in one (5m)