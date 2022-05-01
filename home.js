var svgContainer = document.getElementById('svgContainer');
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        animationData: JSON.parse(animationData)
    });

const idk =document.querySelector('.idk')

idk.addEventListener('click',function () {
    this.classList.toggle('is-active');
});

