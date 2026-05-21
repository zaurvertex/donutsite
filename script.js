const searchInput = document.getElementById('searchInput');
const donutCards = document.querySelectorAll('.donut-card');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    donutCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        
       
        if (title.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none"; 
        }
    });
});
const selectButtons = document.querySelectorAll('.select-btn');

selectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.donut-card');
        const box3d = card.querySelector('.donut-3d-box');
        const modelUrl = this.getAttribute('data-model');

        if (box3d.style.display === 'block') {
            box3d.style.display = 'none';
            box3d.innerHTML = ''; 
        } else {
            box3d.style.display = 'block';
            box3d.innerHTML = `
                <model-viewer 
                    src="${modelUrl}" 
                    ar 
                    ar-modes="webxr scene-viewer quick-look" 
                    camera-controls 
                    touch-action="none">
                </model-viewer>
            `;
        }
    });
});
