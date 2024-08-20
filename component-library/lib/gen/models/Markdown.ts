/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Markdown
 */
export interface Markdown {
    /**
     * 
     * @type {string}
     * @memberof Markdown
     */
    componentType?: MarkdownComponentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Markdown
     */
    markdown?: string;
}


/**
 * @export
 */
export const MarkdownComponentTypeEnum = {
    Markdown: 'Markdown'
} as const;
export type MarkdownComponentTypeEnum = typeof MarkdownComponentTypeEnum[keyof typeof MarkdownComponentTypeEnum];


/**
 * Check if a given object implements the Markdown interface.
 */
export function instanceOfMarkdown(value: object): value is Markdown {
    return true;
}

export function MarkdownFromJSON(json: any): Markdown {
    return MarkdownFromJSONTyped(json, false);
}

export function MarkdownFromJSONTyped(json: any, ignoreDiscriminator: boolean): Markdown {
    if (json == null) {
        return json;
    }
    return {
        
        'componentType': json['component_type'] == null ? undefined : json['component_type'],
        'markdown': json['markdown'] == null ? undefined : json['markdown'],
    };
}

export function MarkdownToJSON(value?: Markdown | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component_type': value['componentType'],
        'markdown': value['markdown'],
    };
}
