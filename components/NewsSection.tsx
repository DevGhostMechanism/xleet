const newsItems = [
  {
    title: "Some Improvements ✅",
    body: "We made some improvements on website performance and checkers ✔",
    date: "2025-05-28 11:36:26",
  },
  {
    title: "New Payment Method 💰",
    body: "$ Now we added USDT [TRC20] as a stable & fast payment method in xLeet , Enjoy.",
    date: "2022-12-03 09:15:15",
  },
  {
    title: "⚠️ Be carefull, and use only https://xle.su",
    body: "Some scammers make a fake site with xleet name! Please be careful and use only https://xle.su and save our backup domains!",
    date: "2024-05-07 12:45:03",
  },
  {
    title: "SMTP Fresh added! 📩",
    body: "We have fixed our SMTP problem and added fresh SMTP! 🖥",
    date: "2022-04-29 11:37:14",
  },
  {
    title: "🌸🇯🇵 Japan Sakura Mailers",
    body: "Now you can purchase our Sakura jp mailers it's the best for only 10$ in the mailers section: https://i.imgur.com/3UOj2g0.png",
    date: "2021-11-17 19:06:59",
  },
  {
    title: "🎁 Gift",
    body: "win $5 bonus for your first $25 deposit payment added in your balance.",
    date: "2021-10-04 21:52:10",
  },
  {
    title: "🎉 Great News 🎉 Bonus Back! 💰",
    body: "Bonus back again for [ 🔥 Limited time ⏰ ] To BTC 💰, Now you will take a 10% bonus to Payment type [ BTC 💰 ].",
    date: "2021-09-03 13:38:35",
  },
  {
    title: "🔒🚨🧅 Our Onion Domain - Save It !!",
    body: "For all user in xleet - Now we have an onion domain [ xleetg4krpki4irlaelwacpfhfxnhpizuipxc7f3aztu7265fqvinfad.onion ] - 📌 Save it to found website if any problem happened for domain - and you can using it with [ Tor ] Software - ⚠️ To not fall victim to any scam website using xleet name.",
    date: "2021-08-08 22:47:31",
  },
  {
    title: "🔒🔒🔒 Our Only Domains!",
    body: "xleet.io || xleet.to || xleet.is || xleet.pro || xleet.site || xleet.pw || xleet.sh - Please Save them! ⚠️ We dont have another Domain Name!",
    date: "2021-08-07 09:57:53",
  },
  {
    title: "$ Free Bonus - Update!",
    body: "every time your deposit starts from $50 you will take a 10% bonus to Payment type [ PM ] and 10%bonus to Payment type [ BTC ] .",
    date: "2021-09-03 13:35:41",
  },
  {
    title: "🌐 RDP Browser install",
    body: "How to install the browser on the rdp: https://mega.nz/file/xz4S2TIa#Ntk8OsNkqMnbepii_dXu_sbq5jbu7ArypCBahbK0joc",
    date: "2021-06-16 11:04:19",
  },
  {
    title: "⚠️ We not responsible for any contact outside Xleet",
    body: "We don't have ICQ or any other communication tool you can contact us only with the ticket system",
    date: "2021-02-18 14:11:38",
  },
  {
    title: "📢 New Leads Section",
    body: "Now we have a new section in Leads for 100% checked emails lists!",
    date: "2020-05-26 12:49:12",
  },
  {
    title: "⚠️ Warning",
    body: "Users who try XSS/ Sql Injection , will banned automatically.",
    date: "2020-05-31 08:04:44",
  },
];

export default function NewsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-50">
        <span>☰</span>
        <span className="font-semibold text-gray-700 text-sm">Our News</span>
      </div>
      <ul className="divide-y divide-gray-100 px-4 py-2">
        {newsItems.map((item, i) => (
          <li key={i} className="py-2">
            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.body}</p>
            <p className="text-gray-400 text-xs mt-1">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
