const textarea = document.getElementById('tweettext');
const tweetbtn = document.getElementById('tweetbtn');
var likeicon = document.getElementById('likeicon');
var tweetpostdiv = document.getElementById('tweetpostdiv');
tweetbtn.style.backgroundColor ="#eee";
tweetbtn.disabled = true  
function disabletweetbtn(e) {
    if(e.target.value === '')
    {
        tweetbtn.style.backgroundColor ="#eee";
        tweetbtn.disabled = true  
    }
    else{
        tweetbtn.style.backgroundColor ="#1DA1F2";
        tweetbtn.disabled = false  
    }   
}
textarea.addEventListener('input',disabletweetbtn);
var newsfeed = document.getElementById('newsfeed');
window.addEventListener("load", ()=>{
    var tweets = JSON.parse(localStorage.getItem('tweets'));
        for(i =tweets.length-1; i>0 ; i--){
        var tweetdiv = document.createElement('div');
        newsfeed.appendChild(tweetdiv);
        var author = document.createElement('h3');
        var post = document.createElement("p");
        tweetdiv.appendChild(author);
        tweetdiv.appendChild(post);
        author.textContent = tweets[i].tweetauthor;
        post.textContent = tweets[i].tweetpost;
        var iconsdiv = document.createElement("div");
        var retweetbtn = document.createElement("button");
        var retweetspan = document.createElement("span");
        var retweetspantext = document.createTextNode("repeat");
        retweetbtn.appendChild(retweetspantext);
        retweetbtn.setAttribute("Id", "retweeticon");
        retweetbtn.setAttribute("class", "material-icons retweeticon");
        retweetbtn.appendChild(retweetspan);
        iconsdiv.appendChild(retweetbtn);
        var likebtn = document.createElement("button");
        var likespan = document.createElement("span");
        var likespantext = document.createTextNode("favorite");
        likebtn.appendChild(likespantext);
        likebtn.setAttribute("Id", "likeicon");
        likebtn.setAttribute("class", "material-icons likeicon");
        likebtn.appendChild(likespan);
        iconsdiv.appendChild(likebtn);
        tweetdiv.appendChild(iconsdiv);
        iconsdiv.setAttribute("class", "iconsdiv");
        tweetdiv.setAttribute("class", "tweetpostdiv");
        tweetdiv.setAttribute("Id", "tweetpostdiv");
        author.setAttribute("class", "tweetauthor");
        post.setAttribute("class", "tweetpost");
        likebtn.addEventListener("click", (e)=>{
            const child= e.target;
            const parent =child.parentElement;
            const parent2 =parent.parentElement;
            parent2.classList.toggle("backgroundstyle"); 
            e.target.classList.toggle("styleicon");
        })
        retweetbtn.addEventListener("click",(e)=>{
            const young = e.target;
            const old1 = young.parentElement;
            const bro2post = old1.previousSibling;
            const bro1author = bro2post.previousSibling;
            const txtbro2post = bro2post.textContent;
            const txtbro1author = bro1author.textContent;
            var tweet = {
                tweetauthor :txtbro1author ,
                tweetpost : txtbro2post
            }
            if(localStorage.getItem('tweets') == null){
                var tweetsarr = [];
                tweetsarr.unshift(tweet);
                localStorage.setItem('tweets', JSON.stringify(tweetsarr));
            }else{
                var mytweets = JSON.parse(localStorage.getItem('tweets'));
                tweetsarr=[...mytweets,tweet]
                localStorage.setItem('tweets', JSON.stringify(tweetsarr));
            }
            window.location.reload();
        })
    }
});
function tweet(event){
    var username = document.getElementById('username').value;
    var tweettext = document.getElementById('tweettext').value;
    var tweet = {
        tweetauthor :username ,
        tweetpost : tweettext
    }
    if(localStorage.getItem('tweets') == null){
        var tweetsarr = [];
        tweetsarr.unshift(tweet);
        localStorage.setItem('tweets', JSON.stringify(tweetsarr));
    }else{
        var mytweets = JSON.parse(localStorage.getItem('tweets'));
        tweetsarr=[...mytweets,tweet]
        localStorage.setItem('tweets', JSON.stringify(tweetsarr));
    }
}
tweetbtn.addEventListener("click", tweet);






