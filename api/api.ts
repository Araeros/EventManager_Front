export * from './event.service';
import { EventService } from './event.service';
export * from './timeSeries.service';
import { TimeSeriesService } from './timeSeries.service';
export const APIS = [EventService, TimeSeriesService];
