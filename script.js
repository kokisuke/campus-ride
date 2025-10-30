// 「詳しく見る」ボタンでサービス概要までスクロール
document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// お問い合わせフォームの送信イベント
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("お問い合わせありがとうございます！返信をお待ちください。");
  e.target.reset();
});
