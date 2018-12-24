/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const fadeInAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const fadeIn = trigger('fadeIn', [
    transition('* => *', [
        useAnimation(fadeInAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZUluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZmFkaW5nL2ZhZGVJbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBR1QsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLE9BQU8sZUFBZSxHQUErQixTQUFTLENBQ2xFO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFDUixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3RCLENBQUMsQ0FDSDtDQUNGLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLE9BQU8sTUFBTSxHQUE2QixPQUFPLENBQUMsUUFBUSxFQUFFO0lBQ2hFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsWUFBWSxDQUFDLGVBQWUsQ0FBQztLQUM5QixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkFuaW1hdGlvbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oXHJcbiAgW1xyXG4gICAgYW5pbWF0ZShcclxuICAgICAgJ3t7IHRpbWluZyB9fW1zIHt7IGRlbGF5IH19bXMnLFxyXG4gICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICBdLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogMTAwMCwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKGZhZGVJbkFuaW1hdGlvbilcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==