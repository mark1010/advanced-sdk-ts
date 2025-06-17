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
import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetBestBidAskRequest,
  GetBestBidAskResponse,
  GetProductBookRequest,
  GetProductBookResponse,
  GetProductRequest,
  GetProductResponse,
  GetProductCandlesRequest,
  GetProductCandlesResponse,
  ListProductsRequest,
  ListProductsResponse,
  GetProductMarketTradesRequest,
  GetProductMarketTradesResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IProductsService {
  getBestBidAsk(
    request: GetBestBidAskRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetBestBidAskResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProduct(
    request: GetProductRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductBook(
    request: GetProductBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductBookResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductCandles(
    request: GetProductCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductCandlesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductMarketTrades(
    request: GetProductMarketTradesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductMarketTradesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listProducts(
    request: ListProductsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListProductsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class ProductsService implements IProductsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getBestBidAsk(
    request: GetBestBidAskRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetBestBidAskResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    let queryParams = {};
    if (request.productIds) {
      queryParams = {
        productIds: request.productIds.join(','),
      };
    }
    const response = await this.client.request({
      url: `best_bid_ask`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetBestBidAskResponse;
  }

  async getProduct(
    request: GetProductRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    let queryParams = {};
    if (request.getTradabilityStatus) {
      queryParams = {
        getTradabilityStatus: request.getTradabilityStatus,
      };
    }
    const response = await this.client.request({
      url: `products/${request.productId}`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetProductResponse;
  }

  async getProductBook(
    request: GetProductBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductBookResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `product_book`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetProductBookResponse;
  }

  async getProductCandles(
    request: GetProductCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductCandlesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const queryParams = {
      start: request.start,
      end: request.end,
      granularity: request.granularity,
      limit: request.limit || 350,
    };
    const response = await this.client.request({
      url: `products/${request.productId}/candles`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetProductCandlesResponse;
  }

  async getProductMarketTrades(
    request: GetProductMarketTradesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetProductMarketTradesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `products/${request.productId}/ticker`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetProductMarketTradesResponse;
  }

  async listProducts(
    request: ListProductsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListProductsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `products`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListProductsResponse;
  }
}
