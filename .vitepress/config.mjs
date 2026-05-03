import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "pages",

  title: "마인클라우드 문서",
  description: "마인클라우드 서비스 문서",
  lang: 'ko-KR',
  base: '/',
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: '클라우드, 마인클라우드, 문서' }],
    ['meta', { name: 'author', content: '마인클라우드' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.minecloud.kr/' }],
    ['meta', { property: 'og:image', content: '/images/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ["meta", { name: "theme-color", content: "#0adfd4" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    notFound: {
      title: "페이지를 찾을 수 없습니다.",
      quote: "요청하신 페이지가 존재하지 않습니다.",
      linkText: "홈으로 돌아가기",
      code: "404",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "검색하기" },
              modal: {
                noResultsText: "검색 결과가 없습니다.",
                footer: {
                  selectText: "선택하기",
                  navigateText: "이동하기",
                  closeText: "나가기",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },

    nav: [
      {
        text: '커뮤니티',
        items: [
          {
            text: '디스코드',
            link: 'https://discord.gg/DAehgmMy2s',
            target: '_blank'
          }
        ]
      },
      {
        text: '문의',
        items: [
          {
            text: '채널톡',
            link: 'https://minecloud.channel.io/',
            target: '_blank'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '약관',
        collapsed: false,
        items: [
          { text: '이용약관', link: '/tos' },
          { text: '개인정보처리방침', link: '/pp' },
        ]
      }
    ],

    lastUpdated: true
  }
})