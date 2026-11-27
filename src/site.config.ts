// Site-wide settings. Leave a value as null/empty to hide that element on the site.
export const site = {
  name: '柠下乐会',
  tagline: '柠檬树下的音乐派对',
  domain: 'ningxia.live',
  email: 'hi@ningxia.live',

  organizer: {
    name: '郭辉 Hui Guo',
    bio: {
      zh: '白天是 Quora 的机器学习工程师，周末是柠下乐会的主理人。',
      en: 'Machine learning engineer at Quora by day, host of Ningxia Live on weekends.',
    },
    photo: null as string | null, // e.g. '/img/hui.jpg'
    links: [
      { label: { zh: '个人主页', en: 'Personal site' }, href: 'https://hguo5.github.io' },
      // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
    ],
  },

  // 柠下乐会 is a brand of GoLive Musician's League.
  golive: {
    name: "GoLive Musician's League",
    nameZh: 'GoLive 音乐人联盟',
    url: 'https://golive.music/',
    aboutUrl: 'https://golive.music/about',
    donateUrl: 'https://golive.music/donate' as string | null,
  },

  // Tips go to the Ningxia Live Venmo Business profile (not tax-deductible, separate from GoLive).
  tips: {
    venmoHandle: 'ningxialive',
    venmoUrl: 'https://venmo.com/u/ningxialive',
    venmoQr: '/img/venmo-qr.jpg' as string | null,
  },

  subscribe: {
    // MailerLite embedded form (Forms → Embedded forms). Set to null to hide the email signup.
    mailerlite: { account: '2828632', form: '205281810674878463' } as { account: string; form: string } | null,
    wechatQr: null as string | null, // e.g. '/img/wechat-qr.png'
    email: null as string | null, // e.g. a newsletter signup URL
  },

  // Events #01–#03 have no details yet; set to false once they are added as event files.
  showEarlyEventsNote: true,
};
