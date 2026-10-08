/* 澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙 — 第一部分 單項選擇題 (題 01~06 · 滿分 30分) - 支援原生 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "第一部分 單項選擇題",
  "year": "100分鐘專題",
  "paper": "選擇題",
  "title": "第一部分 單項選擇題 (題 01~06 · 滿分 30分)",
  "color": "#2563eb",
  "sections": [
    "題 01 · 複數除法分母有理化與共軛複數 (Level 1)",
    "題 02 · 純虛數充要條件與增根排除陷阱 (Level 2)",
    "題 03 · 待定係數求解未知複數與模長計算 (Level 2)",
    "題 04 · 阿根圖動點軌跡與中垂線幾何特徵 (Level 3)",
    "題 05 · 複數旋轉幾何意義與幅角相加原理 (Level 3)",
    "題 06 · 複平面圓周軌跡與三角形不等式極值 (Level 3)"
  ],
  "slides": [
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 01",
      "topic": "複數除法分母有理化 · 共軛複數概念",
      "score": "5分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📐 複平面共軛對稱動態演示</div>
              <svg viewBox="-40 -40 280 200" style="width:100%;max-width:320px;height:180px;background:#1e293b;border-radius:8px;">
                <!-- 坐標軸 -->
                <line x1="0" y1="60" x2="220" y2="60" stroke="#475569" stroke-width="1.5" />
                <line x1="40" y1="0" x2="40" y2="150" stroke="#475569" stroke-width="1.5" />
                <text x="210" y="52" fill="#94a3b8" font-size="11">Re</text>
                <text x="45" y="15" fill="#94a3b8" font-size="11">Im</text>
                <!-- 對稱虛線 -->
                <line x1="136" y1="15" x2="136" y2="105" stroke="#64748b" stroke-dasharray="3,3" />
                <!-- 點 z=(1.6, 1.8) -> (40+1.6*60, 60-1.8*25) = (136, 15) -->
                <circle cx="136" cy="15" r="5" fill="#38bdf8" />
                <text x="145" y="18" fill="#38bdf8" font-size="11" font-weight="bold">z = 8/5 + 9/5 i</text>
                <!-- 點 ar{z}=(1.6, -1.8) -> (136, 105) -->
                <circle cx="136" cy="105" r="5" fill="#f43f5e" />
                <text x="145" y="110" fill="#f43f5e" font-size="11" font-weight="bold">z̄ = 8/5 - 9/5 i</text>
                <!-- 向量箭頭 -->
                <line x1="40" y1="60" x2="136" y2="15" stroke="#38bdf8" stroke-width="2" />
                <line x1="40" y1="60" x2="136" y2="105" stroke="#f43f5e" stroke-width="2" />
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">共軛複數實部相同（$x=1.6$），虛部相反（$\pm 1.8$），關於實軸嚴格軸對稱！</div>
            </div>`;
        },
      "q": "設複數 $z = \\frac{5+2i}{2-i}$（其中 $i$ 為虛數單位），則複數 $z$ 的共軛複數 $\\bar{z}$ 為（　　）。",
      "options": [
        "(A) $\\frac{8}{5} - \\frac{9}{5}i$",
        "(B) $\\frac{8}{5} + \\frac{9}{5}i$",
        "(C) $-\\frac{8}{5} + \\frac{9}{5}i$",
        "(D) $8 - 9i$",
        "(E) $\\frac{12}{5} - \\frac{9}{5}i$"
      ],
      "knowledge": {
        "formulas": [
          "\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{c^2+d^2}",
          "z = x + yi \\iff \\bar{z} = x - yi \\quad (x, y \\in \\mathbb{R})"
        ],
        "points": [
          "<b>除法基本功</b>：分子分母同乘以分母的共軛複數 $2+i$，將分母實數化。",
          "<b>共軛性質</b>：共軛複數「實部不變，虛部變號」，幾何上對應關於實軸（$x$ 軸）對稱。"
        ],
        "pitfall": "審題看清是求「$\\bar{z}$」而非「$z$」！選項 (B) 誤選為複數 $z$ 本身；選項 (D) 漏除分母模長平方 5。"
      },
      "solution": {
        "thinking": "先將分式上下同乘分母共軛 $2+i$ 化簡求得代數形式 $z = x+yi$，再取虛部相反數得 $\\bar{z}$。",
        "steps": [
          "分子分母同乘以分母的共軛複數 $2+i$：$$z = \\frac{(5+2i)(2+i)}{(2-i)(2+i)} = \\frac{10+5i+4i+2i^2}{4-i^2}$$",
          "因為 $i^2 = -1$，代入化簡得：$$z = \\frac{10+9i-2}{4-(-1)} = \\frac{8+9i}{5} = \\frac{8}{5} + \\frac{9}{5}i$$",
          "共軛複數 $\\bar{z}$ 實部不變、虛部取相反數，故：$$\\bar{z} = \\frac{8}{5} - \\frac{9}{5}i$$",
          "對比各選項，正確答案為 (A)。"
        ],
        "ans": "(A) $\\frac{8}{5} - \\frac{9}{5}i$",
        "quickTip": "口算速解：分母模長平方為 $2^2+(-1)^2=5$。分子實部 $5\\times 2 - 2\\times(-1)=8$，虛部 $2\\times 2 + 5\\times 1=9$。故 $z$ 的虛部為 $+9/5$，其共軛 $\\bar{z}$ 虛部必為 $-9/5$，直接鎖定 (A)！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(A)$</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>8</m:t></m:r></m:num><m:den><m:r><m:t>5</m:t></m:r></m:den></m:f><m:r><m:t>−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>9</m:t></m:r></m:num><m:den><m:r><m:t>5</m:t></m:r></m:den></m:f><m:r><m:t>i$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 02",
      "topic": "純虛數的嚴密充要條件 · 增根排除陷阱",
      "score": "5分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;text-align:center;margin-bottom:8px;">⚡ 純虛數充要條件與參數軌跡探究</div>
              <div style="display:flex;justify-content:center;align-items:center;gap:12px;margin-bottom:10px;">
                <label style="color:#f8fafc;font-size:12px;">滑動參數 m：</label>
                <input type="range" id="mSlider" min="0" max="3" step="0.1" value="2" style="width:140px;accent-color:#38bdf8;">
                <span id="mVal" style="color:#38bdf8;font-weight:bold;font-size:13px;width:35px;">m=2.0</span>
              </div>
              <div id="mStateBox" style="text-align:center;padding:6px;border-radius:6px;background:#1e293b;color:#a7f3d0;font-size:12px;font-weight:600;">
                當 m=2.0 時：z = 0 + 3.0i （標準純虛數 ✓）
              </div>
            </div>`;
          const sl = host.querySelector('#mSlider');
          const valText = host.querySelector('#mVal');
          const box = host.querySelector('#mStateBox');
          sl.oninput = () => {
            const m = parseFloat(sl.value);
            valText.textContent = 'm=' + m.toFixed(1);
            const re = m*m - 3*m + 2;
            const im = m*m - 1;
            let status = '';
            if (Math.abs(re) < 0.05 && Math.abs(im) < 0.05) {
              status = `當 m=${m.toFixed(1)} 時：z = 0 （實數 0，非純虛數 ❌）`;
              box.style.background = '#7f1d1d'; box.style.color = '#fecaca';
            } else if (Math.abs(re) < 0.05 && Math.abs(im) > 0.05) {
              status = `當 m=${m.toFixed(1)} 時：z = ${im.toFixed(2)}i （純虛數 ✓✓✓）`;
              box.style.background = '#064e3b'; box.style.color = '#a7f3d0';
            } else {
              status = `當 m=${m.toFixed(1)} 時：z = ${re.toFixed(2)} + ${im.toFixed(2)}i （一般複數）`;
              box.style.background = '#1e293b'; box.style.color = '#94a3b8';
            }
            box.textContent = status;
          };
        },
      "q": "已知實數 $m$ 為常數，複數 $z = (m^2-3m+2) + (m^2-1)i$ 為純虛數，則實數 $m$ 的值為（　　）。",
      "options": [
        "(A) $m = 1$",
        "(B) $m = 2$",
        "(C) $m = 1 \\text{ 或 } m = 2$",
        "(D) $m = -1$",
        "(E) 不存在這樣的實數 $m$"
      ],
      "knowledge": {
        "formulas": [
          "z = A + Bi \\text{ 為純虛數} \\iff \\begin{cases} A = \\operatorname{Re}(z) = 0 \\\\ B = \\operatorname{Im}(z) \\ne 0 \\end{cases}"
        ],
        "points": [
          "<b>定義核心</b>：純虛數必須滿足「實部為 0 且虛部非 0」。若虛部亦為 0，則 $z = 0$，為實數而非純虛數！",
          "<b>聯考高頻考法</b>：四校聯考正卷固定於選擇題考查該概念，必設「實部為 0 但虛部亦為 0」的致命陷阱項。"
        ],
        "pitfall": "⚠️ 四校聯考經典扣分陷阱！約 35% 考生只令實部為 0 解出 $m=1$ 或 $2$ 後誤選 (C)，完全忘記檢驗虛部非 0！"
      },
      "solution": {
        "thinking": "依據純虛數充要條件建立實數方程與不等式組：實部 $m^2-3m+2=0$ 同時虛部 $m^2-1 \\ne 0$。",
        "steps": [
          "由純虛數定義，複數的實部必須為 0：$$m^2 - 3m + 2 = 0 \\implies (m-1)(m-2) = 0 \\implies m = 1 \\text{ 或 } m = 2$$",
          "同時，複數的虛部絕不能為 0：$$m^2 - 1 \\ne 0 \\implies (m-1)(m+1) \\ne 0 \\implies m \\ne 1 \\text{ 且 } m \\ne -1$$",
          "代入檢驗：當 $m = 1$ 時，$\\operatorname{Re}(z) = 0$ 且 $\\operatorname{Im}(z) = 0$，此時 $z = 0 + 0i = 0$ 為實數，必須嚴格排除！",
          "當 $m = 2$ 時，$\\operatorname{Re}(z) = 0$，$\\operatorname{Im}(z) = 2^2-1 = 3 \\ne 0$，此時 $z = 3i$ 為標準純虛數。",
          "因此唯一滿足條件的實數為 $m = 2$，正確選項為 (B)。"
        ],
        "ans": "(B) $m = 2$",
        "quickTip": "秒殺思維：見到二次因式分解有公共根 $m=1$，該公共根必定使實部虛部同時為 0 導致 $z=0$，直接排除 $m=1$ 及包含 $m=1$ 的選項 (A) 與 (C)，2 秒鎖定 (B)！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(B)$m=2$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 03",
      "topic": "待定係數設未知複數 · 複數相等與模長計算",
      "score": "5分",
      "q": "設複數 $z$ 滿足方程 $(1+i)z - 2\\bar{z} = -3+5i$（其中 $\\bar{z}$ 為 $z$ 的共軛複數），則複數 $z$ 的模長 $|z|$ 等於（　　）。",
      "options": [
        "(A) $3$",
        "(B) $2$",
        "(C) $\\sqrt{5}$",
        "(D) $\\sqrt{3}$",
        "(E) $\\sqrt{10}$"
      ],
      "knowledge": {
        "formulas": [
          "z = x + yi \\implies \\bar{z} = x - yi, \\quad |z| = \\sqrt{x^2+y^2} \\quad (x,y \\in \\mathbb{R})",
          "a + bi = c + di \\iff a = c \\text{ 且 } b = d \\quad (a,b,c,d \\in \\mathbb{R})"
        ],
        "points": [
          "<b>破題法寶</b>：方程中同時出現 $z$ 與 $\\bar{z}$ 時，無法直接移項除法，必須設 $z = x+yi$ 代數形式。",
          "<b>分離實虛部</b>：展開後整理為 $(\\dots) + (\\dots)i = -3+5i$，建立二元一次實數方程組。"
        ],
        "pitfall": "展開 $(1+i)(x+yi)$ 時注意 $i \\cdot yi = yi^2 = -y$，實部符號勿抄錯為 $+y$。"
      },
      "solution": {
        "thinking": "設 $z = x+yi$，代入原方程展開整理出實部與虛部，解方程組求得 $x, y$，再由勾股定理計算 $|z|$。",
        "steps": [
          "設 $z = x+yi$（$x, y \\in \\mathbb{R}$），則共軛複數 $\\bar{z} = x-yi$。",
          "代入原方程左邊展開：$$(1+i)(x+yi) - 2(x-yi) = [x-y + (x+y)i] - (2x-2yi) = (-x-y) + (x+3y)i$$",
          "令其等於右邊 $-3+5i$，根據複數相等定理建立方程組：$$\\begin{cases} -x - y = -3 \\implies x + y = 3 & \\text{--- ①} \\\\ x + 3y = 5 & \\text{--- ②} \\end{cases}$$",
          "由 ② 式減去 ① 式得：$2y = 2 \\implies y = 1$。將 $y = 1$ 代入 ① 式得：$x = 2$。",
          "因此複數 $z = 2 + i$，其模長為：$$|z| = \\sqrt{x^2+y^2} = \\sqrt{2^2+1^2} = \\sqrt{4+1} = \\sqrt{5}$$",
          "故正確選項為 (C)。"
        ],
        "ans": "(C) $\\sqrt{5}$",
        "quickTip": "口算技巧：① 式 $x+y=3$ 與 ② 式 $x+3y=5$ 兩式相加得 $2x+4y=8 \\implies x+2y=4$。立即看出 $(x,y)=(2,1)$，$|z|=\\sqrt{2^2+1^2}=\\sqrt{5}$，5 秒搞定！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(C)$</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>5</m:t></m:r></m:e></m:rad><m:r><m:t>$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 04",
      "topic": "阿根圖動點軌跡 · 線段垂直平分線幾何特徵",
      "score": "5分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📏 阿根圖中垂線軌跡幾何圖解</div>
              <svg viewBox="-30 -20 260 180" style="width:100%;max-width:320px;height:170px;background:#1e293b;border-radius:8px;">
                <line x1="0" y1="120" x2="210" y2="120" stroke="#475569" stroke-width="1.5" />
                <line x1="60" y1="0" x2="60" y2="150" stroke="#475569" stroke-width="1.5" />
                <!-- 定點 A(3,4) -> (60+3*25, 120-4*25) = (135, 20) -->
                <circle cx="135" cy="20" r="5" fill="#38bdf8" />
                <text x="142" y="24" fill="#38bdf8" font-size="11" font-weight="bold">A(3,4)</text>
                <!-- 定點 B(-1,2) -> (60-1*25, 120-2*25) = (35, 70) -->
                <circle cx="35" cy="70" r="5" fill="#f59e0b" />
                <text x="5" y="70" fill="#f59e0b" font-size="11" font-weight="bold">B(-1,2)</text>
                <!-- 線段 AB -->
                <line x1="35" y1="70" x2="135" y2="20" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
                <!-- 中點 M(1,3) -> (85, 45) -->
                <circle cx="85" cy="45" r="4" fill="#a7f3d0" />
                <!-- 中垂線 2x+y=5, 斜率 -2: 通過 (85, 45), 延伸兩側 -->
                <line x1="55" y1="-15" x2="115" y2="105" stroke="#ec4899" stroke-width="2.5" />
                <text x="110" y="95" fill="#ec4899" font-size="11" font-weight="bold">L: 2x+y=5 (k=-2)</text>
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">動點 P 到 A 與 B 距離相等 $\iff$ 軌跡為線段 AB 垂直平分線，斜率 $k = -2$。</div>
            </div>`;
        },
      "q": "在複平面上，若滿足方程 $|z-3-4i| = |z+1-2i|$ 的複數 $z = x+yi$（$x,y \\in \\mathbb{R}$），則動點 $(x,y)$ 的軌跡是一條直線，該直線的斜率為（　　）。",
      "options": [
        "(A) $\\frac{1}{2}$",
        "(B) $-\\frac{1}{2}$",
        "(C) $2$",
        "(D) $-2$",
        "(E) $-\\frac{5}{2}$"
      ],
      "knowledge": {
        "formulas": [
          "|z - z_1| = |z - z_2| \\iff \\text{動點 } P(z) \\text{ 到定點 } A(z_1) \\text{ 與 } B(z_2) \\text{ 距離相等}",
          "k_{\\text{中垂線}} \\cdot k_{AB} = -1"
        ],
        "points": [
          "<b>幾何第一性原理</b>：複數減法的模 $|z_1 - z_2|$ 即為複平面上兩點間歐幾里得距離。",
          "<b>中垂線速解</b>：定點 $A(3,4)$ 與 $B(-1,2)$，動點軌跡必為線段 $AB$ 的垂直平分線，無需繁瑣代數展開！"
        ],
        "pitfall": "定點 $B$ 的坐標應由 $|z - (-1+2i)|$ 讀出為 $(-1, 2)$，切勿將符號看錯成 $(1, -2)$。"
      },
      "solution": {
        "thinking": "【幾何法最快】：識別兩定點坐標，算出線段 $AB$ 斜率，利用垂直斜率負倒數關係直接求出軌跡直線斜率。",
        "steps": [
          "原方程可改寫為：$$|z - (3+4i)| = |z - (-1+2i)|$$此方程表示動點 $P(x,y)$ 到定點 $A(3,4)$ 與定點 $B(-1,2)$ 的距離相等。",
          "因此，動點 $P$ 的軌跡是線段 $AB$ 的垂直平分線。",
          "計算線段 $AB$ 所在直線的斜率：$$k_{AB} = \\frac{2 - 4}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}$$",
          "因為垂直平分線與線段 $AB$ 互相垂直，其斜率滿足 $k \\cdot k_{AB} = -1$，故：$$k = -\\frac{1}{k_{AB}} = -\\frac{1}{1/2} = -2$$",
          "【代數法驗證】：由 $(x-3)^2+(y-4)^2 = (x+1)^2+(y-2)^2$ 展開得 $8x+4y-20=0 \\implies 2x+y-5=0 \\implies y = -2x+5$，斜率確為 $-2$。",
          "故正確選項為 (D)。"
        ],
        "ans": "(D) $-2$",
        "quickTip": "聯考幾何速算：定點向量 $\\vec{AB} = (-4, -2) = -2(2, 1)$。中垂線的法向量即為 $(2, 1)$，其直線方程必為 $2x+y+C=0$，斜率為 $-\\frac{2}{1} = -2$，一眼看出選 (D)！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(D)$−2$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 05",
      "topic": "複數乘法的幾何意義 · 幅角相加與向量旋轉",
      "score": "5分",
      "q": "在複平面上，將對應複數 $z_1 = \\sqrt{3}-i$ 的向量繞原點逆時針旋轉 $75^\\circ$（即 $\\frac{5\\pi}{12}$ 弧度），得到複數 $z_2$，則 $z_2$ 的代數形式為（　　）。",
      "options": [
        "(A) $\\sqrt{2} + \\sqrt{2}i$",
        "(B) $-\\sqrt{2} + \\sqrt{2}i$",
        "(C) $\\sqrt{2} - \\sqrt{2}i$",
        "(D) $1 + \\sqrt{3}i$",
        "(E) $\\sqrt{6} + \\sqrt{2}i$"
      ],
      "knowledge": {
        "formulas": [
          "z = r(\\cos\\theta + i\\sin\\theta), \\quad r = |z|, \\; \\theta = \\operatorname{Arg}(z)",
          "z_2 = z_1 \\cdot (\\cos\\alpha + i\\sin\\alpha) \\implies |z_2| = |z_1|, \\; \\theta_2 = \\theta_1 + \\alpha"
        ],
        "points": [
          "<b>幾何旋轉本質</b>：乘以複數 $(\\cos\\alpha + i\\sin\\alpha)$ 在幾何上等價於「模長不變，逆時針旋轉角 $\\alpha$」。",
          "<b>化為三角極式</b>：點 $(\\sqrt{3}, -1)$ 位於第四象限，幅角主值為 $-30^\\circ$。"
        ],
        "pitfall": "注意點 $(\\sqrt{3}, -1)$ 的幅角為 $-30^\\circ$（或 $330^\\circ$），旋轉 $+75^\\circ$ 後新幅角為 $-30^\\circ+75^\\circ = 45^\\circ$，切勿算成 $30^\\circ+75^\\circ=105^\\circ$。"
      },
      "solution": {
        "thinking": "先將 $z_1$ 化為標準三角極式求出模長與幅角，再根據逆時針旋轉幅角相加求出 $z_2$ 的極式並化回代數形式。",
        "steps": [
          "計算複數 $z_1 = \\sqrt{3}-i$ 的模長：$$r = |z_1| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = 2$$",
          "點 $(\\sqrt{3}, -1)$ 位於第四象限，$\\cos\\theta_1 = \\frac{\\sqrt{3}}{2}, \\sin\\theta_1 = -\\frac{1}{2}$，故幅角主值為 $\\theta_1 = -30^\\circ$（即 $-\\frac{\\pi}{6}$）。",
          "將向量繞原點逆時針旋轉 $75^\\circ$，旋轉後複數 $z_2$ 的幅角為：$$\\theta_2 = \\theta_1 + 75^\\circ = -30^\\circ + 75^\\circ = 45^\\circ = \\frac{\\pi}{4}$$",
          "純旋轉變換不改變模長，故 $|z_2| = r = 2$。因此 $z_2$ 的三角形式為：$$z_2 = 2(\\cos 45^\\circ + i\\sin 45^\\circ)$$",
          "展開計算代數形式：$$z_2 = 2\\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i\\right) = \\sqrt{2} + \\sqrt{2}i$$",
          "故正確選項為 (A)。"
        ],
        "ans": "(A) $\\sqrt{2} + \\sqrt{2}i$",
        "quickTip": "象限直觀法：$\\theta_1 = -30^\\circ$，逆時針旋轉 $75^\\circ$ 後落入第一象限角平分線 $45^\\circ$，故實部與虛部必相等且皆為正數！在所有選項中只有 (A) 滿足實虛部均為正且相等，直接選 (A)！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(A)$</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad><m:r><m:t>+</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad><m:r><m:t>i$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "單選題",
      "qNum": "題 06",
      "topic": "複平面圓周軌跡 · 幾何距離與模長極值",
      "score": "5分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">🎯 圓周軌跡與原點連心線極值</div>
              <svg viewBox="-20 -20 240 180" style="width:100%;max-width:320px;height:170px;background:#1e293b;border-radius:8px;">
                <line x1="0" y1="50" x2="200" y2="50" stroke="#475569" stroke-width="1.5" />
                <line x1="50" y1="0" x2="50" y2="160" stroke="#475569" stroke-width="1.5" />
                <!-- 原點 O(50, 50) -->
                <circle cx="50" cy="50" r="4" fill="#fff" />
                <text x="36" y="44" fill="#94a3b8" font-size="11">O(0,0)</text>
                <!-- 圓心 C(4, -3) -> (50+4*20, 50+3*20) = (130, 110) -->
                <circle cx="130" cy="110" r="40" stroke="#38bdf8" stroke-width="2" fill="none" />
                <circle cx="130" cy="110" r="4" fill="#38bdf8" />
                <text x="135" y="115" fill="#38bdf8" font-size="11" font-weight="bold">C(4,-3)</text>
                <!-- 連心線: 從 O(50,50) 穿過 C(130,110) -->
                <line x1="50" y1="50" x2="170" y2="140" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3" />
                <!-- 最小值點: 距原點 3 -> (98, 86) -->
                <circle cx="98" cy="86" r="4" fill="#10b981" />
                <text x="65" y="95" fill="#10b981" font-size="10" font-weight="bold">Min=3</text>
                <!-- 最大值點: 距原點 7 -> (162, 134) -->
                <circle cx="162" cy="134" r="4" fill="#ef4444" />
                <text x="168" y="140" fill="#ef4444" font-size="10" font-weight="bold">Max=7</text>
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">$|OC| = 5, R = 2 \implies |z|_{\min} = 5-2 = 3, \; |z|_{\max} = 5+2 = 7$。</div>
            </div>`;
        },
      "q": "已知複數 $z$ 滿足 $|z - 4 + 3i| = 2$，則模長 $|z|$ 的最大值與最小值分別為（　　）。",
      "options": [
        "(A) 最大值為 $7$，最小值為 $3$",
        "(B) 最大值為 $5$，最小值為 $2$",
        "(C) 最大值為 $9$，最小值為 $1$",
        "(D) 最大值為 $7$，最小值為 $1$",
        "(E) 最大值為 $6$，最小值為 $4$"
      ],
      "knowledge": {
        "formulas": [
          "|z - z_0| = R \\iff \\text{以 } C(z_0) \\text{ 為圓心、} R \\text{ 為半徑的圓周}",
          "\\text{若點 } O \\text{ 在圓外：} |z|_{\\max} = |z_0| + R, \\quad |z|_{\\min} = |z_0| - R"
        ],
        "points": [
          "<b>幾何含義</b>：$|z|$ 表示動點 $z$ 到坐標原點 $O(0,0)$ 的距離。",
          "<b>連心線極值定理</b>：圓周上的點到圓外定點的距離，在通過圓心與定點的直線（連心線）與圓周相交之處取得最大值與最小值。"
        ],
        "pitfall": "圓心坐標為 $z_0 = 4-3i$，即點 $(4, -3)$。切勿把半徑 $R=2$ 誤認為直徑。"
      },
      "solution": {
        "thinking": "將方程改寫為 $|z - (4-3i)| = 2$，求出圓心到原點距離 $|OC|$，利用連心線距離加減半徑迅速得出極值。",
        "steps": [
          "方程改寫為標準圓形式：$$|z - (4-3i)| = 2$$在複平面上，這表示以點 $C(4, -3)$ 為圓心、以 $R = 2$ 為半徑的圓周。",
          "$|z|$ 表示動點 $z$ 到原點 $O(0,0)$ 的幾何距離。",
          "計算原點 $O$ 到圓心 $C$ 的距離：$$|OC| = |4-3i| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16+9} = \\sqrt{25} = 5$$",
          "由於 $|OC| = 5 > R = 2$，原點 $O$ 嚴格位於圓外部。",
          "由圓的幾何性質，連接原點與圓心之直線與圓相交兩點，分別對應距離的極大與極小值：",
          "最大值：$$|z|_{\\max} = |OC| + R = 5 + 2 = 7$$",
          "最小值：$$|z|_{\\min} = |OC| - R = 5 - 2 = 3$$",
          "對比各選項，正確選項為 (A)。"
        ],
        "ans": "(A) 最大值為 $7$，最小值為 $3$",
        "quickTip": "三角不等式秒殺：由 $|z| = |(z-4+3i) + (4-3i)| \\le |z-4+3i| + |4-3i| = 2 + 5 = 7$。由 $|z| = |(4-3i) - (4-3i-z)| \\ge ||4-3i| - |z-4+3i|| = |5 - 2| = 3$。取等條件皆可達到，直接秒得 7 與 3！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(A)最大值為$7$，最小值為$3$</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
