import type { ShoppingList } from '@/model/ShoppingList';
import { axiosInstance } from '@/services/axios-instance';

const URN = '/shopping-lists';

export const shoppingListsService = {
  async getAll(): Promise<readonly ShoppingList[]> {
    return axiosInstance.get(URN);
  },
  async getOne(id: string): Promise<ShoppingList | undefined> {
    return axiosInstance.get(`${URN}/${id}`);
  },
};
