# BuildMyChatbot

The BuildMyChatbot website, built with Next.js, React and Tailwind. It has English, French and Dutch pages, a site-content chat demo powered by DeepSeek, and a contact form.

## Run locally

Requires Node.js 20.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Set `DEEPSEEK_API_KEY` in `.env.local` to enable the chat demo. The contact endpoint currently logs submissions; email delivery is not connected.

Page copy lives in `src/lib/site-content.ts`. Run `npm run build` for a production build and `npm run lint` to check the code.
