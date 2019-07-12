importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00b42f0f2d4d370dae09.js",
    "revision": "fb6230ee316b435f18e16f714dd20795"
  },
  {
    "url": "/_nuxt/1fb7bf7fb99de0ca9f6e.js",
    "revision": "418b7ab0aab5db10e44ab8dbfc3e10f0"
  },
  {
    "url": "/_nuxt/283796bae2d1d08d1a9a.js",
    "revision": "c775c41143874898167328e47f9cbe80"
  },
  {
    "url": "/_nuxt/3aaf690410e0b5231e65.js",
    "revision": "a92046b3a6218ad9aa2063f8635de4d3"
  },
  {
    "url": "/_nuxt/4894d16721c4814753f0.js",
    "revision": "6cf7d06c6ec191b185b2b23e4c8a9de2"
  },
  {
    "url": "/_nuxt/5da34c633814c34ae913.js",
    "revision": "ccd55ba32f05955d8c6ccba789df18da"
  },
  {
    "url": "/_nuxt/66a7c2547212a41b7590.js",
    "revision": "0f83f5987cef5d0668f1e6977673cf34"
  },
  {
    "url": "/_nuxt/7e9f9fc8a171629ec019.js",
    "revision": "a6165451cf71d286ca1452270338d6d5"
  },
  {
    "url": "/_nuxt/7ef95451ae0a6ae7e9e0.js",
    "revision": "bacbf7a6d875cafed0cd3a50570d43d3"
  },
  {
    "url": "/_nuxt/ab152d637e63a81e6c89.js",
    "revision": "aa5d3a31817cc6e756e9a0da1400de94"
  },
  {
    "url": "/_nuxt/bcbac42fe93e66bd71e8.js",
    "revision": "7babe3b930ca2d15bd37663a43b343c2"
  },
  {
    "url": "/_nuxt/e30c1b48a5ff49536d09.js",
    "revision": "5fe148b9f31e83548e9331b39731fa45"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
