// レスポンシブ機能
document.addEventListener("DOMContentLoaded", function() {
  // 「詳しく見る」ボタンの動作
  const learnMoreButton = document.getElementById("learnMore");
  if (learnMoreButton) {
    learnMoreButton.addEventListener("click", () => {
      // about.htmlページに遷移
      window.location.href = "about.html";
    });
  }

  // 「大学ホームページへ」ボタンの動作
  const visitUniversityButton = document.getElementById("visitUniversity");
  if (visitUniversityButton) {
    visitUniversityButton.addEventListener("click", () => {
      // 名古屋市立大学のホームページを新しいタブで開く
      window.open("https://www.nagoya-cu.ac.jp", "_blank");
    });
  }

  // 「予約サイトへアクセス」ボタンの動作
  const reservationButton = document.getElementById("reservationButton");
  if (reservationButton) {
    reservationButton.addEventListener("click", () => {
      // 予約サイトを新しいタブで開く（実際の予約サイトURLに変更）
      window.open("https://okc33.github.io/yoyaku_apuri/", "_blank");
    });
  }
  // スムーズスクロールの実装
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ウィンドウリサイズ時の処理
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // リサイズ後の処理があれば追加
      console.log('Window resized');
    }, 250);
  });

  // タッチデバイス対応
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }

  // フォームのバリデーション強化（モバイル対応）
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
          input.focus();
        } else {
          input.style.borderColor = '#3b82f6';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('必須項目を入力してください。');
      }
    });
  });
});
