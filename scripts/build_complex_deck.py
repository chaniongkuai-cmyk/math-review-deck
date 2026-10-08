# -*- coding: utf-8 -*-
"""
《澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙》
Topic 03: 複數代數、棣美弗定理與複平面幾何 Master Builder
1. 整合全卷 3 大部分 (10 題卡，滿分 100 分)
2. 利用 latex2mathml + MML2OMML.XSL 全量生成原生微軟 Word OMML XML
3. 生成 JS 數據庫 (demo/ 與 assets/)
4. 生成 Word 原生 OMML 對照手冊 (.docx)
5. 生成 OMML 彙編 (.xml)
"""

import os
import sys
import json
import re
import docx
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
import lxml.etree
import latex2mathml.converter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import data_complex_01
import data_complex_02
import data_complex_03

# Setup MML2OMML transformer
XSLT_PATH = r'C:\Program Files\Microsoft Office\root\Office16\MML2OMML.XSL'
xslt_doc = lxml.etree.parse(XSLT_PATH)
transform = lxml.etree.XSLT(xslt_doc)

def latex_to_omml(tex_code):
    try:
        clean = tex_code.strip()
        clean = clean.replace('**', '').replace('*', '')
        # Remove LaTeX text commands that could break converter
        mml = latex2mathml.converter.convert(clean)
        mml_dom = lxml.etree.fromstring(mml)
        omml_dom = transform(mml_dom)
        s = lxml.etree.tostring(omml_dom, encoding='unicode')
        
        # Strip outer oMathPara if present
        if '<m:oMathPara' in s:
            root = lxml.etree.fromstring(s)
            om = root.find('.//{http://schemas.openxmlformats.org/officeDocument/2006/math}oMath')
            if om is not None:
                s = lxml.etree.tostring(om, encoding='unicode')
        return s.strip()
    except Exception as e:
        # Fallback to plain text in OMML
        clean_text = tex_code.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        return f'<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><m:r><m:t>{clean_text}</m:t></m:r></m:oMath>'

# Interactive visuals for key complex number problems
def get_visual_code(qNum):
    if qNum == '題 01':
        return """function(host) {
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
                <!-- 點 \bar{z}=(1.6, -1.8) -> (136, 105) -->
                <circle cx="136" cy="105" r="5" fill="#f43f5e" />
                <text x="145" y="110" fill="#f43f5e" font-size="11" font-weight="bold">z̄ = 8/5 - 9/5 i</text>
                <!-- 向量箭頭 -->
                <line x1="40" y1="60" x2="136" y2="15" stroke="#38bdf8" stroke-width="2" />
                <line x1="40" y1="60" x2="136" y2="105" stroke="#f43f5e" stroke-width="2" />
              </svg>
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">共軛複數實部相同（$x=1.6$），虛部相反（$\\pm 1.8$），關於實軸嚴格軸對稱！</div>
            </div>`;
        }"""
    elif qNum == '題 02':
        return """function(host) {
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
        }"""
    elif qNum == '題 04':
        return """function(host) {
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
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">動點 P 到 A 與 B 距離相等 $\\iff$ 軌跡為線段 AB 垂直平分線，斜率 $k = -2$。</div>
            </div>`;
        }"""
    elif qNum == '題 06':
        return """function(host) {
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
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">$|OC| = 5, R = 2 \\implies |z|_{\\min} = 5-2 = 3, \\; |z|_{\\max} = 5+2 = 7$。</div>
            </div>`;
        }"""
    elif qNum == '題 09':
        return """function(host) {
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
              <div style="color:#cbd5e1;font-size:12px;margin-top:6px;">正方形對角線 $d=4 \\implies S = \\frac{1}{2}d^2 = 8$。中心對稱 $\\sum z_k = 0 \\implies \\sum |w-z_k|^2 = 32$。</div>
            </div>`;
        }"""
    elif qNum == '題 10':
        return """function(host) {
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
        }"""
    return None

CHAPTERS = [
    (data_complex_01.CHAPTER_DATA, 'ch-complex-01.js'),
    (data_complex_02.CHAPTER_DATA, 'ch-complex-02.js'),
    (data_complex_03.CHAPTER_DATA, 'ch-complex-03.js')
]

print("=== 開始注入 OMML 方程式與建構複數專題資料庫 ===")

all_xml_items = []
doc_guide = docx.Document()
doc_guide.add_heading('澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙', level=0)
doc_guide.add_paragraph('Topic 03: 複數代數、棣美弗定理與複平面幾何 參考答案 OMML 對照手冊\n版本屬性：教師培優版（含全題型官方標準分步評分細則 M/A/B、易錯警示、四校聯考秒殺速解訣竅）\n本手冊所有數學公式均為微軟官方原生 OMML 方程式物件，可直接在 Word 中複製、編輯與排版。')

total_cards = 0

for ch_data, filename in CHAPTERS:
    ch_title = ch_data.get('title', ch_data.get('ch', ''))
    slides = ch_data.get('slides', [])
    print(f"\n處理 {ch_title}，題數: {len(slides)}")
    
    doc_guide.add_heading(ch_title, level=1)
    
    for idx, slide in enumerate(slides):
        total_cards += 1
        sol = slide.setdefault('solution', {})
        ans = sol.get('ans', '')
        
        # 生成 OMML
        omml = latex_to_omml(ans)
        sol['omml'] = omml
        
        q_num = slide.get('qNum', f'第{idx+1}題')
        topic = slide.get('topic', '')
        
        all_xml_items.append(f"""  <problem id="{total_cards}" chapter="{ch_title}" qNum="{q_num}" topic="{topic}">
    <latex>{ans}</latex>
    {omml}
  </problem>""")
        
        # 加入 Word 手冊
        p = doc_guide.add_paragraph()
        p.add_run(f"{q_num} · {topic} ({slide.get('score', '')})").bold = True
        
        p_q = doc_guide.add_paragraph()
        p_q.add_run("【題目題幹】: " + slide.get('q', ''))
        
        p_ans = doc_guide.add_paragraph()
        p_ans.add_run("【參考答案】: ")
        try:
            omml_elem = lxml.etree.fromstring(omml)
            p_ans._p.append(omml_elem)
        except Exception:
            p_ans.add_run(ans)
            
        p_steps = doc_guide.add_paragraph()
        p_steps.add_run("【規範步驟與踩點得分】：\n" + "\n".join(sol.get('steps', [])))
        
        if sol.get('quickTip'):
            p_tip = doc_guide.add_paragraph()
            p_tip.add_run("⚡【聯考速解訣竅】： " + sol.get('quickTip')).italic = True
            
        doc_guide.add_paragraph("-" * 40)

    # Convert to JSON with interactive visuals
    raw_json = json.dumps(ch_data, ensure_ascii=False, indent=2)
    
    # Inject visuals for slides
    for slide in slides:
        q_num = slide.get('qNum')
        vis_code = get_visual_code(q_num)
        if vis_code:
            # We insert visual function in the JS file using lambda to prevent backslash escape errors
            pattern = re.compile(rf'("qNum":\s*"{re.escape(q_num)}"[^}}]+?"score":\s*"[^"]+")', re.DOTALL)
            raw_json = pattern.sub(lambda m, vc=vis_code: m.group(1) + f',\n      "visual": {vc}', raw_json)

    js_content = f"/* 澳門四校聯考 · 數學科專題突破 100 分鐘限時練習工作紙 — {ch_title} - 支援原生 OMML */\n(function() {{\n  const DECK = window.DECK = window.DECK || [];\n  DECK.push({raw_json});\n}})();\n"
    
    for target_dir in ['demo', 'assets']:
        out_js = os.path.join(target_dir, filename)
        with open(out_js, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"  [OK] 已寫入 {out_js}")

print(f"\n總題卡數: {total_cards}")

# 儲存 Word 手冊
docx_name = "Topic03_複數代數與複平面幾何_參考答案_OMML對照手冊.docx"
target_paths = [
    'demo',
    'assets',
    r'G:\我的雲端硬碟\12_數學教材轉化',
    r'G:\我的雲端硬碟\FourSchool-Math-Mock\100分鐘專題練習工作紙\TOPIC_03_複數代數與複平面幾何'
]

for p in target_paths:
    if os.path.exists(p):
        target = os.path.join(p, docx_name)
        doc_guide.save(target)
        print(f"[OK] 已儲存 Word 手冊: {target}")

# 儲存 XML 彙編
xml_name = "Topic03_複數代數與複平面幾何_參考答案_OMML彙編.xml"
full_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<ommlCompilation title="Topic 03: 複數代數、棣美弗定理與複平面幾何 參考答案 OMML 彙編" total="{total_cards}" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math">
{chr(10).join(all_xml_items)}
</ommlCompilation>"""

for p in target_paths:
    if os.path.exists(p):
        target = os.path.join(p, xml_name)
        with open(target, 'w', encoding='utf-8') as f:
            f.write(full_xml)
        print(f"[OK] 已儲存 XML 彙編: {target}")

print("\n=== 全部複數專題 OMML 檔案編譯完成 ===")
