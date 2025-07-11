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

import { ArticlePermissionsType } from './ArticlePermissionsType';
import { HttpFile } from '../http/http';

export class ArticlePermissionsRequestModel {
    'editableBy'?: ArticlePermissionsType;
    /**
    * Editor User IDs. The identity of users who can edit this article
    */
    'editorUserIds'?: Array<number>;
    /**
    * Editor User Group IDs. The identity of user groups who can edit this article
    */
    'editorUserGroupIds'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "editableBy",
            "baseName": "editableBy",
            "type": "ArticlePermissionsType",
            "format": ""
        },
        {
            "name": "editorUserIds",
            "baseName": "editorUserIds",
            "type": "Array<number>",
            "format": "int32"
        },
        {
            "name": "editorUserGroupIds",
            "baseName": "editorUserGroupIds",
            "type": "Array<number>",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ArticlePermissionsRequestModel.attributeTypeMap;
    }

    public constructor() {
    }
}


