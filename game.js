const STORE = [
  { id:"auto-clicker", name:"Auto Clicker", cost:15, description:"Auto clicks every 10 seconds.", icon:"resources/menu/store/icon_autoclicker.png", attr:{fps:0.1} },
  { id:"helping-hand", name:"Helping Hand", cost:100, description:"Auto clicks every 2 seconds", icon:"resources/menu/store/icon_helpinghand.png", attr:{fps:0.5} },
  { id:"brofist", name:"Brofist", cost:250, description:"Click value +0.5. Tapping is meta.", icon:"resources/menu/store/icon_brofist.png", attr:{fpc:0.5} },
  { id:"drinking-bird", name:"Drinking Bird", cost:800, description:"Taps foenem every second. YYYYY...", icon:"resources/menu/store/icon_drinkingbird.png", attr:{fps:1} },
  { id:"bodega", name:"Bodega", cost:3000, description:"Passive income da ocky way. 5 foenems every second.", icon:"resources/menu/store/icon_bodega.png", attr:{fps:5} },
  { id:"double-tap", name:"Double Tap", cost:5000, description:"Click value +2. No root beer required.", icon:"resources/menu/store/icon_doubletap.png", attr:{fpc:2} },
  { id:"foenem-farm", name:"Foenem Farm", cost:15000, description:"+20 FPS. Industrialized foenems.", icon:"resources/menu/store/icon_farm.png", attr:{fps:20} },
  { id:"lie-detector", name:"Lie Detector", cost:35000, description:"Click value +5. HE LYIN.", icon:"resources/menu/store/icon_lie.png", attr:{fpc:5} },
  { id:"perk-30", name:"Perk 30", cost:80000, description:"+50 FPS. IM SCHTICKIN RN.", icon:"resources/menu/store/icon_perk.png", attr:{fps:50} },
  { id:"pack-a-punch", name:"Pack A Punch", cost:150000, description:"Click value +15. Heavy hitter.", icon:"resources/menu/store/icon_pap.png", attr:{fpc:15} },
  { id:"special-drank", name:"Special Drank", cost:400000, description:"Click value +50. Tastes like candy!", icon:"resources/menu/store/icon_drank.png", attr:{fpc:50} },
  { id:"vape-store-24hr", name:"24hr Vape Store", cost:1000000, description:"+250 FPS. Open all night.", icon:"resources/menu/store/icon_vape.png", attr:{fps:250} },
  { id:"foeneminator", name:"The Foeneminator", cost:2500000, description:"Click value +150. ON FOENEM.", icon:"resources/menu/store/icon_foeneminator.png", attr:{fpc:150} },
  { id:"dark-matter-clicker", name:"Dark Matter Clicker", cost:7500000, description:"It uses Dark Mango Psychology. (+500 FPS)", icon:"resources/menu/store/icon_darkclicker.png", attr:{fps:500} },
  { id:"milk-crate-skyscraper", name:"Milk Crate Skyscraper", cost:20000000, description:"+1500 FPS. Don't try this at home.", icon:"resources/menu/store/icon_milkcrate.png", attr:{fps:1500} },
  { id:"haunted-lie-detector", name:"Haunted Lie Detector", cost:50000000, description:"Click value +1000. Hauughhh...", icon:"resources/menu/store/icon_mythiclie.png", attr:{fpc:1000} },
  { id:"section-8-space-station", name:"Section 8 Space Station", cost:250000000, description:"10000 FPS. Manufactured in Israel.", icon:"resources/menu/store/icon_section8.png", attr:{fps:10000} },
];

const STOCKS = [
  { id:"stop_snitchin_studios", name:"Stop Snitchin' Studios", basePrice:25.0, description:"Media conglomerate", icon:"resources/menu/stock/icon_sss.png", volatility:0.1 },
  { id:"super-ghetto-bros", name:"SuperGhettoBrosTV", basePrice:50.0, description:"DAILY UNCENSORED 18+ HOOD FIGHTS", icon:"resources/menu/stock/icon_superghettobros.png", volatility:0.3 },
  { id:"dropshipper", name:"Dropshipper Acadamy", basePrice:500.0, description:"Escape the Matrix.", icon:"resources/menu/stock/icon_redpill.png", volatility:0.3 },
  { id:"chiraq-funniest-moments", name:"@Chiraq_Funniest_Moments", basePrice:2.5, description:"The biggest memepage in Chicago.", icon:"resources/menu/stock/icon_chiraq.png", volatility:0.9 },
  { id:"derpcoin", name:"$DERPCOIN", basePrice:5000.0, description:"A bizarre form of e-currency.", icon:"resources/menu/stock/icon_derpcoin.png", volatility:0.02 },
  { id:"superbuy", name:"SuperBuy CN", basePrice:125.0, description:"Verified Chinese Shipping Agency Consumer Goods", icon:"resources/menu/stock/icon_pandabuy.png", volatility:0.2 },
];

const MARKET = { baseVolatility:0.05, updateInterval:10 };
const MARKET_EVENTS = [
  { name:"bull_market",   effect:0.20,  description:"Bull Market: +20% boost" },
  { name:"bear_market",   effect:-0.15, description:"Bear Market: -15% drop" },
  { name:"crash",         effect:-0.40, description:"Market Crash: -40% drop" },
  { name:"rally",         effect:0.15,  description:"Market Rally: +15% boost" },
  { name:"correction",    effect:-0.10, description:"Market Correction: -10% drop" },
  { name:"recovery",      effect:0.25,  description:"Market Recovery: +25% boost" },
  { name:"boom",          effect:0.35,  description:"Market Boom: +35% boost" },
  { name:"stabilization", effect:0.10,  description:"Market Stabilization: +10% boost" },
];

const AWARDS = [
  { id:"foenem_grave", name:"ON FOENEM GRAVE", description:"Click The Foenem Button", icon:"resources/menu/awards/icon_4NEM.png", cond:{gross_clicks:1} },
  { id:"foenem10", name:"FOENEM X10", description:"Earn 10 Foenem Per Second", icon:"resources/menu/awards/icon_foenem10.png", cond:{fps:10} },
  { id:"foenem50", name:"FOENEM X50", description:"Earn 50 Foenem Per Second", icon:"resources/menu/awards/icon_foenem50.png", cond:{fps:50} },
  { id:"foenem100", name:"FOENEM X100", description:"Earn 100 Foenem Per Second", icon:"resources/menu/awards/icon_foenem100.png", cond:{fps:100} },
  { id:"foenem500", name:"FOENEM X500", description:"Earn 500 Foenem Per Second", icon:"resources/menu/awards/icon_foenem500.png", cond:{fps:500} },
  { id:"foenem1000", name:"FOENEM X1000", description:"Earn 1000 Foenem Per Second", icon:"resources/menu/awards/icon_foenem1000.png", cond:{fps:1000} },
  { id:"100", name:"Keep it a Hunnid", description:"Press Foenem 100 Times", icon:"resources/menu/awards/icon_100.png", cond:{gross_clicks:100} },
  { id:"300", name:"3Hunna", description:"Press Foenem 300 Times", icon:"resources/menu/awards/icon_300.png", cond:{gross_clicks:300} },
  { id:"500", name:"5Hunna", description:"Press Foenem 500 Times", icon:"resources/menu/awards/icon_500.png", cond:{gross_clicks:500} },
  { id:"100squared", name:"100^2", description:"Press Foenem 10000 Times", icon:"resources/menu/awards/icon_1002.png", cond:{gross_clicks:10000} },
  { id:"milestone1", name:"Milestone I", description:"Get a score over 1000", icon:"resources/menu/awards/icon_milestone1.png", cond:{net_score:1000} },
  { id:"milestone2", name:"Milestone II", description:"Get a score over 10000", icon:"resources/menu/awards/icon_milestone2.png", cond:{net_score:10000} },
  { id:"milestone3", name:"Milestone III", description:"Get a score over 100000", icon:"resources/menu/awards/icon_milestone3.png", cond:{net_score:100000} },
  { id:"milestone4", name:"Milestone IV", description:"Get a score over 1000000", icon:"resources/menu/awards/icon_milestone4.png", cond:{net_score:1000000} },
  { id:"milestone5", name:"Milestone V", description:"Get a score over 10000000", icon:"resources/menu/awards/icon_milestone5.png", cond:{net_score:10000000} },
  { id:"shopping_spree", name:"Shopping Spree", description:"Own 1 of every store item", icon:"resources/menu/awards/icon_shopping.png",
    cond:{owned_items:Object.fromEntries(STORE.map(s=>[s.id,1]))} },
  { id:"index_fund", name:"Index Fund", description:"Own 10 of every stonk at once", icon:"resources/menu/awards/icon_index.png",
    cond:{owned_stocks:Object.fromEntries(STOCKS.map(s=>[s.id,10]))} },
  { id:"overdose", name:"Overdose", description:"Own 5 Perk 30s and 2 Special Dranks", icon:"resources/menu/awards/icon_overdose.png", cond:{owned_items:{"perk-30":5,"special-drank":2}} },
  { id:"never_forget", name:"Never Forget", description:"Own 2 Milk Crate Skyscrapers", icon:"resources/menu/awards/icon_milkcrate.png", cond:{owned_items:{"milk-crate-skyscraper":2}} },
  { id:"da_ocky_way", name:"Da Ocky Way", description:"Own 25 Bodegas", icon:"resources/menu/awards/icon_bodega.png", cond:{owned_items:{"bodega":25}} },
  { id:"ballout", name:"BALLOUT", description:"Spend 1000000 Foenem", icon:"resources/menu/awards/icon_ballout.png", cond:{gross_spent:1000000} },
  { id:"auto_clicker_master", name:"Auto Clicker Master", description:"Own 50 Auto Clickers", icon:"resources/menu/awards/icon_autoclicker.png", cond:{owned_items:{"auto-clicker":50}} },
  { id:"redpill", name:"The Red Pill", description:"Own 100 Dropshipper Acadamy Stonk", icon:"resources/menu/awards/icon_redpill.png", cond:{owned_stocks:{"dropshipper":100}} },
  { id:"pandabuy", name:"Ultimate Spreadsheet", description:"Own 50 SuperBuy CN Stonk", icon:"resources/menu/awards/icon_panda.png", cond:{owned_stocks:{"superbuy":50}} },
  { id:"stfu", name:"STFU", description:"Own 10 Stop Snitchin' Studios Stonk", icon:"resources/menu/awards/icon_stfu.png", cond:{owned_stocks:{"stop_snitchin_studios":10}} },
  { id:"sybau", name:"SYBAU", description:"Own 100 Stop Snitchin' Studios Stonk", icon:"resources/menu/awards/icon_sybau.png", cond:{owned_stocks:{"stop_snitchin_studios":100}} },
  { id:"oblock", name:"O'Block Shareholder", description:"Own 100 @Chiraq_Funniest_Moments Stonk", icon:"resources/menu/awards/icon_obloc.png", cond:{owned_stocks:{"chiraq-funniest-moments":100}} },
  { id:"hodl", name:"HODL", description:"Buy a $DERPCOIN", icon:"resources/menu/awards/icon_hodl.png", cond:{owned_stocks:{"derpcoin":1}} },
  { id:"kingcrypto", name:"KING CRYPTO", description:"Own 100 $DERPCOIN", icon:"resources/menu/awards/icon_king.png", cond:{owned_stocks:{"derpcoin":100}} },
];

const EXTRAS = [
  { title:"Let's Get Violent", description:"Development & Publishing.", btn:"FOLLOW", url:"https://letsgetviolent.xyz/" },
  { title:"PeeWee Purpdrank", description:"Follow Me Onda Gram!", icon:"resources/menu/extra/icon-purpdrank.png", btn:"FOLLOW", url:"https://www.instagram.com/peeweepurpdrank/" },
  { title:"Big Money Hacker", description:"Concept Art.", icon:"resources/menu/extra/icon-bigmoneyhacker.png", btn:"FOLLOW", url:"https://www.instagram.com/bigmoneyhacker/" },
  { title:"DJ Killable", description:"Soundtrack Composition.", icon:"resources/menu/extra/icon-killable.png", btn:"FOLLOW", url:"https://www.instagram.com/kill_able" },
  { title:"Xtreme!", description:"Sound FX and Additional Music.", icon:"resources/menu/extra/icon-xtreme.png", btn:"FOLLOW", url:"https://www.instagram.com/prodbyxtreme/" },
  { title:"Fatkid5600", description:"Xcode Compiling & QA Testing", icon:"resources/menu/extra/icon-fatkid.png", btn:"FOLLOW", url:"https://www.instagram.com/fatkid5600/" },
  { title:"Foenem Merchandise", description:"Buy my DVD!", icon:"resources/menu/extra/icon-merch.png", btn:"MERCH", url:"https://letsgetviolent.xyz/product-category/collections/peewee-purpdrank/" },
  { title:"Privacy Policy", description:"Legal information for FOENEM Clicker.", btn:"READ", url:"https://letsgetviolent.xyz/privacy-policy-for-foenem-clicker/" },
];

const COST_GROWTH = 1.15;   
const SAVE_KEY = "foenem_clicker_save_v1";

const defaultData = () => ({
  net_score: 0,
  gross_score: 0,
  gross_spent: 0,
  gross_clicks: 0,
  owned_items: {},
  owned_stocks: {},
  unlocked_achievements: [],
  stock_prices: {},
  settings: { background:true, particles:true, music:0.4, sfx:0.7 },
});

let data = load();
let market = {};        
let marketEvent = null; 
let marketTimer = 0;
let eventTimer = 0;

function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch(e){} }
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultData();
    const d = Object.assign(defaultData(), JSON.parse(raw));
    d.settings = Object.assign(defaultData().settings, d.settings || {});
    return d;
  } catch(e) { return defaultData(); }
}

function getFPC() {
  let v = 1; 
  for (const it of STORE) if (it.attr.fpc) v += it.attr.fpc * (data.owned_items[it.id]||0);
  return v;
}
function getFPS() {
  let v = 0;
  for (const it of STORE) if (it.attr.fps) v += it.attr.fps * (data.owned_items[it.id]||0);
  return v;
}
function dynamicPrice(item) {
  const owned = data.owned_items[item.id]||0;
  return Math.floor(item.cost * Math.pow(COST_GROWTH, owned));
}

function fmt(v, P) {
  P = P || 14;
  if (v === Infinity) return "inf";
  if (v === -Infinity) return "-inf";
  if (Number.isNaN(v)) return "nan";
  if (v === 0) return "0";
  const es = v.toExponential(P - 1);      
  const parts = es.split("e");
  let mant = parts[0];
  const X = parseInt(parts[1], 10);
  if (X >= -4 && X < P) {
    let s = v.toFixed(Math.max(P - 1 - X, 0));
    if (s.indexOf(".") >= 0) s = s.replace(/0+$/, "").replace(/\.$/, "");
    return s;
  }
  mant = mant.replace(/0+$/, "").replace(/\.$/, "");
  let ax = Math.abs(X).toString();
  if (ax.length < 2) ax = "0" + ax;
  return mant + "e" + (X < 0 ? "-" : "+") + ax;
}
function fmtMoney(n) { return n < 100000 ? n.toFixed(2) : fmt(n); }

const sfx = {
  click: new Audio("resources/sfx/ui_foenem.mp3"),
  click2: new Audio("resources/sfx/ui_click2.mp3"),
  award: new Audio("resources/sfx/ui_award.mp3"),
  taskbar: new Audio("resources/sfx/ui_taskbar.mp3"),
  close: new Audio("resources/sfx/ui_close.mp3"),
};
const MUSIC_TRACKS = ["bgm_toseina","bgm_witch","bgm_drums","bgm_robot","bgm_sometimes"];
let musicIdx = Math.floor(Math.random()*MUSIC_TRACKS.length);
const music = new Audio();
music.addEventListener("ended", () => { musicIdx = (musicIdx+1)%MUSIC_TRACKS.length; playMusic(); });
function playMusic() {
  music.src = `resources/sfx/${MUSIC_TRACKS[musicIdx]}.mp3`;
  music.volume = data.settings.music;
  music.play().catch(()=>{});
}
function playSfx(name) {
  const a = sfx[name]; if (!a) return;
  a.volume = data.settings.sfx;
  try { a.currentTime = 0; a.play().catch(()=>{}); }
  catch(e){ const c = a.cloneNode(); c.volume = data.settings.sfx; c.play().catch(()=>{}); }
}

const $ = s => document.querySelector(s);
const game = $("#game");
const scoreEl = $("#score"), fpsEl = $("#fps"), foenem = $("#foenem"), wrap = $("#foenem-wrap");

function doClick(clientX, clientY) {
  const gain = getFPC();
  data.net_score += gain;
  data.gross_score += gain;
  data.gross_clicks += 1;
  playSfx("click");
  spawnFloat(clientX, clientY, "+"+fmt(gain));
  if (data.settings.particles) spawnParticles(clientX, clientY);
  foenem.style.transform = "scale(.9)";
  setTimeout(()=>foenem.style.transform="", 60);
  refreshHud();
  checkAwards();
}
foenem.addEventListener("pointerdown", e => { doClick(e.clientX, e.clientY); });

function spawnFloat(x, y, txt) {
  const el = document.createElement("div");
  el.className = "float"; el.textContent = txt;
  el.style.left = (x - 20 + (Math.random()*20-10)) + "px";
  el.style.top = (y - 30) + "px";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 1000);
}
function spawnParticles(x, y) {
  const n = 6;
  for (let i=0;i<n;i++) {
    const p = document.createElement("div");
    p.className = "particle";
    document.body.appendChild(p);
    const ang = Math.random()*Math.PI*2, dist = 40+Math.random()*70;
    const dx = Math.cos(ang)*dist, dy = Math.sin(ang)*dist - 30;
    p.style.left = (x-13)+"px"; p.style.top = (y-13)+"px";
    p.animate([
      { transform:"translate(0,0) rotate(0deg) scale(1)", opacity:1 },
      { transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*360}deg) scale(.4)`, opacity:0 }
    ], { duration:700+Math.random()*300, easing:"ease-out" }).onfinish = ()=>p.remove();
  }
}

function refreshHud() {
  scoreEl.textContent = fmt(Math.floor(data.net_score)); // game floors the score for display
  fpsEl.textContent = fmt(getFPS());                      // FPS shows fractional rates (e.g. 0.1)
}

let lastTick = performance.now();
function gameLoop(now) {
  const dt = Math.min((now - lastTick)/1000, 1);
  lastTick = now;
  const fps = getFPS();
  if (fps > 0) {
    const gain = fps * dt;
    data.net_score += gain;
    data.gross_score += gain;
  }
  marketTimer += dt;
  if (marketTimer >= MARKET.updateInterval) { marketTimer = 0; updateStockPrices(); }
  refreshHud();
  requestAnimationFrame(gameLoop);
}

function isUnlocked(id){ return data.unlocked_achievements.includes(id); }
function meetsCondition(a) {
  const c = a.cond;
  if (c.gross_clicks != null && data.gross_clicks < c.gross_clicks) return false;
  if (c.net_score != null && data.net_score < c.net_score) return false;
  if (c.gross_spent != null && data.gross_spent < c.gross_spent) return false;
  if (c.fps != null && getFPS() < c.fps) return false;
  if (c.owned_items) for (const k in c.owned_items) if ((data.owned_items[k]||0) < c.owned_items[k]) return false;
  if (c.owned_stocks) for (const k in c.owned_stocks) if ((data.owned_stocks[k]||0) < c.owned_stocks[k]) return false;
  return true;
}
function checkAwards() {
  for (const a of AWARDS) {
    if (!isUnlocked(a.id) && meetsCondition(a)) {
      data.unlocked_achievements.push(a.id);
      notify(a);
      renderAwards();
      save();
    }
  }
}

let notifyQueue = [], notifyBusy = false;
function notify(a) { notifyQueue.push(a); if (!notifyBusy) nextNotify(); }
function nextNotify() {
  if (!notifyQueue.length) { notifyBusy=false; return; }
  notifyBusy = true;
  const a = notifyQueue.shift();
  $("#notify-icon").src = a.icon;
  $("#notify-name").textContent = a.name;
  const n = $("#notify");
  n.classList.add("show");
  playSfx("award");
  setTimeout(()=>{ n.classList.remove("show"); setTimeout(nextNotify, 500); }, 3200);
}

function buyItem(item) {
  const price = dynamicPrice(item);
  if (data.net_score < price) { playSfx("close"); return; }
  data.net_score -= price;
  data.gross_spent += price;
  data.owned_items[item.id] = (data.owned_items[item.id]||0) + 1;
  playSfx("click2");
  refreshHud(); renderStore(); checkAwards(); save();
}
function renderStore() {
  const body = $("#panel-body"); body.innerHTML = "";
  for (const item of STORE) {
    const price = dynamicPrice(item);
    const owned = data.owned_items[item.id]||0;
    const afford = data.net_score >= price && isFinite(price);
    const attrLabel = item.attr.fps != null ? "FPS: +"+item.attr.fps : "FPC: +"+item.attr.fpc;
    const row = document.createElement("div");
    row.className = "entry" + (afford ? "" : " invalid");
    row.innerHTML = `
      <img class="ico" src="${item.icon}" onerror="this.style.visibility='hidden'">
      <div class="info">
        <div class="nm">${item.name}</div>
        <div class="ds">${item.description}</div>
        <div class="meta">${attrLabel} | Owned: ${fmt(owned)}</div>
      </div>
      <div class="price-box">${fmt(price)}</div>`;
    row.querySelector(".price-box").addEventListener("click", ()=>buyItem(item));
    body.appendChild(row);
  }
}

function initMarket() {
  for (const s of STOCKS) {
    const saved = data.stock_prices[s.id];
    const price = saved != null ? saved : s.basePrice;
    market[s.id] = { currentPrice: price, lastPrice: price };
  }
}
function updateStockPrices() {
  if (marketEvent) {
    marketEvent.remaining--;
    if (marketEvent.remaining <= 0) marketEvent = null;
  } else if (Math.random() < 0.18) {
    const e = MARKET_EVENTS[Math.floor(Math.random()*MARKET_EVENTS.length)];
    marketEvent = { effect:e.effect, description:e.description, remaining: 2 + Math.floor(Math.random()*4) };
  }
  for (const s of STOCKS) {
    const m = market[s.id];
    m.lastPrice = m.currentPrice;
    const vol = s.volatility + MARKET.baseVolatility;
    let change = (Math.random()*2 - 1) * vol;      
    if (marketEvent) change += marketEvent.effect / 3;   
    let next = m.currentPrice * (1 + change);
    const floor = s.basePrice * 0.1;                
    if (next < floor) next = floor;
    m.currentPrice = next;
    data.stock_prices[s.id] = next;
  }
  if (openWin === "stocks") renderStocks();
  save();
}
function buyStock(s) {
  const m = market[s.id];
  if (data.net_score < m.currentPrice) { playSfx("close"); return; }
  data.net_score -= m.currentPrice;
  data.owned_stocks[s.id] = (data.owned_stocks[s.id]||0) + 1;
  playSfx("click2");
  refreshHud(); renderStocks(); checkAwards(); save();
}
function sellStock(s) {
  const owned = data.owned_stocks[s.id]||0;
  if (owned <= 0) { playSfx("close"); return; }
  const m = market[s.id];
  data.owned_stocks[s.id] = owned - 1;
  data.net_score += m.currentPrice;
  data.gross_score += m.currentPrice;
  playSfx("click2");
  refreshHud(); renderStocks(); save();
}
function renderStocks() {
  const body = $("#panel-body"); body.innerHTML = "";
  if (marketEvent) {
    const ev = document.createElement("div");
    ev.className = "row2";
    ev.style.borderColor = marketEvent.effect>0 ? "var(--green)" : "var(--red)";
    ev.innerHTML = `<div class="info"><div class="nm">📈 Market Event</div><div class="ds">${marketEvent.description}</div></div>`;
    body.appendChild(ev);
  }
  for (const s of STOCKS) {
    const m = market[s.id];
    const owned = data.owned_stocks[s.id]||0;
    const up = m.currentPrice >= m.lastPrice;
    const pct = m.lastPrice ? ((m.currentPrice-m.lastPrice)/m.lastPrice*100) : 0;
    const afford = data.net_score >= m.currentPrice;
    const row = document.createElement("div");
    row.className = "entry" + (afford ? "" : " invalid");
    row.innerHTML = `
      <img class="ico" src="${s.icon}" onerror="this.style.visibility='hidden'">
      <div class="info">
        <div class="nm">${s.name}</div>
        <div class="ds">${s.description}</div>
        <div class="meta">Held: ${fmt(owned)}</div>
      </div>
      <div class="stock-actions">
        <div class="stock-price">${fmtMoney(m.currentPrice)}
          <span class="chg ${up?'up':'down'}">${up?'▲':'▼'}${Math.abs(pct).toFixed(1)}%</span></div>
        <button class="sbtn ${afford?'buy':'off'}">BUY</button>
        <button class="sbtn ${owned>0?'sell':'off'}">SELL</button>
      </div>`;
    const [buyBtn, sellBtn] = row.querySelectorAll("button");
    buyBtn.addEventListener("click", ()=>buyStock(s));
    sellBtn.addEventListener("click", ()=>sellStock(s));
    body.appendChild(row);
  }
}

function renderAwards() {
  const body = $("#panel-body"); body.innerHTML = "";
  const grid = document.createElement("div"); grid.id = "awards-grid";
  for (const a of AWARDS) {
    const unlocked = isUnlocked(a.id);
    const el = document.createElement("div");
    el.className = "award" + (unlocked?" unlocked":"");
    el.title = a.name + " — " + a.description;
    el.innerHTML = `<img src="${unlocked?a.icon:'resources/menu/awards/icon_locked.png'}" onerror="this.src='resources/menu/awards/icon_locked.png'">
      <div class="an">${unlocked?a.name:'???'}</div>`;
    grid.appendChild(el);
  }
  body.appendChild(grid);
}

function renderExtra() {
  const body = $("#panel-body"); body.innerHTML = "";
  for (const e of EXTRAS) {
    const row = document.createElement("div");
    row.className = "row2";
    row.innerHTML = `
      <img src="${e.icon||'resources/menu/default-icon.png'}" onerror="this.style.visibility='hidden'">
      <div class="info"><div class="nm">${e.title}</div><div class="ds">${e.description}</div></div>
      <button class="ebtn blue">${e.btn}</button>`;
    row.querySelector("button").addEventListener("click", ()=>window.open(e.url, "_blank"));
    body.appendChild(row);
  }
}

function renderSettings() {
  const s = data.settings;
  const body = $("#panel-body");
  body.innerHTML = `
    <div class="row2"><div class="info"><div class="nm">Background</div></div><button class="toggle ${s.background?'on':''}" id="set-bg"></button></div>
    <div class="row2"><div class="info"><div class="nm">Particles</div></div><button class="toggle ${s.particles?'on':''}" id="set-particles"></button></div>
    <div class="row2"><div class="info"><div class="nm">Music Volume</div></div><input class="slider" id="set-music" type="range" min="0" max="1" step="0.05" value="${s.music}"></div>
    <div class="row2"><div class="info"><div class="nm">SFX Volume</div></div><input class="slider" id="set-sfx" type="range" min="0" max="1" step="0.05" value="${s.sfx}"></div>
    <div class="row2"><div class="info"><div class="nm">Fullscreen</div></div><button class="ebtn blue" id="set-fs">TOGGLE</button></div>
    <div class="row2"><div class="info"><div class="nm">Delete Save</div></div><button class="ebtn red" id="set-del">WIPE</button></div>
  `;
  $("#set-bg").onclick = e => { s.background=!s.background; e.target.classList.toggle("on"); game.classList.toggle("bg-on", s.background); save(); };
  $("#set-particles").onclick = e => { s.particles=!s.particles; e.target.classList.toggle("on"); save(); };
  $("#set-music").oninput = e => { s.music=parseFloat(e.target.value); music.volume=s.music; save(); };
  $("#set-sfx").oninput = e => { s.sfx=parseFloat(e.target.value); save(); };
  $("#set-fs").onclick = () => { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); };
  $("#set-del").onclick = () => {
    if (confirm("Wipe all save data and reset to defaults?")) {
      localStorage.removeItem(SAVE_KEY);
      data = defaultData();
      initMarket(); marketEvent=null;
      refreshHud(); renderStore(); renderStocks(); renderAwards(); renderSettings();
      game.classList.toggle("bg-on", data.settings.background);
    }
  };
}

let openWin = null;
const WINDOWS = {
  store:    { title:"SHOP",     render:renderStore },
  awards:   { title:"AWARDS",   render:renderAwards },
  stocks:   { title:"STONKS",   render:renderStocks },
  settings: { title:"SETTINGS", render:renderSettings },
  extra:    { title:"EXTRA",    render:renderExtra },
};
const panel = $("#panel");
function closePanel() {
  panel.classList.remove("open");
  document.body.classList.remove("panel-open");
  document.querySelectorAll(".tb-btn").forEach(b=>b.classList.remove("active"));
  openWin = null;
}
function toggleWindow(name) {
  if (openWin === name) { closePanel(); playSfx("close"); return; }
  const w = WINDOWS[name];
  $("#panel-title").textContent = w.title;
  w.render();
  panel.classList.add("open");
  document.body.classList.add("panel-open");
  document.querySelectorAll(".tb-btn").forEach(b=>b.classList.toggle("active", b.dataset.win===name));
  openWin = name;
  playSfx("taskbar");
}
document.querySelectorAll(".tb-btn").forEach(b => b.addEventListener("click", ()=>toggleWindow(b.dataset.win)));
$("#panel-close").addEventListener("click", ()=>{ closePanel(); playSfx("close"); });

function boot() {
  game.classList.toggle("bg-on", data.settings.background);
  initMarket();
  refreshHud();
  renderAwards();
  checkAwards();
  requestAnimationFrame(now => { lastTick = now; gameLoop(now); });
  const startAudio = () => { playMusic(); window.removeEventListener("pointerdown", startAudio); };
  window.addEventListener("pointerdown", startAudio);
  setInterval(save, 5000);
  window.addEventListener("beforeunload", save);
}
boot();
