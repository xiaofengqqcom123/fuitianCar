//设置rem的根字体
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            window.clientWidth = docEl.clientWidth;
            if (!window.clientWidth) return;
            docEl.style.fontSize = 20 * (window.clientWidth / 640) + 'px';
            window.base = 20 * (window.clientWidth / 640);
            // document.getElementById('video_mp4').width = window.base*28.8;
            // document.getElementById('video_mp4').height = window.base*16.1;
        };

    try {
        recalc();
    } catch (e) {

    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



