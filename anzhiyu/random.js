var posts=["2024/11/27/hello-world/","2024/11/28/STC51/","2024/11/30/hanshuku/","2024/12/02/CJiChu/","2025/01/01/network/","2025/02/19/3D_Print/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };