import { Hono } from 'hono'
import { appleTouchIcon } from '~/routes/apple-touch-icon.png'
import { avatar } from '~/routes/avatar.png'
import { favicon } from '~/routes/favicon.ico'
import { icon192 } from '~/routes/icon192.png'
import { icon512 } from '~/routes/icon512.png'
import { index } from '~/routes/index'
import { robots } from '~/routes/robots.txt'
import { webmanifest } from '~/routes/site.webmanifest'
import { style } from '~/routes/style.css'

const app = new Hono()

app.get('/', index)
app.get('/style.css', style)
app.get('/robots.txt', robots)
app.get('/site.webmanifest', webmanifest)
app.get('/favicon.ico', favicon)
app.get('/avatar.png', avatar)
app.get('/icon192.png', icon192)
app.get('/icon512.png', icon512)
app.get('/apple-touch-icon.png', appleTouchIcon)

export default app
