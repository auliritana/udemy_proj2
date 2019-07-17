window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let info = document.querySelector('.info-header'),
        btn = document.querySelectorAll('.info-header-tab'),
        tab = document.querySelectorAll('.info-tabcontent');

    // console.log(info);
    // console.log(btn);
    // console.log(tab);

    function hideTabs(index) {
        for (let i = index; i < btn.length; i++) {
            tab[i].classList.remove('show');
            tab[i].classList.add('hide');
        }
    }

    hideTabs(1);

    function showTab(index) {
        if (tab[index].classList.contains('hide')) {
            tab[index].classList.remove('hide');
            tab[index].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target);

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == btn[i]) {
                    hideTabs(0);
                    showTab(i);
                }
            }
        }
    });
});