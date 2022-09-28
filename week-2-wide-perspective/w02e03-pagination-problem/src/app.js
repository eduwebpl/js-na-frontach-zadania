import express from 'express'
import { fruitsController } from './fruits/fruits.controller.js'
import { mainController } from './main/main.controller.js'
import { usersController } from './users/users.controller.js'

export const app = express()

app.use(express.json())

app.use(mainController)
app.use('/users', usersController)
app.use('/fruits', fruitsController)
