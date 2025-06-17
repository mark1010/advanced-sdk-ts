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
require('dotenv').config();
const { CoinbaseAdvTradeClient, PublicService } = require('../../dist');

const client = new CoinbaseAdvTradeClient();

const publicService = new PublicService(client);

// Pass as an argument such as node example/public/getProduct.js BTC-USD
const productId = process.argv[2];

publicService
  .getProductBook({ productId })
  .then((pm) => {
    console.log(JSON.stringify(pm, null, 2));
  })
  .catch((err) => console.log(err));
