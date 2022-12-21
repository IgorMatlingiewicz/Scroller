document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM zaladowany");

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');

    document.addEventListener('mousewheel', function (event) {
        console.log(event.wheelDelta);
    })
})