import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from 'zod'

export const voteOnPoll = async (app: FastifyInstance) => {
  app.post('/polls/:pollId/votes', async (req, res) => {
    const voteOnPollBody = z.object({
      pollOptionId: z.string().uuid()
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid()
    })
    
    const { pollOptionId } = voteOnPollBody.parse(req.body)
    const { pollId } = voteOnPollParams.parse(req.params)

    return res.status(201).send()

  })
}