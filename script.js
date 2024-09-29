// 開關選單
document.getElementById("menu-icon").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("translate-x-full");
  menu.classList.add("translate-x-0");
});

document.getElementById("close-icon").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-full");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  });
});

// Discord Webhook 串接
// Replace with your own Discord Webhook URL
const discord_webhook_url =
  "https://discord.com/api/webhooks/1289595424528666676/WEqCx0RMq-Pa4XCtRrr3yobsqH7XdTguqjfwXL_05arZNQTXSCMRebcUbSSRB4jj2712";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表單的默認提交行為

    // 提取表單資料
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector("textarea").value;

    // 檢查所有欄位是否已填寫
    if (!name || !email || !message) {
      alert("請填寫所有欄位");
      return;
    }

    // 在控制台中顯示提取的資料
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // 構建發送到 Discord 的消息
    const discordMessage = {
      content: `**有人從你的個人網站聯絡了你！**\n**Name:**  ${name}\n**Email:**  ${email}\n**Message:**  ${message}\n==============`,
    };

    // 發送數據到 Discord Webhook
    fetch(discord_webhook_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })
      .then((response) => {
        if (response.ok) {
          alert("我已收到您的消息！請等待回覆。");

          // 清空表單欄位
          event.target.querySelector('input[type="text"]').value = "";
          event.target.querySelector('input[type="email"]').value = "";
          event.target.querySelector("textarea").value = "";
        } else {
          console.error("Error sending message.");
          alert("系統出了一些問題。請稍後再試。");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("系統出了一些問題。請稍後再試。");
      });
  });
