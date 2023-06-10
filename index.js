function redirectToURL(url) {
    window.location.href = url;
  }

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if ( window.pageYOffset > 2200){
        toTop.classList.add("active");
    }else{
       toTop.classList.remove("active");
    }
} )

// navigator.userAgent kullanımını kaldırma
var userAgent = navigator.userAgent;
// İlgili kod satırını yorum satırına alarak etkisiz hale getirin.

// navigator.appVersion kullanımını kaldırma
var appVersion = navigator.appVersion;
// İlgili kod satırını yorum satırına alarak etkisiz hale getirin.

// navigator.platform kullanımını kaldırma
var platform = navigator.platform;
// İlgili kod satırını yorum satırına alarak etkisiz hale getirin.

