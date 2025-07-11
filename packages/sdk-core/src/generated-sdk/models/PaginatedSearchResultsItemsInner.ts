/**
 * Stack Overflow for Teams API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AnswerSearchResultModel } from './AnswerSearchResultModel';
import { ArticleSearchResultModel } from './ArticleSearchResultModel';
import { QuestionSearchResultModel } from './QuestionSearchResultModel';
import { HttpFile } from '../http/http';

/**
 * @type PaginatedSearchResultsItemsInner
 * Type
 * @export
 */
export type PaginatedSearchResultsItemsInner = AnswerSearchResultModel | ArticleSearchResultModel | QuestionSearchResultModel;

/**
* @type PaginatedSearchResultsItemsInnerClass
* @export
*/
export class PaginatedSearchResultsItemsInnerClass {
    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}


