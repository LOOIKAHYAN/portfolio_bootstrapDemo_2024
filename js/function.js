function getType(name) {
    if (name != '') {
        alert("This is a " + name + " button"); 
    }
    else {
        alert("This is a button");
    } 
}

function like(sceneId) {
    let scene = document.getElementById(sceneId);
    let textWidth = scene.offsetWidth; // Get the width of the text content
    if (scene.style.color != "yellow") {
        scene.style.color = "yellow";
    }
    else {
        scene.style.color = "";
    }
}

function changeDisplay(img) {
    img.classList.toggle('change'); 
}

