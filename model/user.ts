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
import { TimeSeries } from './timeSeries';


export interface User { 
    userId?: string;
    firstname?: string;
    lastname?: string;
    seriesList?: Array<TimeSeries>;
}

