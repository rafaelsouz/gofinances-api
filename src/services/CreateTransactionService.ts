// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';
// import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    // const categoryRepository = getRepository(Category);

    // const categoryName = categoryTitle.trim().toLowerCase();

    // const categorySameName = await categoryRepository.findOne({
    //   where: { title: categoryName },
    // });

    // if (categorySameName) {
    //   const categoryId = categorySameName.id;

    //   const transaction = transactionRepository.create({
    //     title,
    //     value,
    //     type,
    //     category_id: categoryId,
    //   });
    //   await transactionRepository.save(transaction);

    //   return transaction;
    // }

    // const category = categoryRepository.create({
    //   title: categoryName,
    // });

    // await transactionRepository.save(category);

    const transaction = transactionRepository.create({
      title,
      value,
      type,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
