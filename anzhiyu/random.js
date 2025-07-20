var posts=["posts/ef6b.html.html","posts/2b3f.html.html","posts/806a.html.html","posts/d390.html.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };