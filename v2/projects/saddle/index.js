module.exports = {
  /* Project Metadata */
  name: 'Saddle',   // project name
  website: "https://saddle.finance",
  token: null,              // null, or token symbol if project has a custom token
  category: 'DEXes',        // allowed values as shown on DefiPulse: 'Derivatives', 'DEXes', 'Lending', 'Payments', 'Assets'
  start: 1611057090,        // January 19, 2021 11:51:30 AM
  /* required for fetching token balances */
  tokenHolderMap: [
    {
      tokens: [
        '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa', // TBTC
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d', // RENBTC
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', // WBTC
        '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6', // SBTC
        '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
        '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0x898BAD2774EB97cF6b94605677F43b41871410B1', // VETH2
        '0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6', // alETH
        '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb', // SETH
      ],
      holders: [
        '0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e', // BTC Pool Address
        '0x3911f80530595fbd01ab1516ab61255d75aeb066', // USD Pool Address
        '0xdec2157831D6ABC3Ec328291119cc91B337272b5', // VETH Pool Address
        '0xa6018520eaacc06c30ff2e1b3ee2c7c22e64196a', // alETH Pool Address
      ],
    }
  ],
};
