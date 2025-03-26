import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { buildEnd } from './buildEnd.config'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vite.dev/og-image.jpg'
const ogTitle = 'Vite'
const ogUrl = 'https://vite.dev'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()

export default defineConfig({

  title: 'SDNU 科技协会',
  description: '山东师范大学科技协会官方网站和知识库',

  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/kjxh.png' }],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' },
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap',
        as: 'style',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap',
      },
    ],
    ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vite' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:site_name', content: 'vitejs' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'TPLGJZGR',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  themeConfig: {
    logo: '/kjxh.png',

    outline: {
      label: '本页目录',
      level: [2, 3],
    },



    search: {
      provider: 'algolia', 
      options: {
        appId: '7H67QR5P0A',
        apiKey: '208bb9c14574939326032b937431014b',
        indexName: 'vitejs',
        searchParameters: {
          facetFilters: ['tags:cn']
        },
        placeholder: '搜索内容',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存到搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索供应商'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为这个查询应该有结果？',
              reportMissingResultsLinkText: '向我们反馈'
            }
          }
        },
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // Using WwAds for China
    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright:
          'Copyright © 1990-2024 山东师范大学科技协会'

    },

    nav: [
      {
        component: 'ReleaseTag'
      },
      { text: '电脑知识', link: '/knowledge/', activeMatch: '/knowledge/' },
      { text: '电脑推荐', link: '/laptops/', activeMatch: '/laptops/' },
      { text: '软件安装', link: '/softwares/', activeMatch: '/softwares/' },
      { text: '活动', link: '/activities/', activeMatch: '/activities/' },
      { text: '关于科协', link: '/team', activeMatch: '/team' },
    ],

    sidebar: {
      '/guide/': [
        {

          text: '介绍',
          items: [
            {
              text: '开始',
              link: '/guide/',
            },
            {
              text: '理念',
              link: '/guide/philosophy',
            },
            {
              text: '为什么选 Vite',
              link: '/guide/why',
            },
          ],
        },
        {
          text: '指引',
          items: [
            {
              text: '功能',
              link: '/guide/features',
            },
            {
              text: '命令行接口',
              link: '/guide/cli'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {

              text: '故障排除',
              link: '/guide/troubleshooting',
            },
            {
              text: '性能',
              link: '/guide/performance',
            },
            {
              text: '从 v5 迁移',
              link: '/guide/migration'
            },
            {
              text: '破坏性变更',
              link: '/changes/',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: '配置参考',
              link: '/config/',
            },
          ],
        },
        {
          text: '环境 API',
          items: [
            {
              text: '介绍',
              link: '/guide/api-environment',
            },
            {
              text: '环境实例',
              link: '/guide/api-environment-instances',
            },
            {
              text: '插件',
              link: '/guide/api-environment-plugins',
            },
            {
              text: '框架',
              link: '/guide/api-environment-frameworks',
            },
            {
              text: '运行时',
              link: '/guide/api-environment-runtimes',
            },
          ],
        },
      ],
      '/activities/': [
        {
          text: '电脑义诊',
          items: [
            {
              text: '2025年3月27日（周四）',
              link: '/activities/20250327dnyz',
            },
          ],
        },
        {
          text: '电竞赛事',
          items: [
            
          ],
        }
      ],
    },
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`

      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.unshift(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: pageData.title }],
    )
    return pageData
  },
  markdown: {
    codeTransformers: [transformerTwoslash()],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          firebase: 'vscode-icons:file-type-firebase',
          '.gitlab-ci.yml': 'vscode-icons:file-type-gitlab',
        },
      }),
    ],
    optimizeDeps: {
      include: [
        '@shikijs/vitepress-twoslash/client',
        'gsap',
        'gsap/dist/ScrollTrigger',
        'gsap/dist/MotionPathPlugin',
      ],
    },
  },
  buildEnd,

})