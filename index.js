import express from 'express'
const app=express()
import cookieParser from 'cookie-parser'
app.use(cookieParser())

import web from './routes/web.js'
app.use('/',web)

const port=process.env.PORT||3000

app.listen(port,()=>{
   console.log('server started')
})