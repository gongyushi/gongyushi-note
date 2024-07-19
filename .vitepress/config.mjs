import {
  defineConfig
} from "vitepress";
import {
  set_sidebar
} from "../utils/auto-gen-sidebar.mjs"; // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "公羽氏",
  head: [
    ["link", {
      rel: "icon",
      href: "/icon.svg"
    }]
  ],
  description: "A VitePress Site",
  base: "/gongyushi-note/",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [{
        text: "首页",
        link: "/"
      },
      {
        text: "前端",
        items: [{
            text: "vue3.0",
            link: "/frontend/vue3.0",
          },
          {
            text: "vue2.0",
            link: "/frontend/vue2.0"
          },
          {
            text: "基础知识",
            link: "/frontend/web-basic"
          },
        ],
      },
      {
        text: "博客",
        link: "/articles/组件库环境搭建"
      },
      {
        text: "Python",
        link: "/python/"
      },
      
      {
        text: 'gitee',
        link: 'https://gitee.com/zhengxinonly'
      }, // 外链
    ],
    logo: "/icon.svg",
    sidebar: {
      "/frontend/web-basic/": [{
          text: "前端",
          items: [{
              text: "前端基础",
              link: "/frontend/web-basic/index.md",
            },
            {
              text: "HTML",
              link: "/frontend/HTML"
            },
            {
              text: "CSS",
              link: "/frontend/CSS"
            },
          ],
        },
        {
          text: "演示",
          items: [{
              text: "Markdown Examples",
              link: "/markdown-examples"
            },
            {
              text: "Runtime API Examples",
              link: "/api-examples"
            },
          ],
        },
      ],
      "/frontend/vue3.0/": [{
          text: "前端",
          items: [{
              text: "vue3.0基础知识",
              link: "/frontend/vue3.0/index.md",
            },
            {
              text: "vite",
              link: "/frontend/HTML"
            },
            {
              text: "pinia",
              link: "/frontend/CSS"
            },
          ],
        },
        {
          text: "演示",
          items: [{
              text: "Markdown Examples",
              link: "/markdown-examples"
            },
            {
              text: "Runtime API Examples",
              link: "/api-examples"
            },
          ],
        },
      ],
    },
    // sidebar: { "/pages": set_sidebar("pages") },
    // sidebar: true,
    socialLinks: [{
      icon: "github",
      link: "https://github.com/vuejs/vitepress"
    }, ],
    footer: {
      copyright: "Copyright@ 2018 Albert weng",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});