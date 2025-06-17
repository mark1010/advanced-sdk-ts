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
import { ALGORITHM, JWT_ISSUER } from '../../constants';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

export class CoinbaseAdvTradeCredentials {
  private accessKey: string | undefined;
  private secretKey: string | undefined;

  constructor(key?: string, secret?: string) {
    if (!key || !secret) {
      console.log('Could not authenticate. Only public endpoints accessible.');
    }
    this.accessKey = key;
    this.secretKey = secret;
  }

  generateAuthHeaders(
    requestMethod: string,
    uri: string
  ): Record<string, string> {
    if (!this.secretKey || !this.accessKey) {
      return {};
    }

    // Drop protocol and query parameters
    const jwtUri = `${requestMethod} ${
      uri.replace('https://', '').replace('http://', '').split('?')[0]
    }`;

    const payload = {
      iss: JWT_ISSUER,
      nbf: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 120,
      sub: this.accessKey,
      uri: jwtUri,
    };

    const header = {
      alg: ALGORITHM,
      kid: this.accessKey,
      nonce: crypto.randomBytes(16).toString('hex'),
    };

    const signature = jwt.sign(payload, this.secretKey, {
      algorithm: ALGORITHM,
      header,
    });

    return {
      Authorization: `Bearer ${signature}`,
    };
  }
}
