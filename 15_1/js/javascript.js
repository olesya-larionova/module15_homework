function pageLoaded() {

    const btn = document.querySelector('.btn-js');

    btn.addEventListener("click", changeIcon);

    function changeIcon() {


        if (getComputedStyle(document.getElementById('btn_icon1')).display == 'block') {
        
            document.getElementById('btn_icon1').style.display = 'none';
            document.getElementById('btn_icon2').style.display = 'block';
            
        } else {

            document.getElementById('btn_icon1').style.display = 'block';
            document.getElementById('btn_icon2').style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", pageLoaded);
