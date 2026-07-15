const TURN_USER = 'myuser';
const TURN_PASS = 'mypassword';
const TURN_HOST = '187.77.9.39';

export const rtcConfig = {
  iceServers: [
    // Your own STUN server (coturn can provide STUN)
    {
      urls: `stun:${TURN_HOST}:3478`,
    },

    // Optional Google STUN fallbacks
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },

    // TURN UDP
    {
      urls: `turn:${TURN_HOST}:3478`,
      username: TURN_USER,
      credential: TURN_PASS,
    },

    // TURN TCP
    {
      urls: `turn:${TURN_HOST}:3478?transport=tcp`,
      username: TURN_USER,
      credential: TURN_PASS,
    },
  ],

  iceCandidatePoolSize: 10,
  bundlePolicy: 'max-bundle',
  rtcpMuxPolicy: 'require',
  iceTransportPolicy: 'all',
};