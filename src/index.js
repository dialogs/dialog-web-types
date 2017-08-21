/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type {
  Field,
  Binding
} from './utils';
import type {
  BotApiActionConfirm,
  BotApiActionButton,
  BotApiSelectOption,
  BotApiSelectOptionGroup,
  BotApiActionSelect,
  BotApiAttachmentAction
} from './bot-api';
import type {
  MessageMedia,
  MessageMediaImage,
  MessageMediaAudio,
  MessageMediaWebsite,
  MessageMediaInteractive
} from './message-media';

export type {
  Field,
  Binding,

  BotApiActionConfirm,
  BotApiActionButton,
  BotApiSelectOption,
  BotApiSelectOptionGroup,
  BotApiActionSelect,
  BotApiAttachmentAction,

  MessageMedia,
  MessageMediaImage,
  MessageMediaAudio,
  MessageMediaWebsite,
  MessageMediaInteractive
};

export type AvatarPlaceholder =
  | 'empty'
  | 'lblue'
  | 'blue'
  | 'purple'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green';

export type AuthError = {
  tag: string,
  message: string,
  canTryAgain: boolean
};

export type AuthResult = {
  step: string,
  error?: AuthError
};

export type AuthSession = {
  id: number,
  holder: string,
  appId: number,
  appTitle: string,
  deviceTitle: string,
  authTime: Date,
  authLocation: string,
  latitude: number,
  longitude: number
};

export type Contact = {
  uid: number,
  name: string,
  placeholder: AvatarPlaceholder,
  avatar: ?string
};

export type PeerType = 'user' | 'group';

export type Peer = {
  id: number,
  type: PeerType,
  key?: string
};

export type PeerInfoType = 'user' | 'group' | 'channel';

export type PeerInfo = {
  peer: Peer,
  type: PeerInfoType,
  title: string,
  userName: ?string,
  avatar: ?string,
  bigAvatar: ?string,
  placeholder: AvatarPlaceholder
};

export type Dialog = {
  peer: PeerInfo,
  counter: number,
  text: string,
  date: string,
  state: string,
  sender: string,
  showSender: boolean,
  isHighlighted: boolean
};

export type Recent = {
  info: PeerInfo,
  counter: number,
  message: Message,
  isMuted: boolean
};

export type ShortRecent = {
  peer: PeerInfo,
  counter: number
};

export type DialogGroup = {
  key: string,
  title: string,
  shorts: ShortRecent[]
};

export type ArchivedDialogs = {
  shorts: ShortRecent[],
  nextOffset: ?string
};

export type ChatSettings = {
  isNotificationsEnabled: boolean
};

export type SearchEntity = {
  peerInfo: PeerInfo
};

export type SearchPeerEntity = {
  peer: Peer,
  title: string,
  avatar: ?string,
  matchString: ?string
};

export type RawData = {
  type: string,
  data: Uint8Array
};

export type ImageThumb = {
  base64: string,
  width: number,
  height: number
};

export type MessageContentContact = {
  type: 'contact',
  name: string,
  photo64: string,
  phones: string[],
  emails: string[]
};

export type MessageContentDocument = {
  type: 'document',
  preview: ?string,
  fileUrl: ?string,
  fileName: ?string,
  fileSize: ?string,
  fileExtension: ?string,
  isUploading: boolean
};

export type MessageContentLocation = {
  type: 'location',
  place: ?string,
  street: ?string,
  latitude: number,
  longitude: number
};

export type MessageContentPhoto = {
  type: 'photo',
  width: number,
  height: number,
  preview: ?string,
  fileUrl: ?string,
  fileName: ?string,
  fileSize: ?string,
  fileExtension: ?string,
  isUploading: boolean
};

export type MessageContentService = {
  type: 'service',
  text: string
};

export type MessageContentSticker = {
  type: 'sticker',
  emoji: ?string,
  image: ?string,
  width: number,
  height: number
};

export type MessageContentVoice = {
  type: 'voice',
  duration: number,
  fileUrl: ?string,
  fileName: ?string,
  fileSize: ?string,
  fileExtension: ?string,
  isUploading: boolean
};

export type MessageContentVideo = {
  type: 'video',
  width: number,
  height: number,
  preview: ?string,
  duration: number,
  fileUrl: ?string,
  fileName: ?string,
  fileSize: ?string,
  fileExtension: ?string,
  isUploading: boolean
};

export type MessageContentText = {
  type: 'text',
  text: string,
  media: Array<?MessageMedia>,
  extensions: RawData[]
};

export type MessageContentUnsupported = {
  type: 'unsupported'
};

export type MessageContent =
  | MessageContentText
  | MessageContentPhoto
  | MessageContentVoice
  | MessageContentVideo
  | MessageContentService
  | MessageContentContact
  | MessageContentSticker
  | MessageContentDocument
  | MessageContentLocation
  | MessageContentUnsupported;

export type MessageReaction = {
  code: string,
  count: number,
  uids: number[],
  isOwnSet: boolean
};

export type MessageOverlay = {
  useShort: boolean,
  dateDivider: string
};

export type MessageState =
  | 'pending'
  | 'sent'
  | 'received'
  | 'read'
  | 'error'
  | 'unknown';

export type MessageAttachmenReply = {
  type: 'reply',
  messages: Message[]
};

export type MessageAttachmenForward = {
  type: 'forward',
  from: ?PeerInfo,
  messages: Message[]
};

export type MessageAttachment =
  | MessageAttachmenReply
  | MessageAttachmenForward;

export type Message = {
  rid: string,
  mid: string,
  date: string,
  fullDate: Date,
  sender: ?PeerInfo,
  content: MessageContent,
  reactions: MessageReaction[],
  attachment: ?MessageAttachment,
  state: MessageState,
  sortKey: string,
  sortDate: number,
  isOut: boolean,
  isOnServer: boolean,
  isEdited?: boolean
};

export type MessagesUpdate = {
  messages: Message[],
  overlays: MessageOverlay[],
  isLoaded: boolean,
  receiveDate: number,
  readDate: number,
  readByMeDate: number
};

export type Phone = {
  title: string,
  number: string
};

export type Email = {
  title: string,
  email: string
};

export type User = {
  id: number,
  name: string,
  nick: ?string,
  about: ?string,
  sex: string,
  timeZone: ?string,
  phones: Phone[],
  emails: Email[],
  avatar: ?string,
  bigAvatar: ?string,
  placeholder: AvatarPlaceholder,
  isContact: boolean,
  isBot: boolean,
  isOnline: boolean,
  isBlocked: boolean
};

export type UserOnline = {
  message: string,
  isOnline: boolean
};

export type UserBlocked = {
  isBlocked: boolean
};

export type GroupMember = {
  peerInfo: PeerInfo,
  isAdmin: boolean,
  canKick: boolean
};

export type GroupType = 'group' | 'channel';

export type Group = {
  id: number,
  type: GroupType,
  name: string,
  about: ?string,
  avatar: ?string,
  bigAvatar: ?string,
  placeholder: AvatarPlaceholder,
  adminId: number,
  members: GroupMember[],
  isMember: boolean,
  canSendMessage: ?boolean,
  shortname: ?string,
  topic: ?string
};

export type GroupOnline = {
  total: number,
  online: number,
  message: string
};

export type Sticker = {
  id: number,
  emoji: ?string,
  image: ?string
};

export type StickerPack = {
  id: number,
  title: ?string,
  stickers: Sticker[],
  isOwnedByMe: ?boolean
};

export type CallState =
  | 'connecting_to_server'
  | 'connecting_to_peer'
  | 'ringing_outgoing'
  | 'ringing_incoming'
  | 'connecting'
  | 'in_progress'
  | 'ended';

export type CallVideo = {
  stream: MediaSource,
  isMirrored: boolean
};

export type Call = {
  id: string,
  peer: PeerInfo,
  state: CallState,
  startTime: number,
  members: PeerInfo[],
  ownVideos: CallVideo[],
  theirVideos: CallVideo[],
  isMuted: boolean,
  isOutgoing: boolean,
  isCameraOn: boolean,
  isScreenSharingOn: boolean
};

export type CallInfo = {
  id: string,
  date: Date,
  initiator: PeerInfo,
  recipient: PeerInfo,
  duration: number,
  isAnswered: boolean,
  isFinished: boolean
};

export type RecentCalls = {
  calls: CallInfo[],
  nextOffset: ?string
};

export type Typing = {
  typing: ?string,
  members: number[]
};

export type ProfileSettings = {
  isSendByEnter: boolean,
  isCounterIncludeMuted: boolean,
  isSoundEffectsEnabled: boolean,
  isOnlyMentionNotifications: boolean,
  isGroupsNotificationsEnabled: boolean,
  isShowNotificationsTextEnabled: boolean
};

export type ConnectionStatus = 'online' | 'connecting' | 'updating';

export type Counter = {
  counter: number
};

export type BotCommand = {
  command: string,
  description: string
};

export type ChatInfo =
  | { type: 'user', user: ?User, online: ?UserOnline }
  | { type: 'group', group: ?Group, online: ?GroupOnline };
