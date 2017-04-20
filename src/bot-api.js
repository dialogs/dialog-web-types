/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

export type BotApiActionConfirm = {
  text: string,
  title?: string,
  ok_text?: string,
  dismiss_text?: string
};

type BotApiBaseAction<TYPE: string> = {
  type: TYPE,
  name: string,
  text: string,
  value?: string,
  confirm?: BotApiActionConfirm,
  style?: 'default' | 'primary' | 'danger'
};

export type BotApiActionButton = BotApiBaseAction<'button'>;

export type BotApiSelectOption = {
  text: string,
  value: string
};

export type BotApiSelectOptionGroup = {
  text: string,
  options: BotApiSelectOption[]
};

export type BotApiActionSelect = BotApiBaseAction<'select'> & {
  options?: BotApiSelectOption[],
  option_groups?: BotApiSelectOptionGroup[],
  data_source?: 'static' | 'users' | 'channels' | 'conversations' | 'external',
  selected_options?: BotApiSelectOption[],
  min_query_length?: number
};

export type BotApiAttachmentAction =
  | BotApiActionButton
  | BotApiActionSelect;

export type BotApiAttachment = {
  title?: string,
  fallback: string,
  callback_id: string,
  color?: string,
  actions: BotApiAttachmentAction[]
};
