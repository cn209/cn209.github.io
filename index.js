(async()=>{
  if(!localStorage.getItem('prefs')){
    localStorage.setItem('prefs', '{}');
  }
  window.win = window.open('/');
  setTimeout(() => {
    let writeVal = '<html><head></head><body style="height: 0"><div id="app"></div>';
    const scripts = [
      "https://www.google-analytics.com/analytics.js",
      "https://kit.fontawesome.com/984809ea42.js",
      "https://js.stripe.com/v3",
      "https://thatfrueddued.github.io/blooket-hack/scripts/0.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/1.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/2.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/3.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/4.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/5.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/6.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/7.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/8.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/9.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/10.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/12.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/13.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/14.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/15.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/16.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/17.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/18.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/19.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/20.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/21.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/22.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/23.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/24.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/25.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/26.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/27.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/28.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/29.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/30.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/31.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/32.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/33.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/34.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/35.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/36.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/37.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/38.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/39.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/40.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/41.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js"
    ];
    for(let script of scripts){
      writeVal += '<script src="' + script + '"></script>';
    }
    win.document.write(writeVal);
  });
})();
