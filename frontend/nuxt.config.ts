import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  serverMiddleware: [{ path: "/api", handler: "~/backend/api" }],
  proxy: {
    "/api/": {
      target: "http://localhost:5000", // กำหนด API server ที่ต้องการให้ request ไป
      pathRewrite: { "^/api/": "" },
    },
  },
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      //       {
      //         code: "zh",
      //         iso: "zh-CN",
      //         name: "简体中文",
      //         file: "zh.json",
      //         icon: `<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      // <g clip-path="url(#clip0_3_51)">
      // <rect width="28" height="20" rx="2" fill="white"/>
      // <mask id="mask0_3_51" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
      // <rect width="28" height="20" rx="2" fill="white"/>
      // </mask>
      // <g mask="url(#mask0_3_51)">
      // <rect width="28" height="20" fill="#F1361D"/>
      // <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0728 3.10076L11.0412 3.26586L11.7675 3.92736L11.9326 2.95891L12.5941 2.23258L11.6257 2.06747L10.8994 1.40598L10.7342 2.37442L10.0728 3.10076ZM12.6668 6.48803L13.506 5.97728L14.4881 6L13.9774 5.16079L14.0001 4.17863L13.1609 4.68938L12.1787 4.66667L12.6895 5.50588L12.6668 6.48803ZM11.5284 11.9709L10.7075 12.5106L10.6959 11.5282L10.1562 10.7074L11.1385 10.6958L11.9594 10.1561L11.971 11.1384L12.5107 11.9593L11.5284 11.9709ZM12.2412 9.43144L13.2177 9.32321L14.0982 9.75887L13.99 8.78243L14.4256 7.9019L13.4492 8.01013L12.5687 7.57446L12.6769 8.5509L12.2412 9.43144Z" fill="#FFDC42"/>
      // <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 8.22666L4.31561 9.90272L5.1831 7.14872L2.86252 5.43059L5.7498 5.40459L6.66675 2.66666L7.58369 5.40459L10.471 5.43059L8.1504 7.14872L9.01789 9.90272L6.66675 8.22666Z" fill="#FFDC42"/>
      // </g>
      // </g>
      // <defs>
      // <clipPath id="clip0_3_51">
      // <rect width="28" height="20" fill="white"/>
      // </clipPath>
      // </defs>
      // </svg>
      // `,
      //       },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        icon: `<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_61)">
<rect width="28" height="20" rx="2" fill="white"/>
<mask id="mask0_3_61" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
<rect width="28" height="20" rx="2" fill="white"/>
</mask>
<g mask="url(#mask0_3_61)">
<rect width="28" height="20" fill="#0A17A7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M-1.2825 -1.91644L10.6666 6.14335V-1.33333H17.3333V6.14335L29.2824 -1.91644L30.7736 0.294324L21.3262 6.66667H28V13.3333H21.3262L30.7736 19.7057L29.2824 21.9165L17.3333 13.8567V21.3333H10.6666V13.8567L-1.2825 21.9165L-2.77368 19.7057L6.67371 13.3333H-3.14713e-05V6.66667H6.67371L-2.77368 0.294324L-1.2825 -1.91644Z" fill="white"/>
<path d="M18.668 6.33219L31.3333 -2" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/>
<path d="M20.0127 13.6975L31.3665 21.3503" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/>
<path d="M8.00562 6.31046L-3.8374 -1.67099" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/>
<path d="M9.29012 13.6049L-3.8374 22.3105" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" fill="#E6273E"/>
</g>
</g>
<defs>
<clipPath id="clip0_3_61">
<rect width="28" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

`,
      },
      {
        code: "th",
        iso: "th-TH",
        name: "ภาษาไทย",
        file: "th.json",
        icon: `<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_74)">
<rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/>
<mask id="mask0_3_74" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
<rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/>
</mask>
<g mask="url(#mask0_3_74)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 4H28V0H0V4Z" fill="#F12532"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V16H0V20Z" fill="#F12532"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66666H0V13.3333Z" fill="#322B6C"/>
</g>
</g>
<defs>
<clipPath id="clip0_3_74">
<rect width="28" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

`,
      },
    ],
    defaultLocale: "en",
    // vueI18n: i18nConfig,
    // globalInjection: true,
  },
});
