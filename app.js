/**
 * RecoverIQ — AI Revenue Recovery Platform
 * Fintech Dashboard Application Logic & Synthetic Simulation Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. SYNTHETIC DATA STORE
  // =========================================================================
  
  const SYNTHETIC_PAYMENTS = {
    '#pay_48291': {
      id: '#pay_48291',
      amount: '₹24,500',
      rawAmount: 24500,
      customer: 'Siddharth M. (cust_82910)',
      method: 'HDFC Bank UPI AutoPay (e-Mandate)',
      errorCode: 'ERR_INSUFFICIENT_FUNDS (Bank Code: 104)',
      issuer: 'HDFC Bank Ltd (Retail UPI Node)',
      gatewayRef: 'txn_live_94827104928',
      failureReason: 'Insufficient funds',
      action: 'Retry',
      outcome: 'Recovered',
      confidence: 94,
      diagnosis: 'Successfully Recovered on Retry 1',
      diagSub: 'AI identified 1st-of-month payroll deposit window. Instant settlement confirmed by NPCI UPI switch.',
      rationale: 'Error code 104 indicates transient liquidity deficit. Merchant payroll heuristic indicated 94% likelihood of account replenishment within 24 hours. Automated retry was executed at optimal 08:30 AM IST window.',
      timeline: [
        { time: '02 Sep 2026, 04:12 AM', type: 'error', title: 'Initial Mandate Execution Failed', desc: 'HDFC Bank returned code 104: Insufficient funds in consumer account.' },
        { time: '02 Sep 2026, 04:13 AM', type: 'ai', title: 'AI Recovery Engine Scored Transaction', desc: 'Confidence score 94%. Recommended action: Queue smart retry for 08:30 AM IST.' },
        { time: '02 Sep 2026, 08:30 AM', type: 'ai', title: 'Smart Retry Window Triggered', desc: 'Dispatched automated authorization attempt via primary Razorpay rail.' },
        { time: '02 Sep 2026, 08:30 AM', type: 'success', title: 'Payment Captured & Verified', desc: 'Received webhook: SUCCESS_AUTH_CAPTURED. ₹24,500 credited to merchant balance.' }
      ]
    },
    '#pay_39182': {
      id: '#pay_39182',
      amount: '₹8,200',
      rawAmount: 8200,
      customer: 'Ananya R. (cust_39401)',
      method: 'ICICI NetBanking Direct Gateway',
      errorCode: 'GATEWAY_TIMEOUT (Bank Code: 504)',
      issuer: 'ICICI Bank Core Infrastructure',
      gatewayRef: 'txn_live_38192048194',
      failureReason: 'Timeout',
      action: 'Retry',
      outcome: 'Recovered',
      confidence: 88,
      diagnosis: 'Successfully Recovered via Failover Switch',
      diagSub: 'Mid-flight gateway latency resolved after automated 18-minute backoff interval.',
      rationale: 'Telemetry detected ICICI netbanking gateway degraded service window for 14 minutes. AI delayed execution until bank health heartbeat returned to nominal <120ms latency.',
      timeline: [
        { time: '02 Sep 2026, 11:45 AM', type: 'error', title: 'Gateway Connection Timed Out', desc: 'HTTP 504 received from core banking server during handshake.' },
        { time: '02 Sep 2026, 11:46 AM', type: 'ai', title: 'AI Downtime Sentinel Activated', desc: 'Detected systemic bank latency spike. Placed payment in adaptive hold buffer.' },
        { time: '02 Sep 2026, 12:04 PM', type: 'ai', title: 'Bank Health Restored — Re-initiating', desc: 'Synthetic health check passed. Autonomous retry executed.' },
        { time: '02 Sep 2026, 12:05 PM', type: 'success', title: 'Payment Captured', desc: 'Transaction authorized by ICICI. Webhook confirmed settlement.' }
      ]
    },
    '#pay_71293': {
      id: '#pay_71293',
      amount: '₹52,000',
      rawAmount: 52000,
      customer: 'Vikram S. (cust_71029)',
      method: 'Axis Bank Corporate Visa Commercial',
      errorCode: 'EXCEEDED_MANDATE_LIMIT (Bank Code: 119)',
      issuer: 'Axis Bank Commercial Cards Division',
      gatewayRef: 'txn_live_71293049102',
      failureReason: 'Repeated failure',
      action: 'Escalate',
      outcome: 'Review',
      confidence: 42,
      diagnosis: 'Escalated to Merchant Finance Team',
      diagSub: 'High-value transaction exceeds automated safety threshold (₹50,000 policy rule).',
      rationale: 'Amount exceeds merchant autonomous recovery ceiling. Repeated attempt with same instrument risks card blocking. AI flagged transaction for white-glove merchant account manager outreach.',
      timeline: [
        { time: '01 Sep 2026, 02:15 PM', type: 'error', title: 'First Mandate Failed', desc: 'Declined due to corporate daily card ceiling limit.' },
        { time: '01 Sep 2026, 06:30 PM', type: 'error', title: 'Second Attempt Declined', desc: 'Cardholder limit not updated by enterprise issuer.' },
        { time: '02 Sep 2026, 09:00 AM', type: 'ai', title: 'AI Escalation Triggered', desc: 'Transaction value ₹52,000 > ₹50,000 rule threshold. Automatic retries halted to protect merchant trust score.' },
        { time: '02 Sep 2026, 09:05 AM', type: 'pending', title: 'Escalation Notice Dispatched', desc: 'Assigned to Enterprise Accounts desk for manual verification.' }
      ]
    },
    '#pay_63821': {
      id: '#pay_63821',
      amount: '₹14,600',
      rawAmount: 14600,
      customer: 'Neha P. (cust_63821)',
      method: 'SBI Global RuPay Debit Card',
      errorCode: 'CARD_DECLINED_SOFT (Bank Code: 102)',
      issuer: 'State Bank of India Retail Rails',
      gatewayRef: 'txn_live_63821049281',
      failureReason: 'Payment declined',
      action: 'Reminder',
      outcome: 'Recovered',
      confidence: 76,
      diagnosis: 'Recovered via 1-Click Alternate Payment Link',
      diagSub: 'Customer fulfilled payment via instant UPI link dispatched after card soft decline.',
      rationale: 'RuPay 3DS verification failed on primary debit card. AI dispatched contextual payment link with alternate pre-selected UPI payment option.',
      timeline: [
        { time: '01 Sep 2026, 07:10 PM', type: 'error', title: '3DS OTP Abandoned', desc: 'Customer did not enter SMS OTP within 180 seconds.' },
        { time: '01 Sep 2026, 07:12 PM', type: 'ai', title: 'Dynamic Link Generated', desc: 'AI created zero-friction payment link valid for 24 hours.' },
        { time: '01 Sep 2026, 07:14 PM', type: 'ai', title: 'Payment Reminder Delivered', desc: 'Secure payment notice sent via merchant-branded SMS.' },
        { time: '01 Sep 2026, 07:38 PM', type: 'success', title: 'Payment Fulfilled via UPI', desc: 'Customer tapped link and completed transaction via PhonePe UPI. ₹14,600 recovered.' }
      ]
    },
    '#pay_92173': {
      id: '#pay_92173',
      amount: '₹31,200',
      rawAmount: 31200,
      customer: 'Rajesh K. (cust_92173)',
      method: 'Kotak Mahindra Virtual Card',
      errorCode: 'HARD_DECLINE_STOLEN (Bank Code: 107)',
      issuer: 'Kotak Mahindra Bank Card Services',
      gatewayRef: 'txn_live_92173059123',
      failureReason: 'Unknown',
      action: 'STOP',
      outcome: 'Stopped',
      confidence: 8,
      diagnosis: 'Halted by AI Safety Protocol (Code 107)',
      diagSub: 'Permanent hard stop to protect merchant chargeback ratio and compliance standards.',
      rationale: 'Bank returned code 107 indicating card closed or reported compromised. Immediate auto-stop enforced to eliminate gateway decline fees and chargeback penalties.',
      timeline: [
        { time: '31 Aug 2026, 11:20 PM', type: 'error', title: 'Issuer Hard Decline', desc: 'Bank returned Code 107: Card reported lost or compromised.' },
        { time: '31 Aug 2026, 11:20 PM', type: 'ai', title: 'AI Fraud Shield Triggered', desc: 'Confidence score 8%. Policy "Zero-Tolerance Hard Stop" invoked.' },
        { time: '31 Aug 2026, 11:21 PM', type: 'error', title: 'Sequence Permanently Terminated', desc: 'No further retry or reminder will be attempted.' }
      ]
    }
  };

  // Generate additional synthetic transactions for the queue
  const ADDITIONAL_QUEUE_ITEMS = [
    { id: '#pay_10294', created: '10m ago', amount: '₹18,400', rawAmount: 18400, err: 'ERR_INSUFFICIENT_FUNDS (104)', conf: 92, action: 'Smart Retry', status: 'ready' },
    { id: '#pay_58291', created: '25m ago', amount: '₹34,000', rawAmount: 34000, err: 'TIMEOUT_ISSUER_SYNC (504)', conf: 89, action: 'Backoff Retry', status: 'ready' },
    { id: '#pay_84920', created: '40m ago', amount: '₹12,500', rawAmount: 12500, err: 'MANDATE_CYCLE_UNSET', conf: 85, action: 'Smart Retry', status: 'ready' },
    { id: '#pay_47192', created: '1h ago', amount: '₹45,200', rawAmount: 45200, err: 'OTP_EXPIRED_ABANDON', conf: 78, action: 'Payment Link', status: 'progress' },
    { id: '#pay_62019', created: '2h ago', amount: '₹28,900', rawAmount: 28900, err: 'NETWORK_DROPPED_ACK', conf: 83, action: 'Route Switching', status: 'progress' },
    { id: '#pay_93018', created: '3h ago', amount: '₹62,000', rawAmount: 62000, err: 'ENTERPRISE_LIMIT_EXCEEDED', conf: 38, action: 'Merchant Escalation', status: 'escalated' },
    { id: '#pay_29401', created: '4h ago', amount: '₹19,800', rawAmount: 19800, err: 'STOLEN_CARD_HARD_STOP', conf: 5, action: 'Auto-Stop Enforced', status: 'stopped' },
    { id: '#pay_73921', created: '5h ago', amount: '₹22,100', rawAmount: 22100, err: 'ERR_INSUFFICIENT_FUNDS (104)', conf: 95, action: 'Smart Retry', status: 'recovered' },
    { id: '#pay_81029', created: '6h ago', amount: '₹15,000', rawAmount: 15000, err: 'GATEWAY_TIMEOUT', conf: 91, action: 'Smart Retry', status: 'recovered' },
    { id: '#pay_38491', created: '7h ago', amount: '₹9,400', rawAmount: 9400, err: '3DS_VERIFICATION_FAIL', conf: 80, action: 'Alternate Rail', status: 'recovered' }
  ];

  // Merge items into lookup dictionary
  ADDITIONAL_QUEUE_ITEMS.forEach(item => {
    if (!SYNTHETIC_PAYMENTS[item.id]) {
      SYNTHETIC_PAYMENTS[item.id] = {
        id: item.id,
        amount: item.amount,
        rawAmount: item.rawAmount,
        customer: `Synthetic Customer (${item.id.replace('#', '')})`,
        method: 'Razorpay Enterprise Route (UPI / Card)',
        errorCode: item.err,
        issuer: 'Indian Banking Infrastructure Node',
        gatewayRef: `txn_live_${Math.floor(10000000000 + Math.random() * 90000000000)}`,
        failureReason: item.err.split(' ')[0].replace('ERR_', ''),
        action: item.action,
        outcome: item.status === 'ready' ? 'Ready' : (item.status === 'progress' ? 'In Progress' : (item.status === 'recovered' ? 'Recovered' : (item.status === 'escalated' ? 'Review' : 'Stopped'))),
        confidence: item.conf,
        diagnosis: `Status: ${item.status.toUpperCase()}`,
        diagSub: `AI evaluated failure pattern. Confidence level computed at ${item.conf}%.`,
        rationale: `Synthetic diagnostic evaluation for ${item.id}. Algorithmic model assigned strategy: ${item.action}.`,
        timeline: [
          { time: 'Today', type: 'error', title: 'Payment Attempt Declined', desc: item.err },
          { time: 'Today', type: 'ai', title: 'AI Strategy Evaluation', desc: `Recommended recovery action: ${item.action}` }
        ]
      };
    }
  });

  // 30 Days of synthetic daily trend data for chart
  const CHART_DATA_30D = [
    { day: '04 Aug', risk: 48000, recovered: 24000 },
    { day: '06 Aug', risk: 45000, recovered: 26000 },
    { day: '08 Aug', risk: 52000, recovered: 29000 },
    { day: '10 Aug', risk: 44000, recovered: 27000 },
    { day: '12 Aug', risk: 41000, recovered: 28000 },
    { day: '14 Aug', risk: 49000, recovered: 32000 },
    { day: '16 Aug', risk: 43000, recovered: 30000 },
    { day: '18 Aug', risk: 39000, recovered: 28000 },
    { day: '20 Aug', risk: 46000, recovered: 33000 },
    { day: '22 Aug', risk: 42000, recovered: 31000 },
    { day: '24 Aug', risk: 38000, recovered: 29000 },
    { day: '26 Aug', risk: 45000, recovered: 34000 },
    { day: '28 Aug', risk: 37000, recovered: 30000 },
    { day: '30 Aug', risk: 41000, recovered: 33000 },
    { day: '01 Sep', risk: 54000, recovered: 39000 }, // Salary cycle surge
    { day: '03 Sep', risk: 39000, recovered: 35000 }
  ];

  // Immutable Audit Trail Data
  const AUDIT_LOG_ITEMS = [
    { time: '03 Sep 2026, 08:30:14 IST', title: 'Autonomous Recovery Settlement Confirmed', detail: 'Smart retry on #pay_48291 verified by NPCI UPI Gateway. ₹24,500 credited.', hash: '8f92a...c018' },
    { time: '03 Sep 2026, 08:29:58 IST', title: 'AI Optimal Window Trigger Dispatched', detail: 'Predicted salary clearance window executed for cohort HDFC_UPI_104.', hash: '3e104...9182' },
    { time: '03 Sep 2026, 07:15:22 IST', title: 'Mid-Flight Routing Failover Engaged', detail: 'Automated fallback from Primary RZP to Cashfree rail due to bank latency threshold.', hash: '9b772...e412' },
    { time: '02 Sep 2026, 21:04:10 IST', title: 'Hard Stop Protocol Enforced', detail: 'Payment #pay_92173 halted due to Code 107 report. No merchant fees incurred.', hash: '77a19...d091' },
    { time: '02 Sep 2026, 18:45:00 IST', title: 'Policy Engine Updated', detail: 'Merchant administrator adjusted High-Value Escalation Threshold to ₹50,000.', hash: '2a491...f881' }
  ];

  // =========================================================================
  // 2. SVG CHART RENDERER
  // =========================================================================

  function renderPerformanceChart(data) {
    const pathsContainer = document.getElementById('chartPathsContainer');
    const dateAxis = document.getElementById('chartDateAxis');
    if (!pathsContainer || !dateAxis) return;

    // ViewBox dimensions: 720 x 280
    // Usable chart space: x: 50 to 700, y: 30 to 250 (height: 220, width: 650)
    const startX = 50;
    const endX = 700;
    const chartWidth = endX - startX;
    const topY = 30;
    const bottomY = 250;
    const chartHeight = bottomY - topY;
    const maxVal = 60000; // max scale 60K

    const count = data.length;
    const stepX = chartWidth / (count - 1);

    const pointsRisk = [];
    const pointsRecovered = [];

    data.forEach((d, idx) => {
      const x = startX + idx * stepX;
      const yRisk = bottomY - (d.risk / maxVal) * chartHeight;
      const yRecovered = bottomY - (d.recovered / maxVal) * chartHeight;
      pointsRisk.push({ x, y: yRisk, data: d });
      pointsRecovered.push({ x, y: yRecovered, data: d });
    });

    // Helper to generate smooth SVG path
    function createSmoothPath(points) {
      if (points.length === 0) return '';
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = i > 0 ? points[i - 1] : points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i != points.length - 2 ? points[i + 2] : p2;

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      return d;
    }

    const riskLine = createSmoothPath(pointsRisk);
    const recoveredLine = createSmoothPath(pointsRecovered);

    const riskArea = `${riskLine} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;
    const recoveredArea = `${recoveredLine} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;

    pathsContainer.innerHTML = `
      <!-- Revenue at Risk Area & Stroke -->
      <path d="${riskArea}" fill="url(#riskGradient)" class="chart-area-risk" />
      <path d="${riskLine}" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" />

      <!-- Revenue Recovered Area & Stroke -->
      <path d="${recoveredArea}" fill="url(#recoveredGradient)" class="chart-area-recovered" />
      <path d="${recoveredLine}" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" filter="url(#emeraldGlow)" />
    `;

    // Render Date Axis Ticks (every other tick or spaced out)
    let axisHtml = '';
    data.forEach((d, idx) => {
      if (idx % 3 === 0 || idx === data.length - 1) {
        const x = startX + idx * stepX;
        axisHtml += `<text x="${x}" y="270" class="chart-date-label">${d.day}</text>`;
      }
    });
    dateAxis.innerHTML = axisHtml;

    // Attach interactive hover crosshair listener
    setupChartHover(pointsRisk, pointsRecovered);
  }

  function setupChartHover(pointsRisk, pointsRecovered) {
    const svg = document.getElementById('performanceChartSvg');
    const viewport = document.getElementById('chartViewport');
    const tooltip = document.getElementById('chartTooltip');
    const crosshair = document.getElementById('chartCrosshair');
    const hoverPointRisk = document.getElementById('hoverPointRisk');
    const hoverPointRecovered = document.getElementById('hoverPointRecovered');
    const tooltipDate = document.getElementById('tooltipDate');
    const tooltipRisk = document.getElementById('tooltipRisk');
    const tooltipRecovered = document.getElementById('tooltipRecovered');

    if (!svg || !viewport || !tooltip) return;

    viewport.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const svgX = (clientX / rect.width) * 720;

      // Find closest data point
      let closestIdx = 0;
      let minDiff = Infinity;
      pointsRisk.forEach((p, idx) => {
        const diff = Math.abs(p.x - svgX);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      const pRisk = pointsRisk[closestIdx];
      const pRecovered = pointsRecovered[closestIdx];

      // Update crosshair & points
      crosshair.setAttribute('x1', pRisk.x);
      crosshair.setAttribute('x2', pRisk.x);
      crosshair.style.display = 'block';

      hoverPointRisk.setAttribute('cx', pRisk.x);
      hoverPointRisk.setAttribute('cy', pRisk.y);
      hoverPointRisk.style.display = 'block';

      hoverPointRecovered.setAttribute('cx', pRecovered.x);
      hoverPointRecovered.setAttribute('cy', pRecovered.y);
      hoverPointRecovered.style.display = 'block';

      // Update Tooltip Content
      tooltipDate.textContent = pRisk.data.day + ' 2026';
      tooltipRisk.textContent = '₹' + pRisk.data.risk.toLocaleString('en-IN');
      tooltipRecovered.textContent = '₹' + pRecovered.data.recovered.toLocaleString('en-IN');

      // Position Tooltip
      const screenX = (pRisk.x / 720) * rect.width;
      const screenY = (pRecovered.y / 280) * rect.height;

      tooltip.style.left = `${screenX}px`;
      tooltip.style.top = `${screenY}px`;
      tooltip.style.display = 'flex';
    });

    viewport.addEventListener('mouseleave', () => {
      crosshair.style.display = 'none';
      hoverPointRisk.style.display = 'none';
      hoverPointRecovered.style.display = 'none';
      tooltip.style.display = 'none';
    });
  }

  // =========================================================================
  // 3. NAVIGATION & VIEW SWITCHER
  // =========================================================================

  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  const viewPanels = document.querySelectorAll('.view-panel');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');

  const VIEW_TITLES = {
    overview: { title: 'Overview', sub: 'Monitor revenue at risk and recovery performance' },
    queue: { title: 'Recovery Queue', sub: 'Pending at-risk transactions, scheduled AI retry cadences, and manual overrides' },
    analytics: { title: 'Analytics', sub: 'Failure taxonomy, issuer latency telemetry, and channel efficacy' },
    policies: { title: 'Policies', sub: 'Configure automated intelligence thresholds, retry limits, and safety rails' },
    audit: { title: 'Audit Trail', sub: 'Cryptographically verified log of all automated AI recovery events' },
    settings: { title: 'Settings', sub: 'Connected payment infrastructure, webhooks, and merchant credentials' },
    profile: { title: 'Profile', sub: 'Manage your account, business information, and preferences.' }
  };

  function switchView(viewKey) {
    // Update active nav link
    navLinks.forEach(link => {
      if (link.dataset.view === viewKey) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Highlight sidebar merchant profile area when in profile view
    const sidebarMerchantProfile = document.getElementById('sidebarMerchantProfile');
    if (sidebarMerchantProfile) {
      if (viewKey === 'profile') {
        sidebarMerchantProfile.classList.add('active');
      } else {
        sidebarMerchantProfile.classList.remove('active');
      }
    }

    // Update active view panel
    viewPanels.forEach(panel => {
      if (panel.id === `view-${viewKey}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update Header
    if (VIEW_TITLES[viewKey]) {
      pageTitle.textContent = VIEW_TITLES[viewKey].title;
      pageSubtitle.textContent = VIEW_TITLES[viewKey].sub;
    }

    // Close mobile nav if open
    closeMobileSidebar();

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If switching to queue or audit, render dynamic elements
    if (viewKey === 'queue') {
      renderFullQueueTable('all');
    } else if (viewKey === 'audit') {
      renderAuditTimeline();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewKey = link.dataset.view;
      if (viewKey) switchView(viewKey);
    });
  });

  // Single dedicated merchant profile entrypoint (sidebar bottom card)
  const sidebarMerchantProfile = document.getElementById('sidebarMerchantProfile');
  if (sidebarMerchantProfile) {
    sidebarMerchantProfile.addEventListener('click', () => switchView('profile'));
  }

  // Any other merchant avatar or name clicked across the app
  document.querySelectorAll('.clickable-profile').forEach(el => {
    el.addEventListener('click', () => switchView('profile'));
  });

  // Action button inside AI Recovery Insight card: "View Recovery Queue →"
  const btnViewQueueFromInsight = document.getElementById('btnViewQueueFromInsight');
  if (btnViewQueueFromInsight) {
    btnViewQueueFromInsight.addEventListener('click', () => {
      switchView('queue');
    });
  }

  // =========================================================================
  // 4. MOBILE SIDEBAR TOGGLE
  // =========================================================================

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const appSidebar = document.getElementById('appSidebar');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  function openMobileSidebar() {
    if (appSidebar) appSidebar.classList.add('mobile-open');
    if (mobileBackdrop) mobileBackdrop.classList.add('show');
  }

  function closeMobileSidebar() {
    if (appSidebar) appSidebar.classList.remove('mobile-open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('show');
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileSidebar);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileSidebar);
  }

  // =========================================================================
  // 5. DATE SELECTOR DROPDOWN
  // =========================================================================

  const dateSelectorBtn = document.getElementById('dateSelectorBtn');
  const dateDropdownMenu = document.getElementById('dateDropdownMenu');
  const selectedDateRange = document.getElementById('selectedDateRange');
  const dateOptions = document.querySelectorAll('.date-option');

  if (dateSelectorBtn && dateDropdownMenu) {
    dateSelectorBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dateDropdownMenu.classList.contains('show');
      dateDropdownMenu.classList.toggle('show', !isOpen);
      dateSelectorBtn.setAttribute('aria-expanded', !isOpen);
    });

    dateOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        dateOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        selectedDateRange.textContent = opt.textContent;
        dateDropdownMenu.classList.remove('show');
        dateSelectorBtn.setAttribute('aria-expanded', 'false');
        showToast(`Date range adjusted to: ${opt.textContent}`);
      });
    });

    document.addEventListener('click', () => {
      dateDropdownMenu.classList.remove('show');
      dateSelectorBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // =========================================================================
  // 6. AI DECISION & TRANSACTION DETAIL MODAL
  // =========================================================================

  const decisionModalOverlay = document.getElementById('decisionModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');

  function openPaymentDetailModal(paymentId) {
    const data = SYNTHETIC_PAYMENTS[paymentId] || SYNTHETIC_PAYMENTS['#pay_48291'];
    if (!data) return;

    // Populate modal fields
    document.getElementById('modalPaymentId').textContent = data.id;
    document.getElementById('modalAmount').textContent = data.amount;
    document.getElementById('modalCustomer').textContent = data.customer;
    document.getElementById('modalMethod').textContent = data.method;
    document.getElementById('modalErrorCode').textContent = data.errorCode;
    document.getElementById('modalIssuer').textContent = data.issuer;
    document.getElementById('modalGatewayRef').textContent = data.gatewayRef;

    // Diagnostic banner
    document.getElementById('modalDiagStatus').textContent = data.diagnosis;
    document.getElementById('modalDiagSub').textContent = data.diagSub;

    // Confidence & Rationale
    document.getElementById('modalConfidence').textContent = `${data.confidence}%`;
    document.getElementById('modalConfidenceBar').style.width = `${data.confidence}%`;
    document.getElementById('modalRationale').textContent = data.rationale;

    // Render Timeline
    const timelineContainer = document.getElementById('modalTimeline');
    if (timelineContainer && data.timeline) {
      timelineContainer.innerHTML = data.timeline.map(item => {
        let bulletClass = 'bullet-ai';
        if (item.type === 'error') bulletClass = 'bullet-error';
        if (item.type === 'success') bulletClass = 'bullet-success';
        if (item.type === 'pending') bulletClass = 'bullet-pending';

        return `
          <div class="timeline-step">
            <div class="step-bullet ${bulletClass}"></div>
            <div class="step-details">
              <div class="step-top">
                <span>${item.title}</span>
                <span class="step-time">${item.time}</span>
              </div>
              <div class="step-desc">${item.desc}</div>
            </div>
          </div>
        `;
      }).join('');
    }

    decisionModalOverlay.classList.add('show');
    decisionModalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeDecisionModal() {
    decisionModalOverlay.classList.remove('show');
    decisionModalOverlay.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDecisionModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeDecisionModal);

  decisionModalOverlay.addEventListener('click', (e) => {
    if (e.target === decisionModalOverlay) {
      closeDecisionModal();
    }
  });

  // Attach click listeners to all table rows and payment ID buttons
  function attachPaymentClickListeners() {
    document.querySelectorAll('.table-row-clickable').forEach(row => {
      row.addEventListener('click', () => {
        const payId = row.dataset.paymentId;
        if (payId) openPaymentDetailModal(payId);
      });
    });

    document.querySelectorAll('.payment-id-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const payId = btn.dataset.id;
        if (payId) openPaymentDetailModal(payId);
      });
    });
  }

  attachPaymentClickListeners();

  // =========================================================================
  // 7. RUN AI RECOVERY SIMULATION ENGINE
  // =========================================================================

  const runAiRecoveryBtn = document.getElementById('runAiRecoveryBtn');
  const recoveryRunModalOverlay = document.getElementById('recoveryRunModalOverlay');
  const runStateAnalyzing = document.getElementById('runStateAnalyzing');
  const runStateComplete = document.getElementById('runStateComplete');
  const runProgressBar = document.getElementById('runProgressBar');
  const runStepsLog = document.getElementById('runStepsLog');
  const btnFinishRun = document.getElementById('btnFinishRun');

  let hasRunRecovery = false;

  if (runAiRecoveryBtn) {
    runAiRecoveryBtn.addEventListener('click', () => {
      openAiRecoverySimulation();
    });
  }

  function openAiRecoverySimulation() {
    // Reset modal state
    runStateAnalyzing.style.display = 'block';
    runStateComplete.style.display = 'none';
    runProgressBar.style.width = '0%';
    runStepsLog.innerHTML = `<div class="log-line active">&bull; Ingesting bank decline codes from Razorpay &amp; UPI hub...</div>`;
    
    recoveryRunModalOverlay.classList.add('show');
    recoveryRunModalOverlay.setAttribute('aria-hidden', 'false');

    // Simulate multi-phase AI scanning
    const steps = [
      { pct: 25, text: 'Scanning 24 at-risk payments against liquidity heuristics...' },
      { pct: 50, text: 'Evaluating bank issuer uptime: HDFC (99.8%), ICICI (98.4%)...' },
      { pct: 75, text: 'Identified 6 high-confidence payments ready for immediate capture...' },
      { pct: 90, text: 'Executing smart retry burst via primary gateway rail...' },
      { pct: 100, text: 'Webhook verified: 6 captures authorized (+₹1,42,000).' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const item = steps[currentStep];
        runProgressBar.style.width = `${item.pct}%`;
        
        const logLine = document.createElement('div');
        logLine.className = 'log-line active';
        logLine.innerHTML = `&bull; ${item.text}`;
        
        // Unmark previous line
        const prevLines = runStepsLog.querySelectorAll('.log-line');
        if (prevLines.length > 0) prevLines[prevLines.length - 1].classList.remove('active');
        
        runStepsLog.appendChild(logLine);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          runStateAnalyzing.style.display = 'none';
          runStateComplete.style.display = 'block';
        }, 500);
      }
    }, 450);
  }

  if (btnFinishRun) {
    btnFinishRun.addEventListener('click', () => {
      recoveryRunModalOverlay.classList.remove('show');
      recoveryRunModalOverlay.setAttribute('aria-hidden', 'true');
      
      applyRecoveryResultsToDashboard();
    });
  }

  function applyRecoveryResultsToDashboard() {
    if (hasRunRecovery) {
      showToast('AI Recovery Engine already optimized for current billing cycle.');
      return;
    }
    hasRunRecovery = true;

    // Update KPI numbers with visual pulse flash
    const elRisk = document.getElementById('valRevenueAtRisk');
    const elRecovered = document.getElementById('valRevenueRecovered');
    const elRate = document.getElementById('valRecoveryRate');
    const elRoi = document.getElementById('valRecoveryRoi');

    if (elRisk) {
      elRisk.textContent = '₹11.4L';
      elRisk.classList.add('metric-updated');
    }
    if (elRecovered) {
      elRecovered.textContent = '₹9.8L';
      elRecovered.classList.add('metric-updated');
    }
    if (elRate) {
      elRate.textContent = '72.4%';
      elRate.classList.add('metric-updated');
    }
    if (elRoi) {
      elRoi.textContent = '3.2×';
      elRoi.classList.add('metric-updated');
    }

    // Update Recovery Status counts
    const elCntReady = document.getElementById('cntReady');
    const elCntRecovered = document.getElementById('cntRecovered');
    const queueBadge = document.getElementById('queueBadge');

    if (elCntReady) elCntReady.textContent = '18';
    if (elCntRecovered) elCntRecovered.textContent = '48';
    if (queueBadge) queueBadge.textContent = '18';

    // Update status distribution bar
    const barReady = document.getElementById('barSegReady');
    const barRecovered = document.getElementById('barSegRecovered');
    if (barReady) barReady.style.width = '20.0%';
    if (barRecovered) barRecovered.style.width = '53.3%';

    // Prepend newly recovered transaction to recent activity table
    const tbody = document.getElementById('recentActivityTbody');
    if (tbody) {
      const newTr = document.createElement('tr');
      newTr.className = 'table-row-clickable metric-updated';
      newTr.dataset.paymentId = '#pay_10294';
      newTr.innerHTML = `
        <td class="cell-payment">
          <button class="payment-id-btn" data-id="#pay_10294">
            <span class="id-symbol">#</span>pay_10294
          </button>
        </td>
        <td class="cell-amount text-right tabular-nums">&#8377;18,400</td>
        <td class="cell-failure">
          <span class="failure-reason">Insufficient funds</span>
        </td>
        <td class="cell-action">
          <span class="action-tag">Smart Retry</span>
        </td>
        <td class="cell-outcome">
          <span class="badge-status badge-recovered">
            <span class="badge-dot"></span>
            Recovered Just Now
          </span>
        </td>
        <td class="cell-inspect text-right">
          <span class="view-decision-link">View &rarr;</span>
        </td>
      `;
      tbody.insertBefore(newTr, tbody.firstChild);
      attachPaymentClickListeners();
    }

    showToast('✓ AI Recovery Engine complete: +₹1,42,000 recovered across 6 transactions');
  }

  // =========================================================================
  // 8. RECOVERY QUEUE TABLE RENDERING & FILTERING
  // =========================================================================

  function renderFullQueueTable(filter = 'all', searchQuery = '') {
    const tbody = document.getElementById('queueTableBody');
    if (!tbody) return;

    let items = Object.values(SYNTHETIC_PAYMENTS);

    // Apply status filter
    if (filter !== 'all') {
      items = items.filter(item => {
        const out = item.outcome.toLowerCase();
        if (filter === 'ready') return out === 'ready';
        if (filter === 'progress') return out === 'in progress';
        if (filter === 'recovered') return out === 'recovered';
        if (filter === 'escalated') return out === 'review';
        if (filter === 'stopped') return out === 'stopped';
        return true;
      });
    }

    // Apply search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.id.toLowerCase().includes(q) || 
        item.amount.toLowerCase().includes(q) ||
        item.failureReason.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 32px; color: #64748B;">No transactions match the selected filter criteria.</td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      let badgeClass = 'badge-recovered';
      if (item.outcome === 'Review') badgeClass = 'badge-review';
      if (item.outcome === 'Stopped') badgeClass = 'badge-stopped';
      if (item.outcome === 'Ready') badgeClass = 'badge-progress';
      if (item.outcome === 'In Progress') badgeClass = 'badge-progress';

      return `
        <tr class="table-row-clickable" data-payment-id="${item.id}">
          <td class="cell-payment">
            <button class="payment-id-btn" data-id="${item.id}">
              <span class="id-symbol">#</span>${item.id.replace('#', '')}
            </button>
          </td>
          <td style="color: #64748B; font-size: 0.78rem;">Today</td>
          <td class="cell-amount text-right tabular-nums">${item.amount}</td>
          <td><span class="failure-reason">${item.errorCode.split(' ')[0]}</span></td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="tabular-nums" style="font-weight: 600; color: #34D399; font-size: 0.8rem;">${item.confidence}%</span>
              <div style="width: 50px; height: 4px; background: #1C263B; border-radius: 2px; overflow: hidden;">
                <div style="width: ${item.confidence}%; height: 100%; background: #10B981;"></div>
              </div>
            </div>
          </td>
          <td><span class="action-tag">${item.action}</span></td>
          <td>
            <span class="badge-status ${badgeClass}">
              <span class="badge-dot"></span>
              ${item.outcome}
            </span>
          </td>
          <td class="text-right">
            <button class="btn-secondary-action btn-sm" onclick="event.stopPropagation(); window.openModalFor('${item.id}')">
              Details &rarr;
            </button>
          </td>
        </tr>
      `;
    }).join('');

    attachPaymentClickListeners();
  }

  // Global helper for row button
  window.openModalFor = (payId) => {
    openPaymentDetailModal(payId);
  };

  // Queue filter tabs
  const queueTabs = document.querySelectorAll('.queue-tab');
  queueTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      queueTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.queueFilter || 'all';
      const searchInput = document.getElementById('queueSearchInput');
      renderFullQueueTable(filter, searchInput ? searchInput.value : '');
    });
  });

  // Queue search input
  const queueSearchInput = document.getElementById('queueSearchInput');
  if (queueSearchInput) {
    queueSearchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.queue-tab.active');
      const filter = activeTab ? activeTab.dataset.queueFilter : 'all';
      renderFullQueueTable(filter, e.target.value);
    });
  }

  // Batch process button
  const btnBatchRetry = document.getElementById('btnBatchRetry');
  if (btnBatchRetry) {
    btnBatchRetry.addEventListener('click', () => {
      openAiRecoverySimulation();
    });
  }

  // =========================================================================
  // 9. AUDIT TIMELINE RENDERING
  // =========================================================================

  function renderAuditTimeline() {
    const container = document.getElementById('auditTimeline');
    if (!container) return;

    container.innerHTML = AUDIT_LOG_ITEMS.map(item => `
      <div class="audit-item">
        <div class="audit-icon-col">
          <div class="audit-node-dot"></div>
        </div>
        <div class="audit-content">
          <div class="audit-header">
            <span class="audit-title">${item.title}</span>
            <span class="audit-timestamp">${item.time}</span>
          </div>
          <div class="audit-detail">${item.detail}</div>
          <div style="font-family: monospace; font-size: 0.7rem; color: #475569; margin-top: 6px;">
            Ledger Signature: ${item.hash}
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 10. POLICY TOGGLES & TOAST NOTIFICATIONS
  // =========================================================================

  const policyToggles = document.querySelectorAll('.toggle-switch');
  policyToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      showToast('Policy parameter updated (Simulated Demo Mode)');
    });
  });

  const btnSavePolicies = document.getElementById('btnSavePolicies');
  if (btnSavePolicies) {
    btnSavePolicies.addEventListener('click', () => {
      showToast('✓ AI Policy rules saved and deployed to recovery engine.');
    });
  }

  function showToast(message) {
    const shelf = document.getElementById('toastShelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // Escape key closes open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDecisionModal();
      document.querySelectorAll('.modal-overlay.show').forEach(m => m.classList.remove('show'));
    }
  });

  // INITIALIZE CHART
  renderPerformanceChart(CHART_DATA_30D);

  // INITIALIZE PROFILE INTERACTIONS
  initProfileInteractions();

  // URL Hash Deep Linking Support (e.g. #view=queue or #modal=pay_48291 or #run=ai or #view=profile)
  function checkUrlHash() {
    const hash = window.location.hash;
    if (!hash) return;
    if (hash.startsWith('#modal=')) {
      const payId = hash.replace('#modal=', '');
      const fullId = payId.startsWith('#') ? payId : '#' + payId;
      openPaymentDetailModal(fullId);
    } else if (hash.startsWith('#view=')) {
      const view = hash.replace('#view=', '');
      switchView(view);
    } else if (hash === '#run=ai') {
      openAiRecoverySimulation();
    }
  }

  window.addEventListener('hashchange', checkUrlHash);
  checkUrlHash();

  // =========================================================================
  // 11. MERCHANT PROFILE INTERACTION LOGIC
  // =========================================================================

  function initProfileInteractions() {
    // 1. Manage Policies from Profile
    const btnManagePoliciesFromProfile = document.getElementById('btnManagePoliciesFromProfile');
    if (btnManagePoliciesFromProfile) {
      btnManagePoliciesFromProfile.addEventListener('click', () => {
        switchView('policies');
      });
    }

    // 2. Edit Business Information Modal
    const btnEditBusinessInfo = document.getElementById('btnEditBusinessInfo');
    const editBusinessModalOverlay = document.getElementById('editBusinessModalOverlay');
    const editBusinessCloseBtn = document.getElementById('editBusinessCloseBtn');
    const editBusinessCancelBtn = document.getElementById('editBusinessCancelBtn');
    const editBusinessForm = document.getElementById('editBusinessForm');

    function openEditBusinessModal() {
      if (editBusinessModalOverlay) {
        editBusinessModalOverlay.classList.add('show');
        editBusinessModalOverlay.setAttribute('aria-hidden', 'false');
      }
    }

    function closeEditBusinessModal() {
      if (editBusinessModalOverlay) {
        editBusinessModalOverlay.classList.remove('show');
        editBusinessModalOverlay.setAttribute('aria-hidden', 'true');
      }
    }

    if (btnEditBusinessInfo) btnEditBusinessInfo.addEventListener('click', openEditBusinessModal);
    if (editBusinessCloseBtn) editBusinessCloseBtn.addEventListener('click', closeEditBusinessModal);
    if (editBusinessCancelBtn) editBusinessCancelBtn.addEventListener('click', closeEditBusinessModal);
    if (editBusinessModalOverlay) {
      editBusinessModalOverlay.addEventListener('click', (e) => {
        if (e.target === editBusinessModalOverlay) closeEditBusinessModal();
      });
    }

    if (editBusinessForm) {
      editBusinessForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = document.getElementById('inputBusinessName').value.trim();
        const industryVal = document.getElementById('inputIndustry').value.trim();
        const emailVal = document.getElementById('inputEmail').value.trim();
        const countryVal = document.getElementById('inputCountry').value.trim();
        const currencyVal = document.getElementById('inputCurrency').value;

        // Update profile fields
        document.getElementById('displayBusinessNameHero').textContent = nameVal;
        document.getElementById('displayEmailHero').textContent = emailVal;
        document.getElementById('displayEmailHero').href = `mailto:${emailVal}`;

        document.getElementById('fieldBusinessName').textContent = nameVal;
        document.getElementById('fieldIndustry').textContent = industryVal;
        document.getElementById('fieldEmail').textContent = emailVal;
        document.getElementById('fieldCountry').textContent = countryVal;
        document.getElementById('fieldCurrency').textContent = currencyVal;

        // Update sidebar merchant card
        const sidebarMerchantName = document.querySelector('.merchant-info .merchant-name');
        if (sidebarMerchantName) sidebarMerchantName.textContent = nameVal;

        closeEditBusinessModal();
        showToast('✓ Business information updated successfully');
      });
    }

    // 3. Change Password Modal
    const btnChangePassword = document.getElementById('btnChangePassword');
    const passwordModalOverlay = document.getElementById('passwordModalOverlay');
    const passwordModalCloseBtn = document.getElementById('passwordModalCloseBtn');
    const passwordModalCancelBtn = document.getElementById('passwordModalCancelBtn');
    const changePasswordForm = document.getElementById('changePasswordForm');

    function openPasswordModal() {
      if (passwordModalOverlay) {
        passwordModalOverlay.classList.add('show');
        passwordModalOverlay.setAttribute('aria-hidden', 'false');
      }
    }

    function closePasswordModal() {
      if (passwordModalOverlay) {
        passwordModalOverlay.classList.remove('show');
        passwordModalOverlay.setAttribute('aria-hidden', 'true');
      }
    }

    if (btnChangePassword) btnChangePassword.addEventListener('click', openPasswordModal);
    if (passwordModalCloseBtn) passwordModalCloseBtn.addEventListener('click', closePasswordModal);
    if (passwordModalCancelBtn) passwordModalCancelBtn.addEventListener('click', closePasswordModal);
    if (passwordModalOverlay) {
      passwordModalOverlay.addEventListener('click', (e) => {
        if (e.target === passwordModalOverlay) closePasswordModal();
      });
    }

    if (changePasswordForm) {
      changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPass = document.getElementById('inputNewPassword').value;
        const confirmPass = document.getElementById('inputConfirmPassword').value;
        if (newPass !== confirmPass) {
          showToast('Passwords do not match. Please re-enter.');
          return;
        }
        changePasswordForm.reset();
        closePasswordModal();
        showToast('✓ Merchant password changed successfully');
      });
    }

    // 4. Two-Factor Authentication Modal
    const btnManage2FA = document.getElementById('btnManage2FA');
    const twoFactorModalOverlay = document.getElementById('twoFactorModalOverlay');
    const twoFactorModalCloseBtn = document.getElementById('twoFactorModalCloseBtn');
    const twoFactorModalDismissBtn = document.getElementById('twoFactorModalDismissBtn');
    const btnRegenerateBackupCodes = document.getElementById('btnRegenerateBackupCodes');

    function open2FAModal() {
      if (twoFactorModalOverlay) {
        twoFactorModalOverlay.classList.add('show');
        twoFactorModalOverlay.setAttribute('aria-hidden', 'false');
      }
    }

    function close2FAModal() {
      if (twoFactorModalOverlay) {
        twoFactorModalOverlay.classList.remove('show');
        twoFactorModalOverlay.setAttribute('aria-hidden', 'true');
      }
    }

    if (btnManage2FA) btnManage2FA.addEventListener('click', open2FAModal);
    if (twoFactorModalCloseBtn) twoFactorModalCloseBtn.addEventListener('click', close2FAModal);
    if (twoFactorModalDismissBtn) twoFactorModalDismissBtn.addEventListener('click', close2FAModal);
    if (twoFactorModalOverlay) {
      twoFactorModalOverlay.addEventListener('click', (e) => {
        if (e.target === twoFactorModalOverlay) close2FAModal();
      });
    }
    if (btnRegenerateBackupCodes) {
      btnRegenerateBackupCodes.addEventListener('click', () => {
        showToast('✓ 8 new emergency backup codes generated');
      });
    }

    // 5. Active Sessions Modal
    const btnViewSessions = document.getElementById('btnViewSessions');
    const sessionsModalOverlay = document.getElementById('sessionsModalOverlay');
    const sessionsModalCloseBtn = document.getElementById('sessionsModalCloseBtn');
    const sessionsModalDismissBtn = document.getElementById('sessionsModalDismissBtn');
    const btnRevokeOtherSessions = document.getElementById('btnRevokeOtherSessions');
    const secondarySessionCard = document.getElementById('secondarySessionCard');

    function openSessionsModal() {
      if (sessionsModalOverlay) {
        sessionsModalOverlay.classList.add('show');
        sessionsModalOverlay.setAttribute('aria-hidden', 'false');
      }
    }

    function closeSessionsModal() {
      if (sessionsModalOverlay) {
        sessionsModalOverlay.classList.remove('show');
        sessionsModalOverlay.setAttribute('aria-hidden', 'true');
      }
    }

    if (btnViewSessions) btnViewSessions.addEventListener('click', openSessionsModal);
    if (sessionsModalCloseBtn) sessionsModalCloseBtn.addEventListener('click', closeSessionsModal);
    if (sessionsModalDismissBtn) sessionsModalDismissBtn.addEventListener('click', closeSessionsModal);
    if (sessionsModalOverlay) {
      sessionsModalOverlay.addEventListener('click', (e) => {
        if (e.target === sessionsModalOverlay) closeSessionsModal();
      });
    }

    if (btnRevokeOtherSessions) {
      btnRevokeOtherSessions.addEventListener('click', () => {
        if (secondarySessionCard) {
          secondarySessionCard.style.opacity = '0.4';
          const badge = secondarySessionCard.querySelector('.session-badge-standby');
          if (badge) badge.textContent = 'Revoked';
        }
        showToast('✓ All secondary sessions terminated');
      });
    }

    // 6. Preferences Toggles & Currency Dropdown
    const toggleEmailNotif = document.getElementById('toggleEmailNotif');
    const toggleRecoveryAlerts = document.getElementById('toggleRecoveryAlerts');
    const toggleWeeklySummary = document.getElementById('toggleWeeklySummary');
    const prefCurrencySelect = document.getElementById('prefCurrencySelect');

    [toggleEmailNotif, toggleRecoveryAlerts, toggleWeeklySummary].forEach(toggle => {
      if (toggle) {
        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          const isEnabled = toggle.classList.contains('active');
          showToast(`Preference updated: ${isEnabled ? 'Enabled' : 'Disabled'}`);
        });
      }
    });

    if (prefCurrencySelect) {
      prefCurrencySelect.addEventListener('change', (e) => {
        showToast(`Default currency updated to: ${e.target.value}`);
      });
    }

    // 7. Sign Out Modal
    const btnSignOut = document.getElementById('btnSignOut');
    const signOutModalOverlay = document.getElementById('signOutModalOverlay');
    const signOutCancelBtn = document.getElementById('signOutCancelBtn');
    const signOutConfirmBtn = document.getElementById('signOutConfirmBtn');

    function openSignOutModal() {
      if (signOutModalOverlay) {
        signOutModalOverlay.classList.add('show');
        signOutModalOverlay.setAttribute('aria-hidden', 'false');
      }
    }

    function closeSignOutModal() {
      if (signOutModalOverlay) {
        signOutModalOverlay.classList.remove('show');
        signOutModalOverlay.setAttribute('aria-hidden', 'true');
      }
    }

    if (btnSignOut) btnSignOut.addEventListener('click', openSignOutModal);
    if (signOutCancelBtn) signOutCancelBtn.addEventListener('click', closeSignOutModal);
    if (signOutModalOverlay) {
      signOutModalOverlay.addEventListener('click', (e) => {
        if (e.target === signOutModalOverlay) closeSignOutModal();
      });
    }

    if (signOutConfirmBtn) {
      signOutConfirmBtn.addEventListener('click', () => {
        closeSignOutModal();
        showToast('Signed out of merchant session. Returning to welcome screen...');
        setTimeout(() => {
          if (window.exitToAuthScreen) {
            window.exitToAuthScreen();
          } else {
            switchView('overview');
          }
        }, 500);
      });
    }
  }

  // =========================================================================
  // 12. AUTHENTICATION & ENTRY FLOW CONTROLLER
  // =========================================================================

  function initAuthFlow() {
    const authScreen = document.getElementById('authScreen');
    const appScreen = document.getElementById('appScreen');

    const tabSignIn = document.getElementById('tabSignIn');
    const tabSignUp = document.getElementById('tabSignUp');
    const formViewSignIn = document.getElementById('formViewSignIn');
    const formViewSignUp = document.getElementById('formViewSignUp');

    const linkToSignUp = document.getElementById('linkToSignUp');
    const linkToSignIn = document.getElementById('linkToSignIn');

    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const btnExploreDemoQuick = document.getElementById('btnExploreDemoQuick');
    const btnGoogleSignIn = document.getElementById('btnGoogleSignIn');
    const btnGoogleSignUp = document.getElementById('btnGoogleSignUp');
    const btnForgotPassword = document.getElementById('btnForgotPassword');

    function showSignInTab() {
      if (tabSignIn && tabSignUp && formViewSignIn && formViewSignUp) {
        tabSignIn.classList.add('active');
        tabSignIn.setAttribute('aria-selected', 'true');
        tabSignUp.classList.remove('active');
        tabSignUp.setAttribute('aria-selected', 'false');
        formViewSignIn.style.display = 'block';
        formViewSignUp.style.display = 'none';
      }
    }

    function showSignUpTab() {
      if (tabSignIn && tabSignUp && formViewSignIn && formViewSignUp) {
        tabSignUp.classList.add('active');
        tabSignUp.setAttribute('aria-selected', 'true');
        tabSignIn.classList.remove('active');
        tabSignIn.setAttribute('aria-selected', 'false');
        formViewSignUp.style.display = 'block';
        formViewSignIn.style.display = 'none';
      }
    }

    if (tabSignIn) tabSignIn.addEventListener('click', showSignInTab);
    if (tabSignUp) tabSignUp.addEventListener('click', showSignUpTab);
    if (linkToSignUp) linkToSignUp.addEventListener('click', showSignUpTab);
    if (linkToSignIn) linkToSignIn.addEventListener('click', showSignInTab);

    function enterDashboard(merchantName = 'Demo Merchant', merchantEmail = 'merchant@demo.recoveriq.com', targetView = null, immediate = false) {
      // Update merchant identity in sidebar and profile
      const sidebarName = document.getElementById('sidebarMerchantNameDisplay');
      const sidebarEmail = document.getElementById('sidebarMerchantEmailDisplay');
      const sidebarAvatar = document.getElementById('sidebarMerchantAvatar');
      const heroName = document.getElementById('displayBusinessNameHero');
      const heroEmail = document.getElementById('displayEmailHero');
      const fieldName = document.getElementById('fieldBusinessName');
      const fieldEmail = document.getElementById('fieldEmail');

      if (sidebarName) sidebarName.textContent = merchantName;
      if (sidebarEmail) sidebarEmail.textContent = merchantEmail;
      if (sidebarAvatar) {
        const initials = merchantName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'DM';
        sidebarAvatar.textContent = initials;
      }
      if (heroName) heroName.textContent = merchantName;
      if (heroEmail) {
        heroEmail.textContent = merchantEmail;
        heroEmail.href = `mailto:${merchantEmail}`;
      }
      if (fieldName) fieldName.textContent = merchantName;
      if (fieldEmail) fieldEmail.textContent = merchantEmail;

      const viewToSwitch = targetView || (window.location.hash.startsWith('#view=') ? window.location.hash.replace('#view=', '') : 'overview');

      if (immediate) {
        if (authScreen) authScreen.style.display = 'none';
        if (appScreen) {
          appScreen.style.display = 'flex';
          appScreen.style.opacity = '1';
        }
        switchView(viewToSwitch);
        renderPerformanceChart(CHART_DATA_30D);
        return;
      }

      // Transition screen
      if (authScreen && appScreen) {
        authScreen.style.opacity = '0';
        authScreen.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
          authScreen.style.display = 'none';
          appScreen.style.display = 'flex';
          appScreen.style.opacity = '0';
          setTimeout(() => {
            appScreen.style.opacity = '1';
            appScreen.style.transition = 'opacity 0.25s ease';
            switchView(viewToSwitch);
            renderPerformanceChart(CHART_DATA_30D);
          }, 30);
        }, 220);
      }
    }

    function exitToAuth() {
      if (authScreen && appScreen) {
        appScreen.style.opacity = '0';
        appScreen.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
          appScreen.style.display = 'none';
          authScreen.style.display = 'flex';
          authScreen.style.opacity = '0';
          setTimeout(() => {
            authScreen.style.opacity = '1';
            authScreen.style.transition = 'opacity 0.25s ease';
            showSignInTab();
          }, 30);
        }, 220);
      }
    }

    window.exitToAuthScreen = exitToAuth;
    window.enterDashboardDirect = enterDashboard;

    // Explore Demo quick entry
    if (btnExploreDemoQuick) {
      btnExploreDemoQuick.addEventListener('click', () => {
        showToast('Entering RecoverIQ Demo environment with synthetic data...');
        enterDashboard('Demo Merchant', 'merchant@demo.recoveriq.com', 'overview');
      });
    }

    // Sign In form submit
    if (signInForm) {
      signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const mName = email.includes('demo') ? 'Demo Merchant' : email.split('@')[0].replace('.', ' ').toUpperCase();
        showToast(`✓ Welcome back! Signed in as ${mName}.`);
        enterDashboard(mName, email, 'overview');
      });
    }

    // Sign Up form submit
    if (signUpForm) {
      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const companyName = document.getElementById('signupBusiness').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const pass = document.getElementById('signupPassword').value;
        const confirmPass = document.getElementById('signupConfirmPassword').value;

        if (pass !== confirmPass) {
          showToast('Passwords do not match. Please re-enter.');
          return;
        }

        showToast(`✓ Account created! Welcome to RecoverIQ, ${companyName}.`);
        enterDashboard(companyName, email, 'overview');
      });
    }

    // Google Sign-In simulations
    if (btnGoogleSignIn) {
      btnGoogleSignIn.addEventListener('click', () => {
        showToast('✓ Google Workspace SSO verified.');
        enterDashboard('Demo Merchant', 'merchant@demo.recoveriq.com', 'overview');
      });
    }
    if (btnGoogleSignUp) {
      btnGoogleSignUp.addEventListener('click', () => {
        showToast('✓ Google Workspace SSO verified.');
        enterDashboard('Demo Merchant', 'merchant@demo.recoveriq.com', 'overview');
      });
    }

    if (btnForgotPassword) {
      btnForgotPassword.addEventListener('click', () => {
        showToast('Password reset instructions sent to your registered merchant email.');
      });
    }

    // If deep link in hash (e.g. #view=queue or #view=profile), automatically enter dashboard
    const hash = window.location.hash;
    if (hash === '#signup') {
      showSignUpTab();
    } else if (hash && (hash.startsWith('#view=') || hash.startsWith('#modal='))) {
      const targetV = hash.startsWith('#view=') ? hash.replace('#view=', '') : 'overview';
      enterDashboard('Demo Merchant', 'merchant@demo.recoveriq.com', targetV, true);
    }
  }

  // Initialize Authentication Flow
  initAuthFlow();
});
