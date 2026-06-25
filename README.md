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
