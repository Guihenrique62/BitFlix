import { Request, Response } from 'express'
import { categoryService } from '../services/categoriesService'
import { getPaginationParams } from '../helpers/getPaginationParams'

export const categoriesController = {
  index: async (req: Request, res: Response) => {

	const [page, perPage] = getPaginationParams(req.query)

    try {
        const paginatedCategories = await categoryService.findAllPaginated(page,perPage)

        return res.status(201).json(paginatedCategories)
    } catch (err) {

        if(err instanceof Error){
            return res.status(500).json({message: err.message})
        }
    }

    
  }
}