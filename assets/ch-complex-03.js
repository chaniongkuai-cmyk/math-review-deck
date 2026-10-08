/* 澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙 — 第三部分 高階綜合壓軸題 (題 09~10 · 滿分 40分) - 支援原生 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "第三部分 高階綜合壓軸題",
  "year": "100分鐘專題",
  "paper": "壓軸題",
  "title": "第三部分 高階綜合壓軸題 (題 09~10 · 滿分 40分)",
  "color": "#7c3aed",
  "sections": [
    "題 09 · 棣美弗定理開方、內接正方形與距離平方和定值論證 (20分 · 仿附加卷 A-Q04)",
    "題 10 · 單位根因式分解、正三角形面積、中垂線軌跡與閉圓盤極值 (20分 · Level 5)"
  ],
  "slides": [
    {
      "year": "專題突破",
      "paper": "壓軸大題",
      "qNum": "題 09",
      "topic": "棣美弗定理開四次方根 · 阿根圖內接正方形與距離平方和定值論證",
      "score": "20分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">📐 棣美弗開方四根 · 複平面內接正方形</div>
              <svg viewBox="-100 -100 200 200" style="width:100%;max-width:280px;height:220px;background:#1e293b;border-radius:8px;">
                <line x1="-90" y1="0" x2="90" y2="0" stroke="#475569" stroke-width="1.5" />
                <line x1="0" y1="-90" x2="0" y2="90" stroke="#475569" stroke-width="1.5" />
                <!-- 外接圓 R=2 (scale: 35px/unit -> R=70) -->
                <circle cx="0" cy="0" r="70" stroke="#64748b" stroke-width="1" fill="none" stroke-dasharray="4,4" />
                <!-- 4 頂點: z1=(√3, -1) -> (60.6, 35) (svg y downwards) -->
                <!-- z2=(1, √3) -> (35, -60.6) -->
                <!-- z3=(-√3, 1) -> (-60.6, -35) -->
                <!-- z4=(-1, -√3) -> (-35, 60.6) -->
                <polygon points="60.6,35 35,-60.6 -60.6,-35 -35,60.6" stroke="#38bdf8" stroke-width="2.5" fill="rgba(56,189,248,0.15)" />
                <circle cx="60.6" cy="35" r="4" fill="#f43f5e" />
                <text x="65" y="45" fill="#f43f5e" font-size="10">z1(√3-i)</text>
                <circle cx="35" cy="-60.6" r="4" fill="#10b981" />
                <text x="35" y="-68" fill="#10b981" font-size="10">z2(1+√3i)</text>
                <circle cx="-60.6" cy="-35" r="4" fill="#f59e0b" />
                <text x="-95" y="-30" fill="#f59e0b" font-size="10">z3(-√3+i)</text>
                <circle cx="-35" cy="60.6" r="4" fill="#a855f7" />
                <text x="-70" y="75" fill="#a855f7" font-size="10">z4(-1-√3i)</text>
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">正方形對角線 $d=4 \implies S = \frac{1}{2}d^2 = 8$。中心對稱 $\sum z_k = 0 \implies \sum |w-z_k|^2 = 32$。</div>
            </div>`;
        },
      "q": "已知複數 $W = -8 - 8\\sqrt{3}i$（其中 $i$ 為虛數單位）。<br>(a) 求 $W$ 的模長 $|W|$ 與幅角主值 $\\operatorname{Arg}(W) \\in (-\\pi, \\pi]$，並將 $W$ 寫成三角極式。 (6分)<br>(b) 求解複數四次方程 $z^4 = W$，求出全部 4 個複數根 $z_1, z_2, z_3, z_4$，並化為標準代數形式 $a+bi$。 (8分)<br>(c) 設這 4 個根在複平面（阿根圖）上對應的點分別為 $A, B, C, D$。<br>　(i) 證明四邊形 $ABCD$ 為正方形，並求其面積。 (3分)<br>　(ii) 設動點 $P$ 對應複數 $w$，且滿足 $|w| = 2$。證明動點 $P$ 到正方形四個頂點的距離平方和 $\\sum_{k=1}^4 |w - z_k|^2$ 為定值，並求出該定值。 (3分)",
      "knowledge": {
        "formulas": [
          "z^n = r(\\cos\\theta + i\\sin\\theta) \\implies z_k = \\sqrt[n]{r}\\left[\\cos\\left(\\frac{\\theta+2k\\pi}{n}\\right) + i\\sin\\left(\\frac{\\theta+2k\\pi}{n}\\right)\\right]",
          "|w - z_k|^2 = (w - z_k)(\\bar{w} - \\bar{z}_k) = |w|^2 - (w\\bar{z}_k + \\bar{w}z_k) + |z_k|^2",
          "\\sum_{k=1}^n z_k = 0 \\quad (\\text{正 } n \\text{ 邊形單位根頂點和為 } 0)"
        ],
        "points": [
          "<b>(a) 極式標準化</b>：第三象限角幅角主值為 $-\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$。",
          "<b>(b) 棣美弗開方</b>：模長為 $\\sqrt[4]{16} = 2$，幅角通式為 $-\\frac{\\pi}{6} + \\frac{k\\pi}{2}$ ($k=0,1,2,3$)。",
          "<b>(c) 幾何與定值論證</b>：4 點共圓且相鄰圓心角為 $\\frac{\\pi}{2}$，必為正方形；展開距離平方和，利用正方形中心對稱性 $\\sum z_k = 0$，交叉項精妙歸零！"
        ],
        "pitfall": "各根必須化簡為標準代數形式 $a+bi$（四校聯考官方規定：未化為 $a+bi$ 形式扣 2 分）。"
      },
      "solution": {
        "thinking": "(a) 算模長與第三象限幅角；(b) 應用棣美弗開方通式分別令 $k=0,1,2,3$ 算出四根代數式；(c)(i) 證明 4 點共圓且相鄰垂直；(c)(ii) 展開模平方，利用根之和為 0 得定值。",
        "steps": [
          "<b>(a) 小問（滿分 6 分）：</b>",
          "計算模長：$$|W| = \\sqrt{(-8)^2 + (-8\\sqrt{3})^2} = \\sqrt{64 + 192} = \\sqrt{256} = 16$$……【M2, A1】",
          "計算幅角主值：點 $(-8, -8\\sqrt{3})$ 位於第三象限，$$\\cos\\theta = -\\frac{8}{16} = -\\frac{1}{2}, \\quad \\sin\\theta = -\\frac{8\\sqrt{3}}{16} = -\\frac{\\sqrt{3}}{2} \\implies \\theta = -\\frac{2\\pi}{3}$$……【M2】",
          "寫出標準三角極式：$$W = 16\\left[\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right]$$……【A1】",
          "<b>(b) 小問（滿分 8 分）：</b>",
          "根據棣美弗定理開方公式，方程 $z^4 = W$ 的 4 個根模長為 $r = \\sqrt[4]{16} = 2$。……【B1】",
          "寫出幅角通式（$k = 0, 1, 2, 3$）：$$\\theta_k = \\frac{-\\frac{2\\pi}{3} + 2k\\pi}{4} = -\\frac{\\pi}{6} + \\frac{k\\pi}{2}$$……【M2】",
          "逐一計算各根的代數形式：",
          "$k = 0$: $\\theta_0 = -\\frac{\\pi}{6} \\implies z_1 = 2\\left[\\cos\\left(-\\frac{\\pi}{6}\\right) + i\\sin\\left(-\\frac{\\pi}{6}\\right)\\right] = 2\\left(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\right) = \\sqrt{3} - i$。……【A1】",
          "$k = 1$: $\\theta_1 = -\\frac{\\pi}{6} + \\frac{\\pi}{2} = \\frac{\\pi}{3} \\implies z_2 = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right) = 2\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\right) = 1 + \\sqrt{3}i$。……【A1】",
          "$k = 2$: $\\theta_2 = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6} \\implies z_3 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right) = 2\\left(-\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right) = -\\sqrt{3} + i$。……【A1】",
          "$k = 3$: $\\theta_3 = -\\frac{\\pi}{6} + \\frac{3\\pi}{2} = \\frac{4\\pi}{3} \\implies z_4 = 2\\left(\\cos\\frac{4\\pi}{3} + i\\sin\\frac{4\\pi}{3}\\right) = 2\\left(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i\\right) = -1 - \\sqrt{3}i$。……【A1】",
          "<b>(c)(i) 小問（滿分 3 分）：</b>",
          "幾何論證：4 個根的模長均為 2，故對應點 $A, B, C, D$ 均在外接圓 $x^2+y^2=4$ 上；相鄰兩點幅角差均為 $\\frac{\\pi}{2} = 90^\\circ$，即圓心角皆為直角，因此四邊形 $ABCD$ 必為內接正方形。……【M1, A1】",
          "面積計算：外接圓半徑 $R = 2$，正方形對角線長 $d = 2R = 4$。$$S_{ABCD} = \\frac{1}{2} d^2 = \\frac{1}{2} \\times 4^2 = 8$$（或邊長 $a = \\sqrt{R^2+R^2} = 2\\sqrt{2} \\implies S = a^2 = 8$）。……【A1】",
          "<b>(c)(ii) 小問（滿分 3 分）：</b>",
          "展開複數距離平方：$$|w - z_k|^2 = (w - z_k)(\\bar{w} - \\bar{z}_k) = |w|^2 - (w\\bar{z}_k + \\bar{w}z_k) + |z_k|^2$$……【M1】",
          "由已知 $|w| = 2 \\implies |w|^2 = 4$，且 $|z_k| = 2 \\implies |z_k|^2 = 4$。故每一項 $|w|^2 + |z_k|^2 = 4 + 4 = 8$。",
          "求和得：$$\\sum_{k=1}^4 |w - z_k|^2 = \\sum_{k=1}^4 8 - \\bar{w}\\left(\\sum_{k=1}^4 z_k\\right) - w\\left(\\sum_{k=1}^4 \\bar{z}_k\\right)$$",
          "由正方形中心在原點的對稱性，4 個根之和為 0：$$\\sum_{k=1}^4 z_k = (\\sqrt{3} + 1 - \\sqrt{3} - 1) + (-1 + \\sqrt{3} + 1 - \\sqrt{3})i = 0$$同理共軛之和亦為 0。……【M1】",
          "因此定值為：$$\\sum_{k=1}^4 |w - z_k|^2 = 4 \\times 8 - 0 = 32$$……【A1】"
        ],
        "ans": "(a) $W = 16\\left[\\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right)\\right]$；(b) $z_1=\\sqrt{3}-i, z_2=1+\\sqrt{3}i, z_3=-\\sqrt{3}+i, z_4=-1-\\sqrt{3}i$；(c)(i) 面積 $8$；(c)(ii) 定值 $32$",
        "quickTip": "物理力學重心秒解：正方形 4 頂點質心在原點 $O$。由平行四邊形定則或斯圖爾特定理（重心距離公式）：動點到各頂點距離平方和等於 $4 \\cdot |PO|^2 + \\sum |Oz_k|^2 = 4(2^2) + 4(2^2) = 16 + 16 = 32$！物理直觀 5 秒秒殺！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$W=16</m:t></m:r><m:r><m:t>[</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:r><m:t>(−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2π</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>)</m:t></m:r><m:r><m:t>+i</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>sin</m:t></m:r><m:r><m:t>(−</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>2π</m:t></m:r></m:num><m:den><m:r><m:t>3</m:t></m:r></m:den></m:f><m:r><m:t>)</m:t></m:r><m:r><m:t>]</m:t></m:r><m:r><m:t>$；(b)$</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>1</m:t></m:r></m:sub></m:sSub><m:r><m:t>=</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>−i,</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>2</m:t></m:r></m:sub></m:sSub><m:r><m:t>=1+</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>i,</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>3</m:t></m:r></m:sub></m:sSub><m:r><m:t>=−</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>+i,</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>4</m:t></m:r></m:sub></m:sSub><m:r><m:t>=−1−</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>i$；(c)(i)面積$8$；(c)(ii)定值$32$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "壓軸大題",
      "qNum": "題 10",
      "topic": "單位根因式分解 · 阿根圖正三角形面積、中垂線軌跡與閉圓盤極值幾何論證",
      "score": "20分",
      "visual": function(host) {
          host.innerHTML = `
            <div style="background:#0f172a;border-radius:12px;padding:16px;text-align:center;">
              <div style="color:#93c5fd;font-weight:600;font-size:13px;margin-bottom:8px;">🔺 單位根立方根正三角形與閉圓盤極值</div>
              <svg viewBox="-80 -80 180 180" style="width:100%;max-width:280px;height:220px;background:#1e293b;border-radius:8px;">
                <line x1="-70" y1="0" x2="90" y2="0" stroke="#475569" stroke-width="1.5" />
                <line x1="0" y1="-70" x2="0" y2="70" stroke="#475569" stroke-width="1.5" />
                <!-- 正三角形 A(4,0)->(48,0), B(-2, 2√3)->(-24,-41.5), C(-2,-2√3)->(-24,41.5) -->
                <polygon points="48,0 -24,-41.5 -24,41.5" stroke="#f59e0b" stroke-width="2.5" fill="rgba(245,158,11,0.15)" />
                <circle cx="48" cy="0" r="4" fill="#f59e0b" />
                <text x="52" y="4" fill="#f59e0b" font-size="10">A(4,0)</text>
                <circle cx="-24" cy="-41.5" r="4" fill="#38bdf8" />
                <text x="-55" y="-45" fill="#38bdf8" font-size="10">B(-2+2√3i)</text>
                <circle cx="-24" cy="41.5" r="4" fill="#ef4444" />
                <text x="-55" y="55" fill="#ef4444" font-size="10">C(-2-2√3i)</text>
                <!-- 線段 AB 中垂線通過頂點 C -->
                <line x1="-24" y1="41.5" x2="12" y2="-20.7" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3,3" />
                <text x="15" y="-15" fill="#ec4899" font-size="9">中垂線 L</text>
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">正三角形頂點 C 天然落在對邊 AB 垂直平分線上，故最短距離為 0！</div>
            </div>`;
        },
      "q": "考慮複數方程 $z^3 - 64 = 0$。<br>(a) 將多項式 $z^3-64$ 進行因式分解，並求出該方程的 1 個實根與 2 個共軛虛根（用代數形式表示）。 (6分)<br>(b) 設 (a) 中的兩個虛根為 $\\alpha$ 與 $\\beta$。<br>　(i) 證明：$\\alpha^2 + 4\\alpha + 16 = 0$； (2分)<br>　(ii) 計算代數式 $\\alpha^6 + \\alpha^3 + 64$ 的值； (2分)<br>　(iii) 設方程 $z^3-64=0$ 的三個根在阿根圖中對應點為 $A, B, C$。證明 $\\triangle ABC$ 為正三角形，並求其邊長與面積。 (3分)<br>(c) 考慮阿根圖中的動點 $z$：<br>　(i) 若動點 $z$ 滿足方程 $|z-4| = |z-\\alpha|$，求動點 $z$ 軌跡的幾何特徵，並求頂點 $C$ 到該軌跡直線的最短距離； (4分)<br>　(ii) 若動點 $z$ 滿足不等式 $|z-(6+8i)| \\le 3$，求動點 $z$ 到原點距離 $|z|$ 的最大值與最小值。 (3分)",
      "knowledge": {
        "formulas": [
          "a^3 - b^3 = (a-b)(a^2+ab+b^2)",
          "\\text{正三角形面積：} S = \\frac{\\sqrt{3}}{4} a^2",
          "\\text{閉圓盤 } |z - z_0| \\le R \\implies |z|_{\\max} = |z_0| + R, \\; |z|_{\\min} = |z_0| - R \\quad (\\text{若 } |z_0| > R)"
        ],
        "points": [
          "<b>(a) 因式分解求根</b>：$z^3-64 = (z-4)(z^2+4z+16) = 0$。用二次求根公式解共軛虛根。",
          "<b>(b)(i)~(ii) 降次化簡</b>：利用 $\\alpha^3 = 64$ 與 $\\alpha^2+4\\alpha+16=0$ 直接代數降次。",
          "<b>(b)(iii) 根的幾何分佈</b>：3 根共圓且幅角互差 $\\frac{2\\pi}{3}$，必構成正三角形。",
          "<b>(c)(i) 幾何特徵秒殺</b>：$|z-4|=|z-\\alpha|$ 是線段 $AB$ 的垂直平分線。在正三角形中，頂點 $C$ 到 $A$ 與 $B$ 距離相等，故 $C$ 本身就在該中垂線上，距離為 0！",
          "<b>(c)(ii) 圓盤極值</b>：圓心 $(6,8)$，半徑 3。原點到圓心距離為 10，極大值 13，極小值 7。"
        ],
        "pitfall": "(c)(i) 切勿花大量時間展開直線方程再代點線距離公式！直接利用正三角形幾何性質點 $C$ 在對稱軸上，距離為 0。"
      },
      "solution": {
        "thinking": "(a) 立方差公式因式分解求根；(b) 驗證方程與高次化簡，求正三角形邊長與面積；(c)(i) 識別中垂線軌跡並利用正三角形幾何對稱性求距離；(c)(ii) 幾何連心線求模長極值。",
        "steps": [
          "<b>(a) 小問（滿分 6 分）：</b>",
          "利用立方差公式因式分解：$$z^3 - 64 = z^3 - 4^3 = (z - 4)(z^2 + 4z + 16) = 0$$……【M2】",
          "由 $z - 4 = 0$ 得實根：$$z_1 = 4$$……【A1】",
          "由 $z^2 + 4z + 16 = 0$，應用求根公式：$$z = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(16)}}{2} = \\frac{-4 \\pm \\sqrt{16 - 64}}{2} = \\frac{-4 \\pm \\sqrt{-48}}{2} = \\frac{-4 \\pm 4\\sqrt{3}i}{2} = -2 \\pm 2\\sqrt{3}i$$……【M2】",
          "得出兩個共軛虛根為：$$\\alpha = -2 + 2\\sqrt{3}i, \\quad \\beta = -2 - 2\\sqrt{3}i$$……【A1】",
          "<b>(b)(i) 小問（滿分 2 分）：</b>",
          "因為 $\\alpha$ 為原方程 $z^3-64=0$ 的非實數根，必為二次方程 $z^2+4z+16=0$ 的根。代入即得：$$\\alpha^2 + 4\\alpha + 16 = 0 \\quad (\\text{證畢})$$……【A2】",
          "<b>(b)(ii) 小問（滿分 2 分）：</b>",
          "因為 $\\alpha$ 滿足原方程 $\\alpha^3 - 64 = 0 \\implies \\alpha^3 = 64$。……【M1】",
          "則 $\\alpha^6 = (\\alpha^3)^2 = 64^2 = 4096$。",
          "代入計算代數式：$$\\alpha^6 + \\alpha^3 + 64 = 4096 + 64 + 64 = 4224$$……【A1】",
          "<b>(b)(iii) 小問（滿分 3 分）：</b>",
          "三根在複平面對應點坐標為：$A(4, 0)$，$B(-2, 2\\sqrt{3})$，$C(-2, -2\\sqrt{3})$。",
          "計算三邊長度的平方：$$|AB|^2 = (-2-4)^2 + (2\\sqrt{3}-0)^2 = (-6)^2 + 12 = 36 + 12 = 48$$$$|AC|^2 = (-2-4)^2 + (-2\\sqrt{3}-0)^2 = 36 + 12 = 48$$$$|BC|^2 = [-2-(-2)]^2 + (-2\\sqrt{3}-2\\sqrt{3})^2 = 0 + (-4\\sqrt{3})^2 = 48$$",
          "三邊長度皆為 $\\sqrt{48} = 4\\sqrt{3}$，三邊相等，證得 $\\triangle ABC$ 為正三角形。……【M1, A1】",
          "正三角形面積為：$$S = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 48 = 12\\sqrt{3}$$……【A1】",
          "<b>(c)(i) 小問（滿分 4 分）：</b>",
          "軌跡幾何特徵：方程 $|z-4| = |z-\\alpha|$ 即 $|z-z_A| = |z-z_B|$，表示動點 $z$ 到點 $A(4,0)$ 與點 $B(-2,2\\sqrt{3})$ 的距離相等，其軌跡為線段 $AB$ 的垂直平分線 $L$。……【M1, B1】",
          "頂點 $C$ 到直線 $L$ 的最短距離：在正三角形 $\\triangle ABC$ 中，邊長 $|CA| = |CB| = 4\\sqrt{3}$。頂點 $C$ 到線段兩端點 $A, B$ 的距離天然相等，因此頂點 $C$ 恰好位於線段 $AB$ 的垂直平分線上！……【M1】故頂點 $C$ 滿足軌跡方程，其到直線 $L$ 的最短距離為 $0$。……【A1】",
          "<b>(c)(ii) 小問（滿分 3 分）：</b>",
          "幾何意義：不等式 $|z - (6+8i)| \\le 3$ 在阿根圖中表示以點 $K(6, 8)$ 為圓心、半徑 $R = 3$ 的閉圓盤。……【M1】",
          "原點 $O(0,0)$ 到圓心 $K$ 的距離為：$$|OK| = |6+8i| = \\sqrt{6^2 + 8^2} = \\sqrt{36+64} = 10$$……【A1】",
          "因為 $|OK| = 10 > R = 3$，原點位於圓盤外部。",
          "由幾何連心線性質得：最大值：$$|z|_{\\max} = |OK| + R = 10 + 3 = 13$$最小值：$$|z|_{\\min} = |OK| - R = 10 - 3 = 7$$……【A1】"
        ],
        "ans": "(a) $z_1=4, \\alpha=-2+2\\sqrt{3}i, \\beta=-2-2\\sqrt{3}i$；(b)(ii) $4224$；(b)(iii) 邊長 $4\\sqrt{3}$, 面積 $12\\sqrt{3}$；(c)(i) 線段 $AB$ 垂直平分線, 距離 $0$；(c)(ii) 最大值 $13$, 最小值 $7$",
        "quickTip": "四校聯考高分思維：(c)(i) 無需化簡直線方程 $x-\\sqrt{3}y+4=0$ 再代入點 $(-2,-2\\sqrt{3})$。利用正三角形外心、垂心與中垂線完全重合的性質，頂點必在對邊中垂線上，一眼看出距離為 0，節省 3 分鐘！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>1</m:t></m:r></m:sub></m:sSub><m:r><m:t>=4,α=−2+2</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>i,β=−2−2</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>i$；(b)(ii)$4224$；(b)(iii)邊長$4</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>$,面積$12</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>3</m:t></m:r></m:e></m:rad><m:r><m:t>$；(c)(i)線段$AB$垂直平分線,距離$0$；(c)(ii)最大值$13$,最小值$7$</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
