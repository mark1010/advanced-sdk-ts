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
import { PortfolioBreakdown } from '../../model/PortfolioBreakdown';
import { Portfolio } from '../../model/Portfolio';
import { CreatePortfolioRequest as createRequestInt } from '../../model/CreatePortfolioRequest';
import { CreatePortfolioResponse as createResponseInt } from '../../model/CreatePortfolioResponse';
import { MovePortfolioFundsRequest as moveRequestInt } from '../../model/MovePortfolioFundsRequest';
import { MovePortfolioFundsResponse as moveResponseInt } from '../../model/MovePortfolioFundsResponse';

export type GetPortfolioRequest = {
  portfolioUuid: string;
};

export type GetPortfolioResponse = PortfolioBreakdown;

export type ListPortfoliosRequest = Portfolio;

export type ListPortfoliosResponse = {
  portfolios: Portfolio[];
};

export type CreatePortfolioRequest = createRequestInt;

export type CreatePortfolioResponse = createResponseInt;

export type DeletePortfolioRequest = {
  portfolioUuid: string;
};

export type DeletePortfolioResponse = Record<string, never>;

export type EditPortfolioRequest = {
  portfolioUuid: string;
  name: string;
};

export type EditPortfolioResponse = createResponseInt;

export type MovePortfolioFundsRequest = moveRequestInt;

export type MovePortfolioFundsResponse = moveResponseInt;
