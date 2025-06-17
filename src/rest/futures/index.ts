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
  ListFuturesPositionsRequest,
  ListFuturesPositionsResponse,
  ListFuturesSweepsRequest,
  ListFuturesSweepsResponse,
  GetFuturesPositionRequest,
  GetFuturesPositionsResponse,
  GetFuturesBalanceSummaryRequest,
  GetFuturesBalanceSummaryResponse,
  GetFuturesCurrentMarginWindowRequest,
  GetFuturesCurrentMarginWindowResponse,
  GetFuturesIntradayMarginSettingsRequest,
  GetFuturesIntradayMarginSettingsResponse,
  UpdateFuturesIntradayMarginSettingsRequest,
  UpdateFuturesIntradayMarginSettingsResponse,
  ScheduleFuturesSweepRequest,
  ScheduleFuturesSweepResponse,
  CancelFuturesPendingSweepRequest,
  CancelFuturesPendingSweepResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IFuturesService {
  listPositions(
    request: ListFuturesPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFuturesPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listSweeps(
    request: ListFuturesSweepsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFuturesSweepsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getPosition(
    request: GetFuturesPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getBalanceSummary(
    request: GetFuturesBalanceSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesBalanceSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getIntradayMarginSetting(
    request: GetFuturesIntradayMarginSettingsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesIntradayMarginSettingsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getCurrentMarginWindow(
    request: GetFuturesCurrentMarginWindowRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesCurrentMarginWindowResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  updateIntradayMarginSetting(
    request: UpdateFuturesIntradayMarginSettingsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateFuturesIntradayMarginSettingsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  scheduleSweep(
    request: ScheduleFuturesSweepRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ScheduleFuturesSweepResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  cancelPendingSweep(
    request: CancelFuturesPendingSweepRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CancelFuturesPendingSweepResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class FuturesService implements IFuturesService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async listPositions(
    request: ListFuturesPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFuturesPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/positions`,
      callOptions: options,
    });

    return response.data as ListFuturesPositionsResponse;
  }

  async listSweeps(
    request: ListFuturesSweepsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFuturesSweepsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/sweeps`,
      callOptions: options,
    });

    return response.data as ListFuturesSweepsResponse;
  }

  async getPosition(
    request: GetFuturesPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/positions/${request.productId}`,
      callOptions: options,
    });

    return response.data as GetFuturesPositionsResponse;
  }

  async getBalanceSummary(
    request: GetFuturesBalanceSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesBalanceSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/balance_summary`,
      callOptions: options,
    });

    return response.data as GetFuturesBalanceSummaryResponse;
  }

  async getIntradayMarginSetting(
    request: GetFuturesIntradayMarginSettingsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesIntradayMarginSettingsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/intraday/margin_setting`,
      callOptions: options,
    });

    return response.data as GetFuturesIntradayMarginSettingsResponse;
  }

  async getCurrentMarginWindow(
    request: GetFuturesCurrentMarginWindowRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFuturesCurrentMarginWindowResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/intraday/current_margin_window`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetFuturesCurrentMarginWindowResponse;
  }

  async updateIntradayMarginSetting(
    request: UpdateFuturesIntradayMarginSettingsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateFuturesIntradayMarginSettingsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/intraday/margin_setting`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as UpdateFuturesIntradayMarginSettingsResponse;
  }

  async scheduleSweep(
    request: ScheduleFuturesSweepRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ScheduleFuturesSweepResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/sweeps/schedule`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as ScheduleFuturesSweepResponse;
  }

  async cancelPendingSweep(
    request: CancelFuturesPendingSweepRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CancelFuturesPendingSweepResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `cfm/sweeps`,
      method: Method.DELETE,
      callOptions: options,
    });

    return response.data as ScheduleFuturesSweepResponse;
  }
}
