/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var rubber_band = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
        style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
        style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
        style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
        style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
        style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
        style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var rubber_band_trigger = trigger('rubber_band', [
    transition('* => *', [
        useAnimation(rubber_band)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnViYmVyX2JhbmQuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYXR0ZW50aW9uX3NlZWtlcnMvcnViYmVyX2JhbmQuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxXQUFXLEdBQStCLFNBQVMsQ0FDOUQ7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbkQsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzRCxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzNELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDM0QsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM1RCxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzVELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDcEQsQ0FBQyxDQUNIO0NBQ0YsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUNsRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxXQUFXLENBQUM7S0FDMUIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBydWJiZXJfYmFuZDogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oXHJcbiAgW1xyXG4gICAgYW5pbWF0ZShcclxuICAgICAgJ3t7IHRpbWluZyB9fW1zIHt7IGRlbGF5IH19bXMnLFxyXG4gICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMCB9KSxcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4yNSwgMC43NSwgMSknLCBvZmZzZXQ6IDAuMyB9KSxcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMC43NSwgMS4yNSwgMSknLCBvZmZzZXQ6IDAuNCB9KSxcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4xNSwgMC44NSwgMSknLCBvZmZzZXQ6IDAuNSB9KSxcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMC45NSwgMS4wNSwgMSknLCBvZmZzZXQ6IDAuNjUgfSksXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDAuOTUsIDEpJywgb2Zmc2V0OiAwLjc1IH0pLFxyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMSB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF0sXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBydWJiZXJfYmFuZF90cmlnZ2VyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdydWJiZXJfYmFuZCcsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24ocnViYmVyX2JhbmQpXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=