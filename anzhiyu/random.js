var posts=["2024/11/27/hello-world/","2024/11/28/STC51/","2024/11/30/hanshuku/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };