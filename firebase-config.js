// ===== Firebase 設定 =====
// 還沒設定時，系統會自動使用「本機模式」(localStorage)，網頁/APK 仍可正常運作。
//
// 啟用「跨裝置即時同步」步驟：
// 1. 到 https://console.firebase.google.com 用 Google 帳號建立專案
// 2. 建立 Firestore Database（測試模式即可）
// 3. 專案設定 → 一般 → 你的應用程式 → 選「Web </>」→ 複製 firebaseConfig
// 4. 把下面的空白欄位換成你複製到的內容（apiKey 等）
//
// 設定完成後，這個檔案會被各頁面自動載入並啟用雲端同步。

const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
