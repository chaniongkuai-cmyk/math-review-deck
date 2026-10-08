/* 澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙 — 第二部分 簡答與計算題 (題 07~08 · 滿分 30分) - 支援原生 OMML */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "第二部分 簡答與計算題",
  "year": "100分鐘專題",
  "paper": "計算題",
  "title": "第二部分 簡答與計算題 (題 07~08 · 滿分 30分)",
  "color": "#0ea5e9",
  "sections": [
    "題 07 · 複數代數方程求解、阿根圖幾何距離與三角形面積 (15分)",
    "題 08 · 三角極式轉換、棣美弗定理高次冪與共軛巧算 (15分)"
  ],
  "slides": [
    {
      "year": "專題突破",
      "paper": "計算題",
      "qNum": "題 07",
      "topic": "複數共軛方程求解 · 阿根圖兩點距離與三角形面積計算",
      "score": "15分",
      "q": "已知複數 $z$ 滿足方程 $3z - \\bar{z} = 4+8i$（其中 $\\bar{z}$ 為 $z$ 的共軛複數，$i$ 為虛數單位）。<br>(a) 求複數 $z$ 的代數形式及其模長 $|z|$。 (7分)<br>(b) 在複平面上，設複數 $z$ 與 $w = \\frac{z^2}{2}$ 分別對應點 $A$ 與點 $B$，原點記為 $O$。求線段 $AB$ 的長度，並求 $\\triangle OAB$ 的面積。 (8分)",
      "knowledge": {
        "formulas": [
          "z = x + yi \\implies \\bar{z} = x - yi, \\quad |z| = \\sqrt{x^2+y^2}",
          "|AB| = |w - z| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}",
          "S_{\\triangle OAB} = \\frac{1}{2} |x_A y_B - x_B y_A|"
        ],
        "points": [
          "<b>(a) 小問規範踩點</b>：設代數形式 $z = x+yi$，展開分離實部與虛部建立方程組。",
          "<b>(b) 小問幾何對應</b>：計算 $w = \\frac{(2+2i)^2}{2} = \\frac{8i}{2} = 4i$。點 $A(2,2)$，點 $B(0,4)$。面積可由行列式坐標公式或以 $OB$ 為底口算求得。"
        ],
        "pitfall": "展開 $3z - \\bar{z}$ 時注意虛部是 $3yi - (-yi) = 4yi$，千萬不要算成 $2yi$。"
      },
      "solution": {
        "thinking": "(a) 設 $z=x+yi$，代入方程建立實數方程組求出 $z$ 與模長；(b) 化簡複數 $w$，寫出點 $A, B$ 的坐標，利用複數距離求 $|AB|$，用幾何面積公式求 $\\triangle OAB$。",
        "steps": [
          "<b>(a) 小問（滿分 7 分）：</b>",
          "設 $z = x+yi$（$x, y \\in \\mathbb{R}$），則 $\\bar{z} = x-yi$。……【M1】",
          "代入原方程：$$3(x+yi) - (x-yi) = 4 + 8i$$……【M1】",
          "展開合併同類項：$$(3x - x) + (3y + y)i = 2x + 4yi = 4 + 8i$$……【M2】",
          "根據複數相等定理建立方程組：$$\\begin{cases} 2x = 4 \\implies x = 2 \\\\ 4y = 8 \\implies y = 2 \\end{cases}$$……【A2】",
          "得出複數 $z$ 的代數形式：$$z = 2 + 2i$$……【A1】",
          "計算模長：$$|z| = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$……【A1】",
          "<b>(b) 小問（滿分 8 分）：</b>",
          "計算 $w$ 的代數形式：$$z^2 = (2+2i)^2 = 4 + 8i + 4i^2 = 4 + 8i - 4 = 8i$$$$w = \\frac{z^2}{2} = \\frac{8i}{2} = 4i$$……【M2】",
          "寫出複平面對應點坐標：點 $A(2, 2)$，點 $B(0, 4)$，原點 $O(0, 0)$。……【B1】",
          "計算線段 $AB$ 的長度：$$|AB| = |w - z| = |4i - (2+2i)| = |-2 + 2i| = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$……【M2, A1】",
          "計算 $\\triangle OAB$ 的面積：",
          "【方法 1 · 坐標行列式公式】：$$S_{\\triangle OAB} = \\frac{1}{2} |x_A y_B - x_B y_A| = \\frac{1}{2} |2 \\times 4 - 0 \\times 2| = \\frac{1}{2} \\times 8 = 4$$……【M1, A1】",
          "【方法 2 · 底高幾何法】：點 $B(0,4)$ 在 $y$ 軸（虛軸）上，取 $OB$ 為底，底長 $b = 4$；點 $A(2,2)$ 到 $y$ 軸的垂直距離即為高 $h = |x_A| = 2$。故 $S_{\\triangle OAB} = \\frac{1}{2} \\times 4 \\times 2 = 4$。"
        ],
        "ans": "(a) $z = 2+2i, \\; |z| = 2\\sqrt{2}$；(b) $|AB| = 2\\sqrt{2}, \\; S_{\\triangle OAB} = 4$",
        "quickTip": "直角等腰判定：向量 $\\vec{OA} = (2,2)$，$\\vec{AB} = (-2,2)$。點積 $\\vec{OA} \\cdot \\vec{AB} = -4+4 = 0$，且長度均為 $2\\sqrt{2}$！因此 $\\triangle OAB$ 是以 $A$ 為直角頂點的等腰直角三角形！面積直接等於 $\\frac{1}{2} \\times 2\\sqrt{2} \\times 2\\sqrt{2} = 4$，秒殺驗算！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$z=2+2i,</m:t></m:r><m:r><m:t>|z|=2</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad><m:r><m:t>$；(b)$|AB|=2</m:t></m:r><m:rad><m:radPr><m:degHide m:val=\"on\"/></m:radPr><m:deg/><m:e><m:r><m:t>2</m:t></m:r></m:e></m:rad><m:r><m:t>,</m:t></m:r><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>△OAB</m:t></m:r></m:sub></m:sSub><m:r><m:t>=4$</m:t></m:r></m:oMath>"
      }
    },
    {
      "year": "專題突破",
      "paper": "計算題",
      "qNum": "題 08",
      "topic": "三角極式轉換 · 棣美弗定理高次冪與共軛倒數巧算",
      "score": "15分",
      "q": "已知複數 $z_0 = -\\sqrt{3}+i$。<br>(a) 求 $z_0$ 的模長 $|z_0|$ 與幅角主值 $\\operatorname{Arg}(z_0) \\in (-\\pi, \\pi]$，並將 $z_0$ 表示為標準三角形式 $r(\\cos\\theta+i\\sin\\theta)$。 (6分)<br>(b) 利用棣美弗定理（De Moivre's Theorem），計算 $z_0^9$ 的精確代數值。 (4分)<br>(c) 計算代數式 $T = z_0^6 + \\left(\\frac{4}{z_0}\\right)^6$ 的精確值。 (5分)",
      "knowledge": {
        "formulas": [
          "z = r(\\cos\\theta + i\\sin\\theta), \\quad r = \\sqrt{x^2+y^2}, \\; \\tan\\theta = \\frac{y}{x}",
          "\\text{棣美弗定理：} [r(\\cos\\theta + i\\sin\\theta)]^n = r^n (\\cos n\\theta + i\\sin n\\theta)",
          "z \\bar{z} = |z|^2 = r^2 \\implies \\frac{r^2}{z} = \\bar{z}"
        ],
        "points": [
          "<b>(a) 象限幅角判定</b>：點 $(-\\sqrt{3}, 1)$ 位於第二象限，幅角主值為 $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$。",
          "<b>(b) 棣美弗展開</b>：$9$ 次方模長為 $2^9 = 512$，角度為 $9 \\times \\frac{5\\pi}{6} = \\frac{15\\pi}{2} = 6\\pi + \\frac{3\\pi}{2}$。",
          "<b>(c) 巧算關鍵</b>：由 $|z_0|^2 = 4$ 可知 $\\frac{4}{z_0} = \\bar{z}_0$，直接省去分母有理化計算！"
        ],
        "pitfall": "求 $\\operatorname{Arg}(z_0)$ 時不要盲目用 $\\arctan(-1/\\sqrt{3}) = -\\pi/6$，點在第二象限必須加上 $\\pi$ 得 $5\\pi/6$。"
      },
      "solution": {
        "thinking": "(a) 算模長與第二象限幅角寫出極式；(b) 依據棣美弗定理展開 9 次冪並求三角值；(c) 算出 $z_0^6$，並妙用 $z_0\\bar{z}_0=4 \\implies 4/z_0=\\bar{z}_0$ 快速求和。",
        "steps": [
          "<b>(a) 小問（滿分 6 分）：</b>",
          "計算模長：$$r = |z_0| = \\sqrt{(-\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = 2$$……【M2】",
          "計算幅角主值：點 $(-\\sqrt{3}, 1)$ 位於第二象限，$$\\cos\\theta = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\theta = \\frac{1}{2} \\implies \\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$$……【M2】",
          "寫出標準三角形式：$$z_0 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$$……【A2】",
          "<b>(b) 小問（滿分 4 分）：</b>",
          "應用棣美弗定理展開 9 次冪：$$z_0^9 = 2^9 \\left[\\cos\\left(9 \\times \\frac{5\\pi}{6}\\right) + i\\sin\\left(9 \\times \\frac{5\\pi}{6}\\right)\\right] = 512\\left(\\cos\\frac{15\\pi}{2} + i\\sin\\frac{15\\pi}{2}\\right)$$……【M2】",
          "化簡角度 $\\frac{15\\pi}{2}$：$$\\frac{15\\pi}{2} = 6\\pi + \\frac{3\\pi}{2} = 3 \\times 2\\pi + \\frac{3\\pi}{2}$$故 $\\cos\\frac{15\\pi}{2} = 0$，$\\sin\\frac{15\\pi}{2} = -1$。……【M1】",
          "計算得出代數值：$$z_0^9 = 512(0 - i) = -512i$$……【A1】",
          "<b>(c) 小問（滿分 5 分）：</b>",
          "先計算 $z_0^6$：$$z_0^6 = 2^6 \\left[\\cos\\left(6 \\times \\frac{5\\pi}{6}\\right) + i\\sin\\left(6 \\times \\frac{5\\pi}{6}\\right)\\right] = 64(\\cos 5\\pi + i\\sin 5\\pi) = 64(-1 + 0) = -64$$……【M2】",
          "觀察並化簡 $\\frac{4}{z_0}$：因為 $z_0 \\bar{z}_0 = |z_0|^2 = 2^2 = 4$，所以 $\\frac{4}{z_0} = \\bar{z}_0$！……【M2】",
          "由共軛性質可知：$$\\left(\\frac{4}{z_0}\\right)^6 = (\\bar{z}_0)^6 = \\overline{z_0^6} = \\overline{-64} = -64$$",
          "代入求和：$$T = z_0^6 + \\left(\\frac{4}{z_0}\\right)^6 = -64 + (-64) = -128$$……【A1】"
        ],
        "ans": "(a) $z_0 = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$；(b) $z_0^9 = -512i$；(c) $T = -128$",
        "quickTip": "四校附加卷培優巧思：$z_0^3 = 8(\\cos\\frac{5\\pi}{2}+i\\sin\\frac{5\\pi}{2}) = 8i$。因此 $z_0^9 = (z_0^3)^3 = (8i)^3 = 512i^3 = -512i$！$z_0^6 = (z_0^3)^2 = (8i)^2 = -64$。3 秒口算完成全部小題！",
        "omml": "<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>(a)$</m:t></m:r><m:sSub><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>0</m:t></m:r></m:sub></m:sSub><m:r><m:t>=2</m:t></m:r><m:r><m:t>(</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>cos</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>5π</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>+i</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>sin</m:t></m:r><m:f><m:fPr><m:type m:val=\"bar\"/></m:fPr><m:num><m:r><m:t>5π</m:t></m:r></m:num><m:den><m:r><m:t>6</m:t></m:r></m:den></m:f><m:r><m:t>)</m:t></m:r><m:r><m:t>$；(b)$</m:t></m:r><m:sSubSup><m:e><m:r><m:t>z</m:t></m:r></m:e><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>9</m:t></m:r></m:sup></m:sSubSup><m:r><m:t>=−512i$；(c)$T=−128$</m:t></m:r></m:oMath>"
      }
    }
  ]
});
})();
