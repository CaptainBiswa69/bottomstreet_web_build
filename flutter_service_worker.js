'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7301bdea4e73bb720c88f6f38e993822",
"index.html": "49032a6e5d625c5367d1886dfbb21d67",
"/": "49032a6e5d625c5367d1886dfbb21d67",
"firebase-messaging-sw.js": "d037d8e822ddc245742c95948c9da8d3",
"main.dart.js": "58f301737fea1611ec1a612c63b48d91",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "368fbef786ed7af4cb8c91c507db6793",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d59bd9323837846d874f64b8fe2deac",
"assets/AssetManifest.json": "ef7818441857f7970e07bc8ddc4a96d4",
"assets/NOTICES": "ec018bce20f3a586489f027d5eca5415",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c64165d26ac5d23e2e6d1cc82b043186",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "5c717055b6683529243c292ab78aa797",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/bottomStreet.svg": "7655f047aa43cea780c0d13a762ca471",
"assets/AssetManifest.bin": "4e1a8b0bc6d08b011e318b6a333a6d3e",
"assets/fonts/MaterialIcons-Regular.otf": "31d90a111e9067e3a961f8e48fdec14a",
"assets/Assets/csvjson.json": "5418c85459fda291c5d42c10e17e0a99",
"assets/Assets/all_stocks_list.json": "4ca7444b26e4d0d8bfb571810f787748",
"assets/Assets/indices.json": "0b0821d1c68aefaf37dfc2bac3e64478",
"assets/Assets/Icons/playIcon.svg": "b9f30fd2c3d519c5cabf13e9017b3d4f",
"assets/Assets/Icons/us_rounded.png": "bf619fc7356ef98d53f210d201fad45b",
"assets/Assets/Icons/logout.svg": "9b15b9b7adcd49f0340feccb815037e5",
"assets/Assets/Icons/in_rounded.png": "a70748fdbbc90e9701e580bd15600920",
"assets/Assets/Icons/lock.svg": "568d2a6ee8fb8848ba08dbaf2bc0627e",
"assets/Assets/Icons/googleIconPng.png": "e7efd5a37e4f64d8151ce0546798ef96",
"assets/Assets/Icons/Group.svg": "efb02f5a99bcb65c48549abbfc0fc150",
"assets/Assets/Icons/googleIconSvg.svg": "995a6b729895eee0b6f5936fe1df456d",
"assets/Assets/Icons/us_flag.svg": "bcdab86f405136be0d0b26e094b8f420",
"assets/Assets/Icons/BSLogoPng.png": "0adc25f83fc4ee0a829a89cf41d91f60",
"assets/Assets/Icons/subsciptionLogo.svg": "bb2e944afa5eced777f8c4195ba191e1",
"assets/Assets/Icons/playIconPng.png": "99a7ba556b4d64e984c4a306e8cd6ed3",
"assets/Assets/Icons/delete.svg": "8dc95fdfbf48cbe7bd6d6f655ed7ead9",
"assets/Assets/Icons/BottomStreetLogo.png": "3690ed90895909209f177be7b8143418",
"assets/Assets/Icons/bulletpoint.png": "f78ee964dd8c2513c13ab22c74d87a61",
"assets/Assets/Icons/twitter_blue.svg": "5fcad9cb6687049fe80fc9d93aab1442",
"assets/Assets/tickerSymbol.json": "b699fd3e6740cd19fe1ae30412fe55aa",
"assets/Assets/nav/news.png": "1e02113d3185523647cc0e58d9086c14",
"assets/Assets/nav/watchlist.svg": "e76a155e77f7baf4ff9870dd09546d79",
"assets/Assets/nav/home.svg": "3f63144d5ca492bf460669b800919044",
"assets/Assets/nav/radar.svg": "812e72608196b4085ed1aa39e974ee1f",
"assets/Assets/nav/home.png": "4046805dff6a866f0ce533292b68373c",
"assets/Assets/nav/watchlist.png": "344c1bd85b6b8b589b3b96f361869cd0",
"assets/Assets/nav/news.svg": "6cb70505bf8c78c062d6ccb140c60d1f",
"assets/Assets/nav/notification.svg": "1f0c139bd1d474cc7e101084a3069bab",
"assets/Assets/nav/profile.png": "9937db8943e9d834877d1c7fa0bc6492",
"assets/Assets/nav/light-bulb.png": "5d9e1467c81cf1a6bc80250d9978e857",
"assets/Assets/nav/bottomStreet.svg": "7655f047aa43cea780c0d13a762ca471",
"assets/Assets/nav/profile.svg": "a1ee42d19179fef0b829c9ed4e464fa1",
"assets/Assets/nav/read.svg": "2abbda06bf82507a5a94f878d9efe6b4",
"assets/Assets/nav/pitstop.svg": "5a48f14dd6a7d64f283979d90a0461ae",
"assets/Assets/stocks_info.json": "e5975e124b6180233bca1958c62b8b7e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
