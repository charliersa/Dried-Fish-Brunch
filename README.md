# 小魚乾線上點餐 — 網頁版（獨立資料夾）

這個資料夾是**完整、可獨立部署**的網頁版，把它整包丟到任何靜態網站空間就能上線。

## 檔案說明
| 檔案 | 用途 |
|------|------|
| index.html | 入口（自動導向顧客點餐） |
| customer.html | 顧客點餐 |
| kitchen.html | 廚房後台 |
| cashier.html | 外場收銀 |
| display.html | 叫號螢幕 |
| admin.html | 管理後台（需管理密碼） |
| shared.js | 共用資料 / 樣式 / 同步邏輯 |
| firebase-config.js | Firebase 設定（填了才會跨裝置同步；沒填＝單機模式） |
| manifest.json / sw.js | PWA（可安裝、可離線） |
| icon-192.svg / icon-512.svg | App 圖示 |

## 測試層 `test/`（改版先在這裡驗證，不影響營業）

`test/` 是整個站台的複本，網址 https://charliersa.github.io/Dried-Fish-Brunch/test/ 。
只要路徑含 `/test/`，`shared.js` 會自動切成測試模式，**資料與正式站完全分開**：

- Firestore 集合全部加 `test_` 前綴（`test_orders`／`test_config`／`test_feedback`）→ 測試訂單不會出現在廚房、收銀、叫號螢幕
- localStorage 的 key 也加前綴 → 不會蓋掉正式站的進行中訂單、後台登入狀態
- 推播端點清空 → 測試單不會震到店裡與顧客的手機
- 畫面最上方顯示橘色「🧪 測試站」橫幅

**改版流程**：改動先進 `test/` → 在測試站確認 → **打烊後**再把 `test/` 的檔案覆蓋到根目錄（正式站）。
營業時間（6:00–12:00）不要動根目錄的檔案。

> Firestore 安全規則要允許 `test_` 開頭的集合讀寫，測試站才連得上。

## 本機測試
在這個資料夾打開終端機，執行其中一個：
```powershell
# Python
python -m http.server 8000

# 或 Node
npx serve .
```
然後瀏覽器開 http://localhost:8000

## 管理後台登入
管理後台 (`admin.html`) 採 Firebase 帳號登入保護，需以管理員帳號登入才能查看營業數據。
