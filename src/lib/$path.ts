export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  android_chrome_192x192_png: '/android-chrome-192x192.png',
  android_chrome_512x512_png: '/android-chrome-512x512.png',
  apple_touch_icon_png: '/apple-touch-icon.png',
  assets: {
    Inter_Medium_Regular_json: '/assets/Inter_Medium_Regular.json'
  },
  aws_jpg: '/aws.jpg',
  docker_png: '/docker.png',
  elasticsearch_png: '/elasticsearch.png',
  favicon_16x16_png: '/favicon-16x16.png',
  favicon_32x32_png: '/favicon-32x32.png',
  favicon_ico: '/favicon.ico',
  figma_png: '/figma.png',
  firebase_png: '/firebase.png',
  frourio_png: '/frourio.png',
  go_echo_png: '/go-echo.png',
  go_png: '/go.png',
  graphql_png: '/graphql.png',
  grpc_png: '/grpc.png',
  laravel_png: '/laravel.png',
  mongodb_atlas_png: '/mongodb-atlas.png',
  mongodb_png: '/mongodb.png',
  mysql_png: '/mysql.png',
  next_png: '/next.png',
  next_svg: '/next.svg',
  nuxt_png: '/nuxt.png',
  site_webmanifest: '/site.webmanifest',
  sk_png: '/sk.png',
  storybook_png: '/storybook.png',
  terraform_png: '/terraform.png',
  typescript_png: '/typescript.png',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
