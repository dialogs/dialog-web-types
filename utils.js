/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer, Group } from './index';

export function isUserPeer(peer: Peer): boolean {
  return peer.type === 'user';
}

export function isGroupPeer(peer: Peer): boolean {
  return peer.type === 'group';
}

export function isSamePeer(peer1: ?Peer, peer2: ?Peer): boolean {
  if (peer1 && peer2) {
    return peer1.id === peer2.id && peer1.type === peer2.type;
  }

  return false;
}

export function isChannel(group: Group): boolean {
  return group.type === 'channel';
}
