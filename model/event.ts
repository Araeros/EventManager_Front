/**
 * EventManager Swagger
 * TP Technologie Web
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Label } from './label';


export interface Event { 
    eventId?: string;
    date?: string;
    value?: string;
    labelsList?: Array<Label>;
    comment?: string;
}

