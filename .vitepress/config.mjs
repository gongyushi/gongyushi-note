import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"; // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "公羽氏",
  head: [["link", { rel: "icon", href: "/icon.svg" }]],
  description: "A VitePress Site",
  base: "/gongyushi-note/",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/pages/vue3/index" },
      { text: "演示", link: "/markdown-examples" },
    ],
    logo: "/icon.svg",
    sidebar: [
      {
        text: "前端",
        items: [
          { text: "vue3", link: "/pages/vue3/index" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "演示",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // sidebar: { "/pages": set_sidebar("pages") },
    // sidebar: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      copyright: "Copyright@ 2018 Albert weng",
    },
  },
});
