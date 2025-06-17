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
import { GetPositionsResponse } from '../../model/GetPositionsResponse';
import { GetPortfoliosResponse } from '../../model/GetPortfoliosResponse';
import { GetPositionResponse } from '../../model/GetPositionResponse';
import { GetBalanceSummaryResponse } from '../../model/GetBalanceSummaryResponse';
import { AllocatePortfolioRequest } from '../../model/AllocatePortfolioRequest';
import { MultiAssetCollateralRequest } from '../../model/MultiAssetCollateralRequest';
import { MultiAssetCollateralResponse } from '../../model/MultiAssetCollateralResponse';

export type ListPerpetualsPositionsRequest = {
  portfolioUuid: string;
};

export type ListPerpetualsPositionsResponse = GetPositionsResponse;

export type GetPerpetualsPortfolioSummaryRequest = {
  portfolioUuid: string;
};

export type GetPerpetualsPortfolioSummaryResponse = GetPortfoliosResponse;

export type GetPerpetualsPositionRequest = {
  portfolioUuid: string;
  symbol: string;
};

export type GetPerpetualsPositionResponse = GetPositionResponse;

export type GetPerpetualsPortfoliosBalancesRequest = {
  portfolioUuid: string;
};

export type GetPerpetualsPortfoliosBalancesResponse = GetBalanceSummaryResponse;

export type CreateAllocatePortfolioRequest = AllocatePortfolioRequest;

export type CreateAllocatePortfolioResponse = Record<string, never>;

export type UpdateMultiAssetCollateralRequest = MultiAssetCollateralRequest;

export type UpdateMultiAssetCollateralResponse = MultiAssetCollateralResponse;
