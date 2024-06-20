document.addEventListener('DOMContentLoaded', function() {

    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
    const profileDiv = document.querySelector('.profile');
    profileDiv.innerHTML = '<p>Welcome to MeeTY! Explore and meet new people around you.</p>';
    profileDiv.style.opacity = 0;
    setTimeout(() => {
        profileDiv.style.opacity = 0.8;
    }, 1000);
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function() {
        console.log('Next button clicked! Implement your functionality here.');
        alert('Next button clicked! Implement your functionality here.');
        profileDiv.style.opacity = 0;
        setTimeout(() => {
            profileDiv.innerHTML = '<p>New section loaded. Continue exploring!</p>';
            profileDiv.style.opacity = 0.8;
        }, 500);
    });
});