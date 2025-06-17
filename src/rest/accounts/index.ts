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
  GetAccountRequest,
  GetAccountResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IAccountsService {
  getAccount(
    request: GetAccountRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAccountResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listAccounts(
    request: ListAccountsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListAccountsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class AccountsService implements IAccountsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getAccount(
    request: GetAccountRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAccountResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `accounts/${request.accountUuid}`,
      callOptions: options,
    });

    return response.data as GetAccountResponse;
  }

  async listAccounts(
    request: ListAccountsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListAccountsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `accounts`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListAccountsResponse;
  }
}
