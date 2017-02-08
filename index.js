/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

export type AvatarPlaceholder = 'empty' | 'lblue' | 'blue' | 'purple' |
                                'red' | 'orange' | 'yellow' | 'green';

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

export type Binding = {
  unbind: () => void
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
  peer: PeerInfo,
  counter: number,
  text: string,
  date: Date,
  state: string,
  sender: string,
  showSender: boolean,
  isHighlighted: boolean,
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

export type MessageContentContact = {
  type: 'contact',
  name: string,
  photo64: string,
  phones: string[],
  emails: string[]
};

export type MessageContentDocument = {
  type: 'document',
  preview: string,
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
  preview: string,
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

export type MessageMediaImage = {
  type: 'image',
  content: {
    url: string,
    width: number,
    height: number,
    fileSize: string
  }
};

export type MessageMediaWebsite = {
  type: 'webpage',
  content: {
    url: ?string,
    title: ?string,
    description: ?string,
    image: ?{
      url: string,
      width: number,
      height: number,
      fileSize: string
    }
  }
};

export type MessageMediaAudio = {
  type: 'audio',
  content: {
    fileUrl: string,
    fileSize: number,
    mimeType: string,
    duration: number
  }
};

export type MessageMedia = MessageMediaImage | MessageMediaWebsite | MessageMediaAudio;

export type MessageContentText = {
  type: 'text',
  text: string,
  media: ?MessageMedia,
  extensions: RawData[]
};

export type MessageContentUnsupported = {
  type: 'unsupported'
};

export type MessageContent = MessageContentUnsupported |
                             MessageContentContact |
                             MessageContentDocument |
                             MessageContentLocation |
                             MessageContentPhoto |
                             MessageContentService |
                             MessageContentSticker |
                             MessageContentText |
                             MessageContentVoice;

export type MessageReaction = {
  uids: number[],
  reaction: string,
  isOwnSet: boolean
};

export type MessageOverlay = {
  useShort: boolean,
  dateDivider: string
};

export type MessageState = 'pending' | 'sent' | 'received' | 'read' | 'error' | 'unknown';

export type Message = {
  rid: string,
  date: string,
  fullDate: Date,
  sender: ?PeerInfo,
  content: MessageContent,
  reactions: MessageReaction[],
  state: MessageState,
  sortKey: string,
  sortDate: number,
  isOut: boolean,
  isOnServer: boolean
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
  isOwnedByMe: ?boolean,
  stickers: Sticker[]
};

export type CallState = 'calling' | 'connecting' | 'in_progress' | 'ended';

export type Call = {
  state: CallState,
  peer: Peer,
  members: PeerInfo[],
  isMuted: boolean,
  isOutgoing: boolean
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
  nextOffset: string
};

export type Typing = {
  typing: ?string,
  members: number[]
};

export type ProfileSettings = {
  isSendByEnter: boolean,
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

export type ChatInfo = (
  { type: 'user', user: ?User, online: ?UserOnline } |
  { type: 'group', group: ?Group, online: ?GroupOnline }
);
