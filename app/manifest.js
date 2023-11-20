export default function manifest() {
  return {
    name: 'medcode',
    short_name: 'medcode',
    description: `Learning programming is accessible for beginners through free software programming
    courses These courses introduce essential best programming languages`,
    start_url: 'https://www.medcode.dev',
    display: 'standalone',
    icons: [
      {
        src: '/app/favicon.ico',
        sizes: 'any',
        type: 'image/ico',
      },
    ],
  }
}