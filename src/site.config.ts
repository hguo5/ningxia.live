// Site-wide settings. Leave a value as null/empty to hide that element on the site.
export const site = {
  name: '柠下乐会',
  tagline: '柠檬树下的音乐派对',
  domain: 'ningxia.live',

  organizer: {
    name: '郭辉 Hui Guo',
    bio: '白天是 Quora 的机器学习工程师，周末是柠下乐会的主理人。',
    photo: null as string | null, // e.g. '/img/hui.jpg'
    links: [
      { label: '个人主页', href: 'https://hguo5.github.io' },
      // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
    ],
  },

  golive: {
    url: 'https://www.golive.music',
    donateUrl: null as string | null, // e.g. a Venmo link
  },

  subscribe: {
    wechatQr: null as string | null, // e.g. '/img/wechat-qr.png'
    email: null as string | null, // e.g. a newsletter signup URL
  },

  // Events #01–#03 have no details yet; set to false once they are added as event files.
  showEarlyEventsNote: true,
};
