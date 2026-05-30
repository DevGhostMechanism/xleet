import type { MetadataRoute } from "next";

const BASE = "https://xleet.to";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/register`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/log-in`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Hosts
    { url: `${BASE}/cpanels`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/shells`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/ssh`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/rdp`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    // Send
    { url: `${BASE}/smtp`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/mailers`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    // Leads
    { url: `${BASE}/leads/checked-email-list`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/leads/email-only`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/leads/combo-email-password`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/leads/combo-username-password`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/email-access`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/combo-email-hash`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/phone-number-only`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/combo-phone-password`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/full-data`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/leads/social-media-data`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    // Webmail
    { url: `${BASE}/webmail/office365-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/webmail/cpanel-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/webmail/godaddy-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/webmail/office-godaddy-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/webmail/rackspace-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/webmail/ionos-webmail`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    // Accounts
    { url: `${BASE}/accounts/email-marketing`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/accounts/webmail-business`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/accounts/hosting-domain`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/accounts/marketing-tools`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/accounts/games`, lastModified: new Date(), changeFrequency: "daily", priority: 0.6 },
  ];
}
