# Instagram Unfollowers Checker
### by Jared Stefanowicz

1. Open your Instagram profile in a web browser (https://instagram.com/jaredstef)
2. Click the Followers Button
3. Open the Javascript console. This can be found in Firefox by: Right Click -> Inspect -> Console
4. Copy paste the following code into the console and then press enter to run
```
const selectorName = 'xyi19xy x1ccrb07 xtf3nb5 x1pc53ja x1lliihq x1iyjqo2 xs83m0k xz65tgg x1rife3k x1n2onr6';

//  Click Followers Popup on profile and run following code in brower console
window.popup = document.getElementsByClassName(selectorName)[0];

window.lastHeight = 0;

scrollLoad = function() {
    window.lastHeight = popup.scrollHeight;
    popup.scrollTo(0, popup.scrollHeight);
}

seconds = 3; 

check = function() {
    while(window.lastHeight != window.popup.scrollHeight) {
        scrollLoad();
        setTimeout(check, seconds * 1000);
    }
}
```
5. Run `check();`. You may need to rerun if it times out. Don't stop until you've scrolled to the bottom of your followers list.
6. Run the following code 
```
followers = [];

for(let element of popup.children[0].children[0].children) {
    followers.push(element.getElementsByTagName('a')[0].href);
}
```
7. Click outside of the followers popup. Then click "Following"
8. Run the following code in the console. Similarly, don't stop until you've scrolled to the bottom of your following list.
```
window.popup = document.getElementsByClassName(selectorName)[0];

window.lastHeight = 0;

check();
```
9. Run the following code which will print out a list of accounts who you follow, but don't follow you back.
```
following = [];

for(let element of popup.children[0].children[0].children) {
    following.push(element.getElementsByTagName('a')[0].href);
}

console.log(following.filter(x => !followers.includes(x)));
```

## Tips (Technical)
1. If you get an error about the element being null you may have to change the selector name by finding the element manually in the inspector. Instagram changes this from time to time.
2. It is normal for Instagram to start loading slower as it begins to rate limit, especically with lists that are 1k+ long.
3. If Instagram stops loading the list, you can increase the timeout, wait, or scroll manually. 
4. Do not exit the window or tab when it is running.
5. Do not refresh the page. 
 