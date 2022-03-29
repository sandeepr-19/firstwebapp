document.getElementById("calc").addEventListener("click", action);
function action() {
  let name1 = document.getElementById("yourname").value;
  let name2 = document.getElementById("partnername").value;
  if (name1 != "" && name2 != "") {
    sessionStorage.setItem("name1", name1);
    sessionStorage.setItem("name2", name2);
  } else {
  }
}

document.getElementById("wh").addEventListener("click", () => {
  window.location.href = "https://wa.me/919486338304";
});
document.getElementById("insta").addEventListener("click", () => {
  window.location.href = "https://instagram.com/_spryzen?utm_medium=copy_link";
});
document.getElementById("git").addEventListener("click", () => {
  window.location.href = "https://github.com/sandeepr-19";
});
document.getElementById("google").addEventListener("click", () => {
  window.location.href = "https://theinkedpapers.blogspot.com";
});
document.getElementById("snap").addEventListener("click", () => {
  window.location.href =
    "https://www.snapchat.com/add/the_spryzen?share_id=WVmq7Ao-tU4&locale=en-IN";
});
document.getElementById("tele").addEventListener("click", () => {
  window.location.href = "https://t.me/itssan_z";
});
