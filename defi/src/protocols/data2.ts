import type {Protocol} from './types'
import { baseIconsUrl } from "../constants";
/*
{
  id: string;
  name: string;
  address: string;
  symbol: string;
  url: string;
  description: string;
  chain: string;
  logo: null | string;
  audits: null | "0" | "1" | "2" | "3";
  audit_note: null;
  gecko_id: string;
  cmcId: string;
  category: string;
  chains: string[];
  oracles: string[];
  forkedFrom: string[];
  module: string;
  twitter: string;
  language?: string;
},
*/
/* Audits: Please follow this legend
0 -> No audits
1 -> Part of this protocol may be unaudited
2 -> Yes
3 -> This protocol is a fork of an existing audited protocol
*/

/*
`chain` is the first chain of a protocol we tracked at defillama,
  so if a protocol launches on Ethereum and we start tracking it there, and then it launches on polygon and
  we start tracking it on both polygon and ethereum, then `chain` should be set to `Ethereum`.

`chains` is not used by the current code, but good to fill it out because it is used in our test to detect errors
*/
export default [
{
    id: "1410",
    name: "Cropper",
    address: "solana:DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz",
    symbol: "CRP",
    url: "https://cropper.finance",
    description: "Cropper is an automated market maker (AMM) built on the Solana blockchain which enable lightning-fast trades, shared liquidity and new features for earning yield.",
    chain: "Solana",
    logo: `${baseIconsUrl}/cropper.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "cropperfinance",
    cmcId: "11387",
    category: "Dexes",
    chains: ["Solana"],
    oracles: [],
    forkedFrom: [],
    module: "cropper.js",
    twitter: "CropperFinance",
    audit_links: [
      "https://github.com/HalbornSecurity/PublicReports/blob/master/Solana%20Program%20Audit/Cropper_Finance_Farm_Solana_Program_Security_Audit_Report_Halborn_Final.pdf",
      "https://github.com/HalbornSecurity/PublicReports/blob/master/Solana%20Program%20Audit/Cropper_Finance_AMM_Program_Security_Audit_Report_Halborn_Final.pdf",
    ],
    listedAt: 1644868660,
  },
  {
    id: "1411",
    name: "Manarium",
    address: "bsc:0xc80a0a55caf6a7bfb4ee22f9380c4077312c4a35",
    symbol: "ARI",
    url: "https://www.manarium.com",
    description: "Manarium is a unique blockchain gaming platform with play to earn games.",
    chain: "Binance",
    logo: `${baseIconsUrl}/manarium.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "manarium",
    cmcId: "16474",
    category: "Gaming",
    chains: ["Binance"],
    oracles: [],
    forkedFrom: [],
    module: "manarium/index.js",
    twitter: "manarium_gg",
    audit_links: ["https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_Manarium.pdf"],
    listedAt: 1644868847,
  },
  {
    id: "1412",
    name: "Crema Finance",
    address: null,
    symbol: "-",
    url: "https://www.crema.finance",
    description: "Crema Finance is a powerful concentrated liquidity protocol built on Solana that provides superior performance for both traders and liquidity providers. It changes the Solana DeFi game by introducing a series of innovations to improve the overall capital efficiency and trading depth.",
    chain: "Solana",
    logo:`${baseIconsUrl}/crema-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Solana"],
    oracles: [],
    forkedFrom: [],
    module: "crema.js",
    twitter: "Crema_Finance",
    listedAt: 1644868985,
  },
  {
    id: "1413",
    name: "Savannah Finance",
    address: "cronos:0x654bAc3eC77d6dB497892478f854cF6e8245DcA9",
    symbol: "SVN",
    url: "https://svn.finance",
    description: "The first and also largest algorithmic stablecoin platform on Cronos. $SVN is pegged to the price of 1 MMF via seigniorage.",
    chain: "Cronos",
    logo: `${baseIconsUrl}/savannah-finance.png`,
    audits: "2",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Cronos"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "svn/index.js",
    twitter: "MMFcrypto",
    audit_links: ["https://mmfinance.gitbook.io/docs/audit"],
    listedAt: 1644884068,
  },
  {
    id: "1414",
    name: "Dibs Money",
    address: "bsc:0xfd81ef21ea7cf1dc00e9c6dd261b4f3be0341d5c",
    symbol: "DIBS",
    url: "https://www.dibs.money/",
    description: "Fork of Tomb.Finance on the Binance Smart Chain with a 1000:1 peg to BNB.",
    chain: "Binance",
    logo: `${baseIconsUrl}/dibs-money.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "dibs-money",
    cmcId: "16756",
    category: "Algo-Stables",
    chains: ["Binance"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "dibs-money/index.js",
    twitter: "DibsMoney",
    audit_links: ["https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/DibsMoney_AuditReport_InterFi.pdf"],
    listedAt: 1644886953,
  },
  {
    id: "1415",
    name: "Partial Finance",
    address: "fantom:0x9486fDA4C1192db69a08CA7235E2E6bAf31B467B",
    symbol: "PARTIAL",
    url: "https://partial.finance",
    description: "An algorithmic stablecoin on Fantom Opera, pegged to the price of 1/2 $FTM (0.5) via seigniorage.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/partial-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "partialfinance/index.js",
    twitter: "PartialFinance",
    listedAt: 1644969685,
  },
  {
    id: "1416",
    name: "GemKeeper",
    address: null,
    symbol: "-",
    url: "https://app.gemkeeper.finance/#/swap",
    description: "GemKeeper is a community focused AMM & DeFi Platform built on Oasis.",
    chain: "Oasis",
    logo: `${baseIconsUrl}/gemkeeper.png`,
    audits: "1",
    audit_links: ["https://github.com/GemKeeperDEV/GemKeeperFinance/blob/main/PeckShield-Audit-Report-GemKeeper-v1.0.pdf"],
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Oasis"],
    oracles: [],
    forkedFrom: ["Uniswap"],
    module: "gemkeeper.js",
    twitter: "GemKeeperDeFi",
    listedAt: 1644969875,
  },
  {
    id: "1417",
    name: "GemMine",
    address: "fantom:0x1e2a499fAefb88B2d085d7036f3f7895542b09De",
    symbol: "GEMMINE",
    url: "https://gemmine.defiwaterfall.com",
    description: "GemMine - this is not just a farm! It will bring together and help projects such as Waterfall, Knights of Fantom, Moneyrain & MyMine",
    chain: "Fantom",
    logo: `${baseIconsUrl}/gemmine.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: [],
    module: "gemmine/index.js",
    twitter: "defi_waterfall",
    listedAt: 1644970013,
  },
  {
    id: "1418",
    name: "Draco Finance",
    address: "fantom:0x37863ea4bf6ef836bC8bE909221BAF09A2aF43d7",
    symbol: "DRACO",
    url: "https://www.draco.finance/",
    description: "Algorithmic stable coin currently pegged to the value of 1 $FTM.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/draco-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "draco-finance/index.js",
    twitter: "DracoFinance",
    language: "Solidity",
    listedAt: 1644972460,
  },
  {
    id: "1419",
    name: "BabelFish",
    address: null,
    symbol: "-",
    url: "https://babelfish.money",
    description: "BabelFish is a multi-chain aggregator and distributor of stablecoins",
    chain: "RSK",
    logo: `${baseIconsUrl}/babelfish.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["RSK"],
    oracles: [],
    forkedFrom: [],
    module: "babelfish/index.js",
    twitter: "babelfishmoney",
    language: "Solidity",
    listedAt: 1644988202,
  },
  {
    id: "1420",
    name: "Arable Protocol",
    address: "avax:0x00ee200df31b869a321b10400da10b561f3ee60d",
    symbol: "ACRE",
    url: "https://app.arablefi.com/#/",
    description: "World’s First Synthetic Farming Protocol.",
    chain: "Avalanche",
    logo: `${baseIconsUrl}/arable-protocol.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "arable-protocol",
    cmcId: null,
    category: "Yield",
    chains: ["Avalanche"],
    oracles: [],
    forkedFrom: [],
    audit_links: [],
    module: "arable-protocol/index.js",
    twitter: "ArableProtocol",
    language: "Solidity",
    listedAt: 1644992134,
  },
  {
    id: "1421",
    name: "Enso Finance",
    address: null,
    symbol: "-",
    url: "https://www.enso.finance",
    description: "Social trading redefined. Create social strategies for yield farming, indexes and arbitrary calls as a person, community, or DAO",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/enso-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Indexes",
    chains: ["Ethereum"],
    oracles: [],
    forkedFrom: [],
    module: "enso-finance/index.js",
    twitter: "EnsoFinance",
    listedAt: 1645036681,
  },{
    id: "1422",
    name: "Winkyverse",
    address: "bsc:0xb160A5F19ebccd8E0549549327e43DDd1D023526",
    symbol: "WNK",
    url: "https://getwinkies.com",
    description: "The First Global Education Games Metaverse",
    chain: "Binance",
    logo: `${baseIconsUrl}/winkyverse.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "the-winkyverse",
    cmcId: "16652",
    category: "Staking",
    chains: ["Binance"],
    oracles: [],
    forkedFrom: [],
    module: "winkyverse/index.js",
    twitter: "thewinkies1",
    audit_links: ["https://docsend.com/view/v9fk2ajkksjd9xcz"],
    listedAt: 1645036853,
  },
  {
    id: "1423",
    name: "Bodh Finance",
    address: null,
    symbol: "-",
    url: "https://bodh.finance",
    description: "Bodh Finance is a decentralized protocol that establishes money markets with algorithmically set interest rates based on supply and demand. This will allow users to lend and borrow assets on Boba Network.",
    chain: "Boba",
    logo: `${baseIconsUrl}/bodh-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Lending",
    chains: ["Boba"],
    oracles: ["Witnet"],
    forkedFrom: ["Compound"],
    module: "bodhfinance/index.js",
    twitter: "BodhFinance",
    listedAt: 1645037027,
  },
  {
    id: "1424",
    name: "Volta DAO",
    address: "fantom:0x4c9993c7107495020c2ce9a13d11839f48ecd2e6",
    symbol: "VOLTa",
    url: "https://app.voltadao.finance/",
    description: "Volta DAO is a decentralized reserve currency built on Fantom and AVAX",
    chain: "Fantom",
    logo: `${baseIconsUrl}/volta-dao.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Reserve Currency",
    chains: ["Fantom", "Avalanche"],
    oracles: [],
    forkedFrom: ["Olympus DAO"],
    module: "volta-dao/index.js",
    twitter: "VoltaDAO",
    listedAt: 1645046863,
  },
  {
    id: "1425",
    name: "Croissant Games",
    address: "cronos:0xa0C3c184493f2Fae7d2f2Bd83F195a1c300FA353",
    symbol: "CROISSANT",
    url: "https://croissant.games",
    description: "Unlike traditional games that operate in black boxes, Croissant Games runs on smart contracts that are fair, transparent, non-custodian, and immutable. Furthermore, we have a proprietary gasless model utilizing EIP-712, meaning that playing any of our games will not require any gas fees from the player's end!",
    chain: "Cronos",
    logo: `${baseIconsUrl}/croissant-games.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "croissant-games",
    cmcId: null,
    category: "Staking",
    chains: ["Cronos"],
    oracles: [],
    forkedFrom: [],
    module: "croissant/index.js",
    twitter: "GamesCroissant",
    listedAt: 1645046168,
  },
  {
    id: "1426",
    name: "MiniPanther DAO",
    address: "fantom:0x3264810174f577F82DDD4FD08818F368AC363505",
    symbol: "MP",
    url: "https://minipanther.money/#/",
    description: "MiniPanther is a DAO with only 14 days of supply expansion. On the 15th day, 80% of the treasury will be used for buybacks! After that, MP will become the meme token of the Fantom ecosystem. The DAO also operates PantherUSD, a backed stablecoin with arbitrage-enforced pricing.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/minipanther-dao.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "minipanther",
    cmcId: null,
    category: "Reserve Currency",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Olympus DAO"],
    module: "minipanther/index.js",
    twitter: "PolyWantsAFarm",
    listedAt: 1645133019,
  },
  {
    id: "1427",
    name: "Benqi Staked Avax",
    address: "avax:0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    symbol: "SAVAX",
    url: "https://staking.benqi.fi",
    description: "Stake AVAX on BENQI's Liquid Staking Protocol and freely utilize it within powerful Decentralized Financial applications.",
    chain: "Avalanche",
    logo: `${baseIconsUrl}/benqi-staked-avax.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "benqi-liquid-staked-avax",
    cmcId: null,
    category: "Liquid Staking",
    chains: ["Avalanche"],
    oracles: [],
    forkedFrom: [],
    module: "benqi-staked-avax/index.js",
    audit_links: ["https://docs.benqi.fi/resources/risks#audits"],
    twitter: "BenqiFinance",
    listedAt: 1645133212,
  },
  {
    id: "1428",
    name: "StarCrazy",
    address: "iotex:0x17df9fbfc1cdab0f90eddc318c4f6fcada730cf2",
    symbol: "GFT",
    url: "https://starcrazy.com",
    description: "StarCrazy is the NFT and blockchain Play-To-Earn game. Collect, fuse, mine, and earn. GFT is its main game currency.",
    chain: "IoTeX",
    logo: `${baseIconsUrl}/starcrazy.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "game-fantasy-token",
    cmcId: null,
    category: "Gaming",
    chains: ["IoTeX"],
    oracles: [],
    forkedFrom: [],
    module: "gft/index.js",
    twitter: "StarCrazyGame",
    listedAt: 1645133393,
  },
  {
    id: "1429",
    name: "GoodDollar",
    address: "0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B",
    symbol: "G$",
    url: "https://www.gooddollar.org",
    description: "GoodDollar is a universal basic income protocol and DAO to fight inequality that leverages staking and market incentives to sustainably fund the distribution of free crypto to underserved members all over the world. As of today, GoodDollar UBI serves over 300,000 members from 180 territories; 70,000 which are daily active users.",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/gooddollar.png`,
    audits: "2",
    audit_note: null,
    gecko_id: null,
    cmcId: "6961",
    category: "Staking",
    chains: ["Ethereum", "Fuse"],
    oracles: [],
    forkedFrom: [],
    module: "gooddollar/index.js",
    twitter: "gooddollarorg",
    audit_links: ["https://github.com/GoodDollar/GoodProtocol/tree/master/audits"],
    listedAt: 1645138963,
  },
  {
    id: "1430",
    name: "Kommunitas",
    address: "polygon:0xC004e2318722EA2b15499D6375905d75Ee5390B8",
    symbol: "KOM",
    url: "https://kommunitas.net",
    description: "Kommunitas is a decentralized and tier-less Launchpad. Kommunitas is the solution for Multi Chain oriented projects. Kommunitas welcomes project from various blockchain like Polygon, BSC, Ethereum, Avalanche, Solana, etc.",
    chain: "Polygon",
    logo: `${baseIconsUrl}/kommunitas.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "kommunitas",
    cmcId: "10403",
    category: "Launchpad",
    chains: ["Polygon"],
    oracles: [],
    forkedFrom: [],
    module: "kommunitas/index.js",
    twitter: "Kommunitas1",
    audit_links: ["https://67362912-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-Mcc99YHj6X7apRGJDII%2F-MgGmu57PGs3UkrB2GsG%2F-MgGoyNwBZNhWmBNpIi0%2FKommunitas%20Staking%20Contract%20Audit%20Report.pdf?alt=media&token=6325c456-fb79-4298-81d8-14c924b57cb2"],
    listedAt: 1645139153,
  },
  {
    id: "1431",
    name: "X2Y2",
    address: "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9",
    symbol: "X2Y2",
    url: "https://x2y2.io",
    description: "The decentralized NFT marketplace. By the people, for the people.",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/x2y2.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "x2y2",
    cmcId: "18106",
    category: "Staking",
    chains: ["Ethereum"],
    oracles: [],
    forkedFrom: [],
    module: "x2y2/index.js",
    twitter: "the_x2y2",
    listedAt: 1645139307,
  },
  {
    id: "1432",
    name: "PegaSys",
    address: null,
    symbol: "-",
    url: "https://pegasys.finance",
    description: "Swap, earn, and build with the leading decentralized crypto trading protocol on Syscoin.",
    chain: "Syscoin",
    logo: `${baseIconsUrl}/pegasys.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Syscoin"],
    oracles: [],
    forkedFrom: ["Uniswap"],
    module: "pegasys/index.js",
    twitter: "PegasysDEX",
    listedAt: 1645139464,
  },
  {
    id: "1433",
    name: "Jones DAO",
    address: "arbitrum:0x10393c20975cf177a3513071bc110f7962cd67da",
    symbol: "JONES",
    url: "https://jonesdao.io",
    description: "Jones DAO is a yield, strategy, and liquidity protocol for options, with vaults that enable 1-click access to institutional-grade options strategies while unlocking liquidity and capital efficiency for DeFi options with yield-bearing options-backed asset tokens.",
    chain: "Arbitrum",
    logo: `${baseIconsUrl}/jones-dao.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "jones-dao",
    cmcId: "17743",
    category: "Options",
    chains: ["Arbitrum"],
    oracles: [],
    forkedFrom: [],
    module: "jones-dao/index.js",
    twitter: "DAOJonesOptions",
    listedAt: 1645235945,
  },
  {
    id: "1434",
    name: "NewSpace Finance",
    address: "bsc:0xbbdaA8700A7caAAf3b4aAc1fA6Fb5fF76Fc14C56",
    symbol: "NEWSPACE",
    url: "https://newspace.finance",
    description: "Newspace is a Binance Smart Chain yield farming project with high yields and a limited supply of 58,000 NEWSPACE tokens.",
    chain: "Binance",
    logo: `${baseIconsUrl}/newspace-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Binance"],
    oracles: [],
    forkedFrom: ["Goose Finance"],
    module: "newspace/index.js",
    twitter: "newspacefinance",
    listedAt: 1645298931,
  },
  {
    id: "1435",
    name: "Cemetery Finance",
    address: "fantom:0x8bD04EE83a6076d1216237C8B91f7EeE3AccaB35",
    symbol: "HAUNT",
    url: "https://www.cemetery.finance",
    description: "Cemetery Finance is a farm with the simple purpose of generating passive income for users of the fantom ecosystem with sustainable and persistent gains, bringing balanced issuances and greater incentives to holders of the native HAUNT token.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/cementary-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Goose Finance"],
    module: "cemetery/index.js",
    twitter: "cemeteryfinance",
    listedAt: 1645299174,
  },
  {
    id: "1436",
    name: "SpectreFi",
    address: "fantom:0x2834d4F4cC40bd7D78c07E2D848358364222C272",
    symbol: "SPECT",
    url: "https://spectrefi.com",
    description: "Revolutionary DeFi Yield Farm on Fantom chain with referral system to give you that extra boost. Astral Farm also has auto-burn and auto-liquidity to ensure sustainably native price.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/spectrefi.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Goose Finance"],
    module: "spectrefi/index.js",
    twitter: "SpectreDefi",
    listedAt: 1645299360,
  },
  {
    id: "1437",
    name: "Nightmare Finance",
    address: "fantom:0x465d67204A8F7c02cd35288Cc7712526359FB0a9",
    symbol: "FEAR",
    url: "https://www.nightmarefinance.com",
    description: "Powered by Fantom (FTM) with its high-speed consensus mechanism, Earn FEAR through yield farming or via our Incentives Pools and Vault Staking",
    chain: "Fantom",
    logo: `${baseIconsUrl}/nightmare-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Goose Finance"],
    module: "nightmare/index.js",
    twitter: "Nightmare_fi",
    listedAt: 1645299462,
  },
  {
    id: "1438",
    name: "TreeHouse Finance",
    address: "avax:0x948aa1f5b895a8130dcc8abc7c6e9816ce2e00fe",
    symbol: "LEAF",
    url: "https://www.treehouse-finance.com",
    description: "Treehouse Finance Decentralized Government for Large Investments",
    chain: "Avalanche",
    logo: `${baseIconsUrl}/treehouse-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Avalanche"],
    oracles: [],
    forkedFrom: ["SushiSwap"],
    module: "treehousefinance/index.js",
    twitter: "treehousefnce",
    listedAt: 1645299673,
  },
  {
    id: "1439",
    name: "The Don Finance",
    address: "fantom:0x62e96896d417dd929a4966f2538631ad5af6cb46",
    symbol: "THEDON",
    url: "https://thedon.finance",
    description: "Defi yield farm and smart token on Fantom",
    chain: "Fantom",
    logo: `${baseIconsUrl}/the-don-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Goose Finance"],
    module: "thedon/index.js",
    twitter: "TheDonFinance1",
    listedAt: 1645301986,
  },
  {
    id: "1440",
    name: "Polaris Finance",
    address: "aurora:0xf0f3b9Eee32b1F490A4b8720cf6F005d4aE9eA86",
    symbol: "POLAR",
    url: "https://polarisfinance.io",
    description: "The first algorithmic stablecoin on Aurora chain, pegged to the price of 1 NEAR via seigniorage.",
    chain: "Aurora",
    logo: `${baseIconsUrl}/polaris-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "polar-token",
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Aurora"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "polaris-finance/index.js",
    twitter: "PolarisFinance_",
    listedAt: 1645384779,
  },
  {
    id: "1441",
    name: "Peel Defi",
    address: "bsc:0xEc734Dbb16acc25542d8714fe29CCB401d8f6E17",
    symbol: "PEEL",
    url: "https://peeldefi.com/",
    description: "An algorithmic stablecoin on BSC, pegged to the price of 1 BANANA via seigniorage.",
    chain: "Binance",
    logo: `${baseIconsUrl}/peel-defi.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Binance"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "peeldefi/index.js",
    twitter: "PeelDefi",
    listedAt: 1645395923,
  },
  {
    id: "1442",
    name: "Kyrios Finance",
    address: "fantom:0xdbf8a44f447cf6fa300fa84c2aac381724b0c6dd",
    symbol: "KYRIOS",
    url: "https://kyrios.finance/",
    description: "Yield Farming Protocol on Fantom",
    chain: "Fantom",
    logo: `${baseIconsUrl}/kyrios-finance.png`,
    audits: "2",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: [],
    audit_links: [
      "https://github.com/solidproof/projects/blob/main/Kyrios%20Finance/SmartContract_Audit_Solidproof_Kyrios_Finance.pdf",
      "https://531035661-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhccNVLK8kuMkleYXpAJW%2Fuploads%2FCosEw4NkBoipdEtd883t%2FSmartContract_Audit_Solidproof_Kyrios_Finance.pdf?alt=media&token=78b83a6b-db33-4d51-88f4-346fbbd2467e"
    ],
    module: "kyrios/index.js",
    twitter: "KyriosFinance",
    listedAt: 1645429975,
  },
  {
    id: "1443",
    name: "OneRing",
    address: null,
    symbol: "-",
    url: "https://www.onering.finance",
    description: "One Ring is a Multi-Chain Cross-Stable Yield Optimizer Platform.",
    chain: "Polygon",
    logo: `${baseIconsUrl}/onering.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield",
    chains: ["Polygon", "Fantom"],
    oracles: [],
    forkedFrom: [],
    module: "one-ring/index.js",
    twitter: "Onering_Finance",
    listedAt: 1645453599,
  },
  {
    id: "1444",
    name: "Vesta Finance",
    address: "arbitrum:0xa684cd057951541187f288294a1e1C2646aA2d24",
    symbol: "VSTA",
    url: "https://vestafinance.xyz",
    description: "Vesta Finance allows you to borrow collateralized stablecoin against supported crypto assets with no interest rate.",
    chain: "Arbitrum",
    logo: `${baseIconsUrl}/vesta-finance.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "vesta-finance",
    cmcId: null,
    category: "CDP",
    chains: ["Arbitrum"],
    oracles: ["Chainlink"],
    forkedFrom: ["Liquity"],
    module: "vesta/index.js",
    twitter: "vestafinance",
    audit_links: ["https://docs.vestafinance.xyz/audit/audits"],
    listedAt: 1645453933,
  },
  {
    id: "1445",
    name: "Aelin",
    address: "0xa9c125bf4c8bb26f299c00969532b66732b1f758",
    symbol: "Aelin",
    url: "https://aelin.xyz",
    description: "Aelin is a fundraising protocol built on Ethereum and launched on Optimism.",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/aelin.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "aelin",
    cmcId: "16991",
    category: "Services",
    chains: ["Ethereum", "Optimism"],
    oracles: [],
    forkedFrom: [],
    module: "aelin/index.js",
    twitter: "aelinprotocol",
    listedAt: 1645521923,
  },
  {
    id: "1446",
    name: "FDoge Finance",
    address: "fantom:0xEb0a2D1b1a33D95204af5d00f65FD9e349419878",
    symbol: "FDOGE",
    url: "https://fdoge.finance/",
    description: "FDoge Finance is a combination of algorithmics stablecoin on Fantom Opera network and meme token favored by Shiba Inus worldwide. FDoge’s token, FDOGE, aims to be the backbone, main medium of exchange and main source of liquidity for the Fantom network and be frequent owned by Fantom users and Doge lovers.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/fdoge-finance.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Algo-Stables",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: ["Tomb Finance"],
    module: "fdoge/index.js",
    twitter: "FDogefinance",
    listedAt: 1645523736,
  },
  {
    id: "1447",
    name: "Hashflow",
    address: null,
    symbol: "-",
    url: "https://www.hashflow.com",
    description: "The most powerful DeFi trading experience. Tight spreads. Zero slippage. MEV-resistant",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/hashflow.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Ethereum", "Polygon", "Binance", "Arbitrum", "Avalanche"],
    oracles: [],
    forkedFrom: [],
    module: "hashflow/index.js",
    twitter: "hashflownetwork",
    listedAt: 1645555257,
  },
  {
    id: "1448",
    name: "White Whale",
    address: "terra:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz",
    symbol: "WHALE",
    url: "https://whitewhale.money",
    description: "Empowering retail investors to keep the UST peg via L1 seigniorage arbitrage as well as participate in other complex automated trading strategies through a simple user-friendly experience.",
    chain: "Terra",
    logo: `${baseIconsUrl}/white-whale.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "white-whale",
    cmcId: "16121",
    category: "Yield",
    chains: ["Terra"],
    oracles: [],
    forkedFrom: [],
    module: "whitewhale/index.js",
    twitter: "WhiteWhaleTerra",
    audit_links: [
      "https://github.com/oak-security/audit-reports/blob/master/WhiteWhale/Audit%20Report%20-%20White%20Whale.pdf",
      "https://www.certik.com/projects/white-whale",
    ],
    listedAt: 1645555485,
  },
  {
    id: "1449",
    name: "ImpactMarket",
    address: "celo:0x46c9757c5497c5b1f2eb73ae79b6b67d119b0b58",
    symbol: "PACT",
    url: "https://www.impactmarket.com",
    description: "ImpactMarket is a Decentralized poverty alleviation protocol that allows the creation and distribution of unconditional basic income between communities and their beneficiaries.",
    chain: "Celo",
    logo: `${baseIconsUrl}/impactmarket.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "impactmarket",
    cmcId: "16260",
    category: "Yield",
    chains: ["Celo"],
    oracles: [],
    forkedFrom: [],
    module: "impact-market/index.js",
    twitter: "IPCTmarket",
    listedAt: 1645572803,
  },
  {
    id: "1450",
    name: "Solidex",
    address: null,
    symbol: "-",
    url: "https://solidexfinance.com",
    description: "Solidex is a protocol to optimize yield, voting power, and liquidity provisioning on Solidly.",
    chain: "Fantom",
    logo: `${baseIconsUrl}/solidex.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Yield Aggregator",
    chains: ["Fantom"],
    oracles: [],
    forkedFrom: [],
    module: "solidex/index.js",
    twitter: "SolidexFantom",
    listedAt: 1645578071,
  },
  {
    id: "1451",
    name: "Chintai",
    address: "eos:CHEX-eos-chexchexchex",
    symbol: "CHEX",
    url: "https://chintai.io",
    description: "A comprehensive blockchain solution that modernizes capital markets for asset managers, banks and enterprise.",
    chain: "EOS",
    logo: `${baseIconsUrl}/chintai.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "chex-token",
    cmcId: "8534",
    category: "Lending",
    chains: ["EOS"],
    oracles: [],
    forkedFrom: [],
    module: "chintai/index.js",
    twitter: "ChintaiNetwork",
    language: "C++",
    listedAt: 1645578660,
  },
  {
    id: "1452",
    name: "PayCash",
    address: "eos:MLNK-eos-swap.pcash",
    symbol: "MLNK",
    url: "https://paycashswap.com",
    description: "PayCash – among other things – is a universal EOS blockchain-based decentralized p2p crypto-to-fiat gateway (exchange) facilitating easy entry and exit to and from the cryptocurrency universe.",
    chain: "EOS",
    logo: `${baseIconsUrl}/paycash.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "malinka",
    cmcId: null,
    category: "Dexes",
    chains: ["EOS"],
    oracles: [],
    forkedFrom: [],
    module: "paycashswap/index.js",
    twitter: "PayCashTweet",
    language: "C++",
    listedAt: 1645578954,
  },
  {
    id: "1453",
    name: "EOS REX",
    address: "eos:eos",
    symbol: "EOS",
    url: "https://eosauthority.com/rex/statistics?network=eos",
    description: "REX (Resource Exchange) used for lending and borrowing CPU & NET resources and earning system protocol income (RAM fees, Name Bids, CPU/Net loans, PowerUp fees).",
    chain: "EOS",
    logo: `${baseIconsUrl}/eos-rex.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "eos",
    cmcId: "1765",
    category: "Lending",
    chains: ["EOS"],
    oracles: [],
    forkedFrom: [],
    module: "rex/index.js",
    twitter: "EosNFoundation",
    language: "C++",
    listedAt: 1645579151,
  },
  {
    id: "1454",
    name: "Bullish",
    address: null,
    symbol: "-",
    url: "https://bullish.com",
    description: "Bullish is a powerful new exchange for digital assets that offers deep liquidity, automated market making, and industry-leading security.",
    chain: "EOS",
    logo: `${baseIconsUrl}/bullish.png`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["EOS"],
    oracles: [],
    forkedFrom: [],
    module: "bullish/index.js",
    twitter: "Bullish",
    language: "C++",
    listedAt: 1645579286,
  },
  {
    id: "1455",
    name: "ClaimSwap",
    address: null,
    symbol: "-",
    url: "https://claimswap.org/",
    description: "Swap, earn, and claim on the decentralized, community driven platform",
    chain: "Klaytn",
    logo: `${baseIconsUrl}/claimswap.jpg`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Klaytn"],
    oracles: [],
    forkedFrom: ["Uniswap"],
    module: "claimswap/index.js",
    twitter: "claimswap",
    language: "Solidity",
    listedAt: 1645643108,
  },
  {
    id: "1456",
    name: "Solhero Finance",
    address:"solana:Hero6s7zJXsw9hfCXLVR5stLqgCok3E7CCkpQEoLAk2g",
    symbol: "HERO",
    url: "https://www.solhero.finance/",
    description: "Swap, earn, and claim on the decentralized, community driven platformBy encoding Solhero characters and items into NFTs, players can become its owners and bring them economic value through our marketplace.",
    chain: "Solana",
    logo: `${baseIconsUrl}/solhero.jpg`,
    audits: "0",
    audit_note: null,
    gecko_id: null,
    cmcId: "18189" ,
    category: "Yield",
    chains: ["Solana"],
    oracles: [],
    forkedFrom: [],
    module: "solhero/index.js",
    twitter: "SolheroFi",
    language: [],
    listedAt: 1645643109,
  },
  {
    id: "1457",
    name: "OGX",
    address:"",
    symbol: "-",
    url: "https://ogx.network/#/",
    description: "Synthetic assets issuance and trading protocol",
    chain: "EOS",
    logo: `${baseIconsUrl}/ogx.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "organix",
    cmcId: null ,
    category: "Synthetics",
    chains: ["EOS", "BSC"],
    oracles: [],
    forkedFrom: [],
    module: "ogx/index.js",
    twitter: "OrganixProtocol",
    language: [],
    listedAt: 1645643109,
  },
  {
    id: "1458",
    name: "Equilibrium",
    address: "eos:EOSDT",
    symbol: "EOSDT",
    url: "https://eosdt.com",
    description: "The #1 decentralized stable currency on EOS that does more than a dollar",
    chain: "EOS",
    logo: `${baseIconsUrl}/equilibrium.png`,
    audits: "0",
    audit_note: null,
    gecko_id: "equilibrium-eosdt",
    cmcId: "4017",
    category: "CDP",
    chains: ["EOS"],
    oracles: ["Oraclize.it", "Delphioracle", "LiquidApps"],
    forkedFrom: [],
    module: "equilibrium/index.js",
    twitter: "EOSDT",
    language: "C++",
    listedAt: 1645645017,
  },
  {
    id: "1459",
    name: "Elysia",
    address: "0x4da34f8264cb33a5c9f17081b9ef5ff6091116f4",
    symbol: "ELFI",
    url: "https://www.elyfi.world/en",
    description: "ELYFI is the lending protocol that lends cryptocurrency using asset tokens minted in ELYSIA as collateral.",
    chain: "Ethereum",
    logo: `${baseIconsUrl}/elysia.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "elyfi",
    cmcId: "18186",
    category: "Lending",
    chains: ["Binance", "Ethereum"],
    oracles: [],
    forkedFrom: [],
    module: "elysia/index.js",
    twitter: "Elysia_HQ",
    audit_links: [
      "https://www.certik.com/projects/elysia",
      "https://github.com/elysia-dev/elyfi-token/tree/main/audit"
    ],
    listedAt: 1645646372,
  },
  {
    id: "1460",
    name: "ValleySwap",
    address: "oasis:0xBC033203796CC2C8C543a5aAe93a9a643320433D",
    symbol: "VS",
    url: "https://valleyswap.com",
    description: "ValleySwap – DeFi exchange on Oasis Emerald Paratime Mainnet",
    chain: "Oasis",
    logo: `${baseIconsUrl}/valleyswap.png`,
    audits: "2",
    audit_note: null,
    gecko_id: null,
    cmcId: null,
    category: "Dexes",
    chains: ["Oasis"],
    oracles: [],
    forkedFrom: [],
    module: "valleyswap/index.js",
    twitter: "ValleySwap",
    audit_links: ["https://paladinsec.co/projects/valley-swap/"],
    listedAt: 1645647146,
  },
  {
    id: "1461",
    name: "WOOFi",
    address: "bsc:0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    symbol: "WOO",
    url: "https://fi.woo.org",
    description: "WOOFi is a multichain DeFi platform which offers the best trade execution and lowest swap fee, opportunities to earn sustainable yields on crypto, and a high-efficiency solution for on-chain liquidity provision.",
    chain: "Binance",
    logo: `${baseIconsUrl}/woofi.png`,
    audits: "2",
    audit_note: null,
    gecko_id: "woo-network",
    cmcId: "1289",
    category: "Dexes",
    chains: ["Binance"],
    oracles: ["Chainlink"],
    forkedFrom: [],
    module: "woofi.js",
    twitter: "WOOnetwork",
    audit_links: ["https://www.certik.com/projects/woofiswap"],
    listedAt: 1645647756,
  },
] as Protocol[]
