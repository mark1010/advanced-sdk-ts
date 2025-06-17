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
  GetTransactionsSummaryRequest,
  GetTransactionsSummaryResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IFeesService {
  getTransactionSummary(
    request: GetTransactionsSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetTransactionsSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class FeesService implements IFeesService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getTransactionSummary(
    request: GetTransactionsSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetTransactionsSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `transaction_summary`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetTransactionsSummaryResponse;
  }
}
