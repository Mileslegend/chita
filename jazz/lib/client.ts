import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

// .api to enter /api prefix
export const client = treaty<App>('https://urban-fiesta-pjrg95v7wj6g2j5w-3000.app.github.dev/').api
const result = client.user.get()
  