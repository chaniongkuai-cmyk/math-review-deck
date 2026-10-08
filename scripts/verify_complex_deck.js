// verify_complex_deck.js — 自動校驗《澳門四校聯考 · 複數代數、棣美弗定理與複平面幾何》全套簡報
const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || 'demo';
console.log(`\n=== 開始自動化驗證《Topic 03: 複數代數、棣美弗定理與複平面幾何》(${targetDir}) ===`);

// 模擬瀏覽器環境
global.window = {};
global.document = {
  getElementById: () => null,
  querySelectorAll: () => []
};

const chFiles = [
  'ch-complex-01.js',
  'ch-complex-02.js',
  'ch-complex-03.js'
];

let totalCards = 0;
let totalOMML = 0;
let errors = [];

chFiles.forEach((file, idx) => {
  const filePath = path.join(targetDir, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`檔案缺失: ${filePath}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  try {
    eval(content);
  } catch (e) {
    errors.push(`${file} 語法/執行錯誤: ${e.message}`);
  }
});

const deck = global.window.DECK || [];
if (deck.length !== 3) {
  errors.push(`章節總數不符: 預期 3 個題型部分，實際加載 ${deck.length} 個`);
} else {
  console.log(`[PASS] 成功加載全部 3 大題型模組！總章節數: ${deck.length}\n`);
}

deck.forEach((chap, cIdx) => {
  console.log(`模組 ${cIdx + 1}: ${chap.title || chap.ch}`);
  console.log(`  題數: ${(chap.slides || []).length}`);
  
  (chap.slides || []).forEach((s, sIdx) => {
    totalCards++;
    const qNum = s.qNum || `第${sIdx+1}題`;
    
    // 檢查必備屬性
    if (!s.q) errors.push(`[${chap.ch} ${qNum}] 缺失題幹 (q)`);
    if (!s.solution) errors.push(`[${chap.ch} ${qNum}] 缺失解答 (solution)`);
    if (!s.solution.ans) errors.push(`[${chap.ch} ${qNum}] 缺失參考答案 (solution.ans)`);
    
    // 檢查 OMML
    if (s.solution && s.solution.omml) {
      if (!s.solution.omml.includes('<m:oMath')) {
        errors.push(`[${chap.ch} ${qNum}] OMML 方程式標籤無效: ${s.solution.omml.substring(0, 40)}`);
      } else {
        totalOMML++;
      }
    } else {
      errors.push(`[${chap.ch} ${qNum}] 缺失 OMML 數學方程式`);
    }

    // 檢查知識點卡片
    if (!s.knowledge) errors.push(`[${chap.ch} ${qNum}] 缺失核心考點 (knowledge)`);
    if (s.knowledge && (!s.knowledge.formulas || !s.knowledge.points)) {
      errors.push(`[${chap.ch} ${qNum}] 知識點欄位不完整`);
    }
  });
  console.log('');
});

console.log(`[PASS] 全部卡片審查完畢！總卡片數: ${totalCards} (預期 10 題卡)，OMML 方程式注入數: ${totalOMML}`);

if (totalCards !== 10) {
  errors.push(`總卡片數不符合預期: 預期 10 道題，實際 ${totalCards} 道`);
}

// 檢查生成的重要檔案
const requiredFiles = [
  'complex.html',
  'omml.html',
  'Topic03_複數代數與複平面幾何_參考答案_OMML對照手冊.docx',
  'Topic03_複數代數與複平面幾何_參考答案_OMML彙編.xml'
];

requiredFiles.forEach(f => {
  const p1 = path.join('demo', f);
  const p2 = path.join('assets', f);
  if (!fs.existsSync(p1)) errors.push(`缺失檔案: ${p1}`);
  else console.log(`[PASS] 驗證成功: ${p1} (${(fs.statSync(p1).size / 1024).toFixed(1)} KB)`);
  
  if (!fs.existsSync(p2)) errors.push(`缺失檔案: ${p2}`);
  else console.log(`[PASS] 驗證成功: ${p2} (${(fs.statSync(p2).size / 1024).toFixed(1)} KB)`);
});

if (errors.length > 0) {
  console.error(`\n❌ 校驗失敗，發現 ${errors.length} 處錯誤：`);
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log(`\n🎉 《Topic 03: 複數代數、棣美弗定理與複平面幾何》全套系統 100% 通過自動化驗證！\n`);
  process.exit(0);
}
