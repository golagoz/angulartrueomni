import { animate, animateChild, animation, query, stagger, state, style, transition, trigger, useAnimation } from "@angular/animations";


const customAnimation = animation([
    style({
        opacity  : '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
    params: {
        duration: '200ms',
        delay   : '0ms',
        opacity : '0',
        scale   : '1',
        x       : '0',
        y       : '0',
        z       : '0'
    }
});

export const OmniAnimations = [

    trigger('animateStagger', [
        state('active', style({
          transform: 'rotateY(179deg)'
        })),
        state('inactive', style({
          transform: 'rotateY(0)'
        })),
        transition('active => inactive', animate('500ms ease-out')),
        transition('inactive => active', animate('500ms ease-in'))
      ])

      

];
