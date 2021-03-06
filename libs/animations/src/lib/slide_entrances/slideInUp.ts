import {
  animate,
  animateChild,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  group,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const slideInUpAnimation: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(0, 100%, 0)`,
          visibility: 'visible'
        }),
        style({
          transform: `translate3d(0, 0, 0)`
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const slideInUp: AnimationTriggerMetadata = trigger('slideInUp', [
  transition('* => *', [
    group([
      useAnimation(slideInUpAnimation),
      animateChild()
    ])
  ])
]);
