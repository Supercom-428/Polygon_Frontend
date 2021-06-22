import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buy',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'BUY XVMC',
    icon: 'IfoIcon',
    href: 'https://macncheese.finance/buyXVMC.php',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Cheese Dip',
    icon: 'PoolIcon',
    href: 'https://docs.macncheese.finance/cheese-dip/cheese-dip-pools',
  },
  // {
  //   label: 'Launchpad (IDO)',
  //   icon: 'IfoIcon',
  //   href: '/ido',
  // },
  // {
  //   label: 'NFT Marketplace',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'RoadmapIcon',
    items: [
      {
          label: 'Docs',
          href: 'https://docs.macncheese.finance/',
      },
      // {
      //   label: 'QuickSwap Chart',
      //   href: 'https://info.quickswap.exchange/token/0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      // },
      // {
      //   label: 'Polygon Explorer',
      //   href: 'https://polygonscan.com/token/0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      // },
      // {
      //   label: 'Dapp Radar',
      //   href: 'https://dappradar.com/polygon/defi/polygaj-finance'
      // },
      // {
      //   label: 'Dapp.com',
      //   href: 'https://www.dapp.com/app/polygaj-network'
      // },
      // {
      //   label: 'GAJ Chart',
      //   href: 'https://quickchart.app/token/0xF4B0903774532AEe5ee567C02aaB681a81539e92'
      // }
    ],
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/polygaj",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://polygaj.medium.com",
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://docs.polygaj.finance/",
  //     },
  //   ],
  // },
  {
    label: "Chart",
    icon: "InfoIcon",
    href: 'https://doge2.app/mac&cheese-finance-XVMC-price-chart-polygon.php/',
  },
  // {
  //   label: "Collab",
  //   icon: "HandshakeIcon",
  //   href: 'https://t.me/polygajhead',
  // }
]

export default config
