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
  GetPortfolioRequest,
  GetPortfolioResponse,
  ListPortfoliosRequest,
  ListPortfoliosResponse,
  CreatePortfolioRequest,
  CreatePortfolioResponse,
  DeletePortfolioRequest,
  DeletePortfolioResponse,
  EditPortfolioRequest,
  EditPortfolioResponse,
  MovePortfolioFundsRequest,
  MovePortfolioFundsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IPortfoliosService {
  getPortfolio(
    request: GetPortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listPortfolios(
    request: ListPortfoliosRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfoliosResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  createPortfolio(
    request: CreatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreatePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  deletePortfolio(
    request: DeletePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | DeletePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  editPortfolio(
    request: EditPortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditPortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  movePortfolioFunds(
    request: MovePortfolioFundsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | MovePortfolioFundsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class PortfoliosService implements IPortfoliosService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getPortfolio(
    request: GetPortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolioUuid}`,
      callOptions: options,
    });

    return response.data as GetPortfolioResponse;
  }

  async listPortfolios(
    request: ListPortfoliosRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfoliosResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListPortfoliosResponse;
  }

  async createPortfolio(
    request: CreatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreatePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as CreatePortfolioResponse;
  }

  async deletePortfolio(
    request: DeletePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | DeletePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolioUuid}`,
      method: Method.DELETE,
      callOptions: options,
    });

    return response.data as DeletePortfolioResponse;
  }

  async editPortfolio(
    request: EditPortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | EditPortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolioUuid}`,
      method: Method.PUT,
      bodyParams: { ...request, portfolioUuid: undefined },
      callOptions: options,
    });

    return response.data as DeletePortfolioResponse;
  }

  async movePortfolioFunds(
    request: MovePortfolioFundsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | MovePortfolioFundsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `portfolios/move_funds`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as MovePortfolioFundsResponse;
  }
}
