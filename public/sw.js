if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let b = {};
    const l = (e) => i(e, n),
      r = { module: { uri: n }, exports: b, require: l };
    s[n] = Promise.all(a.map((e) => r[e] || l(e))).then((e) => (c(...e), b));
  };
}
define(["./workbox-3c9d0171"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Logo-v1-black-mini.png",
          revision: "f6ec5c8bf370f9dc9670aaa84e8b3239",
        },
        {
          url: "/Logo-v1-black.png",
          revision: "1effdf416529d92ba023f1b756472339",
        },
        {
          url: "/Logo-v1-white-mini.png",
          revision: "78922bfb95c56e6e1adaf62111866c2e",
        },
        {
          url: "/Logo-v1-white.png",
          revision: "e60bc0a7a70fdbd63ae173b3b9dfa0c9",
        },
        {
          url: "/Logo-v1-white/Logo-v1-black.png",
          revision: "1effdf416529d92ba023f1b756472339",
        },
        {
          url: "/Logo-v1-white/Logo-v1-white.png",
          revision: "e60bc0a7a70fdbd63ae173b3b9dfa0c9",
        },
        {
          url: "/Logo-v1-white/icon512_maskable.png",
          revision: "fa47d778fe38081ad5488de670764414",
        },
        {
          url: "/Logo-v1-white/icon512_rounded.png",
          revision: "0687756bf01dcc1a7dc9c3394ffc5042",
        },
        {
          url: "/Logo-v2-black.png",
          revision: "ae8d12b8f5926895b2c196e645ab7e98",
        },
        {
          url: "/Logo-v2-white.png",
          revision: "32da7df2ed8965c598b832ae3c47d855",
        },
        {
          url: "/_next/static/H6yDVtW402nZWtk3f1bhR/_buildManifest.js",
          revision: "db2b518b7ad4d06c42f1b8432bd0ac24",
        },
        {
          url: "/_next/static/H6yDVtW402nZWtk3f1bhR/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1ac3ffe0-1413a5ef27ad615f.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/2ea8fdaf-198d7f8ed0281371.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/367-7e1152e3d0420ed6.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/377-bb5d55d74f8f652c.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/39811124.0cb56c73e48d9e9b.js",
          revision: "0cb56c73e48d9e9b",
        },
        {
          url: "/_next/static/chunks/453.a1435593d85b7f3c.js",
          revision: "a1435593d85b7f3c",
        },
        {
          url: "/_next/static/chunks/467-b545b251efb58454.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/487-ab81e3851c67717f.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/786-feaf0eb00cb36054.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/790-f58158bd33b34ea3.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/840-5ed9237cdc70590c.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/8c0f1391-dc46013a007ec741.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-92bdaf7934b27973.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/api/google/route-a0d0964fb0173286.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/components/pages/Skills/page-29b768c8185d00f0.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/components/pages/about/page-63862bb56225f932.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/components/pages/education/page-9d683fba9dfb5ace.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/components/pages/experience/page-e0abfbc8921750a1.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/components/pages/hero-section/page-64a91c6d9b44af08.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/layout-c94163714e1e96df.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/app/page-dcad7e19ae628904.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/d5b5b10f-a46561c15bca68c5.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/framework-adbf922d84f6cb13.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/main-1d5f280867afb69f.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/main-app-3ac99abb630152e4.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/pages/_app-2a0e35eb04841930.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/pages/_error-6c3de6dc0f5a225c.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-736e09284f2c2281.js",
          revision: "H6yDVtW402nZWtk3f1bhR",
        },
        {
          url: "/_next/static/css/bd0013df6fa13fde.css",
          revision: "bd0013df6fa13fde",
        },
        {
          url: "/_next/static/css/e7691be73f2bf9c7.css",
          revision: "e7691be73f2bf9c7",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/Logo-v1-white.62953b1e.png",
          revision: "e60bc0a7a70fdbd63ae173b3b9dfa0c9",
        },
        {
          url: "/_next/static/media/adobe-xd.f0c5ce4c.svg",
          revision: "0ee1cc5928c8db3e85c65e51e6525d6e",
        },
        {
          url: "/_next/static/media/adobeaudition.96b89ff6.svg",
          revision: "58f3d81d8e9264fc8df8cfde4cf58af1",
        },
        {
          url: "/_next/static/media/after-effects.4f10a51c.svg",
          revision: "241dc01a0aff9c60da913f5b6a65d0e4",
        },
        {
          url: "/_next/static/media/angular.397f2b6c.svg",
          revision: "7696d862bb70908392a79df5230ec110",
        },
        {
          url: "/_next/static/media/aws.8dff8f22.svg",
          revision: "b7f09ee2045ad700ccba4102f2e4155e",
        },
        {
          url: "/_next/static/media/azure.9c9dc7f7.svg",
          revision: "f548d3f1cd3e4faf1f0b7099db1a4907",
        },
        {
          url: "/_next/static/media/blender.eed352b2.svg",
          revision: "8b61b044e68e4a0e7c0b94654d4ae793",
        },
        {
          url: "/_next/static/media/bootstrap.9e6ddba8.svg",
          revision: "53b32f2e7321dcaa2a27c637c6e36b82",
        },
        {
          url: "/_next/static/media/bulma.5fcd03fd.svg",
          revision: "346e11a0bddfc1b06c07cc1596186d1c",
        },
        {
          url: "/_next/static/media/c.0ffdbd71.svg",
          revision: "e85538a5f40888dcbc932f14f03ae3aa",
        },
        {
          url: "/_next/static/media/canva.0344c508.svg",
          revision: "b8f13636be472787575c9a38a40d1c2a",
        },
        {
          url: "/_next/static/media/capacitorjs.ef35ab1a.svg",
          revision: "f406481aac55baee3cb09d8a858cd8c2",
        },
        {
          url: "/_next/static/media/coffeescript.c4e09c86.svg",
          revision: "188980bfae79e5e6115b2eb00ea97322",
        },
        {
          url: "/_next/static/media/cplusplus.d264bdc1.svg",
          revision: "f525a103eda91528ace5248914305d93",
        },
        {
          url: "/_next/static/media/csharp.7851ee36.svg",
          revision: "eaa9632e78db110e155c571e7bcd3742",
        },
        {
          url: "/_next/static/media/css.e5e99f36.svg",
          revision: "989a735cec29082b067dc389ea2da68a",
        },
        {
          url: "/_next/static/media/dart.ee3b2b6d.svg",
          revision: "6775917ea12c014f2459559b962b7dab",
        },
        {
          url: "/_next/static/media/deno.2e2b830f.svg",
          revision: "4b150ace63ac1e340780402489c9f53f",
        },
        {
          url: "/_next/static/media/django.0d24a6f2.svg",
          revision: "8c0e0365dbe471cb772c4d96eceda8a6",
        },
        {
          url: "/_next/static/media/docker.23787008.svg",
          revision: "7e6ccb94a73afd23c3960aef7e296210",
        },
        {
          url: "/_next/static/media/fastify.af94c3f5.svg",
          revision: "fb59f648c047ed2b322c28c951445dd4",
        },
        {
          url: "/_next/static/media/figma.00471f51.svg",
          revision: "8e60c911c41bc8c6166ddb414532893d",
        },
        {
          url: "/_next/static/media/firebase.20c6dcf8.svg",
          revision: "704986854726d329449f30664550f986",
        },
        {
          url: "/_next/static/media/flutter.49095fa4.svg",
          revision: "9ca247cd652b40ff125ee3c0a7657992",
        },
        {
          url: "/_next/static/media/gcp.05f3d772.svg",
          revision: "d2115a79cde7279b8d1769f76ec14e89",
        },
        {
          url: "/_next/static/media/gimp.d563c9d7.svg",
          revision: "f9df1ce5d3cbb84b2a5abd3a9a29960a",
        },
        {
          url: "/_next/static/media/git.21d80414.svg",
          revision: "e6b832b0c31b469c8fcdfd4f2c4f1d3b",
        },
        {
          url: "/_next/static/media/go.c93ed780.svg",
          revision: "adc194341db39b5cbaf53da38122de45",
        },
        {
          url: "/_next/static/media/graphql.3a7e3927.svg",
          revision: "b6b6c04bcc0e9f73b357dcd6036822a0",
        },
        {
          url: "/_next/static/media/haxe.32ac7bcf.svg",
          revision: "8b08228c47e3c6a081f4bba19007e8c4",
        },
        {
          url: "/_next/static/media/html.ed6aaa50.svg",
          revision: "68aab8d074270f9ee0a7e385519d98fa",
        },
        {
          url: "/_next/static/media/illustrator.7eb9c9f7.svg",
          revision: "6deb63cde26eab996119f0e442984c1c",
        },
        {
          url: "/_next/static/media/ionic.f459d036.svg",
          revision: "fede5c3abee4ba5015901a255e53b443",
        },
        {
          url: "/_next/static/media/java.31c00271.svg",
          revision: "dd071c0b9452691dffc27aae39ce7d80",
        },
        {
          url: "/_next/static/media/javascript.b472cbc1.svg",
          revision: "46524a43caf30828c17e38ec573dc5a3",
        },
        {
          url: "/_next/static/media/julia.c330fbca.svg",
          revision: "5a1447e927d55aac27779dfb4c155d43",
        },
        {
          url: "/_next/static/media/kotlin.02ff0930.svg",
          revision: "4ca0bb1e4556fd0f62cc6842d9520969",
        },
        {
          url: "/_next/static/media/lightroom.3238a8d1.svg",
          revision: "4a62a1bd9ed87f1e3b0352894eeda281",
        },
        {
          url: "/_next/static/media/markdown.58d59da0.svg",
          revision: "2c92d1b98fd7db382f1232823118537d",
        },
        {
          url: "/_next/static/media/materialui.2900e517.svg",
          revision: "16e051373d0089014e66365b82a9380f",
        },
        {
          url: "/_next/static/media/matlab.77f7303a.svg",
          revision: "d9f74f0a1b6fe9575b438de61755b9ea",
        },
        {
          url: "/_next/static/media/memsql.f40f9c44.svg",
          revision: "e4a5e511e3d7bcb57b8390a2fc0d376c",
        },
        {
          url: "/_next/static/media/microsoftoffice.974515ca.svg",
          revision: "733d1a4387ba008f27e784bde2c9b2e4",
        },
        {
          url: "/_next/static/media/mongoDB.d8d2b67f.svg",
          revision: "e7d230b7ad2cb1744a781ad63b10487f",
        },
        {
          url: "/_next/static/media/mysql.2ddb80d9.svg",
          revision: "2cf2fd30658ed833e714cf1fd682d120",
        },
        {
          url: "/_next/static/media/nextJS.99e26750.svg",
          revision: "b9159e822528599d52e216907227a0bd",
        },
        {
          url: "/_next/static/media/nginx.dd577355.svg",
          revision: "3868dbe51aafc3df8a240d58fe8fb392",
        },
        {
          url: "/_next/static/media/numpy.0fd80405.svg",
          revision: "961f7a1bd730836151b5687a91a3fe1c",
        },
        {
          url: "/_next/static/media/nuxtJS.0d94fb0c.svg",
          revision: "59fdf8e11c4231ac9353be8aa2d0fef3",
        },
        {
          url: "/_next/static/media/opencv.96c1a6d0.svg",
          revision: "b18a26d418342b335ac5129a45fa9129",
        },
        {
          url: "/_next/static/media/photoshop.c2d8557c.svg",
          revision: "dda9f7b1ca28d3d3e0ee20eff198bbef",
        },
        {
          url: "/_next/static/media/php.bdee88ab.svg",
          revision: "a6ce9f3d438bd4a39e9acae56eeb30b8",
        },
        {
          url: "/_next/static/media/picsart.c8403ac7.svg",
          revision: "467f568a277aa3b2c7751e51a6fe7376",
        },
        {
          url: "/_next/static/media/postgresql.1b536c2f.svg",
          revision: "58ecff980609fade0b1cb5f8ded6cef3",
        },
        {
          url: "/_next/static/media/premierepro.f608c54b.svg",
          revision: "78b22e7158a93a28eb2b7d0ab5e331e0",
        },
        {
          url: "/_next/static/media/python.4ef95129.svg",
          revision: "bcf6930fc92ab953201424bb0908e456",
        },
        {
          url: "/_next/static/media/pytorch.7c4e25e8.svg",
          revision: "5f2b7688dfcf98a41922dc5f6b74ffba",
        },
        {
          url: "/_next/static/media/react.512a3a7e.svg",
          revision: "7be113a51aa59fbe2be7ac966109e3de",
        },
        {
          url: "/_next/static/media/ruby.f8a4bb76.svg",
          revision: "ab4f7ad7c6790993a00c5b6f9994c145",
        },
        {
          url: "/_next/static/media/selenium.80aec726.svg",
          revision: "db9de5c67343d81db7ffedcf7618954c",
        },
        {
          url: "/_next/static/media/sketch.f176352b.svg",
          revision: "6129bbaf3c61e1bbb7e5ec033591992b",
        },
        {
          url: "/_next/static/media/strapi.e4741f5a.svg",
          revision: "c2c413f2e00734611ef38826c533ee1f",
        },
        {
          url: "/_next/static/media/svelte.b1b7be9c.svg",
          revision: "6275bb59e5ee52a6652185d7ea84ee3d",
        },
        {
          url: "/_next/static/media/swift.757616d9.svg",
          revision: "24e1c0382e569faf2ca47fa1c802a180",
        },
        {
          url: "/_next/static/media/tailwind.c0bbaf6f.svg",
          revision: "b6952af50c6e4db78abefc8d9a529a8b",
        },
        {
          url: "/_next/static/media/tensorflow.a44ae670.svg",
          revision: "e9e391585abd9c372c20c8b9b5bb08d9",
        },
        {
          url: "/_next/static/media/typescript.97711300.svg",
          revision: "8854b02a490d214fb564211c1cf531e2",
        },
        {
          url: "/_next/static/media/unity.4e0bcc82.svg",
          revision: "639e923cdca2c22431b25cb42f975345",
        },
        {
          url: "/_next/static/media/vitejs.b0428eab.svg",
          revision: "64d68c9e11c592778203b486575d6e8d",
        },
        {
          url: "/_next/static/media/vue.522784e9.svg",
          revision: "940fb2b1181eaac0546c5270ff383212",
        },
        {
          url: "/_next/static/media/vuetifyjs.88928116.svg",
          revision: "0fa842cba4f33f0851827e7937150239",
        },
        {
          url: "/_next/static/media/webix.61c9b31f.svg",
          revision: "8014b75ee0ced9b136ffb1b59e093c71",
        },
        {
          url: "/_next/static/media/wolframalpha.1ac762c0.svg",
          revision: "ac304980b06315ed7b541d6e22cd5054",
        },
        {
          url: "/_next/static/media/wordpress.9f06d992.svg",
          revision: "199652e448e77f58952b655a74b42956",
        },
        {
          url: "/new-icons/apple-icon-180.png",
          revision: "edd492a7281371eaae2316ee38e46bb7",
        },
        {
          url: "/new-icons/apple-splash-1125-2436.jpg",
          revision: "ffe882cf580e49720acc1b8bb4170c7d",
        },
        {
          url: "/new-icons/apple-splash-1136-640.jpg",
          revision: "12356f9495f7c6a20dd358152982b181",
        },
        {
          url: "/new-icons/apple-splash-1170-2532.jpg",
          revision: "959f13a82634664bf16f4fdefdbc25c4",
        },
        {
          url: "/new-icons/apple-splash-1179-2556.jpg",
          revision: "41c09dc294cd609b004b618fd2890ac9",
        },
        {
          url: "/new-icons/apple-splash-1206-2622.jpg",
          revision: "d0fe410dc13051ac795b6bf995fff496",
        },
        {
          url: "/new-icons/apple-splash-1242-2208.jpg",
          revision: "90ba11b7abfd5f59d4edba8f98bd16d5",
        },
        {
          url: "/new-icons/apple-splash-1242-2688.jpg",
          revision: "f03f23a15b2535910092ccb235d52fe5",
        },
        {
          url: "/new-icons/apple-splash-1284-2778.jpg",
          revision: "7a5b2dad212d3bc193056a4716d98d6f",
        },
        {
          url: "/new-icons/apple-splash-1290-2796.jpg",
          revision: "69fd9022e8eed4a0364f03d9377b86b5",
        },
        {
          url: "/new-icons/apple-splash-1320-2868.jpg",
          revision: "bfd57660b237212d94e18288a888ab60",
        },
        {
          url: "/new-icons/apple-splash-1334-750.jpg",
          revision: "88f5a58285293bc03eb6ac069679cb21",
        },
        {
          url: "/new-icons/apple-splash-1488-2266.jpg",
          revision: "fa0837fe529c38423e7a677b490dd461",
        },
        {
          url: "/new-icons/apple-splash-1536-2048.jpg",
          revision: "f21492254664b5f917ee1b0c07137fa2",
        },
        {
          url: "/new-icons/apple-splash-1620-2160.jpg",
          revision: "87f7fc1ce557f1196842840f940c326f",
        },
        {
          url: "/new-icons/apple-splash-1640-2360.jpg",
          revision: "98e284e0dea7a6345e322139b9f245c4",
        },
        {
          url: "/new-icons/apple-splash-1668-2224.jpg",
          revision: "ee9012f5526bb8b664d0aeb2986d1da9",
        },
        {
          url: "/new-icons/apple-splash-1668-2388.jpg",
          revision: "e0ad397c2145f9391c553bc602fb92ee",
        },
        {
          url: "/new-icons/apple-splash-1792-828.jpg",
          revision: "38b39e8c0d21d2c07c7c5b1ab65f7e43",
        },
        {
          url: "/new-icons/apple-splash-2048-1536.jpg",
          revision: "d04682a3b08c9bf5bb74d4309c0869dd",
        },
        {
          url: "/new-icons/apple-splash-2048-2732.jpg",
          revision: "c8ebd78a9f81978f2680362376fc38a5",
        },
        {
          url: "/new-icons/apple-splash-2160-1620.jpg",
          revision: "13f643ea5ef6877cebe4c8fb7e0b776c",
        },
        {
          url: "/new-icons/apple-splash-2208-1242.jpg",
          revision: "27ce06bad2725d981f7fae9db4061fb1",
        },
        {
          url: "/new-icons/apple-splash-2224-1668.jpg",
          revision: "ec959cc90187588153b31dcceb143bea",
        },
        {
          url: "/new-icons/apple-splash-2266-1488.jpg",
          revision: "9711582285e8e314d29da5969932d618",
        },
        {
          url: "/new-icons/apple-splash-2360-1640.jpg",
          revision: "9e809e5b866634a02af860b2ce6e04cb",
        },
        {
          url: "/new-icons/apple-splash-2388-1668.jpg",
          revision: "82c2858b511ec7d577282a0917efd4f8",
        },
        {
          url: "/new-icons/apple-splash-2436-1125.jpg",
          revision: "6734ed8c78e7035fa5b808014a2d5dc9",
        },
        {
          url: "/new-icons/apple-splash-2532-1170.jpg",
          revision: "7ecf11f8bbdc9e588b1c850bbae2742d",
        },
        {
          url: "/new-icons/apple-splash-2556-1179.jpg",
          revision: "0316a00703edba8210a2c3b38cd84a23",
        },
        {
          url: "/new-icons/apple-splash-2622-1206.jpg",
          revision: "8f3b0d255462a62b7a08cf0702dab1e7",
        },
        {
          url: "/new-icons/apple-splash-2688-1242.jpg",
          revision: "7f963cab35863f0a66b426df3a24488a",
        },
        {
          url: "/new-icons/apple-splash-2732-2048.jpg",
          revision: "ec69cb09e7b18979698f35d45f9e0872",
        },
        {
          url: "/new-icons/apple-splash-2778-1284.jpg",
          revision: "da3e27acf38197b2db41283be5fab0ba",
        },
        {
          url: "/new-icons/apple-splash-2796-1290.jpg",
          revision: "42932e0ef0673f6a632b9b211af3d203",
        },
        {
          url: "/new-icons/apple-splash-2868-1320.jpg",
          revision: "42dca6d934f10f1208d8653eb7dc996b",
        },
        {
          url: "/new-icons/apple-splash-640-1136.jpg",
          revision: "e3f66717716617259e9b7e99220503aa",
        },
        {
          url: "/new-icons/apple-splash-750-1334.jpg",
          revision: "d5e25cefe26969fe1a64593ae2a662aa",
        },
        {
          url: "/new-icons/apple-splash-828-1792.jpg",
          revision: "6d4a6c82b799d577a09b2ce1148c9d1e",
        },
        {
          url: "/new-icons/manifest-icon-192.maskable.png",
          revision: "54bd4a67a8e4c964c6f2ef915c927dc3",
        },
        {
          url: "/new-icons/manifest-icon-512.maskable.png",
          revision: "e4cf8e7edd6d2eea0a98094210d39155",
        },
        {
          url: "/public/blur-23.svg",
          revision: "a75aa61e5a246b6d47b0004a9d27309b",
        },
        {
          url: "/public/card.png",
          revision: "c59465cf2964b15728e3c3de30251bfa",
        },
        {
          url: "/public/grid.svg",
          revision: "4059253fedf8e205d870303d6129d239",
        },
        {
          url: "/public/hero.svg",
          revision: "d33b61b8bd3f0dcce3b67c27f1273467",
        },
        {
          url: "/public/image/ayla.jpg",
          revision: "208470c5638b285b3602c1f0c89eccdf",
        },
        {
          url: "/public/image/crefin.jpg",
          revision: "6f4df76e3860a77b507bd4ca47a92f94",
        },
        {
          url: "/public/image/portfolio.gif",
          revision: "74a35f69a499e93e0219e90ee1e70530",
        },
        {
          url: "/public/image/real-estate.jpg",
          revision: "4c75539f95fd7adefe0ac248060da3d0",
        },
        {
          url: "/public/image/screen.png",
          revision: "a5ee0e0cbab9e287f0ec46d1dbeae2e6",
        },
        {
          url: "/public/image/travel.jpg",
          revision: "c7c4ee5df41b36e38619cbd56273da58",
        },
        {
          url: "/public/lottie/build.json",
          revision: "a6ddf6e22242cad2ca6085b24d1c277f",
        },
        {
          url: "/public/lottie/code.json",
          revision: "ae769dfb5eafc645619f9279761e43ad",
        },
        {
          url: "/public/lottie/coding.json",
          revision: "9780a8f715b9a3accc2d2399551e0a44",
        },
        {
          url: "/public/lottie/contact.json",
          revision: "2d74c8213b82654fba5362749e289739",
        },
        {
          url: "/public/lottie/development.json",
          revision: "31f75da79676027a6a6384b4e7562eaf",
        },
        {
          url: "/public/lottie/education.json",
          revision: "13c1078ac32e1572de723b853d6d59ad",
        },
        {
          url: "/public/lottie/js.json",
          revision: "ad2ffff084c35a1ef8212677c89dbc34",
        },
        {
          url: "/public/lottie/lotti.json",
          revision: "c1bdff0f692923acf7c8301d5deac9fd",
        },
        {
          url: "/public/lottie/study.json",
          revision: "5e985e66436f52e7e9107e59bac9f127",
        },
        {
          url: "/public/next.svg",
          revision: "8e061864f388b47f33a1c3780831193e",
        },
        {
          url: "/public/pic.jpg",
          revision: "5948431dd38320968a5e9329ae7ae3e1",
        },
        {
          url: "/public/png/placeholder.png",
          revision: "c83aa10e488792c4e2e77a46ed396914",
        },
        {
          url: "/public/section.svg",
          revision: "1118180cd02e6fd6a9804f27e92a5baf",
        },
        {
          url: "/public/svg/contactsImage.svg",
          revision: "0882267646d0cd837ae84344aa4395f0",
        },
        {
          url: "/public/svg/education/eduBlack.svg",
          revision: "5d0dd1fbdef8060dd0ccbe6f019d8a2c",
        },
        {
          url: "/public/svg/education/eduBlue.svg",
          revision: "a6359ac086078d497777fd49da7fd7d8",
        },
        {
          url: "/public/svg/education/eduGreen.svg",
          revision: "07e56b22198d64185685556cf780c144",
        },
        {
          url: "/public/svg/education/eduImgBlack.svg",
          revision: "4bc4ab19212cc6d02aa2b34b726dbb80",
        },
        {
          url: "/public/svg/education/eduImgWhite.svg",
          revision: "c0e4eca11feb4322e9c7b4dfd65a6e07",
        },
        {
          url: "/public/svg/education/eduOrange.svg",
          revision: "3c76d64ad0c9e864243561637786a099",
        },
        {
          url: "/public/svg/education/eduPink.svg",
          revision: "a0a9ad9ff6936fd7f2b5ed93e2a41865",
        },
        {
          url: "/public/svg/education/eduPurple.svg",
          revision: "59fd891c290c09c784fa0e0b21052178",
        },
        {
          url: "/public/svg/education/eduRed.svg",
          revision: "8a673f0a4f959c9ddd9da55207b0f934",
        },
        {
          url: "/public/svg/education/eduTwitter.svg",
          revision: "91fa680bcc22ca9f00db2d356e815452",
        },
        {
          url: "/public/svg/education/eduYellow.svg",
          revision: "4ee434b9e2e36f67734e29865c819a27",
        },
        {
          url: "/public/svg/experience/expBlack.svg",
          revision: "bd167348bcd78a88c90e9f4231cbbb11",
        },
        {
          url: "/public/svg/experience/expBlue.svg",
          revision: "7357a5e834eb4fa6cf06549da776c354",
        },
        {
          url: "/public/svg/experience/expGreen.svg",
          revision: "b748ee88d89d00e4d3e1c879a8474894",
        },
        {
          url: "/public/svg/experience/expImgBlack.svg",
          revision: "b1b6eb9da110d608caa59ccea40ca97f",
        },
        {
          url: "/public/svg/experience/expImgWhite.svg",
          revision: "a72bc9f735512f2fdb4c85277ac5ff2f",
        },
        {
          url: "/public/svg/experience/expOrange.svg",
          revision: "f115e6e58f41698d1cf54be9ca8dbfb1",
        },
        {
          url: "/public/svg/experience/expPink.svg",
          revision: "9c786a1e78a5deffdd3ea75dafea0104",
        },
        {
          url: "/public/svg/experience/expPurple.svg",
          revision: "47787f698d53a442ab8fc5740702b8b6",
        },
        {
          url: "/public/svg/experience/expRed.svg",
          revision: "a88c33b0d452c79f53d666fdccb56143",
        },
        {
          url: "/public/svg/experience/expTwitter.svg",
          revision: "c00fa00178070fe2488b6e24c88a1edb",
        },
        {
          url: "/public/svg/experience/expYellow.svg",
          revision: "cc302dc1dfa1b499eb40ae5c7d04e54f",
        },
        {
          url: "/public/svg/projects/eight.svg",
          revision: "c2590b572d1496de176549664059f9f5",
        },
        {
          url: "/public/svg/projects/eleven.svg",
          revision: "796b55f4f95491a8265498e0814e0575",
        },
        {
          url: "/public/svg/projects/five.svg",
          revision: "8e06b88dc0ed164e2c557ed7e094431b",
        },
        {
          url: "/public/svg/projects/four.svg",
          revision: "06770b287c4f10dd022e41f15759f944",
        },
        {
          url: "/public/svg/projects/nine.svg",
          revision: "7be41fc4b2d7b25eb6aee5140c730217",
        },
        {
          url: "/public/svg/projects/one.svg",
          revision: "e276aac5d109a56135d0f639c5e5b93e",
        },
        {
          url: "/public/svg/projects/sample.svg",
          revision: "dcabbd60f01e62b3eb47816d0e1997ae",
        },
        {
          url: "/public/svg/projects/seven.svg",
          revision: "ce0ca8832f8322a5cc0010b2caf468ce",
        },
        {
          url: "/public/svg/projects/six.svg",
          revision: "7a4d742de42cf85b06df8a1fcb842a31",
        },
        {
          url: "/public/svg/projects/ten.svg",
          revision: "46f48da7e5b02517c2db4763a921cda2",
        },
        {
          url: "/public/svg/projects/thirteen.svg",
          revision: "327e7d59af31ca73841fb614326685e0",
        },
        {
          url: "/public/svg/projects/three.svg",
          revision: "05ed8f12009a7bd9d377f6aea194313c",
        },
        {
          url: "/public/svg/projects/twelve.svg",
          revision: "eaa56d694b28ff8984618a5b74099f70",
        },
        {
          url: "/public/svg/projects/two.svg",
          revision: "79587b983b1545f1e5e4e46a814438f8",
        },
        {
          url: "/public/svg/skills/adobe-xd.svg",
          revision: "0ee1cc5928c8db3e85c65e51e6525d6e",
        },
        {
          url: "/public/svg/skills/adobeaudition.svg",
          revision: "58f3d81d8e9264fc8df8cfde4cf58af1",
        },
        {
          url: "/public/svg/skills/after-effects.svg",
          revision: "241dc01a0aff9c60da913f5b6a65d0e4",
        },
        {
          url: "/public/svg/skills/angular.svg",
          revision: "7696d862bb70908392a79df5230ec110",
        },
        {
          url: "/public/svg/skills/aws.svg",
          revision: "b7f09ee2045ad700ccba4102f2e4155e",
        },
        {
          url: "/public/svg/skills/azure.svg",
          revision: "f548d3f1cd3e4faf1f0b7099db1a4907",
        },
        {
          url: "/public/svg/skills/blender.svg",
          revision: "8b61b044e68e4a0e7c0b94654d4ae793",
        },
        {
          url: "/public/svg/skills/bootstrap.svg",
          revision: "53b32f2e7321dcaa2a27c637c6e36b82",
        },
        {
          url: "/public/svg/skills/bulma.svg",
          revision: "346e11a0bddfc1b06c07cc1596186d1c",
        },
        {
          url: "/public/svg/skills/c.svg",
          revision: "e85538a5f40888dcbc932f14f03ae3aa",
        },
        {
          url: "/public/svg/skills/canva.svg",
          revision: "b8f13636be472787575c9a38a40d1c2a",
        },
        {
          url: "/public/svg/skills/capacitorjs.svg",
          revision: "f406481aac55baee3cb09d8a858cd8c2",
        },
        {
          url: "/public/svg/skills/coffeescript.svg",
          revision: "188980bfae79e5e6115b2eb00ea97322",
        },
        {
          url: "/public/svg/skills/cplusplus.svg",
          revision: "f525a103eda91528ace5248914305d93",
        },
        {
          url: "/public/svg/skills/csharp.svg",
          revision: "eaa9632e78db110e155c571e7bcd3742",
        },
        {
          url: "/public/svg/skills/css.svg",
          revision: "989a735cec29082b067dc389ea2da68a",
        },
        {
          url: "/public/svg/skills/dart.svg",
          revision: "6775917ea12c014f2459559b962b7dab",
        },
        {
          url: "/public/svg/skills/deno.svg",
          revision: "4b150ace63ac1e340780402489c9f53f",
        },
        {
          url: "/public/svg/skills/django.svg",
          revision: "8c0e0365dbe471cb772c4d96eceda8a6",
        },
        {
          url: "/public/svg/skills/docker.svg",
          revision: "7e6ccb94a73afd23c3960aef7e296210",
        },
        {
          url: "/public/svg/skills/fastify.svg",
          revision: "fb59f648c047ed2b322c28c951445dd4",
        },
        {
          url: "/public/svg/skills/figma.svg",
          revision: "8e60c911c41bc8c6166ddb414532893d",
        },
        {
          url: "/public/svg/skills/firebase.svg",
          revision: "704986854726d329449f30664550f986",
        },
        {
          url: "/public/svg/skills/flutter.svg",
          revision: "9ca247cd652b40ff125ee3c0a7657992",
        },
        {
          url: "/public/svg/skills/gcp.svg",
          revision: "d2115a79cde7279b8d1769f76ec14e89",
        },
        {
          url: "/public/svg/skills/gimp.svg",
          revision: "f9df1ce5d3cbb84b2a5abd3a9a29960a",
        },
        {
          url: "/public/svg/skills/git.svg",
          revision: "e6b832b0c31b469c8fcdfd4f2c4f1d3b",
        },
        {
          url: "/public/svg/skills/go.svg",
          revision: "adc194341db39b5cbaf53da38122de45",
        },
        {
          url: "/public/svg/skills/graphql.svg",
          revision: "b6b6c04bcc0e9f73b357dcd6036822a0",
        },
        {
          url: "/public/svg/skills/haxe.svg",
          revision: "8b08228c47e3c6a081f4bba19007e8c4",
        },
        {
          url: "/public/svg/skills/html.svg",
          revision: "68aab8d074270f9ee0a7e385519d98fa",
        },
        {
          url: "/public/svg/skills/illustrator.svg",
          revision: "6deb63cde26eab996119f0e442984c1c",
        },
        {
          url: "/public/svg/skills/ionic.svg",
          revision: "fede5c3abee4ba5015901a255e53b443",
        },
        {
          url: "/public/svg/skills/java.svg",
          revision: "dd071c0b9452691dffc27aae39ce7d80",
        },
        {
          url: "/public/svg/skills/javascript.svg",
          revision: "46524a43caf30828c17e38ec573dc5a3",
        },
        {
          url: "/public/svg/skills/julia.svg",
          revision: "5a1447e927d55aac27779dfb4c155d43",
        },
        {
          url: "/public/svg/skills/kotlin.svg",
          revision: "4ca0bb1e4556fd0f62cc6842d9520969",
        },
        {
          url: "/public/svg/skills/lightroom.svg",
          revision: "4a62a1bd9ed87f1e3b0352894eeda281",
        },
        {
          url: "/public/svg/skills/markdown.svg",
          revision: "2c92d1b98fd7db382f1232823118537d",
        },
        {
          url: "/public/svg/skills/materialui.svg",
          revision: "16e051373d0089014e66365b82a9380f",
        },
        {
          url: "/public/svg/skills/matlab.svg",
          revision: "d9f74f0a1b6fe9575b438de61755b9ea",
        },
        {
          url: "/public/svg/skills/memsql.svg",
          revision: "e4a5e511e3d7bcb57b8390a2fc0d376c",
        },
        {
          url: "/public/svg/skills/microsoftoffice.svg",
          revision: "733d1a4387ba008f27e784bde2c9b2e4",
        },
        {
          url: "/public/svg/skills/mongoDB.svg",
          revision: "e7d230b7ad2cb1744a781ad63b10487f",
        },
        {
          url: "/public/svg/skills/mysql.svg",
          revision: "2cf2fd30658ed833e714cf1fd682d120",
        },
        {
          url: "/public/svg/skills/nextJS.svg",
          revision: "b9159e822528599d52e216907227a0bd",
        },
        {
          url: "/public/svg/skills/nginx.svg",
          revision: "3868dbe51aafc3df8a240d58fe8fb392",
        },
        {
          url: "/public/svg/skills/numpy.svg",
          revision: "961f7a1bd730836151b5687a91a3fe1c",
        },
        {
          url: "/public/svg/skills/nuxtJS.svg",
          revision: "59fdf8e11c4231ac9353be8aa2d0fef3",
        },
        {
          url: "/public/svg/skills/opencv.svg",
          revision: "b18a26d418342b335ac5129a45fa9129",
        },
        {
          url: "/public/svg/skills/photoshop.svg",
          revision: "dda9f7b1ca28d3d3e0ee20eff198bbef",
        },
        {
          url: "/public/svg/skills/php.svg",
          revision: "a6ce9f3d438bd4a39e9acae56eeb30b8",
        },
        {
          url: "/public/svg/skills/picsart.svg",
          revision: "467f568a277aa3b2c7751e51a6fe7376",
        },
        {
          url: "/public/svg/skills/postgresql.svg",
          revision: "58ecff980609fade0b1cb5f8ded6cef3",
        },
        {
          url: "/public/svg/skills/premierepro.svg",
          revision: "78b22e7158a93a28eb2b7d0ab5e331e0",
        },
        {
          url: "/public/svg/skills/python.svg",
          revision: "bcf6930fc92ab953201424bb0908e456",
        },
        {
          url: "/public/svg/skills/pytorch.svg",
          revision: "5f2b7688dfcf98a41922dc5f6b74ffba",
        },
        {
          url: "/public/svg/skills/react.svg",
          revision: "7be113a51aa59fbe2be7ac966109e3de",
        },
        {
          url: "/public/svg/skills/ruby.svg",
          revision: "ab4f7ad7c6790993a00c5b6f9994c145",
        },
        {
          url: "/public/svg/skills/selenium.svg",
          revision: "db9de5c67343d81db7ffedcf7618954c",
        },
        {
          url: "/public/svg/skills/sketch.svg",
          revision: "6129bbaf3c61e1bbb7e5ec033591992b",
        },
        {
          url: "/public/svg/skills/sqlite.svg",
          revision: "23bf430b6b73e93205d7f72d9e125cef",
        },
        {
          url: "/public/svg/skills/strapi.svg",
          revision: "c2c413f2e00734611ef38826c533ee1f",
        },
        {
          url: "/public/svg/skills/svelte.svg",
          revision: "6275bb59e5ee52a6652185d7ea84ee3d",
        },
        {
          url: "/public/svg/skills/swift.svg",
          revision: "24e1c0382e569faf2ca47fa1c802a180",
        },
        {
          url: "/public/svg/skills/tailwind.svg",
          revision: "b6952af50c6e4db78abefc8d9a529a8b",
        },
        {
          url: "/public/svg/skills/tensorflow.svg",
          revision: "e9e391585abd9c372c20c8b9b5bb08d9",
        },
        {
          url: "/public/svg/skills/typescript.svg",
          revision: "8854b02a490d214fb564211c1cf531e2",
        },
        {
          url: "/public/svg/skills/unity.svg",
          revision: "639e923cdca2c22431b25cb42f975345",
        },
        {
          url: "/public/svg/skills/vitejs.svg",
          revision: "64d68c9e11c592778203b486575d6e8d",
        },
        {
          url: "/public/svg/skills/vue.svg",
          revision: "940fb2b1181eaac0546c5270ff383212",
        },
        {
          url: "/public/svg/skills/vuetifyjs.svg",
          revision: "0fa842cba4f33f0851827e7937150239",
        },
        {
          url: "/public/svg/skills/webix.svg",
          revision: "8014b75ee0ced9b136ffb1b59e093c71",
        },
        {
          url: "/public/svg/skills/wolframalpha.svg",
          revision: "ac304980b06315ed7b541d6e22cd5054",
        },
        {
          url: "/public/svg/skills/wordpress.svg",
          revision: "199652e448e77f58952b655a74b42956",
        },
        {
          url: "/public/top-bg.svg",
          revision: "ea086978ac99c653e6c8228bcf6fd399",
        },
        {
          url: "/public/vercel.svg",
          revision: "61c6b19abff40ea7acd577be818f3976",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        i &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") && i && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
