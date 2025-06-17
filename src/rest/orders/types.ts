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
import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { OrderPlacementSource } from '../../model/enums/OrderPlacementSource';
import { OrderSide } from '../../model/enums/OrderSide';
import { ProductType } from '../../model/enums/ProductType';
import { GetHistoricalOrdersResponse } from '../../model/GetHistoricalOrdersResponse';
import { GetHistoricalOrdersRequestHistoricalOrdersSortBy } from '../../model/enums/GetHistoricalOrdersRequestHistoricalOrdersSortBy';
import { GetFillsRequestFillsSortBy } from '../../model/enums/GetFillsRequestFillsSortBy';
import { GetFillsResponse } from '../../model/GetFillsResponse';
import { Order } from '../../model/Order';
import { NewOrderResponse } from '../../model/NewOrderResponse';
import { NewOrderRequest } from '../../model/NewOrderRequest';
import { OrderPreviewRequest } from '../../model/OrderPreviewRequest';
import { OrderPreviewResponse } from '../../model/OrderPreviewResponse';
import { ClosePositionRequest as ClosePosInt } from '../../model/ClosePositionRequest';
import { ClosePositionResponse as ClosePosIntResp } from '../../model/ClosePositionResponse';
import { CancelOrdersRequest as CancelOrdInt } from '../../model/CancelOrdersRequest';
import { CancelOrderResponse as CancelOrdIntResp } from '../../model/CancelOrderResponse';
import { EditOrderRequest as EditOrdInt } from '../../model/EditOrderRequest';
import { EditOrderResponse as EditOrdIntResp } from '../../model/EditOrderResponse';
import { PreviewEditOrderResponse } from '../../model/PreviewEditOrderResponse';

export type ListOrdersRequest = {
  orderIds?: string[];
  productIds?: string[];
  orderStatus?: string[];
  limit?: number;
  startDate?: string;
  endDate?: string;
  orderType?: string;
  orderSide?: OrderSide;
  cursor?: string;
  productType?: ProductType;
  orderPlacementSource?: OrderPlacementSource;
  contractExpiryType?: ContractExpiryType;
  assetFilters?: string[];
  retailPortfolioId?: string;
  timeInForces?: string;
  sortBy?: GetHistoricalOrdersRequestHistoricalOrdersSortBy;
};

export type ListOrdersResponse = GetHistoricalOrdersResponse;

export type ListFillsRequest = {
  orderIds?: string[];
  tradeIds?: string[];
  productIds?: string[];
  startSequenceTimestamp?: string;
  endSequenceTimestamp?: string;
  retailPortfolioId?: string;
  limit?: number;
  cursor?: string;
  sortBy?: GetFillsRequestFillsSortBy;
};

export type ListFillsResponse = GetFillsResponse;

export type GetOrderRequest = {
  orderId: string;
};

export type GetOrderResponse = Order;

export type CreateOrderRequest = NewOrderRequest;

export type CreateOrderResponse = NewOrderResponse;

export type CreateOrderPreviewRequest = OrderPreviewRequest;

export type CreateOrderPreviewResponse = OrderPreviewResponse;

export type ClosePositionRequest = ClosePosInt;

export type ClosePositionResponse = ClosePosIntResp;

export type CancelOrdersRequest = CancelOrdInt;

export type CancelOrderResponse = CancelOrdIntResp;

export type EditOrderRequest = EditOrdInt;

export type EditOrderResponse = EditOrdIntResp;

export type EditOrderPreviewRequest = {
  orderId: string;
  price: string;
  size: string;
};

export type EditOrderPreviewResponse = PreviewEditOrderResponse;
