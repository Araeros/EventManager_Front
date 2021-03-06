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
import { Event } from './event';


export class TimeSeries { 
    seriesId?: string;
    title?: string;
    description?: string;
    eventsList?: Array<Event>;

    constructor (seriesId : string, title : string, desc : string) {
        this.seriesId = seriesId;
        this.title = title;
        this.description = desc;
    }
}

