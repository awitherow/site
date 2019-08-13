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
    id: "fb",
    component: FacebookShareButton,
    shareComponent: FacebookShareCount,
  },
  {
    id: "li",
    component: LinkedinShareButton,
    shareComponent: null,
  },
  {
    id: "tw",
    component: TwitterShareButton,
    shareComponent: null,
  },
  {
    id: "pi",
    component: PinterestShareButton,
    shareComponent: PinterestShareCount,
  },
  {
    id: "email",
    component: EmailShareButton,
    shareComponent: null,
  },
  {
    id: "wa",
    component: WhatsappShareButton,
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
    id: "tum",
    component: TumblrShareButton,
    shareComponent: TumblrShareCount,
  },
  {
    id: "lj",
    component: LivejournalShareButton,
    shareComponent: null,
  },
  {
    id: "mr",
    component: MailruShareButton,
    shareComponent: null,
  },
  {
    id: "vib",
    component: ViberShareButton,
    shareComponent: null,
  },
  {
    id: "wp",
    component: WorkplaceShareButton,
    shareComponent: null,
  },
  {
    id: "line",
    component: LineShareButton,
    shareComponent: null,
  },
  {
    id: "po",
    component: PocketShareButton,
    shareComponent: null,
  },
  {
    id: "ip",
    component: InstapaperShareButton,
    shareComponent: null,
  },
  {
    id: "email",
    component: EmailShareButton,
    shareComponent: null,
  },
];
