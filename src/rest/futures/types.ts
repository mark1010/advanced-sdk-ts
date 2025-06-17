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
import { CancelFCMSweepResponse } from '../../model/CancelFCMSweepResponse';
import { IntradayMarginSetting } from '../../model/enums/IntradayMarginSetting';
import { MarginProfileType } from '../../model/enums/MarginProfileType';
import { GetCurrentMarginWindowResponse } from '../../model/GetCurrentMarginWindowResponse';
import { GetFCMBalanceSummaryResponse } from '../../model/GetFCMBalanceSummaryResponse';
import { GetFCMPositionResponse } from '../../model/GetFCMPositionResponse';
import { GetFCMPositionsResponse } from '../../model/GetFCMPositionsResponse';
import { GetFCMSweepsResponse } from '../../model/GetFCMSweepsResponse';
import { GetIntradayMarginSettingResponse } from '../../model/GetIntradayMarginSettingResponse';
import { ScheduleFCMSweepRequest } from '../../model/ScheduleFCMSweepRequest';
import { ScheduleFCMSweepResponse } from '../../model/ScheduleFCMSweepResponse';

export type ListFuturesPositionsRequest = Record<string, never>;

export type ListFuturesPositionsResponse = GetFCMPositionsResponse;

export type ListFuturesSweepsRequest = Record<string, never>;

export type ListFuturesSweepsResponse = GetFCMSweepsResponse;

export type GetFuturesPositionRequest = {
  productId: string;
};

export type GetFuturesPositionsResponse = GetFCMPositionResponse;

export type GetFuturesBalanceSummaryRequest = Record<string, never>;

export type GetFuturesBalanceSummaryResponse = GetFCMBalanceSummaryResponse;

export type GetFuturesIntradayMarginSettingsRequest = Record<string, never>;

export type GetFuturesIntradayMarginSettingsResponse =
  GetIntradayMarginSettingResponse;

export type GetFuturesCurrentMarginWindowRequest = {
  marginProfileType?: MarginProfileType;
};

export type GetFuturesCurrentMarginWindowResponse =
  GetCurrentMarginWindowResponse;

export type UpdateFuturesIntradayMarginSettingsRequest = {
  setting: IntradayMarginSetting;
};

export type UpdateFuturesIntradayMarginSettingsResponse = Record<string, never>;

export type ScheduleFuturesSweepRequest = ScheduleFCMSweepRequest;

export type ScheduleFuturesSweepResponse = ScheduleFCMSweepResponse;

export type CancelFuturesPendingSweepRequest = Record<string, never>;

export type CancelFuturesPendingSweepResponse = CancelFCMSweepResponse;
