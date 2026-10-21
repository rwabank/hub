/* Avia — Scripted AI Bot for AviaHub (€HUB) */
(function () {
  'use strict';
  var state = { isOpen: false };
  function el(id) { return document.getElementById(id); }

  var CONTRACT = '6TnAKD8aZek8EgPo72K4svjs6eY8XpBApvKShRAGxChL';
  var POOL = '3Vt5GAsE6kSF5cxQPyqvLQJHdxJ1LfhhgFTKVdKfovMH';
  var PROOF = '5rzYSSWCgiY5dUf7JG1i1fBUkNWbYA51fuzWhMYx6t6A';
  var AUDT = '4EqVmfTc2ftfdcXCbR95UEsoMdab3WstSj5MEPVW2kqb';
  var CERT = 'BZ7ZJA3FgWshS9fqhhavfBXZ8165aC7h4FUhCrztcQjg';
  var SHIELD = 'SHIELDContractAddressHere';

  var KB = {
    'what': {
      title: 'What is AviaHub (€HUB)?',
      answer: [
        '**AviaHub (€HUB)** — the liquidity attractor token of the AviaTrust ecosystem on Solana.',
        '',
        '€HUB is the **universal quote asset** for all project tokens in the ecosystem.',
        '',
        '**How it works:**',
        '· Every project token gets a dedicated `TOKEN / €HUB` pool',
        '· AI agents find deeper liquidity through €HUB than through USDC',
        '· On-chain metadata flags €HUB pools as audited and verified',
        '· MCP server pays agents in €HUB for routing trades',
        '',
        '**Why AI agents want it:**',
        '· Depth — designed to be deeper than USDC pairs',
        '· Verification — audited metadata',
        '· Incentives — MCP bounties in €HUB',
        '',
        '📄 Contract: `' + CONTRACT + '`',
        '⛓ Chain: Solana (Token-2022, 1% transfer fee + Transfer Hook)'
      ].join('\n')
    },
    'audit': {
      title: 'How €HUB is verified',
      answer: [
        '**Three verification layers:**',
        '',
        '**Layer 1 — €PROOF certificate**',
        '· €HUB has a valid €PROOF from audit',
        '· Certificate ID: `' + PROOF + '`',
        '· Score 8/100 (Low risk)',
        '',
        '**Layer 2 — €AUDT payment**',
        '· Audit fee paid to treasury in €AUDT',
        '· Not burned — stays in circulation',
        '',
        '**Layer 3 — €CERT stake**',
        '· Traders stake €CERT for access',
        '· Anti-spam + skin in the game',
        '',
        '🔍 €AUDT: `' + AUDT + '`',
        '✅ €PROOF: `' + PROOF + '`',
        '💎 €CERT: `' + CERT + '`'
      ].join('\n')
    },
    'buy': {
      title: 'How to buy €HUB?',
      answer: [
        '**Buy AviaHub (€HUB) on Solana:**',
        '',
        '**1. OpenSea**',
        '→ https://opensea.io/token/solana/' + CONTRACT,
        '',
        '**2. GeckoTerminal**',
        '→ https://www.geckoterminal.com/solana/pools/' + POOL,
        '',
        '**3. Uniswap**',
        '→ https://app.uniswap.org/explore/tokens/solana/' + CONTRACT,
        '',
        '💡 Recommend OpenSea or GeckoTerminal for lowest slippage.'
      ].join('\n')
    },
    'contract': {
      title: 'Contract & Pool',
      answer: [
        '**AviaHub (€HUB) Contract**',
        '',
        '`' + CONTRACT + '`',
        '',
        '**Meteora Pool**',
        '`' + POOL + '`',
        '',
        '**Verify on:**',
        '· Solscan: https://solscan.io/token/' + CONTRACT,
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT
      ].join('\n')
    },
    'price': {
      title: 'Price & Target',
      answer: [
        '**AviaHub (€HUB) Price**',
        '',
        '· Launch price: **$0.01**',
        '· Current: **$0.009975** (Oct 2026)',
        '· Community target: **×100 → €1.00**',
        '',
        '**Live price:**',
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT,
        '',
        '⚠️ The ×100 is a community-stated target, not a promise.'
      ].join('\n')
    },
    'hub': {
      title: 'What is a liquidity hub?',
      answer: [
        '**A liquidity hub** is a single token that every other token in an ecosystem pairs against.',
        '',
        '**Why it works:**',
        '· Traditional model: each token has its own USDC pool',
        '· Hub model: each token has a `TOKEN / HUB` pool',
        '· Result: HUB becomes the center of gravity for liquidity',
        '',
        '**Why AI agents prefer it:**',
        '· One routing path through HUB is simpler than many',
        '· Hub metadata is verified once — agents trust it ecosystem-wide',
        '· Deeper pools mean lower slippage for agents',
        '',
        '**€HUB is paired with €SHIELD:**',
        '· €SHIELD = insurance for LP positions',
        '· LP with SHIELD coverage = lower IL = more agents want to LP'
      ].join('\n')
    },
    'ecosystem': {
      title: 'What is AviaTrust?',
      answer: [
        '**AviaTrust — aviation tokenization ecosystem on Solana.**',
        '',
        '**L1 — Aircraft Layer:**',
        '· €B787 · €A350 · €C929 · €A220 · €E195 · €IL96',
        '',
        '**L2 — Financial Layer:**',
        '· **€ESCR** — Escrow',
        '· **€DLCT** — Tokenized Documentary LC',
        '· **€SBLCT** — Standby LC',
        '· **€LUMP** — Lump Sum',
        '',
        '**L3 — Audit Layer:**',
        '· **€AUDT** — Audit working unit',
        '· **€PROOF** — Audit certificate',
        '· **€CERT** — Revenue share',
        '',
        '**L4 — Derivatives Layer:**',
        '· **€SWAP** — Interest Rate Swap',
        '· **€FWD** — Aircraft Forward',
        '· **€RIGHT** — Purchase Right',
        '· **€FLEET** — Fleet Futures',
        '',
        '**Infrastructure Layer (you are here):**',
        '· **€HUB** — Liquidity Attractor (you are here)',
        '· **€SHIELD** — Impermanent Loss Shield'
      ].join('\n')
    },
    'risk': {
      title: 'Is €HUB risky?',
      answer: [
        '**Honest answer: YES.**',
        '',
        '**Known risks:**',
        '· Liquidity risk — new token, low initial volume',
        '· Dependency risk — other pools depend on €HUB health',
        '· Market risk — price can drop',
        '',
        '**What reduces risk:**',
        '· €PROOF certificate (score 8/100, Low risk)',
        '· Mint/Freeze authority disabled',
        '· Liquidity locked 365 days',
        '· €SHIELD insurance for LP positions',
        '',
        '⚠️ **Not financial advice.** Only invest what you can afford to lose.'
      ].join('\n')
    }
  };

  var SUGGESTIONS = [
    { key: 'what',      label: '🔗 What is €HUB?' },
    { key: 'hub',       label: '🌐 What is a hub?' },
    { key: 'audit',     label: '🔒 How it is verified' },
    { key: 'buy',       label: '🛒 How to buy?' },
    { key: 'contract',  label: '📜 Contract & Pool' },
    { key: 'price',     label: '💰 Price & Target' },
    { key: 'ecosystem', label: '🌍 AviaTrust' },
    { key: 'risk',      label: '⚠️ Is it risky?' }
  ];

  function createUI() {
    var btn = document.createElement('button');
    btn.id = 'avia-btn';
    btn.className = 'avia-btn';
    btn.innerHTML = '<span class="avia-btn-icon">🔗</span><span class="avia-btn-label">Avia</span>';
    document.body.appendChild(btn);

    var win = document.createElement('div');
    win.id = 'avia-window';
    win.className = 'avia-window';
    win.innerHTML = [
      '<div class="avia-header">',
      '  <div class="avia-header-left">',
      '    <img src="hub_logo.png" alt="Avia" class="avia-avatar" onerror="this.style.display=\'none\'" />',
      '    <div>',
      '      <div class="avia-name">Avia</div>',
      '      <div class="avia-status">AI assistant · €HUB</div>',
      '    </div>',
      '  </div>',
      '  <button class="avia-close" id="avia-close">×</button>',
      '</div>',
      '<div class="avia-messages" id="avia-messages"></div>',
      '<div class="avia-suggestions" id="avia-suggestions"></div>',
      '<div class="avia-external">',
      '  <a href="https://opensea.io/token/solana/' + CONTRACT + '" target="_blank">🖼️ OpenSea</a>',
      '  <a href="https://t.me/aviatrust" target="_blank">📱 TG</a>',
      '  <a href="https://x.com/aviatrust" target="_blank">🐦 X</a>',
      '</div>',
      '<div class="avia-footer">Scripted assistant · Not financial advice</div>'
    ].join('');
    document.body.appendChild(win);

    el('avia-btn').addEventListener('click', toggle);
    el('avia-close').addEventListener('click', toggle);

    addMessage('agent', 'Hi! I am Avia — assistant for AviaHub (€HUB). Pick a topic below.');
    renderSuggestions();
  }

  function renderSuggestions() {
    var box = el('avia-suggestions');
    if (!box) return;
    box.innerHTML = '';
    SUGGESTIONS.forEach(function (item) {
      var b = document.createElement('button');
      b.className = 'avia-suggestion';
      b.textContent = item.label;
      b.addEventListener('click', function () { showAnswer(item.key); });
      box.appendChild(b);
    });
  }

  function addMessage(role, text) {
    var box = el('avia-messages');
    if (!box) return;
    var msg = document.createElement('div');
    msg.className = 'avia-msg avia-msg-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'avia-bubble';
    bubble.innerHTML = formatText(text);
    msg.appendChild(bubble);
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function formatText(text) {
    var safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
    safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    safe = safe.replace(/\n/g, '<br />');
    safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return safe;
  }

  function showAnswer(key) {
    var item = KB[key];
    if (!item) { addMessage('agent', 'Sorry, no info on that.'); return; }
    addMessage('user', item.title);
    setTimeout(function () { addMessage('agent', item.answer); }, 250);
  }

  function toggle() {
    state.isOpen = !state.isOpen;
    var win = el('avia-window');
    var btn = el('avia-btn');
    if (state.isOpen) { win.classList.add('avia-open'); btn.classList.add('avia-btn-hidden'); }
    else { win.classList.remove('avia-open'); btn.classList.remove('avia-btn-hidden'); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
