'use strict'

const KEY = 'feedPosts';
var gFeedPosts = makePosts();

function getPosts(){
    return gFeedPosts ;
}

function makePost(porfPic,usrName,location,place,para,postImg) {
    var post = {
        profilepicture: porfPic,
        name: usrName,
        loc: location,
        place: place,
        txt: para,
        img: postImg
    }
    return post;
}

function makePosts() {
    var posts = loadFromStorage(KEY);
    if (posts && posts.length) return posts;
    var posts = [];
    saveToStorage(KEY, posts)
    return posts;
}

function createPost(porfPic,usrName,location,place,para,postImg){
    const post = makePost(porfPic,usrName,location,place,para,postImg);
    gFeedPosts.unshift(post);
    saveToStorage(KEY, gFeedPosts);
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}