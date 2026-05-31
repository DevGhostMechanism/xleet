"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { logout } from "@/app/actions/auth";

/* ── shared dropdown hook ── */
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);
  return { open, setOpen, ref };
}

const Chevron = () => (
  <svg
    className="w-3 h-3 ml-0.5 shrink-0"
    style={{ color: "#555" }}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const BlueBadge = ({ n }: { n: number }) => (
  <span
    className="text-white text-xs px-1.5 py-0.5 rounded ml-2 shrink-0 font-normal"
    style={{ backgroundColor: "#007bff" }}
  >
    {n.toLocaleString()}
  </span>
);

/* ── left nav dropdown with count badges ── */
type DropItem = { label: string; count: number; href?: string; fire?: boolean };

function LeftDropdown({
  id,
  icon,
  label,
  items,
  scrollable,
}: {
  id: string;
  icon: React.ReactNode;
  label: string;
  items: DropItem[];
  scrollable?: boolean;
}) {
  const { open, setOpen, ref } = useDropdown();
  return (
    <li
      ref={ref}
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        id={id}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 whitespace-nowrap"
        style={{
          color: "#000",
          fontSize: "15px",
          padding: "0.5rem 0.3rem",
        }}
      >
        {icon}
        <span>{label}</span>
        <Chevron />
      </button>
      {open && (
        <div
          className={`absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg z-50 ${scrollable ? "max-h-80 overflow-y-auto" : ""}`}
          style={{ minWidth: "11rem" }}
        >
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href ?? "#"}
              className="flex items-center justify-between px-4 py-1.5 text-sm hover:bg-gray-100 gap-4"
              style={{ color: "#212529" }}
            >
              <span className="flex items-center gap-1">
                {item.fire && (
                  <span className="text-orange-500 text-xs">🔥</span>
                )}
                {item.label}
              </span>
              <BlueBadge n={item.count} />
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

/* ── right-side dropdowns ── */
function NotifDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <li
      ref={ref}
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-2"
        style={{ color: "#000", fontSize: "15px" }}
      >
        <i className="fa fa-bell" style={{ color: "#dc3545" }} />
        <span
          className="text-white text-xs px-1.5 py-0.5 rounded leading-none notification_count"
          style={{ backgroundColor: "#007bff" }}
        >
          0
        </span>
        <Chevron />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 bg-white border border-gray-200 rounded shadow-lg z-50"
          style={{ minWidth: "11rem" }}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            No Notifications
          </a>
        </div>
      )}
    </li>
  );
}

function TicketsDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <li
      ref={ref}
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-2"
        style={{ color: "#000", fontSize: "15px" }}
      >
        <span>Tickets</span>
        <span
          className="text-white text-xs px-1.5 py-0.5 rounded leading-none"
          style={{ backgroundColor: "#28a745" }}
        >
          0
        </span>
        <Chevron />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 bg-white border border-gray-200 rounded shadow-lg z-50"
          style={{ minWidth: "11rem" }}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            My Tickets
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            My Reports
          </a>
        </div>
      )}
    </li>
  );
}

function AccountDropdown() {
  const { open, setOpen, ref } = useDropdown();
  return (
    <li
      ref={ref}
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-2"
        style={{ color: "#000", fontSize: "15px" }}
      >
        <span>Account</span>
        <i className="fa fa-user-secret" />
        <Chevron />
      </button>
      {open && (
        <div
          className="absolute top-full right-0 bg-white border border-gray-200 rounded shadow-lg z-50"
          style={{ minWidth: "11rem" }}
        >
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            Settings <i className="fa fa-cog" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            <span className="flex items-center gap-2">
              Orders
              <span
                className="text-white text-xs px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "#28a745" }}
              >
                0
              </span>
            </span>
            <i className="fa fa-shopping-cart" />
          </a>
          <Link
            href="/add-balance"
            className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
            style={{ color: "#212529" }}
          >
            Add Balance <i className="fa fa-money-bill-alt" />
          </Link>
          <hr className="border-gray-100 my-0.5" />
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-100"
              style={{ color: "#212529" }}
            >
              Logout <i className="fa fa-door-open" />
            </button>
          </form>
        </div>
      )}
    </li>
  );
}

/* ── dropdown data ── */
const hostsItems: DropItem[] = [
  { label: "Cpanels", count: 99296, href: "/cpanels" },
  { label: "Shells", count: 31857, href: "/shells" },
  { label: "SSH\\WHM", count: 1165, href: "/ssh" },
  { label: "RDP", count: 4003, href: "/rdp" },
];

const sendItems: DropItem[] = [
  { label: "SMTP", count: 17001, href: "/smtp" },
  { label: "Mailers", count: 72, href: "/mailers" },
];

const leadsItems: DropItem[] = [
  {
    label: "100% Checked Email list",
    count: 29,
    fire: true,
    href: "/leads/checked-email-list",
  },
  { label: "Email Only", count: 17118, href: "/leads/email-only" },
  {
    label: "Combo Email:Password",
    count: 9993,
    href: "/leads/combo-email-password",
  },
  {
    label: "Combo Username:Password",
    count: 3,
    href: "/leads/combo-username-password",
  },
  { label: "Email Access", count: 1442, href: "/leads/email-access" },
  { label: "Combo Email:Hash", count: 1194, href: "/leads/combo-email-hash" },
  { label: "Phone Number Only", count: 4355, href: "/leads/phone-number-only" },
  {
    label: "Combo Phone:Password",
    count: 11,
    href: "/leads/combo-phone-password",
  },
  { label: "Full Data", count: 33, href: "/leads/full-data" },
  { label: "Social Media Data", count: 1, href: "/leads/social-media-data" },
];

const businessItems: DropItem[] = [
  { label: "Cpanel Webmail", count: 12629, href: "/webmail/cpanel-webmail" },
  { label: "Godaddy Webmail", count: 774, href: "/webmail/godaddy-webmail" },
  {
    label: "Office Godaddy Webmail",
    count: 6058,
    href: "/webmail/office-godaddy-webmail",
  },
  {
    label: "Office365 Webmail",
    count: 694413,
    href: "/webmail/office365-webmail",
  },
  {
    label: "Rackspace Webmail",
    count: 215,
    href: "/webmail/rackspace-webmail",
  },
  { label: "Ionos Webmail", count: 801, href: "/webmail/ionos-webmail" },
];

const accountsItems: DropItem[] = [
  {
    label: "Email Marketing {SendGrid, Amazon Aws.... etc}",
    count: 5378,
    href: "/accounts/email-marketing",
  },
  {
    label: "Webmail Business",
    count: 19637,
    href: "/accounts/webmail-business",
  },
  { label: "Marketing Tools", count: 11, href: "/accounts/marketing-tools" },
  { label: "Hosting/Domain", count: 479, href: "/accounts/hosting-domain" },
  { label: "Games", count: 32, href: "/accounts/games" },
  { label: "Graphic / Developer", count: 90 },
  { label: "VPN/Socks Proxy", count: 3011 },
  { label: "Shopping {Amazon, eBay .... etc}", count: 59 },
  { label: "Program { antivirus, Adobe .... etc}", count: 156 },
  {
    label: "Stream { Music, Netflix, iptv, HBO, bein sport, WWE ...etc}",
    count: 1393,
  },
  { label: "Dating", count: 537 },
  { label: "Learning { udemy, lynda, .... etc.}", count: 524 },
  { label: "Torrent / File Host", count: 101 },
  { label: "Voip / Sip", count: 10 },
  { label: "Social Media", count: 11 },
  { label: "Other", count: 1378 },
];

/* ── mobile accordion section ── */
function MobileSection({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: DropItem[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-gray-100 rounded"
        style={{ color: "#000" }}
      >
        <span className="flex items-center gap-2">
          {icon} {label}
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="pl-4 flex flex-col gap-0.5 pb-1">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href ?? "#"}
              className="flex items-center justify-between px-3 py-1.5 text-sm hover:bg-gray-100 rounded"
              style={{ color: "#212529" }}
            >
              <span className="flex items-center gap-1">
                {item.fire && (
                  <span className="text-orange-500 text-xs">🔥</span>
                )}
                {item.label}
              </span>
              <BlueBadge n={item.count} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── main component ── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{ boxShadow: "0 0 17.55px 9.45px rgba(0,0,0,0.05)" }}
    >
      <div className="px-3 flex items-center h-14 w-full">
        {/* Logo */}
        <Link
          href="/home"
          className="flex items-center shrink-0"
          style={{
            margin: "0 12px",
            paddingTop: "4px",
            textDecoration: "none",
          }}
        >
          <i
            className="fab fa-2x fa-redhat middle"
            style={{ color: "#ff6e8b", verticalAlign: "middle" }}
          />
          <span
            className="middle"
            style={{
              fontSize: "19px",
              verticalAlign: "middle",
              marginLeft: "8px",
              color: "#000",
              fontWeight: 500,
            }}
          >
            xLeet
          </span>
        </Link>

        {/* Desktop left nav */}
        <ul className="hidden md:flex items-center m-0 p-0" style={{ flex: 8 }}>
          <LeftDropdown
            id="navbarDropdownHosts"
            label="Hosts"
            items={hostsItems}
            icon={<i className="fa fa-server" style={{ color: "orange" }} />}
          />
          <LeftDropdown
            id="navbarDropdownSend"
            label="Send"
            items={sendItems}
            icon={
              <i className="fa fa-paper-plane" style={{ color: "#007bff" }} />
            }
          />
          <LeftDropdown
            id="navbarDropdownLeads"
            label="Leads"
            items={leadsItems}
            icon={
              <i className="fa fa-address-book" style={{ color: "#ff6e8b" }} />
            }
          />
          <LeftDropdown
            id="navbarDropdownBusiness"
            label="Business"
            items={businessItems}
            icon={<i className="fa fa-briefcase" style={{ color: "green" }} />}
          />
          <LeftDropdown
            id="navbarDropdownAccounts"
            label="Accounts"
            items={accountsItems}
            scrollable
            icon={<i className="fa fa-users" style={{ color: "#FF8B6E" }} />}
          />
        </ul>

        {/* Desktop right nav */}
        <ul
          className="hidden md:flex items-center m-0 p-0 ml-auto"
          style={{ flex: 5, justifyContent: "flex-end" }}
        >
          <NotifDropdown />
          <li className="list-none">
            <Link href="/add-balance" className="flex items-center px-1 py-1">
              <span
                className="text-white text-xs px-2 py-0.5 rounded font-medium flex items-center gap-1"
                style={{ backgroundColor: "#dc3545" }}
              >
                <span id="buyer_balance">0.00</span>
                <i className="fa fa-plus" style={{ fontSize: "10px" }} />
              </span>
            </Link>
          </li>
          <TicketsDropdown />
          <AccountDropdown />
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2"
          style={{ color: "#555" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fa ${mobileOpen ? "fa-times" : "fa-bars"} fa-lg`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-3 py-2 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
          {/* Top utility row */}
          <div className="flex items-center flex-wrap gap-2 py-1 px-1 mb-1">
            <button
              className="flex items-center gap-1 text-sm px-2 py-1 hover:bg-gray-100 rounded"
              style={{ color: "#000" }}
            >
              <i className="fa fa-bell" style={{ color: "#dc3545" }} />
              <span
                className="text-white text-xs px-1.5 rounded notification_count"
                style={{ backgroundColor: "#007bff" }}
              >
                0
              </span>
            </button>
            <Link
              href="/add-balance"
              className="text-white text-xs px-2 py-1 rounded font-medium flex items-center gap-1"
              style={{ backgroundColor: "#dc3545" }}
            >
              <span id="buyer_balance_mobile">0.00</span>
              <i className="fa fa-plus" style={{ fontSize: "10px" }} />
            </Link>
            <button
              className="flex items-center gap-1 text-sm px-2 py-1 hover:bg-gray-100 rounded"
              style={{ color: "#000" }}
            >
              Tickets{" "}
              <span
                className="text-white text-xs px-1.5 rounded ml-1"
                style={{ backgroundColor: "#28a745" }}
              >
                0
              </span>
            </button>
          </div>

          <hr className="my-1 border-gray-200" />

          {/* Accordion sections */}
          <MobileSection
            icon={<i className="fa fa-server" style={{ color: "orange" }} />}
            label="Hosts"
            items={hostsItems}
          />
          <MobileSection
            icon={
              <i className="fa fa-paper-plane" style={{ color: "#007bff" }} />
            }
            label="Send"
            items={sendItems}
          />
          <MobileSection
            icon={
              <i className="fa fa-address-book" style={{ color: "#ff6e8b" }} />
            }
            label="Leads"
            items={leadsItems}
          />
          <MobileSection
            icon={<i className="fa fa-briefcase" style={{ color: "green" }} />}
            label="Business"
            items={businessItems}
          />
          <MobileSection
            icon={<i className="fa fa-users" style={{ color: "#FF8B6E" }} />}
            label="Accounts"
            items={accountsItems}
          />

          <hr className="my-1 border-gray-200" />

          {/* Account links */}
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded"
            style={{ color: "#000" }}
          >
            Settings <i className="fa fa-cog" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded"
            style={{ color: "#000" }}
          >
            <span className="flex items-center gap-2">
              Orders
              <span
                className="text-white text-xs px-1.5 rounded"
                style={{ backgroundColor: "#28a745" }}
              >
                0
              </span>
            </span>
            <i className="fa fa-shopping-cart" />
          </a>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded"
            style={{ color: "#000" }}
          >
            My Tickets
          </a>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded"
            style={{ color: "#000" }}
          >
            My Reports
          </a>
          <Link
            href="/add-balance"
            className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded"
            style={{ color: "#000" }}
          >
            Add Balance <i className="fa fa-money-bill-alt" />
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-gray-100 rounded"
              style={{ color: "#dc3545" }}
            >
              Logout <i className="fa fa-door-open" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
