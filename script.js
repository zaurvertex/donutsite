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
