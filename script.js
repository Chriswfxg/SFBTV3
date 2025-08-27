// --- Rules (unchanged from your code) ---
let rules = {
  "hello": "Hi! How can I help you today?",
  "might be heading toward burnout":`<article class="workload-summary">
  <h4>Workload Report</h4>

  <p><strong>Timeframe:</strong> Last 3 weeks</p>

  <p>Summary</p>
  <ol>
    <li>Deepti has been consistently working longer hours than usual — around 10–15% over his standard weekly hours.</li>
    <li>
      Notable spikes:
      <ul>
        <li>+8 hours in week 1</li>
        <li>+12 hours in week 2</li>
        <li>+14 hours in week 3</li>
      </ul>
    </li>
    <li>This pattern suggests he could be at risk of burnout if the workload continues.</li>
  </ol>

  <h3>Quick Tip</h3>
  <ol>
    <li>Reach out to Deepti to check in on his workload</li>
    <li>Encourage regular breaks</li>
    <li>See if any tasks can be redistributed to avoid burnout</li>
  </ol>
</article>`,
  "more about the rewards":`<article class="compensation-benefits">
  <h4>Valuable Benefits Included in Your Compensation</h4>
  <p>Designed to support your financial, personal, and professional well-being.</p>

  <ol>
    <li>
      <strong>Comprehensive Health Insurance</strong> – Provides financial security for you and your family during medical emergencies, going beyond basic coverage.
      <ul>
        <li>"Family floater" policy covering spouse and children</li>
        <li>Cashless treatment at a wide network of hospitals</li>
        <li>Covers daycare procedures without overnight hospitalization</li>
      </ul>
    </li>

    <li>
      <strong>Cab Allowance</strong> – Helps make your daily commute in Bengaluru safer and more convenient, reducing stress and expenses.
      <ul>
        <li>Fixed monthly reimbursement for cab services like Ola/Uber</li>
        <li>Access to company-arranged transportation, especially for late shifts</li>
      </ul>
    </li>

    <li>
      <strong>5% Employer Contribution to Your Savings</strong> – Extra money invested directly into your long-term savings, separate from your in-hand salary.
      <ul>
        <li>Typically contributed to Employees' Provident Fund (PF)</li>
        <li>Grows over time to create a substantial retirement corpus</li>
      </ul>
    </li>

    <li>
      <strong>Paid Time Off (PTO)</strong> – Crucial for work-life balance, providing paid time to rest, recharge, and handle personal matters.
      <ul>
        <li>Privilege Leave (vacations)</li>
        <li>Casual Leave (personal errands)</li>
        <li>Sick Leave (illness)</li>
      </ul>
    </li>

    <li>
      <strong>Learning and Development Opportunities</strong> – Investments in your career growth to help you stay competitive.
      <ul>
        <li>Sponsorship for professional certifications</li>
        <li>Free access to platforms like Coursera</li>
        <li>Internal workshops for skill enhancement</li>
      </ul>
    </li>

    <li>
      <strong>Employee Perks and Discounts</strong> – Lifestyle benefits that help you save money and enjoy exclusive advantages.
      <ul>
        <li>Corporate discounts on travel, electronics, and more</li>
        <li>Subsidized gym memberships</li>
        <li>Meal benefits like food vouchers or cafeteria access</li>
      </ul>
    </li>
  </ol>
</article>`,
  "overdue receivables":`<article class="customer-summary" data-customer-id="17100005">
  <h4>Customer 17100005</h4>
  <ul>
    <li>Net Value: <data value="216.00" data-currency="USD">216.00 USD</data></li>
    <li>Credit Limit: <data value="5.00" data-currency="USD">5.00 USD</data></li>
    <li>Current Credit Exposure: <data value="20.00" data-currency="USD">20.00 USD</data></li>
    <li>Total Overdue Amount: <data value="0.00" data-currency="USD">0.00 USD</data></li>
  </ul>
  <p>For more details, <a href="https://my405746.s4hana.cloud.sap/ui?_wfx_=0d503c5a-8b65-4569-91c2-c28b1bb9b4e2&_wfx_stage=design&_wfx_state=draft#Shell-home" target="_blank" rel="noopener noreferrer">click here</a> to view overdue receivables.</p>
</article> `,
  "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
  "bye": "Goodbye! Have a great day.",
  "case studies and references for generators":`<section>
  <h4>Case Study 1 — Alpha Manufacturing (Automotive Components)</h4>
  <p><strong>Context:</strong> 850 employees; expanding assembly line with high power demand.</p>
  <p><strong>Challenges:</strong> Frequent grid outages causing production delays; rising downtime costs.</p>
  <p><strong>Procurement Approach:</strong></p>
  <ul>
    <li>Competitive bidding with total cost of ownership analysis</li>
    <li>Selected 500 kVA diesel generator with soundproof enclosure</li>
    <li>Negotiated 5-year AMC and priority service SLA</li>
  </ul>
  <p><strong>Results:</strong></p>
  <ul>
    <li>Downtime reduced by 92%</li>
    <li>Annual maintenance costs 15% below previous backup system</li>
  </ul>
</section>

<section>
  <h4>Case Study 2 — Orion Metals (Steel Processing)</h4>
  <p><strong>Context:</strong> 1,200 employees; 24×7 rolling mill operations.</p>
  <p><strong>Challenges:</strong> Voltage fluctuations damaging sensitive control equipment; energy supply gaps during peak demand.</p>
  <p><strong>Procurement Approach:</strong></p>
  <ul>
    <li>Market survey for dual-fuel (diesel/natural gas) generators</li>
    <li>Lifecycle cost modeling including fuel efficiency</li>
    <li>Contract terms included operator training & remote monitoring</li>
  </ul>
  <p><strong>Results:</strong></p>
  <ul>
    <li>Energy cost per MWh lowered by 11%</li>
    <li>Equipment failure incidents down 40% in first year</li>
  </ul>
</section>

<section>
  <h4>Case Study 3 — Zenith Plastics (Injection Moulding)</h4>
  <p><strong>Context:</strong> 620 employees; adding two high-capacity moulding machines.</p>
  <p><strong>Challenges:</strong> Existing generator undersized; delays in grid upgrade approval.</p>
  <p><strong>Procurement Approach:</strong></p>
  <ul>
    <li>RFQ issued to three OEMs; focus on lead time & service coverage</li>
    <li>Chose 750 kVA unit with load management controls</li>
    <li>Staggered payment terms to align with production ramp-up</li>
  </ul>
  <p><strong>Results:</strong></p>
  <ul>
    <li>New machines commissioned 2 months ahead of schedule</li>
    <li>Production capacity up 25% without outages</li>
  </ul>
</section>
`,
  "increase my deal value":`<h2>Key Bundling Recommendations</h2>
<ul>
  <li>External Fuel Tank / Sub-Base Fuel Cell (for extended runtime)</li>
  <li>Auto Transfer Switch (ATS) – to automate switching to generator power in outage scenarios</li>
  <li>Trailer or Mounting Kit – if portable deployment is needed</li>
</ul>`,
  "discovery questions":`<ul>
  <li>What are the primary application areas for GenPro’s industrial generators within Northwind Manufacturing’s operations (e.g., backup for production lines, continuous power for critical facilities)?</li>
  <li>Which performance metrics or KPIs does Northwind expect to improve with a GenPro generator upgrade (e.g., reduced downtime costs, lower maintenance overhead, improved fuel efficiency)?</li>
  <li>Are there regulatory or compliance standards the generators must meet in their industry (e.g., emissions, noise levels, or local energy regulations)?</li>
  <li>What integration requirements exist with Northwind’s current infrastructure (such as facility monitoring systems, ATS/transfer switches, or existing diesel fleet)?</li>
  <li>In what environmental conditions will the generators operate (factory floor, outdoor enclosures, high-dust environments, variable climates)?</li>
</ul>
<p>
You could also find details regarding <strong>competitive differentiators for GenPro vs. ACME and Umbrella</strong> 
<a href="https://v0-klue-com-clone.vercel.app/?_wfx_=07b3aded-fa6b-4880-8d0c-ff5a21b0a8d8&_wfx_stage=production&_wfx_state=null"
   target="_blank" rel="noopener noreferrer">
  here
</a>.
</p>
`,
  "hola": "heeeey",
  "What are the pipeline figures for this quarter?": "The total pipeline for this quarter is projected to be $500,000. This includes opportunities across multiple sectors, with $300,000 expected from new customers and $200,000 from existing customers. Would you like more details on the opportunity breakdown or forecasted close dates?",
  "What are the overall pipeline figures?": "The overall pipeline stands at $1.2 million, which includes $800,000 from existing customers and $400,000 from new customer opportunities. The pipeline is spread across various stages, with 60% in early stages and 40% in advanced stages. Would you like to see a more detailed breakdown or the projected close dates for specific deals?",
  "What are the closed revenues so far?": "The total closed revenue so far is $950,000. This includes $600,000 from existing customers and $350,000 from new business. The largest deal closed was worth $200,000. Would you like a breakdown by industry or by sales representative?",
  "Hey can you update the deal value of the Express Logistics SLA opp to 200,000?": "The deal value for the Express Logistics SLA opportunity has been successfully updated to $200,000. Is there anything else you’d like to adjust for this opportunity, such as the close date or stage?",
  "Hey, can you help me approve the quote that was sent for GenePoint": "Hey there, you cannot approve quotes directly in Copilot. Click <a href=\"https://whatfix-cc-dev-ed.lightning.force.com/lightning/o/SBQQ__Quote__c/list?c__wfx=a7b56243-64c4-40cf-9bcb-e63560727488&c__wfx_stage=production&c__wfx_state=null&filterName=__Recent\">approve quote</a> to do it on the application",
  "can you suggest a quote configuration for Brampton industries?": "<p><strong>Copilot Response:</strong></p><p>Based on the projected amount of <strong>$1,000,000</strong> for Brampton Industries...</p>",
  "summarise": "The United Oils SLA opportunity is valued at $100,000 and focuses on a digital adoption solution. The expected close date is 30th November 2024...",
  "account news": "<p><strong>Account News:</strong> Certainly! Here's the latest update on United Oil: <ul>...</ul></p>",
  "investment focus": "<p><strong>Investment Focus:</strong> United Oil has recently shifted its investment strategy... <ul>...</ul></p>",
  "competitive insights": "<p><strong>Competitive Insights:</strong> Here's a competitive analysis for United Oil: <ul>...</ul></p>",
  "cross-sell and up-sell": "<p> For the <strong>Greentech Partnership</strong> opportunity, I have identified the following... </p>",
  "last login": "<p> Here’s a summary of the critical events that have occurred since your last login: ...</p>",
  "update the opportunity type and change the forecast category": "Got it! Click the link below to update your Opportunity Type & Forecast Category... <a href=\"https://whatfix.crm8.dynamics.com/...\">Update Opportunity</a>",
  "Hey, can you help me create a task on Microsoft Dynamics": "Hey there, I can help you create a task. Click <a href=\"https://whatfix.crm8.dynamics.com/...\">create task</a> to do it on the application",
  "can you help me create sales order items":`<h3>Create Sales Order – Step-by-Step Guide</h3>
  <p>Hello, here are the steps to create a Sales Order using the SAP Fiori app:</p>
  <ol>
    <li>Open the <strong>Create Sales Order</strong> app from your Fiori Launchpad.</li>
    <li>Enter the customer details, including the <strong>Sold-To</strong> and <strong>Ship-To</strong> parties.</li>
    <li>Add items by entering the <strong>material number</strong> and <strong>quantity</strong> for each product or service.</li>
    <li>The system will automatically retrieve <strong>pricing</strong>, check <strong>availability</strong>, and propose a <strong>delivery date</strong>.</li>
    <li>Review the order summary and click <strong>Save</strong> to generate the sales order number.</li>
  </ol>
  <p>If you need help reviewing or editing an existing order, feel free to ask.</p>
I could also help you perform this task. Click <a href="https://my405746.s4hana.cloud.sap/ui?_wfx_=22edd632-f7ef-4694-a823-90ad737ca160&_wfx_stage=production&_wfx_state=null#Shell-home" target="_blank" rel="noopener noreferrer">here</a> to do it on the application
 
 
 `,
  "Can you explain the overview of create sales order process": `
    <h3>Create Sales Order Process – SAP ECC</h3>
    <p>In Whatfix, the <strong>Sales Order Creation</strong> process in <strong>SAP ECC</strong> is initiated when a customer places a confirmed purchase request...</p>
    <h3>1. Sales Area Selection</h3>
    <p>The sales user logs into <strong>SAP GUI</strong> and accesses transaction <strong>VA01</strong> to create a sales order...</p>
    <h3>2. Customer and Order Type Entry</h3>
    <p>The user enters the <strong>Sold-To Party</strong> and <strong>Ship-To Party</strong> (retrieved from the customer master)...</p>
    <h3>3. Item and Quantity Details</h3>
    <p>The user inputs <strong>material codes (SKUs)</strong> and <strong>quantities</strong>...</p>
    <h3>4. Availability Check & Credit Control</h3>
    <p>SAP ECC performs a <strong>real-time availability check (ATP)</strong> and runs a <strong>credit check</strong>...</p>
    <h3>5. Delivery & Billing Data</h3>
    <p>The system auto-fills or the user enters <strong>delivery plant</strong>, <strong>shipping conditions</strong>...</p>
    <h3>6. Order Review & Save</h3>
    <p>The sales user reviews all order lines, totals, and terms, then saves the document...</p>
    <h3>Organization-Specific Notes:</h3>
    <ul>
      <li>All sales orders above $5,000 are <strong>auto-routed for approval</strong> via workflow.</li>
      <li>Orders for strategic accounts are tagged under <strong>Key Account Management</strong>...</li>
      <li>Integration with <strong>SAP SD, MM, and FI</strong> ensures inventory commitment...</li>
    </ul>
  `
};

// ---- Streaming that reveals HTML tags AND text progressively ----
function streamMarkup(container, html, opts = {}) {
  const tokenDelay = opts.tokenDelay ?? 60; // delay between HTML tokens (tags or text blocks)
  const wordDelay  = opts.wordDelay  ?? 35; // delay between words within a text block
  const messageBox = document.getElementById('message-box');

  // Split into HTML tokens: tags vs text chunks
  const tokens = [];
  const re = /(<[^>]+>|[^<]+)/g;
  let m;
  while ((m = re.exec(html)) !== null) tokens.push(m[0]);

  let buffer = "";
  let i = 0;

  function keepScroll() {
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  function step() {
    if (i >= tokens.length) return; // done
    const t = tokens[i++];

    if (t.startsWith("<")) {
      // Tag token: append whole tag, update DOM once
      buffer += t;
      container.innerHTML = buffer;
      keepScroll();
      setTimeout(step, tokenDelay);
    } else {
      // Text token: stream word-by-word
      const parts = t.split(/(\s+)/).filter(Boolean);
      let j = 0;
      (function streamText() {
        if (j >= parts.length) {
          setTimeout(step, tokenDelay);
          return;
        }
        buffer += parts[j++];
        container.innerHTML = buffer;
        keepScroll();
        setTimeout(streamText, wordDelay);
      })();
    }
  }

  step();
}
function autosizeInput() {
  const ta = document.getElementById('user-input');
  if (!ta) return;
  ta.style.height = 'auto';                         // reset
  ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'; // grow up to max

  // update the space reserved for the dock so content never hides behind it
  const dock = document.querySelector('.input-container');
  if (dock) {
    document.documentElement.style.setProperty('--dock-h', dock.offsetHeight + 'px');
  }
}

// bind once
(function initAutosize(){
  const ta = document.getElementById('user-input');
  if (!ta) return;
  autosizeInput();                    // set initial height
  ta.addEventListener('input', autosizeInput);
  window.addEventListener('resize', autosizeInput);
})();

// ---- Main send flow (same behavior, same 3s delay) ----
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const messageBox = document.getElementById("message-box");

  // Clear input
  document.getElementById("user-input").value = "";
  autosizeInput();  // collapses back to one line 


  // User bubble
  const userMessageWrapper = document.createElement('div');
  userMessageWrapper.classList.add('message-wrapper');
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.textContent = userInput;
  userMessageWrapper.appendChild(userMessage);
  messageBox.appendChild(userMessageWrapper);
  messageBox.scrollTop = messageBox.scrollHeight;

  // 3s delay (unchanged)
  setTimeout(() => {
    let response = "Sorry, I don't understand that.";

    // Rule match (unchanged)
    for (let keyword in rules) {
      if (userInput.includes(keyword)) {
        response = rules[keyword];
        break;
      }
    }

    // Bot container
    const botMessageWrapper = document.createElement('div');
    botMessageWrapper.classList.add('message-wrapper', 'bot-message-wrapper');
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessageWrapper.appendChild(botMessage);
    messageBox.appendChild(botMessageWrapper);
    messageBox.scrollTop = messageBox.scrollHeight;

    // Stream full markup (tags + text)
    streamMarkup(botMessage, response, {
      tokenDelay: 60,  // tag-to-tag pacing
      wordDelay: 35    // word pacing
    });
  }, 3000);
});

function addBotMessage(html) {
  const box = document.getElementById('message-box');

  const wrap = document.createElement('div');
  wrap.className = 'message-wrapper bot-message-wrapper';

  const card = document.createElement('div');
  card.className = 'bot-message';

  // Your answer content + the Sources pill
  const sourcesPill = `
    <button class="pill" onclick="openSources()"
            aria-label="View sources" title="View sources">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right:6px;">
        <path d="M4 7.5C4 6.12 8.03 5 12 5s8 1.12 8 2.5-4.03 2.5-8 2.5-8-1.12-8-2.5Z" stroke="#444" stroke-width="1.6"/>
        <path d="M4 12c0 1.38 4.03 2.5 8 2.5s8-1.12 8-2.5" stroke="#444" stroke-width="1.6"/>
        <path d="M4 16.5C4 17.88 8.03 19 12 19s8-1.12 8-2.5" stroke="#444" stroke-width="1.6"/>
      </svg>
      Sources
    </button>
  `;

  // IMPORTANT: innerHTML (not textContent)
  card.innerHTML = `${html}${sourcesPill}`;
  wrap.appendChild(card);
  box.appendChild(wrap);
}
