'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5cd22db32bccf554275acead449a236c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df444edf2f272e9d1037ed7be1c01b49",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55d6055eb84ee8068a0a425998d12c0e",
".git/logs/refs/heads/main": "db099e694b1d39c69e5068fa7f88cda3",
".git/objects/02/bbba20cb308ba513e2d1a7c8381f11fdc9c2a9": "2f9850854fc225266dcace6f8e612241",
".git/objects/06/12a390872f93b577bce9059dcd3e2c9a551385": "ce19a971ed665074613bee474886ecb7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/14/a33cf085f2767b247a6b5ea93d20c11c84563e": "f6cf917e16981f29ecd09c74ee8d8937",
".git/objects/21/55c13c2d5b9efc769816a0342371fd9dc70a17": "1c75f42e1c167c2af98a34b73d261ad6",
".git/objects/2b/9fc4bf099e4bf72f1b2afad07346930740a334": "3e4778c83717a1a9631244a49fc5d245",
".git/objects/2c/663464f4953cd75d8321aedbb59a57bb50c555": "c08e0ab2fc99619ab4e9c1e4620b2ba0",
".git/objects/30/45ea44f686a55e1c01949ace57afdb542d32a9": "a4c00e7f329f696b59133eb519ff2562",
".git/objects/30/ea5addae1b6938421f40a31f48b88cb1098abb": "560a2ecd67354bc26fcb0cf695c90cab",
".git/objects/31/ba2f7f16d952d3231a896edeb5ad09d2bba449": "230e6ffcf7363ac58ba7dc5b5bcb1b11",
".git/objects/32/3613c810e715bfdb003126b91dc8e9394886bd": "c1690bc3a5660c4ee24695c19286980f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/f88a60265a3c471b68870c40939268f6b084bc": "05a735c71130c332a50aa9d629be64bd",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/714f7400b026e068aa8e3720941f933e7e97db": "81b335ee64742e1b8e23e5ee1f4861a7",
".git/objects/3d/f90459b13269adc738274397776aa7fff6886a": "91eb8e061d2ff7f71c5ea3d779f64684",
".git/objects/3f/b3a2bf24c92d6abc00470b0e8bb865103f7ed0": "77555a886e0a7f03bff7f25417f6c46d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/30de2f2321dd2c7b6ff0df10ea45e930548ba5": "3e15f066622d2b5765f5def50791fb75",
".git/objects/43/58b3d5c062645d5dfd3230a63eb9d266e56e5c": "f7b4cda358f9e0fe28626b8d59e1457b",
".git/objects/43/ce1e4e4fc0a12d12ed606286356769b09a7de8": "7d4ba8d602ace32aa977c8f473624df4",
".git/objects/44/63e85225d3762529dda6b3e18839b4267f19e0": "7ed08881eadb11cdb7c1b79b8d40046f",
".git/objects/44/993ed1c87b21afbb60c3e98574e836111747b1": "e81c21d00517cfba82c4ad5c35510832",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/52e6f3f12a5613d6d17182f73ba7bbd91c5d1e": "9bd812f9ddbb46323cbe90038f4c7fa5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/04f1c44d8dd8fbb0ee67bcb298383127915a4c": "92cdd099d5903bbbfba5beba2753ea99",
".git/objects/4e/92e6d7647565c7aacc3cc7a4f46e21ae3a5fb5": "f326e30153f3a5560c86e2d191facacb",
".git/objects/50/4087056ec2a862088a3696ac2bc3f1d56d7b6d": "4c4c81586d134de414560d124aee6949",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/53/d30dd7a335a87acfe31c60d90de5ff9355c752": "e9ecba0e4d989068133e65d9b32e3cbe",
".git/objects/54/1cd652c0943997ab9ffdde45ba367fba9011a5": "6870fe1820c3aecd9a6a1bff2924c219",
".git/objects/58/5294371a71f2540538c2a975c2556a119806e6": "e8cab6d306d34ac68a0d79674a9e64a5",
".git/objects/5a/0261db0f0725f79172d7021c3544428d19bf0b": "e861e6aff3f6712a9d8d1dca92257313",
".git/objects/5b/6bc5dcd72a3fff45c9a64c4d8eb89982ac9122": "c96e1fdcbe134f3e6ec960620ec7b28b",
".git/objects/5b/dafdce6a6ee8f9ba86563103758ce212ecf725": "8f3a76c22f2443a6ebeb871d58f257cc",
".git/objects/5d/e44a6393b9836b0ff9a237606db7f385d4ce6c": "f4764c808aa40b208f0120c84905c0a2",
".git/objects/5e/7fdf021db59f40f7260adeb826b268c5caca6d": "c6f2b390d93856857d68422608b3ac2d",
".git/objects/64/1360f664aeccc9c903dc60ec26cf8765c7cd72": "3af9f99b1e36f8739905c91a55dd40f3",
".git/objects/64/733004c7ae93c43daf09652bbdf59a3324a755": "0fe07561b7daae3833a2bddc89b5d925",
".git/objects/65/ee5335493ada586432bee2089310c0e71f7c31": "c8c812cf9a25588c1e015f0e0ae858d6",
".git/objects/69/53130b680acb5d16e5b174583ab64ea1267ec2": "01762997c97cdff1a34ea193d39c6cb5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/a5e45206787601176ec57cf11347f41329512f": "638d344a07734e0cbe3f79820ff07334",
".git/objects/75/c9f8a00cecc8faf73b50e623fe5935752c0447": "5ff5b9e3a5b8bb860ed11ce4287fb357",
".git/objects/7e/85c803b9604830c2189e87f749332912622607": "7489dbd38fd3e8f002447272f643e8da",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8f/ca851db937a4ac73fe34a5f59d943dd0f36a04": "8c0964945fbff75f96e0ea23f2176a24",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/b3127a62ba7ef34913aa38103b34f8b101ce6a": "b9e32e8d154596b6eba7552ade33617f",
".git/objects/91/df44b5ea23e02c377d5eff17a21b5091c5704c": "7057d8284fac28055aff4a7c12142465",
".git/objects/93/927024d7a70873cc7ed823ff61ff227a3cbd84": "ca7cba3dec89db55bd41053b73faed39",
".git/objects/97/86f6422e8befaffc43b16119af48ed7e55f03d": "1d9a7ee5648aa992ceaf7cf1f5699698",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/7dace20e820244e7be84f0314302a3cecc4d88": "f4085c0266b55e84e91ab54b573e918e",
".git/objects/a2/b20b7198acfde12837974091c99910f2b49009": "20c294316b076d0142f5892e2918a8c9",
".git/objects/a5/dca7837289d2f29112d6b311eeee18064db96b": "fa28b3f1305f2a1bff84b38f2c62b627",
".git/objects/a7/3fb334527167cfdcf2c4f75a38048df72b5c1b": "16bd4655a1570aaf4c7e53fb6d310807",
".git/objects/a7/b0a8559f94d1e6172e208a179000786ffd42d3": "e9a7ba64083431dd1ba1d3d0cf9add3c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/e543a8bf78651acd4121ef8d892b2cd8e90d99": "1a91ffe8f7fc3668fe4e78416744d893",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/4e671f0eb2d9dac1719f981163792c80c3c920": "f0202ce75c79527e33eae473ba3d2f3b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/9665af00bb916d8ebb8c091f1dbd3fbbee8338": "28e4b1d69daa485f15b434dfba09d179",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4dc674e6ad315daa5ef4e723b683e570f36551": "21e743f0b4054c3c4bcb24dfa4825a65",
".git/objects/b7/875a0d217f8194fe490ebcb40261c7d8ee097d": "41235a7305f1823f0bfeb667b3ba6dfd",
".git/objects/b9/07c1e6e2408d959c3277e494d24f8bce57955e": "2f5ddbf73ef0ce00c74c3a48352415ea",
".git/objects/b9/1a89bbcd21325cba876833fc51ba0c554976e9": "e376f3fd7da559e1cff6a80810e63249",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/0f3561581ba3fb9a5efb3ae21cf2dfa08d5243": "efe7d89dbf13647279dcf7e95de337ac",
".git/objects/c5/b1024ec2c713911fc603fb4bcec256cefaf920": "b9ccd51b630fe7cbda820811ce535cab",
".git/objects/c9/ed6bcd27e6379bbaac94a649e6b3b6f2444e90": "415f04167ba0cfc23bc8ec08ade793d9",
".git/objects/ca/83a1c727c9a66d3a04d00eb91d9b3989e09351": "78d88a5e62d3083c0c768ea87f991b13",
".git/objects/cb/c1d2afb0bfc9ae71c2db974cbd935b3b87f437": "42ac984a1f718a5bdc5997a86d1371e8",
".git/objects/cb/e1bca1391a9f5b52a6edc5f21030cdf332e2ae": "a29bbc1b4f8a24dfe9e1f2c57ba9e2bf",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/aa5335f00ed93453f8b9f6729a028096b93902": "ea9f0250d61ac54765e7c1554bba9f95",
".git/objects/d1/385e3111039a434bdae34942933c65d8f767b3": "577e14211f7bb9b297e97eb437fea57f",
".git/objects/d1/ad12d4fca082dfa1cb4bcb749fb10ac38e44b7": "bdb94f66bc94a4da84daa8a7d2161095",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d82a60ddc3dc09bb662411698298cde5102031": "86dac0fedcb497fa814beb94e09b090a",
".git/objects/d5/9ce9b5a6360f6d57b30ca76bc9be2e7703b86e": "a709ce58aa6d428d840d791f0d623bf3",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "cd16b25b5a14ef3b3a935dc0757990b4",
".git/objects/d9/b98e2f9335a06dd74f65b27a7e372fc6c2c27c": "c5a712a41d2d3baf479f5b35aaa35869",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/db6cc0c8a0d25a03988077a771faeb2669bfef": "a5b179d5886191ab126359d258c3892c",
".git/objects/dd/ab6e08b3e4a12426bf183dbd4a2aa26becbb3c": "dc0f9720ddc49f880380e55b907ebaa4",
".git/objects/e1/35a75a6583c486522af8fc19bf014b1ad4aa4e": "1b3193446b18f75176f5c8fe40adecbd",
".git/objects/e1/7b4e6d2539f427d26a0365a255cf97c407efe4": "565ab3d9db5224c5a6c4cb00a1a0f08b",
".git/objects/e5/f5c03c82056994b4b455b9c614bb28e958775d": "bef7529b1611b5fd4268fcc0b7c0414d",
".git/objects/e8/ecf6850f49b7b99e72f6b7a3e2231120e2f096": "69c40f66170e77d61e4955ce224c3d22",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e8b888299d044eab0fe13b1b77fd7ceade782c": "5f56da9074b7067531b7bc75b334a12f",
".git/objects/f0/c2c85b07c5dc8f316ea488fdd8752c688f57be": "29a1216dd394ad1659e31555beb28c9c",
".git/objects/f1/c0d28d0c97c46c2e4a3c7f2b3c5be2b857c3b8": "983b6b702d563de257ed98ae79390da1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5aa5ee919488c058add3b7c28db7f5cb27cf0a": "cb0fe3f7ee4186d0e6cd6a04f2b473de",
".git/objects/f5/770b1ed8f6617c01aa9225acbe4cfb8fedd7f1": "9daf71114b8f57bce15642f431a30cdd",
".git/objects/f7/9baacdb1ec1f8b000e3153977c657045bf37da": "5b154f1075c20eb5a8e5cdb459cc90c7",
".git/objects/f8/9444bb49655877fb104bc2dd4465bd8afbda13": "915e5753dd03426b0e315fca63394495",
".git/objects/f9/3fde0819364dcb94bb0edfa525f402c7a60c08": "feea04d4b6a902d8816ac8de94236ac4",
".git/objects/fd/5cac1bb5f42a33b803abf7a935e5a98609255d": "9bc5343dfe6c4f189465184b1cb2a6f6",
".git/refs/heads/main": "880e484f1a5c5ff58f2d50fbd7047a43",
"assets/AssetManifest.bin": "895938744387edb4229c614d9bf14e36",
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
"flutter_bootstrap.js": "e2966276325a7933d85c5241e6b8fd65",
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
