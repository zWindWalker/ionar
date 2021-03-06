import {
  animate,
  animateChild,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const slideInRightAnimation: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(100%, 0, 0)`,
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

export const slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
  transition('* => *', [
    group([
      query('*', useAnimation(slideInRightAnimation)),
      query('*', animateChild())
    ])
  ])
]);

