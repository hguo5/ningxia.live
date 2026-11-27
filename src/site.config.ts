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

  subscribe: {
    wechatQr: null as string | null, // e.g. '/img/wechat-qr.png'
    email: null as string | null, // e.g. a newsletter signup URL
  },

  // Events #01–#03 have no details yet; set to false once they are added as event files.
  showEarlyEventsNote: true,
};
