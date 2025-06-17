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
import { CreateConvertQuoteResponse as createInt } from '../../model/CreateConvertQuoteResponse';
import { CommitConvertTradeResponse as commitInt } from '../../model/CommitConvertTradeResponse';
import { GetConvertTradeResponse as getInt } from '../../model/GetConvertTradeResponse';

export type CreateConvertQuoteRequest = {
  fromAccount: string;
  toAccount: string;
  amount: string;
  tradeIncentiveMetadata?: {
    userIcentiveId?: string;
    codeVal?: string;
  };
};

export type CreateConvertQuoteResponse = createInt;

export type CommitConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type CommitConvertTradeResponse = commitInt;

export type GetConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type GetConvertTradeResponse = getInt;
