// UI text in both languages. Chinese is the main language (served at /), English lives at /en/.
import { u } from './lib/url';

export type Lang = 'zh' | 'en';
export const LANGS: Lang[] = ['zh', 'en'];

// Site path for a language: lp('en', '/events/09/') -> '/en/events/09/' (with base path applied).
export function lp(lang: Lang, path: string): string {
  return u(lang === 'en' ? `/en${path}` : path);
}

export const t = {
  zh: {
    htmlLang: 'zh-CN',
    switchLabel: 'EN',
    switchAria: 'Switch to English',
    siteName: '柠下乐会',
    tagline: '柠檬树下的音乐派对',
    homeTitle: '柠下乐会 · 柠檬树下的音乐派对',
    description:
      '柠下乐会 · 柠檬树下的音乐派对。GoLive 音乐人联盟（GoLive Musician’s League）旗下的音乐品牌：后院派对、现场音乐、卡拉OK。',
    parentZh: 'GoLive 音乐人联盟旗下品牌',
    parentEn: 'A brand of GoLive Musician’s League',
    nav: { next: '下一场', past: '往期活动', about: '关于', support: '支持', join: '加入我们', home: '首页' },
    mainNav: '主导航',

    eyebrow: 'LIVE MUSIC & KARAOKE · 湾区',
    h1: ['柠檬树下的', '音乐派对'],
    lead: '柠下乐会是 GoLive 音乐人联盟旗下的音乐品牌。我们的派对大多在 San Jose 一棵柠檬树下的后院：音乐、美食，和一群好朋友。有时是现场音乐，有时是卡拉OK。',
    nextLabel: '下一场',
    comingSoon: '即将公布',
    subscribeFirst: '订阅后第一时间知道',
    getNotified: '订阅活动通知',
    details: '查看详情',
    lastLabel: '上一场',

    pastTitle: '往期活动',
    pastCount: (n: number) => `已经办了 ${n} 场 · 每一场都有自己的主题`,
    earlyNote: '柠下[01]–[03] · 资料整理中',
    photosSoon: '现场照片整理中',

    aboutEyebrow: '关于柠下乐会 · GoLive 旗下品牌',
    aboutP: [
      '柠下乐会（Ningxia Live）是 GoLive 音乐人联盟（GoLive Musician’s League）旗下的音乐品牌，也是主理人郭辉的个人项目。',
      '大多数活动就在主理人家柠檬树下的后院：有音乐、有吃的、有好朋友。有时是现场音乐，有时是卡拉OK。没有特别注明地点的活动，都在 San Jose 的这个后院（具体地址不在网上公开）。',
      'GoLive 是一个 501(c)(3) 非营利组织，自 2023 年起致力于推动硅谷的现场音乐文化，支持本地音乐人、Jam 和新乐队，完全由社区捐助支持。',
    ],
    aboutGoLive: '了解 GoLive →',
    posterAlt: '柠下乐会品牌海报：柠檬树下的音乐派对',

    organizerEyebrow: '主理人',

    supportEyebrow: '支持柠下乐会',
    supportTitle: '让柠檬树下的音乐继续',
    supportP:
      '柠下乐会是 GoLive 音乐人联盟下的一个项目。GoLive 是 501(c)(3) 非营利组织，捐款可抵税。如果你的公司使用 Benevity 捐款平台，可以指定捐给柠下乐会，很多公司还会配捐（employer match）。',
    benevityTitle: '通过 Benevity 捐款',
    steps: [
      '登录公司的 Benevity 捐款页面',
      '搜索',
      '选择项目 “柠下乐会” 或 “ULTimeet”，再填写金额',
      '如果公司提供配捐，记得申请 match',
    ],
    copy: '复制',
    copied: '已复制',
    otherWays: '其他捐款方式（GoLive）→',
    taxNote: '捐款可在法律允许范围内抵税。',

    joinTitle: '别错过下一场',
    joinP: '把柠下乐会的活动日历加到你的手机上，新活动会自动出现。',
    joinWechat: '也可以扫码进微信群。',
    subscribeCal: '订阅活动日历',
    emailAlerts: '邮件提醒',
    calSmall: ['也可以', '下载日历文件', '，或在 Google 日历里用这个网址添加：'],
    wechatAlt: '柠下乐会微信群二维码',

    footerPre: '柠下乐会 Live Music & Karaoke 是 ',
    footerPost: ' 旗下的音乐品牌。',
    footerGoLive: 'GoLive 音乐人联盟（GoLive Musician’s League）',
    footer2: 'GoLive 是一个 501(c)(3) 非营利组织',
    donate: '捐款支持',
    contact: '联系我们',
    contactP: '有问题、想表演或想合作？写信给我们：',

    // event page
    backToPast: '← 往期活动',
    upcomingBadge: '即将举行',
    pastBadge: '已结束',
    when: '时间',
    where: '地点',
    cost: '费用',
    signup: '报名',
    addressNote: '（具体地址不在网上公开）',
    photos: '现场照片',
    fullAlbum: '完整相册 →',
    photosSoonLong: '现场照片整理中，敬请期待。',
    highlights: '精彩片段',
    performers: '演出名单',
    prev: '← 上一场',
    next: '下一场',
    nextSoon: '即将公布 · 订阅通知',
    prevNextAria: '上一场和下一场',
    posterWord: '海报',
    photoWord: '现场照片',
    videoWord: '视频',
  },

  en: {
    htmlLang: 'en',
    switchLabel: '中文',
    switchAria: '切换到中文',
    siteName: 'Ningxia Live 柠下乐会',
    tagline: 'A music party under the lemon tree',
    homeTitle: 'Ningxia Live 柠下乐会 · A music party under the lemon tree',
    description:
      'Ningxia Live (柠下乐会) · A music party under the lemon tree. A music brand of GoLive Musician’s League: backyard parties, live music and karaoke in the Bay Area.',
    parentZh: 'GoLive 音乐人联盟旗下品牌',
    parentEn: 'A brand of GoLive Musician’s League',
    nav: { next: 'Next', past: 'Past events', about: 'About', support: 'Support', join: 'Join us', home: 'Home' },
    mainNav: 'Main navigation',

    eyebrow: 'LIVE MUSIC & KARAOKE · BAY AREA',
    h1: ['A music party', 'under the lemon tree'],
    lead: 'Ningxia Live (柠下乐会, “under the lemon tree”) is a music brand of GoLive Musician’s League. Most of our parties happen in a backyard under a lemon tree in San Jose: music, food and good people. Sometimes it’s live music, sometimes karaoke.',
    nextLabel: 'Next',
    comingSoon: 'Coming soon',
    subscribeFirst: 'Subscribe to hear about it first',
    getNotified: 'Get notified',
    details: 'Details',
    lastLabel: 'Last time',

    pastTitle: 'Past events',
    pastCount: (n: number) => `${n} parties so far · each with its own theme`,
    earlyNote: '#01–#03 · details coming soon',
    photosSoon: 'Photos coming soon',

    aboutEyebrow: 'About Ningxia Live · a GoLive brand',
    aboutP: [
      'Ningxia Live (柠下乐会, “under the lemon tree”) is a music brand of GoLive Musician’s League (GoLive 音乐人联盟) and a personal project of its host, Hui Guo.',
      'Most of our events happen in the host’s backyard under a lemon tree: music, food and good people. Sometimes it’s live music, sometimes karaoke. If an event doesn’t list a location, it’s in this backyard in San Jose (we don’t share the exact address online).',
      'GoLive is a 501(c)(3) nonprofit building Silicon Valley’s live music culture since 2023, supporting local musicians, jam sessions and emerging bands. It is 100% community-funded.',
    ],
    aboutGoLive: 'About GoLive →',
    posterAlt: 'Ningxia Live brand poster: a music party under the lemon tree',

    organizerEyebrow: 'Host',

    supportEyebrow: 'Support Ningxia Live',
    supportTitle: 'Keep the music going under the lemon tree',
    supportP:
      'Ningxia Live is a project under GoLive Musician’s League, a 501(c)(3) nonprofit, so donations are tax-deductible. If your company uses Benevity for giving, you can direct your gift to our project (listed as “柠下乐会” or “ULTimeet”), and many companies will match it.',
    benevityTitle: 'Give through Benevity',
    steps: [
      'Log in to your company’s Benevity giving page',
      'Search for',
      'Choose the project “柠下乐会” or “ULTimeet”, then enter an amount',
      'Request your employer match, if your company offers one',
    ],
    copy: 'Copy',
    copied: 'Copied',
    otherWays: 'Other ways to give (GoLive) →',
    taxNote: 'Contributions are tax-deductible to the extent allowed by law.',

    joinTitle: 'Don’t miss the next one',
    joinP: 'Add the Ningxia Live calendar to your phone and new events will show up automatically.',
    joinWechat: 'You can also scan the code to join our WeChat group.',
    subscribeCal: 'Subscribe to the calendar',
    emailAlerts: 'Email alerts',
    calSmall: ['Or', 'download the calendar file', ', or add this URL in Google Calendar: '],
    wechatAlt: 'Ningxia Live WeChat group QR code',

    footerPre: 'Ningxia Live 柠下乐会 is a music brand of ',
    footerPost: '.',
    footerGoLive: 'GoLive Musician’s League (GoLive 音乐人联盟)',
    footer2: 'GoLive is a 501(c)(3) nonprofit',
    donate: 'Donate',
    contact: 'Contact',
    contactP: 'Questions, want to perform, or want to collaborate? Email us:',

    backToPast: '← Past events',
    upcomingBadge: 'Upcoming',
    pastBadge: 'Past',
    when: 'When',
    where: 'Where',
    cost: 'Cost',
    signup: 'Sign up',
    addressNote: ' (exact address not shared online)',
    photos: 'Photos',
    fullAlbum: 'Full album →',
    photosSoonLong: 'Photos coming soon.',
    highlights: 'Highlights',
    performers: 'Performers',
    prev: '← Previous',
    next: 'Next',
    nextSoon: 'Coming soon · get notified',
    prevNextAria: 'Previous and next event',
    posterWord: 'poster',
    photoWord: 'photo',
    videoWord: 'video',
  },
};
