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
  ListOrdersRequest,
  ListOrdersResponse,
  ListFillsRequest,
  ListFillsResponse,
  GetOrderRequest,
  GetOrderResponse,
  CreateOrderPreviewRequest,
  CreateOrderPreviewResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  ClosePositionRequest,
  ClosePositionResponse,
  CancelOrdersRequest,
  CancelOrderResponse,
  EditOrderRequest,
  EditOrderResponse,
  EditOrderPreviewRequest,
  EditOrderPreviewResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IOrdersService {
  listOrders(
    request: ListOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListOrdersResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listFills(
    request: ListFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFillsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getOrder(
    request: GetOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  createOrder(
    request: CreateOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  createOrderPreview(
    request: CreateOrderPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateOrderPreviewResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  closePosition(
    request: ClosePositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ClosePositionResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  cancelOrders(
    request: CancelOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CancelOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  editOrder(
    request: EditOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  editOrderPreview(
    request: EditOrderPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditOrderPreviewResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class OrdersService implements IOrdersService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async listOrders(
    request: ListOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListOrdersResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/historical/batch`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListOrdersResponse;
  }

  async listFills(
    request: ListFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFillsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/historical/fills`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListFillsResponse;
  }

  async getOrder(
    request: GetOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/historical/${request.orderId}`,
      callOptions: options,
    });

    return response.data as GetOrderResponse;
  }

  async createOrder(
    request: CreateOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateOrderResponse;
  }

  async createOrderPreview(
    request: CreateOrderPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateOrderPreviewResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/preview`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateOrderPreviewResponse;
  }

  async closePosition(
    request: ClosePositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ClosePositionResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/close_position`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as ClosePositionResponse;
  }

  async cancelOrders(
    request: CancelOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CancelOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/batch_cancel`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CancelOrderResponse;
  }

  async editOrder(
    request: EditOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditOrderResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/edit`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as EditOrderResponse;
  }

  async editOrderPreview(
    request: EditOrderPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditOrderPreviewResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `orders/edit_preview`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as EditOrderPreviewResponse;
  }
}
