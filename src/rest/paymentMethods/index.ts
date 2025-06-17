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
  GetPaymentMethodRequest,
  GetPaymentMethodResponse,
  ListPaymentMethodsRequest,
  ListPaymentMethodsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IPaymentMethodsService {
  getPaymentMethod(
    request: GetPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPaymentMethodResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listPaymentMethods(
    request?: ListPaymentMethodsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPaymentMethodsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class PaymentMethodsService implements IPaymentMethodsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getPaymentMethod(
    request: GetPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPaymentMethodResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `payment_methods/${request.paymentMethodId}`,
      callOptions: options,
    });

    return response.data as GetPaymentMethodResponse;
  }

  async listPaymentMethods(
    request?: ListPaymentMethodsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPaymentMethodsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `payment_methods`,
      callOptions: options,
    });

    return response.data as ListPaymentMethodsResponse;
  }
}
