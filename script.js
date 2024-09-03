// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:


let ap = 100;
let hp = 100;


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
 

onReady()
// Handle click events

//update state variable to make the freaky fungus lose hit points HP and to reduce your attack points AP
//hold state in a variable of my choosing
//HP and AP values may not be negative(set to 0 if they would otherwise be negative)

document.querySelector('.arcane-scepter').addEventListener('click', () => {
    if (ap >= 12){
        ap -= 12;
        hp -= 14;
        updateState();
    }
    if (ap >= 23){
        ap -= 23;
        hp -= 9;
        updateState();
    }
    if (ap >= 38){
        ap -= 38;
        hp -= 47;
        updateState();
    }
    if (ap >= 33){
        ap -= 33;
        hp -= 25;

        updateState();
    }
})

function updateState() {
    document.querySelector('.ap-text').textContent = `${ap} AP`;
    document.querySelector('.hp-text').textContent = `${hp} HP`;

    document.getElementById('.ap-meter').value = ap;
    document.getElementById('.hp-meter').value = hp;

    checkGameOver();
}


// Render state changes to the DOM

//update the text above the attack buttons(eg, "100 AP")
//update the text above the enemy fungus
//replace the 'walk' class with a 'dead' class on the freaky fungus element
//replace the 'walk' class with a 'jump' class on the freaky fungus element
//give all of the attacks buttons a 'disabled' attributes

function checkGameOver() {
    if (hp <= 0) {
        document.querySelector('.freaky-fungus').classList.replace('walk', 'dead');
        disableButtons();
    } else if (ap <= 0) {
        document.querySelector('.freaky-fungus').classList.replace('walk', 'jump');
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector('.attack-btn').forEach(button => button.disabled = true);
}

/*
## stretch goals

**progress bar**

when states changes, update the value of each element

**HP regeneration**
If the freaky fungus HP falls below 50, have it regenerate 1 HP every second

HINT look up the built in 'setInterval'

*/
