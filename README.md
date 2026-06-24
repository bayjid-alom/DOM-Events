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