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

import { HttpFile } from '../http/http';

export class ImagesUploadPostRequest {
    'file'?: HttpFile;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "HttpFile",
            "format": "binary"
        }    ];

    static getAttributeTypeMap() {
        return ImagesUploadPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
