# Yi Sheng — 互動式 UI/UX 與前端作品集

這是一個互動式個人作品集，使用 **Vanilla JavaScript (ESNext)**、**Tailwind CSS** 與 **OKLCH** 色彩系統設計及開發。專案以國際數位無障礙標準為設計依據，包括 **EAA（European Accessibility Act，歐洲無障礙法案）**與 **WCAG 2.2 AA/AAA 等級**，並以零版面位移為目標（$\text{CLS} = 0.0$）。

---

## 1. 主要功能

* **即時狀態式 i18n 多語系：** 可在越南文（`vi`）與英文（`en`）之間切換，無須重新載入頁面。選擇會儲存在 `localStorage`，並同步提供給螢幕閱讀器。
* **OKLCH 色彩與流動式設計：** 採用感知均勻的色彩空間，目標對比度符合 AA（$> 4.5:1$）及 AAA（$> 7:1$）。使用 CSS `clamp()`，讓版面與字級從手機（$390\text{px}$）到桌面（$1440\text{px}+$）流暢縮放。
* **沉浸式水平專案展示：** 在桌面（$\ge 1024\text{px}$）上，垂直捲動會轉換為水平移動並搭配視差效果；在手機與平板上則支援自然的觸控滑動與 `scroll-snap`。
* **完整的無障礙設計（WCAG 2.2 AA）：**
  * 行動版抽屜選單與專案案例研究對話框皆提供鍵盤焦點陷阱（**Focus Trap**）。
  * 隱藏的即時通知區（`#a11y-live-region`，使用 `aria-live="polite"`）會向 NVDA、VoiceOver 等螢幕閱讀器播報即時狀態變化。
  * 尊重作業系統偏好設定：啟用 `prefers-reduced-motion` 時會減少動畫，並支援 `forced-colors`（高對比模式）。
* **GPU 加速微互動：** 自訂游標會依情境顯示文字（`XEM`/`VIEW`、`CUỘN`/`DRAG`），並以線性插值運動。介面也包含磁吸式懸停按鈕，以及由 `IntersectionObserver` 驅動的捲動顯示動畫。

---

## 2. 資料夾結構與檔案職責

```text
├── index.html           # 語意化 HTML5 結構、Tailwind CDN 設定與資料掛點
├── styles.css           # OKLCH 設計 token、WCAG 2.2 規則、CSS 動畫與水平捲動版面
├── i18n.js              # 越南文/英文詞典、專案資料與 i18n 狀態管理類別
├── app.js               # 中央協調器，包含 10 個互動與介面邏輯模組
├── tailwind.config.js   # 供 Node/CLI 建置環境參考的 Design System 設定檔
├── resume-yi-sheng.pdf  # 供下載功能使用的履歷檔
└── image/               # 專案圖片素材
    ├── fintech.png
    ├── nova.png
    ├── verve.png
    └── dash.png
```

### 各檔案詳細說明

1. **`index.html`**：包含完整介面結構（Preloader、Sticky Navbar、Mobile Menu Drawer、Hero、Project Showcase、About、Timeline、Contact、Modal）。`data-i18n`、`data-i18n-attr` 與 `data-cursor` 等屬性是 JavaScript 操作頁面的掛點。
2. **`styles.css`**：以 OKLCH 定義 `:root` 色彩變數，設定最小觸控目標 $44 \times 44\text{px}$、載入畫面的 SVG 描邊動畫，以及水平捲動流程中的 `sticky`（$400\text{vh}$）固定效果。
3. **`i18n.js`**：儲存 `I18N_TRANSLATIONS` 物件（所有文字、四個專案的詳細資料及圖片路徑），並由 `I18nManager` 類別建立全域實例 `window.i18n`。
4. **`app.js`**：監聽 `DOMContentLoaded` 事件並啟動各自獨立的功能模組，讓互動邏輯與 HTML 結構分離。
5. **`tailwind.config.js`**：保存 Design System 的標準設定（色彩、`fluid-*` 字型、`fluid-*` 間距及 keyframes），方便日後遷移至 Vite、Webpack 或 Next.js 等正式打包流程。

---

## 3. 互動處理模組（`app.js` 與 `i18n.js`）

JavaScript 系統拆分為彼此獨立的模組。若某個 DOM 元素不存在，其他模組仍可繼續運作：

| 編號 | 模組／函式 | 功能與運作機制 |
| :--- | :--- | :--- |
| **0** | `I18nManager` 與 `initLanguageToggle()` | 從 `localStorage` 讀取語言。掃描 `[data-i18n]` 設定文字，並掃描 `[data-i18n-attr]` 更新屬性（`src`、`alt`、`placeholder`、`aria-label`）。提供 `onLangChange`（Observer Pattern）通知其他模組語言變更。 |
| **0.1** | `initMobileMenu()` | 控制 $768\text{px}$ 以下的行動版抽屜選單。鎖定背景捲動、管理 `aria-expanded`、將 `Tab` 焦點限制在選單中、支援 `Escape` 關閉，並在視窗放大至桌面尺寸時自動關閉。 |
| **1** | `initPreloader()` | 使用 `requestAnimationFrame` 在 $1600\text{ms}$ 內將計數從 $0\%$ 推進至 $100\%$，接著加入 `.is-loaded` 以顯示主要介面。 |
| **2** | `initCustomCursor()` | 在觸控裝置（`pointer: coarse`）上自動停用。使用線性插值公式（$\text{ease} = 0.18$）讓游標圓環平滑跟隨指標，並在游標移過標記為 `data-cursor="pointer|view|drag"` 的元素時改變大小或文字。 |
| **3** | `initHorizontalScroll()` | 畫面寬度達 $1024\text{px}$ 以上時，計算 `.horizontal-scroll-container` 中的垂直捲動進度，透過 `translate3d` 移動 `.horizontal-track`，並輕微移動圖片以呈現視差效果。 |
| **4** | `initProjectModal()` | 接收帶有 `data-project-id` 的按鈕點擊事件，從 `window.i18n` 取得專案資料並填入 `#project-modal`，再產生技術堆疊（`stack`）清單。即使對話框開啟時切換語言，也會更新內容。 |
| **5** | `initMagneticHover()` | 計算指標與 `.magnetic-target` 元素中心的距離，並以 $0.32$ 的作用係數讓元素朝指標方向稍微移動。 |
| **6** | `initTimelineFilter()` | 依 `data-category`（`all`、`experience`、`education`）篩選職涯與教育項目，加入平滑轉場，並向螢幕閱讀器播報顯示項目數量。 |
| **7** | `initResumeDownload()` 與 `showToast()` | 使用者按下履歷下載連結時，在畫面右下角顯示浮動通知 `#accessible-toast`，並於 $4\text{s}$ 後自動隱藏。 |
| **8** | `initScrollReveal()` | 使用閾值為 $12\%$ 的 `IntersectionObserver` 加入 `.is-revealed`，在使用者捲動到元素時觸發輕微向上滑入動畫。 |
| **9** | `initContactForm()` | 驗證姓名（不可空白）、電子郵件（標準 Regex 格式）及訊息（至少 10 個字元）。在輸入欄下方顯示錯誤，並設定 `aria-invalid="true"`。 |

---

## 4. 整體系統工作流程

```text
[1. 瀏覽器載入 index.html]
       │
       ├─► 載入 styles.css（設定 OKLCH 變數與基礎 CSS 規則）
       ├─► 執行 Tailwind CDN + inline config（產生 utility classes）
       └─► 執行 i18n.js（建立 window.i18n 並從 localStorage 讀取語言）
              │
[2. DOMContentLoaded 觸發 app.js]
       │
       ├─► 步驟 1：呼叫 initLanguageToggle() -> applyTranslations()
       │     ├─► 翻譯所有 [data-i18n] 文字
       │     └─► 透過 [data-i18n-attr] 設定專案 <img> 圖片路徑
       │
       ├─► 步驟 2：執行 initPreloader()（1.6 秒由 0% 計至 100%，再顯示頁面）
       │
       └─► 步驟 3：初始化事件監聽器
             ├─► 捲動 -> 處理 Horizontal Scroll 與 Scroll Reveal
             ├─► 移動指標 -> 處理 Custom Cursor 與 Magnetic Hover
             └─► 點擊／鍵盤 -> 開啟 Modal、Mobile Menu、履歷篩選、切換語言
                    │
[3. 執行期間的狀態與無障礙回饋]
       └─► 所有介面變更都會更新 #a11y-live-region
           以支援視障使用者並符合 WCAG 2.2 AA。
```

---

## 5. 自訂與維護指南

### 5.1. 修改專案文字或圖片

所有專案文字與圖片路徑都位於 **`i18n.js`**。更新內容時，請同時修改 `vi` 和 `en` 兩個區段：

```javascript
// 在 i18n.js 中（vi 與 en 區段都要修改）
'project-1': {
  title: '新專案名稱',
  // ...
  image: 'image/new-image.png' // 相對於 index.html 的路徑
}
```

### 5.2. 調整版面、圓角、間距（Margin / Padding）

開啟 **`index.html`**，直接修改對應 HTML 元素上的 Tailwind CSS class：

* **圖片圓角：** 在 `<img>` 元素使用 `rounded-lg`、`rounded-xl` 或 `rounded-2xl`，並確認外層框架有 `overflow-hidden` class。
* **間距：** 使用 `p-*`（padding）、`m-*`（margin），或以中括號語法指定精確像素值，例如 `p-[30px]`。

---

## 6. 重要技術注意事項

1. **同步 script 檔名：** `index.html` 會載入 `<script src="i18n.js"></script>` 與 `<script src="app.js"></script>`。請確認本機檔名完全一致為 `i18n.js` 與 `app.js`，不要使用 `app_2.js` 或 `i18n_2.js` 等附加後綴的檔名。
2. **使用 CDN 時的 Tailwind CSS 設定：** 目前專案透過 Tailwind CDN（`https://cdn.tailwindcss.com`）直接在瀏覽器執行。因此瀏覽器會讀取 `index.html` 的 `<head>` 中 `<script> tailwind.config = { ... } </script>` 區塊的設定。若要新增 Tailwind 顏色或字級，請修改 `index.html` 中的區塊，並同步更新 `tailwind.config.js`，以維持參考設定一致。
