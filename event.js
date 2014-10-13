window.onload = function() {
    document.getElementById('titre').textContent = 'Page chargée';
    
    var clickme = document.getElementById('clickme');
    clickme.onclick = function() {
        clickme.style.color = 'red';
    };
    
    document.getElementById('unistra').onclick = function() {
        window.location = 'http://unistra.fr/';
    };
};
