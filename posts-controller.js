'use strict'

function onInit() {
    renderPosts();
}

function renderPosts() {
    var posts = getPosts();
    if (!posts) return;
    var strHTML = '';
    var elFeed = document.querySelector('.post-container-holder');
    for (var i = 0; i < posts.length; i++) {
        strHTML += `
    <div class="post-container">
      <div class="post-content-holder">
                <div class="post-content-header">
                    <div class="post-content-header-user-details">
                        <div class="user-profile-img">
                            <img class="profile-img" src="${posts[i].profilepicture}" width="70px" 
                            height="70px" >
                        </div>
                        <div class="user-profile-details">
                            <h3>${posts[i].name}</h2>
                                <h4>27/03/2020</h4>
                        </div>
                    </div>
                    <div class="post-content-header-checkin">
                        <h3>
                            <span>#</span>${posts[i].loc} 
                        </h3>
                        <h5>📍 '${posts[i].place}'</h5>
                    </div>
                    <div class="post-content-header-features">
                        <button class="about">About</button>
                        <button>Navigate</button></div>
                </div>
                <div class="post-content-content">
                    <div class="post-txt-content">
                        <p>${posts[i].txt}</p>
                    </div>
                    <div class="post-slideshow-content">
                        <img class="slide-show-content" src="${posts[i].img}" width="711">
                    </div>
                </div>
            </div>
    </div>
      ` ;
    }
    elFeed.innerHTML = strHTML;
}

function onCreatePost(ev, elForm) {
    ev.stopPropagation();
    var porfPic = elForm.querySelector('.input-profile-picture').value;
    var usrName = elForm.querySelector('.input-user-name').value;
    var location = elForm.querySelector('.input-location').value;
    var place = elForm.querySelector('.input-place').value;
    var para = elForm.querySelector('.input-para').value;
    var postImg = elForm.querySelector('.input-image').value;

    createPost(porfPic, usrName, location, place, para, postImg);
    renderPosts();
}

function onCloseModal() {
    document.querySelector('.create-post-container').style.display = 'none';
}
