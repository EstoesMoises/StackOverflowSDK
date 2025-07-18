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

import { LinkedOrRelatedQuestionsSortParameter } from './LinkedOrRelatedQuestionsSortParameter';
import { QuestionSummaryResponseModel } from './QuestionSummaryResponseModel';
import { SortOrder } from './SortOrder';
import { HttpFile } from '../http/http';

export class PaginatedLinkedOrRelatedQuestions {
    /**
    * Total count. The total number of records found.
    */
    'totalCount'?: number;
    /**
    * Page size. The number of records to retrieve per page.
    */
    'pageSize'?: number;
    /**
    * Page. The number of the current page.
    */
    'page'?: number;
    /**
    * Total pages. The total number of pages available.
    */
    'totalPages'?: number;
    'sort'?: LinkedOrRelatedQuestionsSortParameter;
    'order'?: SortOrder;
    'items'?: Array<QuestionSummaryResponseModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "LinkedOrRelatedQuestionsSortParameter",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<QuestionSummaryResponseModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedLinkedOrRelatedQuestions.attributeTypeMap;
    }

    public constructor() {
    }
}


