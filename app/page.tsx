import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO metadata ── */
export const metadata: Metadata = {
  title: "xLeet — Buy Cpanels, SMTP, Leads, Webmail & Accounts",
  description:
    "xLeet is the #1 marketplace for bulk cpanels, shells, SSH/WHM, RDP, SMTP mailers, email leads, webmail access, and premium accounts. Instant delivery. Bitcoin accepted.",
  keywords: [
    "buy cpanels",
    "buy smtp",
    "email leads marketplace",
    "buy webmail access",
    "buy shells hosting",
    "rdp marketplace",
    "ssh whm accounts",
    "office365 webmail",
    "sendgrid accounts",
    "xleet",
    "buy email list",
    "combo list",
  ],
  metadataBase: new URL("https://xleet.to"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "xLeet — Buy Cpanels, SMTP, Leads, Webmail & Accounts",
    description:
      "The largest marketplace for cpanels, SMTP, email leads, webmail, and premium accounts. Instant delivery with Bitcoin payments.",
    url: "https://xleet.to",
    siteName: "xLeet",
    type: "website",
    images: [{ url: "/assets/img/BTC_Logo.png", width: 1200, height: 630, alt: "xLeet Marketplace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "xLeet — Buy Cpanels, SMTP, Leads & More",
    description:
      "Bulk cpanels, SMTP mailers, email leads, webmail access, premium accounts. Instant delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/* ── JSON-LD structured data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "xLeet",
  url: "https://xleet.to",
  description:
    "xLeet is a marketplace for cpanels, SMTP, email leads, webmail access, and premium accounts with instant delivery.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: "850000+",
    priceCurrency: "USD",
    lowPrice: "5",
  },
};

/* ── static data ── */
const stats = [
  { value: "136,321+", label: "Hosts Available" },
  { value: "17,000+", label: "SMTP Senders" },
  { value: "35,000+", label: "Email Leads" },
  { value: "700k+", label: "Webmail Accounts" },
  { value: "50k+", label: "Premium Accounts" },
];

const categories = [
  {
    icon: "fa-server",
    color: "orange",
    title: "Hosts",
    desc: "Cpanels, Shells, SSH/WHM, and RDP access in bulk. Verified and ready to use.",
    items: [
      { label: "Cpanels", count: "99,296", href: "/cpanels" },
      { label: "Shells", count: "31,857", href: "/shells" },
      { label: "SSH / WHM", count: "1,165", href: "/ssh" },
      { label: "RDP", count: "4,003", href: "/rdp" },
    ],
  },
  {
    icon: "fa-paper-plane",
    color: "#007bff",
    title: "Send",
    desc: "High-volume SMTP senders and mailers for bulk email campaigns.",
    items: [
      { label: "SMTP", count: "17,001", href: "/smtp" },
      { label: "Mailers", count: "72", href: "/mailers" },
    ],
  },
  {
    icon: "fa-address-book",
    color: "#ff6e8b",
    title: "Leads",
    desc: "Verified email lists, combo lists, phone numbers, and full data sets.",
    items: [
      { label: "Checked Email Lists", count: "29", href: "/leads/checked-email-list" },
      { label: "Email Only", count: "17,118", href: "/leads/email-only" },
      { label: "Email:Password Combo", count: "9,993", href: "/leads/combo-email-password" },
      { label: "Phone Numbers", count: "4,355", href: "/leads/phone-number-only" },
    ],
  },
  {
    icon: "fa-briefcase",
    color: "green",
    title: "Business Webmail",
    desc: "Corporate webmail access across all major providers — Office365, GoDaddy, Ionos and more.",
    items: [
      { label: "Office365 Webmail", count: "694,413", href: "/webmail/office365-webmail" },
      { label: "Cpanel Webmail", count: "12,629", href: "/webmail/cpanel-webmail" },
      { label: "GoDaddy Webmail", count: "774", href: "/webmail/godaddy-webmail" },
      { label: "Ionos Webmail", count: "801", href: "/webmail/ionos-webmail" },
    ],
  },
  {
    icon: "fa-users",
    color: "#FF8B6E",
    title: "Accounts",
    desc: "Email marketing tools, VPN, streaming, hosting, gaming and more premium accounts.",
    items: [
      { label: "Email Marketing (SendGrid, AWS…)", count: "5,378", href: "/accounts/email-marketing" },
      { label: "Webmail Business", count: "19,637", href: "/accounts/webmail-business" },
      { label: "Hosting / Domain", count: "479", href: "/accounts/hosting-domain" },
      { label: "Marketing Tools", count: "11", href: "/accounts/marketing-tools" },
    ],
  },
];

const whyItems = [
  { icon: "fa-bolt", title: "Instant Delivery", body: "All products are delivered to your account the moment payment is confirmed — no waiting, no tickets." },
  { icon: "fa-lock", title: "Secure Payments", body: "We accept Bitcoin, Ethereum, and USDT TRC20. Every transaction is end-to-end encrypted." },
  { icon: "fa-check-circle", title: "Verified Stock", body: "Every listing is checked before being added to inventory. What you buy is what you get." },
  { icon: "fa-headset", title: "24/7 Support", body: "Open a ticket any time. Our team responds fast so you are never stuck." },
  { icon: "fa-chart-line", title: "Always Restocked", body: "New cpanels, leads, and accounts are added daily — the inventory never runs dry." },
  { icon: "fa-globe", title: "Worldwide Access", body: "Buy from anywhere. No geo-restrictions, no KYC." },
];

const faqs = [
  {
    q: "What is xLeet?",
    a: "xLeet is an online marketplace where buyers can purchase bulk hosting access (cpanels, shells, SSH, RDP), email leads, SMTP senders, webmail accounts, and a wide variety of premium accounts.",
  },
  {
    q: "How do I pay?",
    a: "We accept Bitcoin (BTC), Ethereum (ETH), and USDT TRC20. After adding your desired amount on the Add Balance page, funds are credited instantly after one blockchain confirmation.",
  },
  {
    q: "Is delivery instant?",
    a: "Yes. As soon as your payment is confirmed on the blockchain, your balance is credited and you can download any product immediately.",
  },
  {
    q: "How many products are available?",
    a: "xLeet carries over 850,000 listings across all categories, with new stock added daily.",
  },
  {
    q: "Can I get a refund if a product doesn't work?",
    a: "Open a support ticket immediately. Our team will review your claim and issue a replacement or credit where applicable.",
  },
];

/* ── component ── */
export default function LandingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen flex flex-col bg-white text-gray-800">

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <i className="fab fa-redhat fa-lg" style={{ color: "#ff6e8b" }} />
              <span className="text-lg font-semibold text-gray-900">xLeet</span>
            </Link>
            <nav className="flex items-center gap-2">
              <Link
                href="/log-in"
                className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 text-sm font-medium rounded text-white"
                style={{ backgroundColor: "#dc3545" }}
              >
                Register
              </Link>
            </nav>
          </div>
        </header>

        <main>
          {/* ── Hero ── */}
          <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              The Largest Marketplace for<br />
              <span style={{ color: "#dc3545" }}>Cpanels, SMTP, Leads & Accounts</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Buy verified cpanels, shells, SMTP senders, email leads, webmail access,
              and premium accounts. Instant delivery. Bitcoin accepted.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/register"
                className="px-6 py-3 rounded text-white font-semibold text-sm"
                style={{ backgroundColor: "#dc3545" }}
              >
                Create Free Account
              </Link>
              <Link
                href="/log-in"
                className="px-6 py-3 rounded border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50"
              >
                Browse as Member
              </Link>
            </div>
          </section>

          {/* ── Stats bar ── */}
          <section className="bg-gray-900 py-6 px-4" aria-label="Inventory statistics">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Categories ── */}
          <section className="py-16 px-4 bg-white" aria-label="Product categories">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Everything You Need, In One Place
              </h2>
              <p className="text-center text-gray-500 text-sm mb-10">
                Browse over 850,000 listings across five categories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <article
                    key={cat.title}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <i className={`fa ${cat.icon}`} style={{ color: cat.color, fontSize: "18px" }} />
                      <h3 className="font-semibold text-gray-900 text-base">{cat.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between text-sm hover:text-red-600 text-gray-700"
                          >
                            <span>{item.label}</span>
                            <span
                              className="text-white text-xs px-2 py-0.5 rounded font-mono"
                              style={{ backgroundColor: "#007bff" }}
                            >
                              {item.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}

                {/* CTA card */}
                <article className="border-2 border-dashed border-gray-200 rounded-lg p-5 flex flex-col items-center justify-center text-center gap-3 bg-gray-50">
                  <i className="fa fa-plus-circle text-3xl" style={{ color: "#dc3545" }} />
                  <h3 className="font-semibold text-gray-900">Ready to buy?</h3>
                  <p className="text-sm text-gray-500">Create a free account and start browsing all inventory instantly.</p>
                  <Link
                    href="/register"
                    className="px-5 py-2 rounded text-white text-sm font-medium"
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    Get Started
                  </Link>
                </article>
              </div>
            </div>
          </section>

          {/* ── Why xLeet ── */}
          <section className="py-16 px-4 bg-gray-50" aria-label="Why choose xLeet">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Why xLeet?</h2>
              <p className="text-center text-gray-500 text-sm mb-10">
                Trusted by thousands of buyers worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyItems.map((w) => (
                  <div key={w.title} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
                    <i className={`fa ${w.icon} mb-3 text-xl`} style={{ color: "#dc3545" }} />
                    <h3 className="font-semibold text-gray-900 mb-1">{w.title}</h3>
                    <p className="text-sm text-gray-500">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Payment methods ── */}
          <section className="py-12 px-4 bg-white text-center" aria-label="Accepted payment methods">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Accepted Payment Methods</h2>
              <p className="text-sm text-gray-500 mb-6">
                Anonymous, fast, and secure. No bank details required.
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-col items-center gap-1">
                  <img src="/assets/img/BTC_Logo.png" alt="Bitcoin" className="h-10 object-contain" />
                  <span className="text-xs text-gray-500">Bitcoin (BTC)</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="/assets/img/eth.png" alt="Ethereum" className="h-10 object-contain" />
                  <span className="text-xs text-gray-500">Ethereum (ETH)</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src="/assets/img/usdt_trc20_logo.png" alt="USDT TRC20" className="h-10 object-contain" />
                  <span className="text-xs text-gray-500">USDT TRC20</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-16 px-4 bg-gray-50" aria-label="Frequently asked questions">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-500 text-sm mb-10">
                Common questions from new buyers.
              </p>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-white border border-gray-200 rounded-lg px-5 py-4">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{faq.q}</h3>
                    <p className="text-sm text-gray-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section className="py-14 px-4 text-center bg-gray-900">
            <h2 className="text-2xl font-bold text-white mb-2">
              Start buying in under 2 minutes
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Register for free, add balance with crypto, and access the full inventory instantly.
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-3 rounded text-white font-semibold text-sm"
              style={{ backgroundColor: "#dc3545" }}
            >
              Create Your Free Account
            </Link>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="bg-white border-t border-gray-100 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <i className="fab fa-redhat" style={{ color: "#ff6e8b" }} />
                <span className="font-semibold text-gray-900">xLeet</span>
              </div>
              <p className="text-xs text-gray-400 max-w-xs">
                The largest marketplace for cpanels, SMTP, email leads, webmail accounts, and premium accounts.
              </p>
            </div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm text-gray-500" aria-label="Footer navigation">
              <Link href="/cpanels" className="hover:text-gray-800">Cpanels</Link>
              <Link href="/smtp" className="hover:text-gray-800">SMTP</Link>
              <Link href="/shells" className="hover:text-gray-800">Shells</Link>
              <Link href="/mailers" className="hover:text-gray-800">Mailers</Link>
              <Link href="/ssh" className="hover:text-gray-800">SSH / WHM</Link>
              <Link href="/leads/email-only" className="hover:text-gray-800">Email Leads</Link>
              <Link href="/rdp" className="hover:text-gray-800">RDP</Link>
              <Link href="/webmail/office365-webmail" className="hover:text-gray-800">Office365 Webmail</Link>
              <Link href="/register" className="hover:text-gray-800">Register</Link>
              <Link href="/log-in" className="hover:text-gray-800">Log In</Link>
            </nav>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            © {new Date().getFullYear()} xLeet. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
