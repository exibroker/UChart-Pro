/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import zhCN from './zh-CN.json'
import enUS from './en-US.json'
import esES from './es-ES.json'
import frFR from './fr-FR.json'
import idID from './id-ID.json'
import jaJP from './ja-JP.json'
import koKR from './ko-KR.json'
import ruRU from './ru-RU.json'
import thTH from './th-TH.json'
import trTR from './tr-TR.json'
import viVN from './vi-VN.json'

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'es-ES': esES,
  'fr-FR': frFR,
  'id-ID': idID,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'ru-RU': ruRU,
  'th-TH': thTH,
  'tr-TR': trTR,
  'vi-VN': viVN,

}

export function load(key: string, ls: any) {
  // @ts-expect-error
  locales[key] = ls
}

export default (key: string, locale: string) => {
  // @ts-expect-error
  return locales[locale]?.[key] ?? key
}
