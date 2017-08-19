var mongoose = require('mongoose');

var coinIds = ["bitcoin","ethereum","bitcoin-cash","ripple","litecoin","iota","nem","dash","neo","ethereum-classic","bitconnect","monero","omisego","qtum","stratis","waves","eos","zcash","tenx","bitshares","tether","iconomi","steem","veritaseum","lisk","binance-coin","bytecoin-bcn","basic-attention-token","augur","populous","maidsafecoin","factom","metal","siacoin","status","stellar","golem-network-tokens","dogecoin","byteball","gnosis-gno","civic","0x","mcap","digixdao","ark","bytom","decred","komodo","ardor","gamecredits","funfair","digibyte","bancor","nxt","lykke","pivx","mobilego","district0x","ico","monaco","storj","singulardtv","pillar","bitquence","ubiq","aragon","gas","metaverse","decent","nexus","bitcoindark","stox","edgeless","particl","cofound-it","firstblood","asch","blocknet","syscoin","rlc","adex","wings","numeraire","melon","leocoin","round","quantum-resistant-ledger","elastic","tokencard","iocoin","openanx","peercoin","bitdeal","safe-exchange-coin","etheroll","adtoken","emercoin","rialto","nolimitcoin","eb3-coin","taas","potcoin","mysterium","vslice","lunyr","reddcoin","gulden","firstcoin","counterparty","verge","faircoin","zcoin","humaniq","peerplays-ppy","ion","namecoin","polybius","library-credit","skycoin","sonm","viacoin","mothership","xaurum","monacoin","patientory","trust","santiment","databits","vertcoin","wagerr","cloakcoin","bitbay","agoras-tokens","chronobank","golos","radium","shift","guppy","monetaryunit","clams","ybcoin","sibcoin","obits","blackcoin","ecobit","synereo","quantum","raiblocks","dao-casino","nav-coin","nimiq","expanse","e-dinar-coin","soarcoin","blocktix","crown","insurex","swarm-city","salus","zencash","omni","nexium","digitalnote","e-coin","lomocoin","unobtanium","earthcoin","rubycoin","bitcny","spreadcoin","unity-ingot","voxels","burst","mooncoin","geocoin","gridcoin","bcap","xtrabytes","diamond","neoscoin","waves-community-token","energycoin","suncontract","qwark","dent","creditbit","dubaicoin-dbix","pluton","heat-ledger","feathercoin","rise","bitcrystals","gambit","bankcoin","jinn","toacoin","infinitecoin","einsteinium","aeon","luckchain","triggers","incent","neverdie","pepe-cash","belacoin","bitcoin-plus","vericoin","apx","groestlcoin","primecoin","okcash","mergecoin","vpncoin","worldcoin","bitland","sequence","circuits-of-value","project-decorum","solarcoin","florincoin","signatum","auroracoin","applebyte","compcoin","quark","dnotes","primalbase","foldingcoin","curecoin","sphere","nvo","equitrader","encryptotel","cvcoin","daxxcoin","bitswift","maxcoin","megacoin","bitsend","boolberry","pascal-coin","musicoin","putincoin","bitbean","global-currency-reserve","prizm","espers","blitzcash","dimecoin","darcrus","stealthcoin","goldcoin","pinkcoin","cryptonite","eccoin","wild-beast-block","korecoin","chaincoin","zetacoin","novacoin","myriad","smartcash","ethereum-movie-venture","zrcoin","zennies","dynamic","sprouts","legends-room","bitusd","spectrecoin","vcash","skincoin","htmlcoin","mintcoin","zccoin","pura","ico-openledger","veriumreserve","adzcoin","steem-dollars","malcoin","atmos","breakout-stake","electra","evergreencoin","fedoracoin","exclusivecoin","riecoin","synergy","coeval","dentacoin","fundyourselfnow","pangea-poker","janus","dopecoin","piecoin","zclassic","visio","crave","tokes","insanecoin-insn","atc-coin","inpay","2give","dotcoin","condensate","voise","tagcoin","nautiluscoin","fastcoin","breakout","starta","cryptoping","altcoin-alt","transfercoin","pesetacoin","europecoin","bata","fincoin","vtorrent","syndicate","zeitcoin","magi","cryptocarbon","startcoin","hush","huntercoin","cannabiscoin","e-gulden","nushares","terracoin","hempcoin","sexcoin","arcticcoin","hacker-gold","dt-token","tao","blockpay","mercury","whitecoin","memetic","neutron","bitmark","creativecoin","parkbyte","renos","posw-coin","deeponion","netko","audiocoin","trustplus","tickets","litedoge","hyperstake","idice","linda","bitz","centurion","etheriya","bitcore","bitradio","1337","funcoin","smileycoin","elcoin-el","tilecoin","minereum","eternity","helleniccoin","capricoin","woodcoin","cryptogenic-bullion","bytecent","unitus","influxcoin","miners-reward-token","cagecoin","virta-unique-coin","incakoin","sovereign-hero","colossuscoin-v2","moin","fucktoken","netcoin","shadow-token","cream","canada-ecoin","fimkrypto","happycoin","octanox","808coin","pakcoin","embercoin","xp","ripto-bux","virtacoinplus","fujicoin","teslacoin","nubits","iticoin","denarius-dnr","aidos-kuneen","roulettetoken","noblecoin","trumpcoin","bitasean","inflationcoin","zero","unbreakablecoin","postcoin","gcoin","linx","rubies","mazacoin","kekcoin","ethbits","zoin","zurcoin","piggycoin","karbowanec","42-coin","8bit","hicoin","atomic-coin","sumokoin","qubitcoin","bitbtc","chncoin","cachecoin","triangles","ufo-coin","bitbar","unify","bitstar","digitalprice","francs","bunnycoin","blakestar","newbium","futurexe","dashcoin","rupaya","quazarcoin","vsync","coinonatx","yocoin","campuscoin","newyorkcoin","thegcccoin","anoncoin","procurrency","digitalcoin","ohm-wallet","cannation","icoin","bitsilver","emerald","timereum","das","berncash","kushcoin","biteur","pascal-lite","tattoocoin","bitgold","solaris","useless-ethereum-token","scorecoin","icobid","kayi","prcoin","aricoin","300-token","globaltoken","healthywormcoin","master-swiscoin","marscoin","allsafe","rupee","honey","flaxscript","mao-zedong","jetcoin","iou1","kittehcoin","torcoin-tor","veros","crevacoin","onix","tristar-coin","sojourn","money","photon","coinonat","mantracoin","bnrtxcoin","theresa-may-coin","bios-crypto","zayedcoin","dix-asset","bitcoal","ecocoin","rsgpcoin","crypto","dollar-online","litebitcoin","briacoin","coimatic-2","argus","ebittree-coin","levoplus","enigma","applecoin-apw","supernet-unity","bitshares-music","embers","bitpark-coin","xcurrency","asiacoin","yashcoin","link-platform","rustbits","centra","ixcoin","monster-byte","chancoin","greencoin","martexcoin","carboncoin","adelphoi","pandacoin-pnd","ether-for-the-rest-of-the-world","russiacoin","ltbcoin","shadowcash","casinocoin","orbitcoin","globalcoin","wavesgo","footy-cash","good-karma","flycoin","swaptoken","bluecoin","fantomcoin","ultimate-secure-cash","bitcointx","casino","shorty","britcoin","btsr","hitcoin","cryptoforecast","btctalkcoin","version","dinastycoin","supercoin","smartcoin","devcoin","metalcoin","stress","trollcoin","kobocoin","monkey","i0coin","cryptcoin","phoenixcoin","gaia","deutsche-emark","hobonickels","ultracoin","bitcloud","fluttercoin","globalboost-y","truckcoin","rare-pepe-party","lanacoin","slimcoin","goldblocks","titcoin","boostcoin","aurumcoin","o2olondoncoin","machinecoin","ambercoin","bottlecaps","coin","hodlcoin","purevidz","fuelcoin","prime-xi","chesscoin","pesobit","tekcoin","reecoin","freicoin","paycoin2","nyancoin","swing","parallelcoin","ratecoin","kibicoin","wayguide","cryptojacks","pipcoin","joulecoin","arcade-token","valorbit","coin2-1","darsek","litebar","joincoin","bolivarcoin","lottocoin","cannacoin","octocoin","veltor","sterlingcoin","eurocoin","blakecoin","gameunits","dollarcoin","goldreserve","swagbucks","elementrem","asiadigicoin","tigercoin","acoin","sproutsextreme","c-bit","bitcurrency","the-cypherfunks","mojocoin","universe","unicoin","catcoin","wmcoin","hempcoin-hmp","evil-coin","yacoin","corgicoin","bittokens","kurrent","tittiecoin","paycon","digicube","agrolifecoin","x-coin","dreamcoin","bit20","b3coin","revolvercoin","spacecoin","sativacoin","aquariuscoin","petrodollar","sling","jin-coin","soilcoin","xiaomicoin","guncoin","unrealcoin","gpu-coin","satoshimadness","rimbit","bitcoin-scrypt","halcyon","kilocoin","grantcoin","mtmgaming","prototanium","mineum","gapcoin","dibcoin","spots","franko","putin-classic","quatloo","secretcoin","bitzeny","bigup","compucoin","chronos","global-tour-coin","eryllium","bipcoin","px","hexx","cypher","evotion","alexium","ponzicoin","gold-pressed-latinum","bumbacoin","billarycoin","redcoin","uro","platinumbar","nevacoin","securecoin","argentum","hirocoin","sixeleven","mustangcoin","dobbscoin","islacoin","vector","philosopher-stones","flavorcoin","jewels","creatio","marijuanacoin","popularcoin","beavercoin","goldpieces","tradecoin-v2","universal-currency","bitquark","debitcoin","destiny","antibitcoin","ronpaulcoin","macron","bitcoin-planet","allion","genstake","arbit","artex-coin","wyvern","firecoin","neuro","sooncoin","23-skidoo","independent-money-system","cryptoescudo","leacoin","virtacoin","virtualcoin","uniburst","guccionecoin","litecred","gamebet-coin","printerium","ammo-rewards","ucoin","pulse","vault-coin","gbcgoldcoin","impact","luna-coin","bitcoinfast","ride-my-car","fuzzballs","benjirolls","tajcoin","cabbage","mindcoin","cryptoworldx-token","vip-tokens","orlycoin","iconic","songcoin","comet","bitcoin-21","metal-music-coin","blackstar","ganjacoin","solarflarecoin","zetamicron","steps","beatcoin","high-voltage","warp","milocoin","anarchistsprime","digital-rupees","doubloon","osmiumcoin","plncoin","bbqcoin","wexcoin","bowscoin","dappster","tagrcoin","impulsecoin","ibank","revenu","socialcoin-socc","cthulhu-offerings","kingn-coin","crtcoin","concoin","antilitecoin","xonecoin","ego","cashcoin","shilling","blazecoin","posex","letitride","vaperscoin","zonecoin","elysium","future-digital-currency","save-and-gain","bitvolt","dpay","qibuck-asset","jobscoin","speedcash","sydpak","geertcoin","biobar","magnum","rawcoin2","ccminer","p7coin","btcdragon","jio-token","nodecoin","californium","burstocean","selfiecoin","environ","lex4all","slevin","abncoin","zcashshare","powercoin","pizzacoin","1credit","digital-credits","mikethemug","digital-money-bits","caliphcoin","xenixcoin","health-care-chain","gxshares","coindash","fedorashare","infchain","the-champcoin","dynamiccoin","storjcoin-x","fargocoin","lepaoquan","bitok","asset-backed-coin","bagcoin","aeternity","sphre-air","gycoin","minex","avatarcoin","blockcat","internet-of-people","harmonycoin-hmc","investfeed","fibocoins","clubcoin","digitalfund","zilbercoin","first-bitcoin-capital","golos-gold","deuscoin","stakecoin-stcn","eboostcoin","wa-space","goldpay-coin","oraclechain","pabyosi-coin-special","digital-developers-fund","fuda-energy","axfunds","adshares","falcoin","dhg","bitcoin-unlimited","hbcoin","teracoin","tychocoin","bolenum","gulfcoin","shellpay","excelcoin","amsterdamcoin","mind-gene","terranova","hyper","ergo","9coin","edrcoin","paccoin","remicoin","emoneypower","stex","alpacoin","president-johnson","moneta2","invisiblecoin","stronghands","internet-of-things","techshares","bitcedi","teslacoilcoin","alphabitcoinfund","pirate-blocks","universalroyalcoin","utacoin","president-trump","wink","nexxus","project-x","t-coin","leviarcoin","opal","primulon","bestchain","rabbitcoin","tyrocoin","rublebit","dashs","sakuracoin","motocoin","marxcoin","zsecoin","landcoin","etherx","royalcoin","the-vegan-initiative","axiom","ur","animecoin","qora","braincoin","neptune-classic","amis","gaycoin","avoncoin","safe-trade-coin","happy-creator-coin","vegascoin","fireflycoin","draftcoin","todaycoin","yogold","halloween-coin","omicron","tellurion","irishcoin","betacoin","moneycoin","soulcoin","sharkcoin","peepcoin","women","mavro","sportscoin","donationcoin","advanced-internet-blocks","birds","bitgem","flash","geysercoin","picoin","royalcoin-2","peoplecoin","batcoin","snakeeyes","cycling-coin","frankywillcoin","pokecoin","bitcentavo","prismchain","coexistcoin","global-business-revolution","futcoin","goldunioncoin","blazercoin","netbit","voyacoin","fazzcoin","elacoin","linkedcoin","antimatter","lepen","turbocoin","microcoin","quebecoin","uncoin","president-sanders","kashhcoin","goldmaxcoin","btcgold","yescoin","rhfcoin","eggcoin","bitalphacoin","cubits","aces","lathaan","coupecoin","lazaruscoin","cheapcoin","mobilecash","ugain","fonziecoin","cashme","shacoin","first-bitcoin","royalties","victoriouscoin","cybercoin","skeincoin","wearesatoshi","darklisk","psilocybin","president-clinton","rcoin","trickycoin","teamup","digital-bullion-gold","superturbostake","bongger","thecreed","wowecoin","wowcoin","opescoin","xde-ii","operand","sync","shellcoin","troptions","paypeer","gameleaguecoin","tattoocoin-limited","xaucoin","quotient","quartz-qrz","huncoin","cbd-crystals","deltacredits","zengold","kolschcoin","ocow","x2","safecoin","gambleo","richcoin","dubstep","golfcoin","operacoin","regacoin","karmacoin","pinkdog","ivugeocoin","mmxvi","miyucoin","asiccoin","international-diamond","elcoin","true-investment-coin","clinton","topaz","smoke"];

var holdingSchema = mongoose.Schema(
    {
        _user       : {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}, 
        coinId      : {type: String, enum: coinIds},
        amount      : Number,
        created     : { type: Date, default: Date.now },
        fiatPerCoin : Number,
        fiatCurrency: String,
    },
    { collection: 'holding'}
);

module.exports = holdingSchema;