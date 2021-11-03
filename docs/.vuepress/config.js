module.exports = {
  title: "ImCaO's Blog",
  description: '花有重开日，人无再少年。',
  dest: 'dist',
  port: '7777',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'script',
      {
        src: '/scripts/baidu.js',
      },
    ],
    [
      'script',
      {
        src: '/scripts/wakeup.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'auto',
    commentsSolution: 'valine',
    valineConfig: {
      appId: 'OGHXv2eJzhMHNSVljRDkxDMJ-gzGzoHsz', // your appId
      appKey: 'DyiGvNwjtl295wF7cEtjnMEP', // your appKey
      placeholder: '填写邮箱可以收到回复提醒哦~',
      recordIP: true,
      emojiCDN: '//i0.hdslb.com/bfs/emote/',
      emojiMaps: {
        '[藏狐]': 'ba0937ef6f3ccca85e2e0047e6263f3b4da37201.png',
        '[doge]': '3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png',
        '[微笑]': '685612eadc33f6bc233776c6241813385844f182.png',
        '[OK]': '4683fd9ffc925fa6423110979d7dcac5eda297f4.png',
        '[星星眼]': '63c9d1a31c0da745b61cdb35e0ecb28635675db2.png',
        '[妙啊]': 'b4cb77159d58614a9b787b91b1cd22a81f383535.png',
        '[辣眼睛]': '35d62c496d1e4ea9e091243fa812866f5fecc101.png',
        '[吃瓜]': '4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png',
        '[滑稽]': 'd15121545a99ac46774f1f4465b895fe2d1411c3.png',
        '[呲牙]': 'b5a5898491944a4268360f2e7a84623149672eb6.png',
        '[打call]': '431432c43da3ee5aab5b0e4f8931953e649e9975.png',
        '[歪嘴]': '4384050fbab0586259acdd170b510fe262f08a17.png',
        '[调皮]': '8290b7308325e3179d2154327c85640af1528617.png',
        '[嗑瓜子]': '28a91da1685d90124cfeead74622e1ebb417c0eb.png',
        '[笑哭]': 'c3043ba94babf824dea03ce500d0e73763bf4f40.png',
        '[脱单doge]': 'bf7e00ecab02171f8461ee8cf439c73db9797748.png',
        '[给心心]': '1597302b98827463f5b75c7cac1f29ea6ce572c4.png',
        '[嘟嘟]': 'abd7404537d8162720ccbba9e0a8cdf75547e07a.png',
        '[喜欢]': '8a10a4d73a89f665feff3d46ca56e83dc68f9eb8.png',
        '[酸了]': '92b1c8cbceea3ae0e8e32253ea414783e8ba7806.png',
        '[哦呼]': '362bded07ea5434886271d23fa25f5d85d8af06c.png',
        '[嫌弃]': 'de4c0783aaa60ec03de0a2b90858927bfad7154b.png',
        '[大哭]': '2caafee2e5db4db72104650d87810cc2c123fc86.png',
        '[害羞]': '9d2ec4e1fbd6cb1b4d12d2bbbdd124ccb83ddfda.png',
        '[疑惑]': 'b7840db4b1f9f4726b7cb23c0972720c1698d661.png',
        '[喜极而泣]': '485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png',
        '[奸笑]': 'bb84906573472f0a84cebad1e9000eb6164a6f5a.png',
        '[笑]': '81edf17314cea3b48674312b4364df44d5c01f17.png',
        '[偷笑]': '6c49d226e76c42cd8002abc47b3112bc5a92f66a.png',
        '[惊讶]': 'f8e9a59cad52ae1a19622805696a35f0a0d853f3.png',
        '[捂脸]': '6921bb43f0c634870b92f4a8ad41dada94a5296d.png',
        '[阴险]': 'ba8d5f8e7d136d59aab52c40fd3b8a43419eb03c.png',
        '[囧]': '12e41d357a9807cc80ef1e1ed258127fcc791424.png',
        '[呆]': '33ad6000d9f9f168a0976bc60937786f239e5d8c.png',
        '[抠鼻]': 'cb89184c97e3f6d50acfd7961c313ce50360d70f.png',
        '[大笑]': 'ca94ad1c7e6dac895eb5b33b7836b634c614d1c0.png',
        '[惊喜]': '0afecaf3a3499479af946f29749e1a6c285b6f65.png',
        '[无语]': '44667b7d9349957e903b1b62cb91fb9b13720f04.png',
        '[点赞]': '1a67265993913f4c35d15a6028a30724e83e7d35.png',
        '[鼓掌]': '895d1fc616b4b6c830cf96012880818c0e1de00d.png',
        '[尴尬]': 'cb321684ed5ce6eacdc2699092ab8fe7679e4fda.png',
        '[灵魂出窍]': '43d3db7d97343c01b47e22cfabeca84b4251f35a.png',
        '[委屈]': 'd2f26cbdd6c96960320af03f5514c5b524990840.png',
        '[傲娇]': '010540d0f61220a0db4922e4a679a1d8eca94f4e.png',
        '[疼]': '905fd9a99ec316e353b9bd4ecd49a5f0a301eabf.png',
        '[冷]': 'cb0ebbd0668640f07ebfc0e03f7a18a8cd00b4ed.png',
        '[生病]': '0f25ce04ae1d7baf98650986454c634f6612cb76.png',
        '[吓]': '9c10c5ebc7bef27ec641b8a1877674e0c65fea5d.png',
        '[吐]': '06946bfe71ac48a6078a0b662181bb5cad09decc.png',
        '[捂眼]': 'c5c6d6982e1e53e478daae554b239f2b227b172b.png',
        '[嘘声]': 'e64af664d20716e090f10411496998095f62f844.png',
        '[思考]': 'cfa9b7e89e4bfe04bbcd34ccb1b0df37f4fa905c.png',
        '[再见]': 'fc510306bae26c9aec7e287cdf201ded27b065b9.png',
        '[翻白眼]': 'eba54707c7168925b18f6f8b1f48d532fe08c2b1.png',
        '[哈欠]': '888d877729cbec444ddbd1cf4c9af155a7a06086.png',
        '[奋斗]': 'bb2060c15dba7d3fd731c35079d1617f1afe3376.png',
        '[墨镜]': '3a03aebfc06339d86a68c2d893303b46f4b85771.png',
        '[难过]': 'a651db36701610aa70a781fa98c07c9789b11543.png',
        '[撇嘴]': '531863568e5668c5ac181d395508a0eeb1f0cda4.png',
        '[抓狂]': '4c87afff88c22439c45b79e9d2035d21d5622eba.png',
        '[生气]': '3195714219c4b582a4fb02033dd1519913d0246d.png',
        '[口罩]': '3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png',
        '[tv_白眼]': 'c1d59f439e379ee50eef488bcb5e5378e5044ea4.png',
        '[tv_doge]': '6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png',
        '[tv_坏笑]': '1f0b87f731a671079842116e0991c91c2c88645a.png',
        '[tv_难过]': '87f46748d3f142ebc6586ff58860d0e2fc8263ba.png',
        '[tv_生气]': '26702dcafdab5e8225b43ffd23c94ac1ff932654.png',
        '[tv_委屈]': 'd04dba7b5465779e9755d2ab6f0a897b9b33bb77.png',
        '[tv_斜眼笑]': '911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png',
        '[tv_呆]': 'fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png',
        '[tv_发怒]': '34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png',
        '[tv_惊吓]': '0d15c7e2ee58e935adc6a7193ee042388adc22af.png',
        '[tv_呕吐]': '9f996894a39e282ccf5e66856af49483f81870f3.png',
        '[tv_思考]': '90cf159733e558137ed20aa04d09964436f618a1.png',
        '[tv_微笑]': '70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png',
        '[tv_疑问]': '0793d949b18d7be716078349c202c15ff166f314.png',
        '[tv_大哭]': '23269aeb35f99daee28dda129676f6e9ea87934f.png',
        '[tv_鼓掌]': '1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png',
        '[tv_抠鼻]': 'c666f55e88d471e51bbd9fab9bb308110824a6eb.png',
        '[tv_亲亲]': 'a8111ad55953ef5e3be3327ef94eb4a39d535d06.png',
        '[tv_调皮]': 'b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png',
        '[tv_笑哭]': '1abc628f6d4f4caf9d0e7800878f4697abbc8273.png',
        '[tv_晕]': '5443c22b4d07fb1907ccc610c8e6db254f2461b7.png',
        '[tv_点赞]': 'f85c354995bd99e28fc76c869bfe42ba6438eff4.png',
        '[tv_害羞]': 'a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png',
        '[tv_睡着]': '8b196675b53af58264f383c50ad0945048290b33.png',
        '[tv_色]': '61822c7e9aae5da76475e7892534545336b23a6f.png',
        '[tv_吐血]': '09dd16a7aa59b77baa1155d47484409624470c77.png',
        '[tv_无奈]': 'ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png',
        '[tv_再见]': '180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png',
        '[tv_流汗]': 'cead1c351ab8d79e9f369605beb90148db0fbed3.png',
        '[tv_偷笑]': 'bb690d4107620f1c15cff29509db529a73aee261.png',
        '[tv_抓狂]': 'fe31c08edad661d63762b04e17b8d5ae3c71a757.png',
        '[tv_黑人问号]': '45821a01f51bc867da9edbaa2e070410819a95b2.png',
        '[tv_困]': '241ee304e44c0af029adceb294399391e4737ef2.png',
        '[tv_打脸]': '56ab10b624063e966bfcb76ea5dc4794d87dfd47.png',
        '[tv_闭嘴]': 'c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png',
        '[tv_鄙视]': '6e72339f346a692a495b123174b49e4e8e781303.png',
        '[tv_腼腆]': '89712c0d4af73e67f89e35cbc518420380a7f6f4.png',
        '[tv_馋]': 'fc7e829b845c43c623c8b490ee3602b7f0e76a31.png',
        '[tv_可爱]': '9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png',
        '[tv_发财]': '34db290afd2963723c6eb3c4560667db7253a21a.png',
        '[tv_生病]': '8b0ec90e6b86771092a498c54f09fc94621c1900.png',
        '[tv_流鼻血]': 'c32d39db2737f89b904ca32700d140a9241b0767.png',
        '[tv_尴尬]': '7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png',
        '[tv_大佬]': '093c1e2c490161aca397afc45573c877cdead616.png',
        '[tv_流泪]': '7e71cde7858f0cd50d74b0264aa26db612a8a167.png',
        '[tv_冷漠]': 'b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png',
        '[tv_皱眉]': '72ccad6679fea0d14cce648b4d818e09b8ffea2d.png',
        '[tv_鬼脸]': '0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png',
        '[tv_调侃]': '4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png',
        '[tv_目瞪口呆]': '0b8cb81a68de5d5365212c99375e7ace3e7891b7.png',
      },
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'fas fa-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'fas fa-clock',
      },
      {
        text: 'MessageBoard',
        link: '/blogs/MessageBorad.html',
        icon: 'fas fa-feather-alt',
      },
      {
        text: 'FriendLinks',
        link: '/blogs/FriendLinks.html',
        icon: 'fas fa-user-friends',
      },
      {
        text: 'Links',
        type: 'links',
        items: [
          {
            text: 'About',
            link: '/blogs/about.html',
            icon: 'fas fa-user',
          },
          {
            text: 'Footprint',
            link: '/blogs/footprint.html',
            icon: 'fas fa-map-marker-alt',
          },
          {
            text: 'Favorites',
            link: 'https://www.imcao.cn/favorites/',
            icon: 'fas fa-bookmark',
          },
          {
            text: 'RSS',
            link: 'https://www.imcao.cn/rss.xml',
            icon: 'fas fa-rss',
          },
        ],
        icon: 'fas fa-link',
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      socialLinks: [
        {
          icon: 'fab fa-github',
          link: 'https://github.com/ImCa0',
          color: '#3A3E42',
        },
        {
          icon: 'fas fa-envelope',
          link: 'mailto:imcao@imcao.cn',
          color: '#3498DB',
        },
        {
          icon: 'fab fa-weibo',
          link: 'https://weibo.com/u/3533869340',
          color: '#E15B64',
        },
        {
          icon: 'fab fa-steam',
          link: 'https://steamcommunity.com/id/ImCaO/',
          color: '#476292',
        },
        {
          icon: 'fas fa-subway',
          link: 'https://travellings.link',
          color: '#3A3E42',
        },
      ],
      category: {
        location: 2,
        text: 'Category',
      },
    },
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    repo: 'ImCa0/ImCaO-Blog',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    author: 'ImCaO',
    authorAvatar: '/avatar.png',
    record: '浙ICP备2020040461号-1',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/nprogress'],
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        site_url: 'https://www.imcao.cn',
      },
    ],
  ],
}
