document.addEventListener('DOMContentLoaded', function() {

    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
    const body = document.querySelector('body');
    const profileDiv = document.querySelector('.profile');
    const cardUser = document.querySelector('.profile');
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
        //alert('klikna');
        profileDiv.style.opacity = 0;
        setTimeout(() => {
            profileDiv.innerHTML =   '<div class="cards"></div>';
            //body.innerHTML = '<div class="toggle"><div class="circle"></div></div>';
            profileDiv.style.opacity = 0.8;
        }, 500);}
    });
    const line = document.querySelector('.line');
    line.addEventListener('mouseover', function() {
        profileDiv.style.marginTop = '55px';
        profileDiv.style.height = "calc(100vh - 55px)"
    });
    line.addEventListener('mouseout', function() {
        profileDiv.style.marginTop = '60px';
    });
    const icon = document.querySelector('.icon');
    icon.addEventListener('click', function(){
        
    )};
});