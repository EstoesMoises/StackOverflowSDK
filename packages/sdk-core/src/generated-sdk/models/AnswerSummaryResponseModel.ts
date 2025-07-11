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

import { UserSummaryResponseModel } from './UserSummaryResponseModel';
import { HttpFile } from '../http/http';

export class AnswerSummaryResponseModel {
    /**
    * ID. The answer\'s unique identifier.
    */
    'id'?: number;
    /**
    * Question ID. The ID of the answered question.
    */
    'questionId'?: number;
    /**
    * Answer body. The main content of the answer in HTML format.
    */
    'body'?: string;
    /**
    * Answer Score. Calculated by subtracting the number of downvotes from the number of upvotes
    */
    'score'?: number;
    /**
    * Accepted answer. Returns true if this is the accepted answer for the question.
    */
    'isAccepted'?: boolean;
    /**
    * Answer deleted. Returns true if the answer was deleted.
    */
    'isDeleted'?: boolean;
    /**
    * Answer bookmarked. Returns true if the logged-in user bookmarked the answer.
    */
    'isBookmarked'?: boolean;
    /**
    * Answer followed. Returns true if the logged-in user followed the answer.
    */
    'isFollowed'?: boolean;
    /**
    * Creation date. The date and time the answer was created.
    */
    'creationDate'?: Date;
    /**
    * Locked date. The date and time the answer was locked.
    */
    'lockedDate'?: Date | null;
    /**
    * Last edit date. The date and time the answer was last edited.
    */
    'lastEditDate'?: Date | null;
    /**
    * Last activity date. The date and time the answer last had activity.
    */
    'lastActivityDate'?: Date | null;
    /**
    * Deletion date. The date and time the answer was deleted.
    */
    'deletionDate'?: Date | null;
    'owner'?: UserSummaryResponseModel;
    'lastEditor'?: UserSummaryResponseModel;
    'lastActivityUser'?: UserSummaryResponseModel;
    /**
    * Comment count. The number of comments on the answer.
    */
    'commentCount'?: number;
    /**
    * URL. The answer\'s direct URL.
    */
    'webUrl'?: string | null;
    /**
    * Share link. The link to the answer for sharing.
    */
    'shareLink'?: string | null;
    /**
    * User can follow answer. Returns true if the logged-in user can follow the answer.
    */
    'userCanFollow'?: boolean;
    /**
    * Answer can be followed. Returns true if anyone can follow the answer.
    */
    'canBeFollowed'?: boolean;
    /**
    * Answer is from a subject matter expert.
    */
    'isSubjectMatterExpert'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "questionId",
            "baseName": "questionId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isAccepted",
            "baseName": "isAccepted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBookmarked",
            "baseName": "isBookmarked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFollowed",
            "baseName": "isFollowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lockedDate",
            "baseName": "lockedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastEditDate",
            "baseName": "lastEditDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastActivityDate",
            "baseName": "lastActivityDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deletionDate",
            "baseName": "deletionDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "UserSummaryResponseModel",
            "format": ""
        },
        {
            "name": "lastEditor",
            "baseName": "lastEditor",
            "type": "UserSummaryResponseModel",
            "format": ""
        },
        {
            "name": "lastActivityUser",
            "baseName": "lastActivityUser",
            "type": "UserSummaryResponseModel",
            "format": ""
        },
        {
            "name": "commentCount",
            "baseName": "commentCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "webUrl",
            "baseName": "webUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareLink",
            "baseName": "shareLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "userCanFollow",
            "baseName": "userCanFollow",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canBeFollowed",
            "baseName": "canBeFollowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSubjectMatterExpert",
            "baseName": "isSubjectMatterExpert",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnswerSummaryResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}
