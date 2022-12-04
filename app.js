import express, { json } from 'express'
import { createTable} from './controller/Perguntas.js'
import router from './routes/router.js'


createTable().then(() => {console.log('Tabela criada')})
const app = express()

app.use(json())
app.use(router)


app.listen(3000, () => {
    console.log('servidor rodando na porta: 3000')
})

