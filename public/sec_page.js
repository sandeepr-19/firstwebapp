let sename1 = sessionStorage.getItem("name1");
let sename2 = sessionStorage.getItem("name2");
let n1, n2;
n1 = sename1.toLowerCase();
n2 = sename2.toLowerCase();
function percent() {
  let sum, sum1, ls, num, sum_t, per;
  (sum = 0), (sum1 = 0), (ls = 15);
  for (let i = 0; i < n1.length; i++) {
    sum += n1.charCodeAt(i);
  }
  for (let i = 0; i < n2.length; i++) {
    sum1 += n2.charCodeAt(i);
  }
  function sumOfDigits(num) {
    let su;
    su = 0;
    while (num > 0) {
      su += num % 10;
      num /= 10;
    }
    return su;
  }
  sum_t = sumOfDigits(sum + sum1);
  if (sum_t > ls) {
    sum_t = ls - (sum_t - ls);
  }
  per = (sum_t / ls) * 100;
  return per;
}
let per = parseInt(percent());
if (per < 50) {
  per += 20;
}
document.getElementById("per").innerHTML = sename1 + "   &   " + sename2;
if (
  (n1 == "sandeep" && n2 == "prakalya") ||
  (n1 == "prakalya" && n2 == "sandeep") ||
  (n1 == "sakthi prakalya" && n2 == "sandeep") ||
  (n1 == "sandeep" && n2 == "sakthi prakalya") ||
  (n1 == "sandeep r" && n2 == "sakthi prakalya s p") ||
  (n1 == "sakthi prakalya s p" && n2 == "sandeep r") ||
  (n1 == "r sandeep" && n2 == "s p sakthi prakalya") ||
  (n1 == "s p sakthi prakalya" && n2 == "r sandeep") ||
  (n1 == "sandeep.r" && n2 == "sakthi prakalya.s.p") ||
  (n1 == "sakthi prakalya.s.p" && n2 == "sandeep.r") ||
  (n1 == "r.sandeep" && n2 == "s.p.sakthi prakalya") ||
  (n1 == "s.p.sakthi prakalya" && n2 == "r.sandeep") ||
  (n1 == "sandeep" && n2 == "sakthi") ||
  (n1 == "sakthi" && n2 == "sandeep") ||
  (n1 == "san" && n2 == "pra") ||
  (n1 == "pra" && n2 == "san") ||
  (n1 == "san" && n2 == "praks") ||
  (n1 == "praks" && n2 == "san") ||
  (n1 == "san" && n2 == "praku") ||
  (n1 == "praku" && n2 == "san")
) {
  let s = 100;
  document.getElementById("phar").innerHTML = s + "%";
  document.getElementById("ph").innerHTML =
    "You two are a romance novel which admires everyone. You two are describing… what true love looks like.";
} else {
  document.getElementById("phar").innerHTML = per + "%";
  if (per < 50) {
    document.getElementById("ph").innerHTML =
      "You two ain't perfect for each other. Jk, work on your relationship.";
  }
  if (per >= 50 && per < 60) {
    document.getElementById("ph").innerHTML =
      "You both look best for each other.";
  }
  if (per >= 60 && per < 70) {
    document.getElementById("ph").innerHTML =
      "Life is not perfect but the two of you are.";
  }
  if (per >= 70 && per < 80) {
    document.getElementById("ph").innerHTML =
      "I've seen the competing couple. But, you both are completing each other.";
  }
  if (per >= 80 && per < 90) {
    document.getElementById("ph").innerHTML =
      "You two are so natural together, you guys are the embodiment of love.";
  }
  if (per >= 90) {
    document.getElementById("ph").innerHTML =
      "That's what called a perfect match, You guys epitomize love even more than Juliet and Romeo.";
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
