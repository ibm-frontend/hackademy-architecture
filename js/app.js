(function (Flowtime) {
  'use strict';

  // Show Progress Bar
  Flowtime.showProgress(true);

  // Use Clicker
  Flowtime.clicker(true);

  Flowtime.setTransitionTime(350);

  Flowtime.start();

  Flowtime.addEventListener('flowtimenavigation', function (e) {
    var allVideos = document.querySelectorAll('video');

    var videos = e.page.querySelectorAll('video'),
        video,
        i;

    for (i = 0; i < allVideos.length; i++) {
      video = allVideos[i];
      video.pause();
    }

    for (i = 0; i < videos.length; i++) {
      video = videos[i];
      if (video.hasAttribute('data-autoplay')) {
        video.currentTime = 0;
        video.play();
      }

    }
  });

}(window.Flowtime));
