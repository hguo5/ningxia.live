# ningxia.live · 柠下乐会

The website for 柠下乐会 (Live Music & Karaoke), built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Preview locally

```sh
npm install      # first time only
npm run dev      # then open http://localhost:4321
```

## Add a new event

1. Put the poster in `public/img/events/` named by event number, e.g. `10.jpg`. Keep it under ~1000 px tall.
2. Create `src/events/10.md`:

```md
---
num: 10
date: 2026-12-20        # YYYY-MM-DD
time: "19:00"           # optional, 24-hour, Bay Area time
endTime: "22:00"        # optional
title: 活动主题
subtitle: English title # optional
place: San Jose         # city only for private venues
price: 免费              # optional
signup: Eventbrite      # optional
signupUrl: https://...  # optional
cover: /img/events/10.jpg
---
活动介绍写在这里。
```

3. Commit and push. The site rebuilds in about a minute.

Events dated today or later show as **下一场** (next) on the home page; past ones move into **往期活动** automatically (the site rebuilds daily).

### After an event

Add any of these to the event's file:

```yaml
album: https://photos.app.goo.gl/...      # full album link
photos: [/img/events/10/1.jpg, /img/events/10/2.jpg]
videos: [YouTubeVideoID1, YouTubeVideoID2]
performers: [演出者 · 歌曲, 开放麦 · 卡拉OK]
```

For a landscape cover photo instead of a poster, add `coverShape: landscape`.

## Site settings

`src/site.config.ts` holds the organizer bio and links, the WeChat QR code, the donation link and the email signup. Anything left `null` is hidden.

## Calendar feed

`https://ningxia.live/calendar.ics` lists every event. People can subscribe to it from the home page.
