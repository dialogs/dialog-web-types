/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import {
  isUserPeer,
  isGroupPeer,
  peerToString,
  isSamePeer,
  isChannel
} from '../utils';

describe('utils', () => {
  const user = { id: 1, type: 'user', key: 'u1' };
  const group = { id: 1, type: 'group', key: 'g1' };

  describe('isUserPeer', () => {
    it('should check if peer is user', () => {
      expect(isUserPeer(user)).toEqual(true);
      expect(isUserPeer(group)).toEqual(false);
    });
  });

  describe('isGroupPeer', () => {
    it('should check if peer is group', () => {
      expect(isGroupPeer(group)).toEqual(true);
      expect(isGroupPeer(user)).toEqual(false);
    });
  });

  describe('peerToString', () => {
    it('should return key if it present', () => {
      expect(peerToString(user)).toBe(user.key);
      expect(peerToString(group)).toBe(group.key);
    });

    it('should build key if it not present', () => {
      expect(peerToString({ id: 1, type: 'user' })).toEqual('u1');
      expect(peerToString({ id: 1, type: 'group' })).toEqual('g1');
    });
  });

  describe('isSamePeer', () => {
    it('should return false if one of args is null', () => {
      expect(isSamePeer(null, null)).toEqual(false);
      expect(isSamePeer(user, null)).toEqual(false);
      expect(isSamePeer(null, user)).toEqual(false);
    });

    it('should return true if peers are the same', () => {
      expect(isSamePeer(user, user)).toEqual(true);
      expect(isSamePeer(user, { id: 1, type: 'user' })).toEqual(true);
    });

    it('should return false if peers are not the same', () => {
      expect(isSamePeer(user, { id: 2, type: 'user' })).toEqual(false);
      expect(isSamePeer(user, { id: 2, type: 'group' })).toEqual(false);
    });
  });

  describe('isChannel', () => {
    it('should check if group is channel', () => {
      expect(isChannel({ type: 'group' })).toEqual(false);
      expect(isChannel({ type: 'channel' })).toEqual(true);
    });
  });
});
