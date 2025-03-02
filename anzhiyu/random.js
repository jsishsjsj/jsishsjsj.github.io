var posts=["posts/1.html.html","posts/2.html.html","posts/2.html.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };