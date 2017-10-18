/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

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

export type MessageMediaInteractiveButton = {
  type: 'button',
  value: string,
  label?: ?string
};

export type MessageMediaInteractiveSelectOption = {
  value: string,
  label: string
}

export type MessageMediaInteractiveSelect = {
  type: 'select',
  options: MessageMediaInteractiveSelectOption[],
  label?: ?string,
  defaultValue?: ?string
};

export type MessageMediaInteractiveWidget =
  | MessageMediaInteractiveButton
  | MessageMediaInteractiveSelect;

export type MessageMediaInteractiveConfirm = {
  text?: ?string,
  title?: ?string,
  ok?: ?string,
  dismiss?: ?string
};

export type MessageMediaInteractiveStyle = 'primary' | 'danger' | 'default';

export type MessageMediaInteractiveAction = {
  id: string,
  style?: ?MessageMediaInteractiveStyle,
  widget: MessageMediaInteractiveWidget,
  confirm?: ?MessageMediaInteractiveConfirm
};

export type MessageMediaInteractiveActionGroup = {
  title?: ?string,
  description?: ?string,
  actions: MessageMediaInteractiveAction[]
};

export type MessageMediaInteractive = {
  type: 'interactive',
  content: MessageMediaInteractiveActionGroup[]
};

export type MessageMedia =
  | MessageMediaImage
  | MessageMediaAudio
  | MessageMediaWebsite
  | MessageMediaInteractive;
