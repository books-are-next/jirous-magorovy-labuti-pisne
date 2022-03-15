/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-e8bc935';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./favicon.png","./index.html","./magorovy_labuti_pisne_001.html","./magorovy_labuti_pisne_002.html","./magorovy_labuti_pisne_003.html","./magorovy_labuti_pisne_004.html","./magorovy_labuti_pisne_005.html","./magorovy_labuti_pisne_006.html","./magorovy_labuti_pisne_007.html","./magorovy_labuti_pisne_008.html","./magorovy_labuti_pisne_009.html","./magorovy_labuti_pisne_010.html","./magorovy_labuti_pisne_011.html","./magorovy_labuti_pisne_012.html","./magorovy_labuti_pisne_013.html","./magorovy_labuti_pisne_014.html","./magorovy_labuti_pisne_015.html","./magorovy_labuti_pisne_016.html","./magorovy_labuti_pisne_017.html","./magorovy_labuti_pisne_018.html","./magorovy_labuti_pisne_019.html","./magorovy_labuti_pisne_020.html","./magorovy_labuti_pisne_021.html","./magorovy_labuti_pisne_022.html","./magorovy_labuti_pisne_023.html","./magorovy_labuti_pisne_024.html","./magorovy_labuti_pisne_025.html","./magorovy_labuti_pisne_026.html","./magorovy_labuti_pisne_027.html","./magorovy_labuti_pisne_028.html","./magorovy_labuti_pisne_029.html","./magorovy_labuti_pisne_030.html","./magorovy_labuti_pisne_031.html","./magorovy_labuti_pisne_032.html","./magorovy_labuti_pisne_033.html","./magorovy_labuti_pisne_034.html","./magorovy_labuti_pisne_035.html","./magorovy_labuti_pisne_036.html","./magorovy_labuti_pisne_037.html","./magorovy_labuti_pisne_038.html","./magorovy_labuti_pisne_039.html","./magorovy_labuti_pisne_040.html","./magorovy_labuti_pisne_041.html","./magorovy_labuti_pisne_042.html","./magorovy_labuti_pisne_043.html","./magorovy_labuti_pisne_044.html","./magorovy_labuti_pisne_045.html","./magorovy_labuti_pisne_046.html","./magorovy_labuti_pisne_047.html","./magorovy_labuti_pisne_048.html","./magorovy_labuti_pisne_049.html","./magorovy_labuti_pisne_050.html","./magorovy_labuti_pisne_051.html","./magorovy_labuti_pisne_052.html","./magorovy_labuti_pisne_053.html","./magorovy_labuti_pisne_054.html","./magorovy_labuti_pisne_055.html","./magorovy_labuti_pisne_056.html","./magorovy_labuti_pisne_057.html","./magorovy_labuti_pisne_058.html","./magorovy_labuti_pisne_059.html","./magorovy_labuti_pisne_060.html","./magorovy_labuti_pisne_061.html","./magorovy_labuti_pisne_062.html","./magorovy_labuti_pisne_063.html","./magorovy_labuti_pisne_064.html","./magorovy_labuti_pisne_065.html","./magorovy_labuti_pisne_066.html","./magorovy_labuti_pisne_067.html","./magorovy_labuti_pisne_068.html","./magorovy_labuti_pisne_069.html","./magorovy_labuti_pisne_070.html","./magorovy_labuti_pisne_071.html","./magorovy_labuti_pisne_072.html","./magorovy_labuti_pisne_073.html","./magorovy_labuti_pisne_074.html","./magorovy_labuti_pisne_075.html","./magorovy_labuti_pisne_076.html","./magorovy_labuti_pisne_077.html","./magorovy_labuti_pisne_078.html","./magorovy_labuti_pisne_079.html","./magorovy_labuti_pisne_080.html","./magorovy_labuti_pisne_081.html","./magorovy_labuti_pisne_082.html","./magorovy_labuti_pisne_083.html","./magorovy_labuti_pisne_084.html","./magorovy_labuti_pisne_085.html","./magorovy_labuti_pisne_086.html","./magorovy_labuti_pisne_087.html","./magorovy_labuti_pisne_088.html","./magorovy_labuti_pisne_089.html","./magorovy_labuti_pisne_091.html","./magorovy_labuti_pisne_092.html","./magorovy_labuti_pisne_093.html","./magorovy_labuti_pisne_094.html","./magorovy_labuti_pisne_095.html","./magorovy_labuti_pisne_096.html","./magorovy_labuti_pisne_097.html","./magorovy_labuti_pisne_098.html","./magorovy_labuti_pisne_099.html","./magorovy_labuti_pisne_100.html","./magorovy_labuti_pisne_101.html","./magorovy_labuti_pisne_102.html","./magorovy_labuti_pisne_103.html","./magorovy_labuti_pisne_104.html","./magorovy_labuti_pisne_105.html","./magorovy_labuti_pisne_106.html","./magorovy_labuti_pisne_107.html","./magorovy_labuti_pisne_108.html","./magorovy_labuti_pisne_109.html","./magorovy_labuti_pisne_110.html","./magorovy_labuti_pisne_111.html","./magorovy_labuti_pisne_112.html","./magorovy_labuti_pisne_113.html","./magorovy_labuti_pisne_114.html","./magorovy_labuti_pisne_115.html","./magorovy_labuti_pisne_116.html","./magorovy_labuti_pisne_117.html","./magorovy_labuti_pisne_118.html","./magorovy_labuti_pisne_119.html","./magorovy_labuti_pisne_120.html","./magorovy_labuti_pisne_121.html","./magorovy_labuti_pisne_122.html","./magorovy_labuti_pisne_123.html","./magorovy_labuti_pisne_124.html","./magorovy_labuti_pisne_125.html","./magorovy_labuti_pisne_126.html","./magorovy_labuti_pisne_127.html","./magorovy_labuti_pisne_128.html","./magorovy_labuti_pisne_129.html","./magorovy_labuti_pisne_130.html","./magorovy_labuti_pisne_131.html","./magorovy_labuti_pisne_132.html","./magorovy_labuti_pisne_133.html","./magorovy_labuti_pisne_134.html","./magorovy_labuti_pisne_135.html","./magorovy_labuti_pisne_136.html","./magorovy_labuti_pisne_137.html","./magorovy_labuti_pisne_138.html","./magorovy_labuti_pisne_139.html","./magorovy_labuti_pisne_140.html","./magorovy_labuti_pisne_141.html","./magorovy_labuti_pisne_142.html","./magorovy_labuti_pisne_143.html","./magorovy_labuti_pisne_144.html","./magorovy_labuti_pisne_145.html","./magorovy_labuti_pisne_146.html","./magorovy_labuti_pisne_147.html","./magorovy_labuti_pisne_148.html","./magorovy_labuti_pisne_149.html","./magorovy_labuti_pisne_150.html","./magorovy_labuti_pisne_151.html","./magorovy_labuti_pisne_152.html","./magorovy_labuti_pisne_153.html","./magorovy_labuti_pisne_154.html","./magorovy_labuti_pisne_155.html","./magorovy_labuti_pisne_156.html","./magorovy_labuti_pisne_157.html","./magorovy_labuti_pisne_158.html","./magorovy_labuti_pisne_159.html","./magorovy_labuti_pisne_160.html","./magorovy_labuti_pisne_161.html","./magorovy_labuti_pisne_162.html","./magorovy_labuti_pisne_163.html","./magorovy_labuti_pisne_164.html","./magorovy_labuti_pisne_165.html","./magorovy_labuti_pisne_166.html","./magorovy_labuti_pisne_167.html","./magorovy_labuti_pisne_168.html","./magorovy_labuti_pisne_169.html","./magorovy_labuti_pisne_170.html","./magorovy_labuti_pisne_171.html","./magorovy_labuti_pisne_172.html","./magorovy_labuti_pisne_173.html","./magorovy_labuti_pisne_174.html","./magorovy_labuti_pisne_175.html","./magorovy_labuti_pisne_176.html","./magorovy_labuti_pisne_177.html","./magorovy_labuti_pisne_178.html","./magorovy_labuti_pisne_179.html","./magorovy_labuti_pisne_180.html","./magorovy_labuti_pisne_181.html","./magorovy_labuti_pisne_182.html","./magorovy_labuti_pisne_183.html","./magorovy_labuti_pisne_184.html","./magorovy_labuti_pisne_185.html","./magorovy_labuti_pisne_186.html","./magorovy_labuti_pisne_187.html","./magorovy_labuti_pisne_188.html","./magorovy_labuti_pisne_189.html","./magorovy_labuti_pisne_190.html","./magorovy_labuti_pisne_191.html","./magorovy_labuti_pisne_192.html","./magorovy_labuti_pisne_193.html","./magorovy_labuti_pisne_194.html","./magorovy_labuti_pisne_195.html","./magorovy_labuti_pisne_196.html","./magorovy_labuti_pisne_197.html","./magorovy_labuti_pisne_198.html","./magorovy_labuti_pisne_199.html","./magorovy_labuti_pisne_200.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/obalka01-0004426228_fmt.png","./resources/obraz14564_fmt.png","./resources/obraz14571_fmt.png","./resources/upoutavka_eknihy_jirous_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
