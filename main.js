var banners = document.getElementsByClassName('banner'),
    titles = document.getElementsByClassName('title');

var forEach = function (collection, cb) {
    Array.prototype.forEach.call(collection, cb);
};

var currentOffset = window.pageYOffset;

document.addEventListener('scroll', function () {
    var diff = window.pageYOffset - currentOffset;
    currentOffset = window.pageYOffset;
    if (diff > 0) {
        forEach(banners, function (elem) {
            var title = elem.querySelector('.title');
            var height = getComputedStyle(title).height;
            var top = elem.getBoundingClientRect().top;
            console.log(top)
            if (top <= 0) {
                title.classList.add('pinned');
                elem.style.paddingTop = height;
            }
        })
    } else {
        forEach(banners, function (elem) {
            var title = elem.querySelector('.title');
            var height = title.offsetHeight;
            var top = elem.getBoundingClientRect().top;
            if (top >= height) {
                title.classList.remove('pinned');
                elem.style.paddingTop = 0;
            }
        });
    }

});