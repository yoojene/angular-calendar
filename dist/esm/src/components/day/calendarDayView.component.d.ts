import { OnChanges, EventEmitter, ChangeDetectorRef, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { CalendarEvent, DayView, DayViewHour, DayViewHourSegment, DayViewEvent } from 'calendar-utils';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ResizeEvent } from 'angular-resizable-element';
import { CalendarEventTimesChangedEvent } from '../../interfaces/calendarEventTimesChangedEvent.interface';
import { CalendarUtils } from '../../providers/calendarUtils.provider';
/**
 * @hidden
 */
export interface DayViewEventResize {
    originalTop: number;
    originalHeight: number;
    edge: string;
}
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * &lt;mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/mwl-calendar-day-view&gt;
 * ```
 */
export declare class CalendarDayViewComponent implements OnChanges, OnInit, OnDestroy {
    private cdr;
    private utils;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     */
    events: CalendarEvent[];
    /**
     * The number of segments in an hour. Must be <= 6
     */
    hourSegments: number;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */
    dayStartHour: number;
    /**
     * The day start minutes. Must be 0-59
     */
    dayStartMinute: number;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */
    dayEndHour: number;
    /**
     * The day end minutes. Must be 0-59
     */
    dayEndMinute: number;
    /**
     * The width in pixels of each event on the view
     */
    eventWidth: number;
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * A function that will be called before each hour segment is called. The first argument will contain the hour segment.
     * If you add the `cssClass` property to the segment it will add that class to the hour segment in the template
     */
    hourSegmentModifier: Function;
    /**
     * The grid size to snap resizing and dragging of events to
     */
    eventSnapSize: number;
    /**
     * The placement of the event tooltip
     */
    tooltipPlacement: string;
    /**
     * A custom template to use to replace the hour segment
     */
    hourSegmentTemplate: TemplateRef<any>;
    /**
     * A custom template to use for all day events
     */
    allDayEventTemplate: TemplateRef<any>;
    /**
     * A custom template to use for day view events
     */
    eventTemplate: TemplateRef<any>;
    /**
     * Called when an event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent;
    }>;
    /**
     * Called when an hour segment is clicked
     */
    hourSegmentClicked: EventEmitter<{
        date: Date;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent>;
    /**
     * @hidden
     */
    hours: DayViewHour[];
    /**
     * @hidden
     */
    view: DayView;
    /**
     * @hidden
     */
    width: number;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    currentResizes: Map<DayViewEvent, DayViewEventResize>;
    /**
     * @hidden
     */
    validateDrag: Function;
    /**
     * @hidden
     */
    validateResize: Function;
    /**
     * @hidden
     */
    constructor(cdr: ChangeDetectorRef, utils: CalendarUtils, locale: string);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    eventDropped(dropEvent: {
        dropData?: {
            event?: CalendarEvent;
        };
    }, segment: DayViewHourSegment): void;
    resizeStarted(event: DayViewEvent, resizeEvent: ResizeEvent, dayViewContainer: HTMLElement): void;
    resizing(event: DayViewEvent, resizeEvent: ResizeEvent): void;
    resizeEnded(dayEvent: DayViewEvent): void;
    dragStart(event: HTMLElement, dayViewContainer: HTMLElement): void;
    eventDragged(dayEvent: DayViewEvent, draggedInPixels: number): void;
    private refreshHourGrid();
    private refreshView();
    private refreshAll();
}
