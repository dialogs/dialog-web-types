/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

export type Field<P> = {
  value: P,
  error: ?Error,
  pending: boolean
};

export type Binding = {
  unbind: () => void
};
