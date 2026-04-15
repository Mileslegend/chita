import { Elysia, t } from 'elysia'

const rooms = new Elysia({ prefix: '/room' }).post('/create', () => {
    console.log("Creating room....")
})

const app = new Elysia({ prefix: '/api' })
    .use(rooms)
    .get('/user', ({user: "Miles"}))
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.fetch 
export const POST = app.fetch 

export type App = typeof app