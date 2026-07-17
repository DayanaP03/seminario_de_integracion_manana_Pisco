// src/application/use-cases/category.use-case.ts
import type { CategoryRepository } from '@/domain/ports/category.repository'
import type { Category } from '@/domain/entities/category.entity'
import type { CategoryStats } from '@/domain/entities/category-stats.entity'

export class CategoryUseCase {
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.getCategories()
  }

  createCategory(payload: {
    name: string
    slug: string
    description?: string
    is_active?: boolean
  }): Promise<Category> {
    return this.categoryRepository.createCategory(payload)
  }

  updateCategory(
    id: number,
    payload: { name?: string; description?: string; is_active?: boolean },
  ): Promise<Category> {
    return this.categoryRepository.updateCategory(id, payload)
  }

  deleteCategory(id: number): Promise<void> {
    return this.categoryRepository.deleteCategory(id)
  }

  getStats(): Promise<CategoryStats> {
    return this.categoryRepository.getStats()
  }
}