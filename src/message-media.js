/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { BotApiAttachment } from './bot-api';

export type MessageMediaImage = {
  type: 'image',
  content: {
    url: string,
    width: number,
    height: number,
    fileSize: string
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

export type MessageMediaInteractive = {
  type: 'interactive',
  content: BotApiAttachment
};

export type MessageMedia =
  | MessageMediaImage
  | MessageMediaAudio
  | MessageMediaWebsite
  | MessageMediaInteractive;
