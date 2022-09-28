import { Router } from 'express'
import { fruitsRepository } from './fruits.repository.js'

export const fruitsController = new Router()

fruitsController.get('', (req, res) => {
  const { skip, limit } = req.query
  let computedSkip = 0
  if (skip) {
    computedSkip = Number(skip)
  }
  let computedLimit
  if (limit) {
    computedLimit = Number(limit)
  }
  const fruits = fruitsRepository.find({
    skip: computedSkip,
    limit: computedLimit,
  })
  res.json(fruits)
})

fruitsController.get('/:id', (req, res) => {
  const { id } = req.params
  const fruit = fruitsRepository.findOne({ id: Number(id) })
  res.json(fruit || {})
})
