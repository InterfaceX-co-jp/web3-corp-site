export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  INFURA_png: '/INFURA.png',
  Maya_Logo_2013_png: '/Maya-Logo-2013.png',
  alchemy_logo_png: '/alchemy-logo.png',
  android_chrome_192x192_png: '/android-chrome-192x192.png',
  android_chrome_512x512_png: '/android-chrome-512x512.png',
  apple_touch_icon_png: '/apple-touch-icon.png',
  assets: {
    Inter_Medium_Regular_json: '/assets/Inter_Medium_Regular.json'
  },
  avax_png: '/avax.png',
  aws_jpg: '/aws.jpg',
  azure_png: '/azure.png',
  belnder_png: '/belnder.png',
  bnb_chain_png: '/bnb-chain.png',
  c_sharp_png: '/c-sharp.png',
  docker_png: '/docker.png',
  dotnet_png: '/dotnet.png',
  elasticsearch_png: '/elasticsearch.png',
  eth_png: '/eth.png',
  favicon_16x16_png: '/favicon-16x16.png',
  favicon_32x32_png: '/favicon-32x32.png',
  favicon_ico: '/favicon.ico',
  figma_png: '/figma.png',
  firebase_png: '/firebase.png',
  frourio_png: '/frourio.png',
  ftm_png: '/ftm.png',
  githubactions_png: '/githubactions.png',
  gitlab_cicd_png: '/gitlab-cicd.png',
  go_echo_png: '/go-echo.png',
  go_png: '/go.png',
  grafana_logo_png: '/grafana-logo.png',
  graphql_png: '/graphql.png',
  grpc_png: '/grpc.png',
  jenkins_png: '/jenkins.png',
  kubernates_png: '/kubernates.png',
  laravel_png: '/laravel.png',
  mongodb_atlas_png: '/mongodb-atlas.png',
  mongodb_png: '/mongodb.png',
  mysql_png: '/mysql.png',
  next_png: '/next.png',
  next_svg: '/next.svg',
  nitin_gray_jpg: '/nitin-gray.jpg',
  nuxt_png: '/nuxt.png',
  polygon_png: '/polygon.png',
  prometheus_logo_png: '/prometheus-logo.png',
  python_png: '/python.png',
  redis_png: '/redis.png',
  rocksdb_png: '/rocksdb.png',
  rust_png: '/rust.png',
  site_webmanifest: '/site.webmanifest',
  sk_png: '/sk.png',
  sol_png: '/sol.png',
  storybook_png: '/storybook.png',
  terraform_png: '/terraform.png',
  ton_png: '/ton.png',
  tsubasa_tanaka_jpg: '/tsubasa-tanaka.jpg',
  typescript_png: '/typescript.png',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
