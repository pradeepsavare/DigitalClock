let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let s = document.getElementById('s');
let stamp = document.getElementById('stamp');



setInterval(() => {
let currTime = new Date();
    hr.innerHTML = (currTime.getHours() < 10? "0":"") + currTime.getHours() ;
    mn.innerHTML = (currTime.getMinutes() < 10? "0" : "") + currTime.getMinutes();
    s.innerHTML = (currTime.getSeconds() < 10? "0" : "") + currTime.getSeconds();
    if(currTime.getHours() > 12){
        stamp.innerHTML = "PM";
        if((currTime.getHours() - 12) < 10){
            hr.innerHTML = "0" + (currTime.getHours() - 12) ;
        }else{
            hr.innerHTML = "" + (currTime.getHours() - 12) ;
        }

    }else{
        stamp.innerHTML = "AM";
    }
}, 1000)
