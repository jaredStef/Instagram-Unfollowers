const selectorName = 'xyi19xy x1ccrb07 xtf3nb5 x1pc53ja x1lliihq x1iyjqo2 xs83m0k xz65tgg x1rife3k x1n2onr6';

//  Click Followers Popup on profile and run following code in brower console
window.popup = document.getElementsByClassName(selectorName)[0];

window.lastHeight = 0;

scrollLoad = function() {
    window.lastHeight = popup.scrollHeight;
    popup.scrollTo(0, popup.scrollHeight);
}

// This assumes that once scrolled it can load the next followers in 3 seconds
// If it takes longer, it will stop. To fix you can rerun check(); or up the number of seconds
seconds = 3; 

check = function() {
    while(window.lastHeight != window.popup.scrollHeight) {
        scrollLoad();
        setTimeout(check, seconds * 1000);
    }
}

// Run on followers popup 
check();

followers = [];

for(let element of popup.children[0].children[0].children) {
    followers.push(element.getElementsByTagName(name)[0].href);
}

// Run on following popup
window.popup = document.getElementsByClassName(selectorName)[0];

window.lastHeight = 0;

check();

following = [];

for(let element of popup.children[0].children[0].children) {
    following.push(element.getElementsByTagName('a')[0].href);
}

// Output of this gives people who you follow but don't follow back :-)
console.log(following.filter(x => !followers.includes(x)));

