/**
 * Copyright 2024-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GetBestBidAskResponse as GetBestResp } from '../../model/GetBestBidAskResponse';
import { GetProductBookResponse as GetPBResp } from '../../model/GetProductBookResponse';
import { GetProductResponse as GetProdResp } from '../../model/GetProductResponse';
import { Candles } from '../../model/Candles';
import { ProductType } from '../../model/enums/ProductType';
import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { ExpiringContractStatus } from '../../model/enums/ExpiringContractStatus';
import { Product } from '../../model/Product';
import { GetMarketTradesResponse } from '../../model/GetMarketTradesResponse';

export type GetBestBidAskRequest = {
  productIds?: string[];
};

export type GetBestBidAskResponse = GetBestResp;

export type GetProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: string;
};

export type GetProductBookResponse = GetPBResp;

export type GetProductRequest = {
  productId: string;
  getTradabilityStatus?: boolean;
};

export type GetProductResponse = GetProdResp;

export type GetProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

export type GetProductCandlesResponse = Candles;

export type ListProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getTradabilityStatus?: boolean;
  getAllProducts?: boolean;
};

export type ListProductsResponse = { products: Product[] };

export type GetProductMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetProductMarketTradesResponse = GetMarketTradesResponse;
