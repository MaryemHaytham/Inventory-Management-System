export interface IProduct {
  isSuccess: boolean;
  data: IProductData[];
  message: string;
  errorCode: number;
}

export interface IProductData {
  name: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  expiryDate: string;
  threshold: number;
  imageUrl: string;
}

export interface ISignleProduct {
  isSuccess: boolean;
  data: IProductData;
  message: string;
  errorCode: number;
}

export interface IDeleteResponse {
  isSuccess: boolean;
  data: null;
  message: string;
  errorCode: number;
}
