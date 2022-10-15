import { Router } from 'express'
import paginationMiddleware from '../middlewares/pagination.js'
import { usersRepository } from './users.repository.js'

export const usersController = new Router()

usersController.get('', paginationMiddleware({limitKey: 'limit', skipKey: 'skip'}), (req, res) => {
  const users = usersRepository.find({
    skip: req.skip,
    limit: req.limit,
  })
  res.json(users)
})

usersController.get('/:id', (req, res) => {
  const { id } = req.params
  const user = usersRepository.findOne({ id: Number(id) })
  res.json(user || {})
})
