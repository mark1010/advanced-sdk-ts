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
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';
import {
  CreateConvertQuoteRequest,
  CreateConvertQuoteResponse,
  CommitConvertTradeRequest,
  CommitConvertTradeResponse,
  GetConvertTradeRequest,
  GetConvertTradeResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IConvertsService {
  createConvertQuote(
    request: CreateConvertQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateConvertQuoteResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  commitConvertTrade(
    request: CommitConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CommitConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  GetConvertTrade(
    request: GetConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class ConvertsService implements IConvertsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async createConvertQuote(
    request: CreateConvertQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateConvertQuoteResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `convert/quote`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateConvertQuoteResponse;
  }

  async commitConvertTrade(
    request: CommitConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CommitConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `convert/trade/${request.tradeId}`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CommitConvertTradeResponse;
  }

  async GetConvertTrade(
    request: GetConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const queryParams = {
      fromAccount: request.fromAccount,
      toAccount: request.toAccount,
    };
    const response = await this.client.request({
      url: `convert/trade/${request.tradeId}`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetConvertTradeResponse;
  }
}
