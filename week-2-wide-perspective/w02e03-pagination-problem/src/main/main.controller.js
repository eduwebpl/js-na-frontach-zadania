import { Router } from 'express'

export const mainController = new Router()

const serverUpSince = new Date()

mainController.get('', (req, res) => {
  res.json({ serverUpSince })
})
