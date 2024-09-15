'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "895938744387edb4229c614d9bf14e36",
"assets/AssetManifest.bin.json": "d872a33e6d1c3939da9cfad2ccfce9fb",
"assets/AssetManifest.json": "169019be48a91e4e66b97fc2cd9231ef",
"assets/assets/images/jess/birthdaycake.webp": "8b69c0c02162d11ca780e4dc1f182bc6",
"assets/assets/images/jess/body.webp": "17e8f02fb94d9b6d1229000b0291a71c",
"assets/assets/images/jess/Eyes.webp": "e5956bddbab224f520268fc3ff09a2cf",
"assets/assets/images/jess/lips.webp": "dac6b0be2cb95b3e9f77f7f911a74e1e",
"assets/assets/images/jess/photo1.webp": "52ff7c075d579e9acf955bedb38acb3a",
"assets/assets/images/jess/photo2.webp": "8344e96243c7b59b84aeea92a540aed7",
"assets/assets/images/jess/photo3.webp": "12c75bdadf9fb47232614e2141121d4f",
"assets/assets/images/jess/photo4.webp": "00912cd9b784946e51fd32721c2e8bfd",
"assets/assets/images/jess/photo5.webp": "5ed7083ced440284def85e91857a53de",
"assets/assets/images/jess/photo6.webp": "ac19b93623068b7b3a6d76b6b2817f78",
"assets/assets/images/jess/photo7.webp": "c5e7a3cbc4f3ae6d9564a3dd67a18163",
"assets/assets/images/jess/photo8.webp": "047ff1aa58ca5519f8bdb92840acf322",
"assets/assets/images/jess/smile.webp": "254cd099b7f4adfe54a84237da917d2b",
"assets/assets/sounds/%255BSPOTIFY-DOWNLOADER_14-09-24_06-18-20-094_47_6.mp3": "96efedca99325c19d6cfb3b1a55df0e0",
"assets/assets/sounds/black.wav": "469e4200c8daa07f72ecc63aedd3f016",
"assets/assets/sounds/cant%2520smile%25201_14-09-24_06-19-38-726_13_89.mp3": "b9dd8becce6f4f692b7538722ca17267",
"assets/assets/sounds/cant%2520smile%25201_14-09-24_06-19-38-726_13_89_14-09-24_18-16-58-783_78_24.wav": "9044d2e424e21c4b654ccd41cf855ef4",
"assets/assets/sounds/cant%2520smile%25202_14-09-24_06-20-25-373_80_85.mp3": "031969d7ac4774dd8e751608c1326005",
"assets/assets/sounds/die%2520with%2520a%2520smile_14-09-24_20-24-37-417_50_60_14-09-24_20-28-51-547_79_11.wav": "1e2a91b7f67f5989a5cba5ccd3a11699",
"assets/assets/sounds/here%2520with%2520me%25202_14-09-24_06-13-36-410_38_24.mp3": "667b8a6f5942101fee2fe8df7585d1c6",
"assets/assets/sounds/here%2520with%2520me%25202_14-09-24_06-13-36-410_38_24_14-09-24_18-19-12-188_1_55.wav": "0552c5a675e93bab94b53bd590ba55c5",
"assets/assets/sounds/hopelessly%2520in%2520love_14-09-24_06-14-43-366_41_55.mp3": "6df74c0641cd2e11e668758bdd14815f",
"assets/assets/sounds/hopelessly%2520in%2520love_14-09-24_06-14-43-366_41_55_14-09-24_18-19-02-023_2_59.wav": "54db78466c4eae5411d5cb06ff537f03",
"assets/assets/sounds/i%2520will%2520wait_14-09-24_20-28-37-908_40_44_14-09-24_20-29-11-844_54_15.wav": "945b057f5e25aeb51e965547d61059d8",
"assets/assets/sounds/it%2520will%2520rain_14-09-24_06-17-29-381_79_22.mp3": "1b8b6522f45762f444497de193b6e0e1",
"assets/assets/sounds/it%2520will%2520rain_14-09-24_06-17-29-381_79_22_14-09-24_18-14-56-174_91_13.wav": "da95a6d73bac11ce3f1ab656407a8640",
"assets/assets/sounds/lost%2520in%2520your%2520eyes_14-09-24_06-15-29-175_24_70.mp3": "d94054ad2820fb10f621c4e20a52e1d8",
"assets/assets/sounds/lost%2520in%2520your%2520eyes_14-09-24_06-15-29-175_24_70_14-09-24_18-17-22-686_9_47.wav": "be3cc19339a6c55c9c3d5cc7de8055b5",
"assets/assets/sounds/lover_14-09-24_18-20-49-605_86_56.wav": "c6d0245c6d0bd25f02fbac890edc93c3",
"assets/assets/sounds/Lovesong_14-09-24_20-27-29-307_63_1_14-09-24_20-29-04-921_50_55.wav": "11e53a35ffd489dcc5c51417401d9d07",
"assets/assets/sounds/lucky%25201_14-09-24_06-30-56-156_82_35.mp3": "bc43fd4ee221571a47c3c61c71ed3ced",
"assets/assets/sounds/lucky%25201_14-09-24_06-30-56-156_82_35_14-09-24_18-15-52-559_98_48.wav": "e895b6185a778156f388eb8e281cf079",
"assets/assets/sounds/lucky%25202_14-09-24_06-31-47-356_92_5.mp3": "80935de74432a68088adfd119fd2e1ae",
"assets/assets/sounds/lucky%25202_14-09-24_06-31-47-356_92_5_14-09-24_18-15-42-906_71_29.wav": "314822dc236a0d65aa9873394b5b8ba9",
"assets/assets/sounds/lyrics1.mp3": "bca972fa6645580593c0e072845b2e84",
"assets/assets/sounds/my%2520love%25201_14-09-24_06-23-34-982_49_84_14-09-24_18-16-34-710_86_70.wav": "0d6a40b9d151ffd280f7eb33bb08fe1e",
"assets/assets/sounds/my%2520love%25202_14-09-24_06-25-39-861_72_65.mp3": "9c5f6407e3f2c5a656114293ed8b7377",
"assets/assets/sounds/my_love.mp3": "4cfe5e32228a9df82b464125fa2c3fe5",
"assets/assets/sounds/my_way_14-09-24_18-19-48-987_87_60_14-09-24_18-19-56-808_38_70.wav": "88cffa14aff424a665e22038bbce2f83",
"assets/assets/sounds/My_way_of_life.mp3": "d4c986157712f83426ab2e0ba15aa04e",
"assets/assets/sounds/Nature_14-09-24_18-20-25-204_67_36.wav": "0f3527ea160e73171a3d4107fd1e26fc",
"assets/assets/sounds/Nature_of_daylight.mp3": "5355217183b2d228e07bfdea812288fa",
"assets/assets/sounds/no_sunlight_14-09-24_18-21-28-923_3_65.wav": "da95a6d73bac11ce3f1ab656407a8640",
"assets/assets/sounds/photo1.wav": "ab61fb52fa363e2cb5bf42c76c387f54",
"assets/assets/sounds/photo2.wav": "6f210fab0886af91aab9d94e6c57f1d6",
"assets/assets/sounds/photo3.wav": "f3d968e224a1f87c81570b4508e2ff44",
"assets/assets/sounds/photo4.wav": "db41df421d14af79afa9d86f7be2f0c4",
"assets/assets/sounds/photo5.wav": "712eb85010125708c4d160461ce6bb8b",
"assets/assets/sounds/photo6.wav": "ce71a0ffece61d1763c11e024b66c3cb",
"assets/assets/sounds/photo7.wav": "9abcfaceb6ced6009eacda41e8998f48",
"assets/assets/sounds/SPOTIFY-DOWNLOADER_14-09-24_06-06-15-833_96_1.mp3": "818568842b375b3b664f87aa21106cc7",
"assets/assets/sounds/SPOTIFY-DOWNLOADER_14-09-24_06-11-47-605_67_39.mp3": "c98c8f086f5be7768a80d669869c0c6d",
"assets/assets/sounds/where%2520do%2520i%2520begin_14-09-24_06-34-14-995_71_98.mp3": "2a07135e5dd6e042e510f56ddc10d413",
"assets/assets/sounds/where%2520do%2520i%2520begin_14-09-24_06-34-14-995_71_98_14-09-24_18-15-23-088_78_85.wav": "25a46e4bc50f6b7b20126cc067b34377",
"assets/assets/videos/1.mov": "6a88f3fc176d580d41d24f39f19d839b",
"assets/assets/videos/1.mp4": "f2eb3982e479531691b7f7670984af85",
"assets/assets/videos/22.mp4": "f04bb1e12306dd65494c31c0fff4b595",
"assets/assets/videos/date.mp4": "934d07d23f4ca544d80fb5b548d85907",
"assets/assets/videos/hair.mov": "b5d7f332421c6e460654ba61fdd40ecd",
"assets/assets/videos/hair.mp4": "c2079d21b53ada059452d355c791e009",
"assets/assets/videos/personality.mov": "3f183289af51c47907bd71f37f8a385d",
"assets/assets/videos/personality.mp4": "76f1234f843fdae52171774d157477bc",
"assets/assets/videos/work.mov": "16857e51c9858493473d84f8d279a17a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa843b6082fe6b2ea14da9f5dcef545d",
"assets/NOTICES": "848ff28347e0e33f2238a950f8f753c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "55b6fc36ec98bd30a5994305629fc64d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c297782f3ea002ee977379909d35fdc",
"/": "0c297782f3ea002ee977379909d35fdc",
"main.dart.js": "50c704399ef71910f5d7180138cfadd3",
"manifest.json": "0482f7f6d95a41d4535204063f1818b8",
"version.json": "394433337cc51de724bac153035d7778"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
