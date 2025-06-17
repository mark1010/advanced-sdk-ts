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
import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { ExpiringContractStatus } from '../../model/enums/ExpiringContractStatus';
import { ProductType } from '../../model/enums/ProductType';
import { ExtendedTimestamp } from '../../model/ExtendedTimestamp';
import { Products } from '../../model/Products';
import { Product } from '../../model/Product';
import { Candles } from '../../model/Candles';
import { GetProductBookResponse as GetPBResp } from '../../model/GetProductBookResponse';
import { GetMarketTradesResponse } from '../../model/GetMarketTradesResponse';

export type GetServerTimeRequest = Record<string, never>;

export type GetServerTimeResponse = ExtendedTimestamp;

export type ListPublicProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getAllProducts?: boolean;
};

export type ListPublicProductsResponse = Products;

export type GetPublicProductRequest = {
  productId: string;
};

export type GetPublicProductResponse = Product;

export type GetPublicProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

export type GetPublicProductCandlesResponse = Candles;

export type GetPublicProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: string;
};

export type GetPublicProductBookResponse = GetPBResp;

export type GetPublicProductMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetPublicProductMarketTradesResponse = GetMarketTradesResponse;
