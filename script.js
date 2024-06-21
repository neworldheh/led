document.addEventListener('DOMContentLoaded', function() {

    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
    const profileDiv = document.querySelector('.profile');
    profileDiv.innerHTML = '<p>Welcome to <a class="clr">MeeTY!</a> Explore and meet new people around <a class="clr">you</a>.</p>';
    profileDiv.style.opacity = 0;
    setTimeout(() => {
        profileDiv.style.opacity = 0.8;
    }, 1000);
    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function() {
        if(profileDiv.innerHTML != '<p>Welcome to <a class="clr">MeeTY!</a> Explore and meet new people around <a class="clr">you</a>.</p>'){
            profileDiv.style.opacity = 0;
        setTimeout(() => {
            profileDiv.innerHTML = '<p>Welcome to <a class="clr">MeeTY!</a> Explore and meet new people around <a class="clr">you</a>.</p>';
            profileDiv.style.opacity = 0.8;
        }, 500);
        }else{
        console.log('klikk');
        alert('klikna');
        profileDiv.style.opacity = 0;
        setTimeout(() => {
            profileDiv.innerHTML = '<p>New section loaded. Continue exploring!</p>';
            profileDiv.style.opacity = 0.8;
        }, 500);}
    });
});