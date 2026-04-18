import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/HeZ2z/hez-notes",
    linkTitle: `${SITE.title} GitHub 仓库`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:hez2z@foxmail.com",
    linkTitle: `给 ${SITE.title} 发送邮件`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: "通过 WhatsApp 分享这篇资料",
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: "分享到 Facebook",
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: "分享到 X",
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: "通过 Telegram 分享这篇资料",
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: "分享到 Pinterest",
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=分享一篇复习资料&body=",
    linkTitle: "通过邮件分享这篇资料",
    icon: IconMail,
  },
] as const;
