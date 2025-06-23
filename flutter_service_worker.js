'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bbccf8fa964ea4ec43958de00fb4a5aa",
"assets/AssetManifest.bin.json": "980ff4e1aa4e0d37a670d379e0e06646",
"assets/AssetManifest.json": "af850ae0b15235fea219fa253875a2ea",
"assets/assets/allplaceholder.png": "f0dfd4fb152d061ce98fb4304cc0251c",
"assets/assets/answered_right.png": "d9eea3802891f1b5a6a60083619770d5",
"assets/assets/answered_wrong.png": "9bd56e2906fa9c1841bc949a63dd18bf",
"assets/assets/app-logo-playstore.png": "a669df982801d3770129b83e19fd76c3",
"assets/assets/app_bg_main.png": "316c64f335a098e1656e51343b8f8090",
"assets/assets/app_logo.png": "0d0d6ef345b66eeca2ae776e205dbe80",
"assets/assets/dashboard_evaluate.png": "121af84af65bf09173c4013e1c291a39",
"assets/assets/dashboard_learn.png": "68180394172099495ab0590021d4999b",
"assets/assets/dashboard_study_lab.png": "64d6e15da8fa7ee06ca8d59845c65f3d",
"assets/assets/dashboard_test.png": "8efa8243319674f29786f18bc8cb1116",
"assets/assets/dumm1.png": "c63c25851b4a9a9ece38347cccd9ff90",
"assets/assets/fb.png": "41e2dbd789658c996301eddb1eed198d",
"assets/assets/home_analysis_progress_analysis.gif": "b1c0f3075672d67f80f41631a4184854",
"assets/assets/ic_about_new.png": "bef9bc76dbc42b95b9a0e715ba2501ae",
"assets/assets/ic_analytics_home-nbg.png": "c6a9bad083491f7c027d633abd85379b",
"assets/assets/ic_analytics_home.png": "12f14626e7a9482da0aec1205ed5da4a",
"assets/assets/ic_blogs_new.png": "11eedc34cfa27465fbe5be616bf75fbd",
"assets/assets/ic_contact_us_new.png": "ffaae776db2a205491fb1e1a9b20bec1",
"assets/assets/ic_faq_new.png": "11f173d6ac9689cad3bfa9b6fbfe42b9",
"assets/assets/ic_logout_new.png": "2a5ead3077f03bb82872595cdd829384",
"assets/assets/ic_my_plans.png": "f8ca97594d8a336cd82366933362f050",
"assets/assets/ic_no_record_found.png": "90273d917653dcc64b3cf4b4c0ebd0ae",
"assets/assets/ic_plans_new.png": "2e9898ed3476c737e5efa62b9591d8ea",
"assets/assets/ic_privacy_policy_new.png": "92d51e79a2dd62cf67b6ffb418f7f9d6",
"assets/assets/ic_profile_new.png": "62ecc9b5f33443bdaf5d81e26862fc44",
"assets/assets/ic_refund_policy_new.png": "d552144c0ff92fc3bea40c7dafd6a791",
"assets/assets/ic_share_new.png": "744e3601cfcdff189aa26c95573b4fe5",
"assets/assets/ic_switch_class.png": "dc13686f12d2cf3c309f49802dfb1e95",
"assets/assets/ic_switch_grade_new.png": "421733b365eb2100e30c4f480d8635d4",
"assets/assets/ic_terms_condition_new.png": "78ce5de5cb7557e396c13ea6c0a81de8",
"assets/assets/insta.png": "cef1505973a218706ee31696648d81c8",
"assets/assets/linked.png": "049696e2e3861543deec6344c517a37c",
"assets/assets/lottie_json/juvi_screen.json": "8ea5504ff10ad519f008ce0018664f22",
"assets/assets/lottie_json/success.json": "e74ec49172d1a09aac3dc14e9f6011be",
"assets/assets/mcq_time.png": "bd0969432c7a216e0a14e5d63709c7d0",
"assets/assets/more_dashboard_horiz.png": "f44dbeb96afa3c161a513c5a054b781d",
"assets/assets/navigation_dash.png": "7f4687bff88c422d7351887d135fd778",
"assets/assets/pdf.png": "afc3464a813be722147eda66807245dd",
"assets/assets/skipped_question.png": "304fcb64d262356f266e25ab151fcc48",
"assets/assets/splash_back.png": "0da18479ffd40603df77e38da06dd8f6",
"assets/assets/splash_front.png": "4cbf2780ba8a5c17188d3c8098801b67",
"assets/assets/test.png": "aae92c9b80d16ce4935cc899d2ceeddb",
"assets/assets/video_icon.png": "9f0e19795a9d78a123c4aa05ba4dcb54",
"assets/assets/vidwathLogo.png": "f4e16c0640bacf289ac68a738ead906a",
"assets/assets/vidwath_logo.png": "eb3da0bf9b11a92a36b6e49a695c33fe",
"assets/assets/whats_new_bg.png": "475f5fa240d85b46628edf1e663fb328",
"assets/assets/youtube.png": "3523b4158962dba7b0a9f40682437d8a",
"assets/FontManifest.json": "ae72fc72a6de69fd5d75fbfc960da886",
"assets/fonts/Jameel%2520Noori%2520Nastaleeq.ttf": "4b37da11a19bd60a9432a7603aada419",
"assets/fonts/MaterialIcons-Regular.otf": "9dfb5c39005f0d296640e8da1716cd8c",
"assets/fonts/robotoslab_regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/NOTICES": "6b5dd587cb25644279ef9ff27c6c1381",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1b39894a8f402e8654bb47abed99d857",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "a6acd4c045e53668112ad5fe6db0bf7b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bc31239977bfb2d9695a78600c4e04e4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2016e98eb723c6b182127a5e809e28e9",
"/": "2016e98eb723c6b182127a5e809e28e9",
"main.dart.js": "20852f97cdecefab92f23764d22ab180",
"manifest.json": "4505b02d265a78fec57a5d2b0736eb27",
"version.json": "12fab30af0d03f3b56d0ae68e1769df7"};
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
