import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
  // --
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} from "react-share";

export default [
  {
    id: "facebook",
    component: FacebookShareButton,
    shareComponent: FacebookShareCount,
  },
  {
    id: "linkedin",
    component: LinkedinShareButton,
    shareComponent: null,
  },
  {
    id: "twitter",
    component: TwitterShareButton,
    shareComponent: null,
  },
  {
    id: "pinterest",
    component: PinterestShareButton,
    shareComponent: PinterestShareCount,
  },
  {
    id: "email",
    component: EmailShareButton,
    shareComponent: null,
  },
  {
    id: "reddit",
    component: RedditShareButton,
    shareComponent: RedditShareCount,
  },
  {
    id: "whatsapp",
    component: WhatsappShareButton,
    shareComponent: null,
  },
  {
    id: "pocket",
    component: PocketShareButton,
    shareComponent: null,
  },
  {
    id: "instapaper",
    component: InstapaperShareButton,
    shareComponent: null,
  },
  {
    id: "tumblr",
    component: TumblrShareButton,
    shareComponent: TumblrShareCount,
  },
  {
    id: "line",
    component: LineShareButton,
    shareComponent: null,
  },
  {
    id: "viber",
    component: ViberShareButton,
    shareComponent: null,
  },
  {
    id: "livejournal",
    component: LivejournalShareButton,
    shareComponent: null,
  },
  {
    id: "vk",
    component: VKShareButton,
    shareComponent: VKShareCount,
  },
  {
    id: "ok",
    component: OKShareButton,
    shareComponent: OKShareCount,
  },
  {
    id: "mailru",
    component: MailruShareButton,
    shareComponent: null,
  },
  {
    id: "workplace",
    component: WorkplaceShareButton,
    shareComponent: null,
  },
];
