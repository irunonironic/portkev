import LeafCursorTrail from "./components/LeafCursorTrail";

import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    label: "Twitter",
    href: "https://x.com/fymkev",
    icon: FaTwitter,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1082094113450631168",
    icon: FaDiscord,
  },
  {
    label: "Telegram",
    href: "https://t.me/fymkev",
    icon: FaTelegramPlane,
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <section className="portfolio-card" aria-labelledby="intro-title">
        <h1 id="intro-title">hey, i&apos;m kevin.</h1>
        <div className="portfolio-section">
          <p>I could sell sand to a camel.</p>
          <p>got a strong product that needs marketing?</p>
          <p>
            email me.{" "}
            <a href="mailto:kevonsocials@gmail.com">kevonsocials@gmail.com</a>
          </p>
        </div>
        <nav className="social-links" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a key={link.label} href={link.href}>
                <Icon className="social-icon" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </section>
      <LeafCursorTrail />
    </main>
  );
}
