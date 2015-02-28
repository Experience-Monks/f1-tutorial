# Step 5 - Tweaking Animations

If you run our current example. It'll look very boring and both the animate in function (out -> idle) and roll over animation (idle -> rollover) will have the same duration.

We can do better.

When defining your transitions like so:

```javascript
ui.transitions( [

    'out', 'idle',
    'idle', 'rollover',
    'rollover', 'idle',
    'idle', 'out'
]);
```

We can actually set durations for animations:

```javascript
ui.transitions( [

    'out', 'idle', { duration: 2 },
    'idle', 'rollover', { duration: 0.25 },
    'rollover', 'idle', { duration: 0.1 },
    'idle', 'out', { duration: 2 }
]);
```

Using the above code you'll be able to adjust it so that the animate in or (out -> idle) animation will take `2` seconds.

You can also incorporate `easing` equations in the following way to make the animation more visually appealing:

```javascript
var eases = require( 'eases' );

ui.transitions( [

    'out', 'idle', { duration: 2, ease: eases.quadIn },
    'idle', 'rollover', { duration: 0.25, ease: eases.expoIn },
    'rollover', 'idle', { duration: 0.1, ease: eases.expoOut },
    'idle', 'out', { duration: 2, ease: eases.quadIn }
]);
```

Obviously as your ui becomes more complex you may want to animate properties individually. Let's assume we've added in another property to adjust css left. We could do something like this:

```javascript
var eases = require( 'eases' );

ui.transitions( [

    'out', 'idle', { 
        button: {
            alpha: { duration: 0.1, ease: eases.quadIn },
            left: { duration: 0.5, ease: eases.elasticOut }
        }        
    },
    'idle', 'rollover', { 
        duration: 2, ease: eases.quadIn,

        button: {
            alpha: { duration: 1, delay: 1, ease: eases.expoOut }
        }        
    },
    'rollover', 'idle', { duration: 0.1, ease: eases.expoOut },
    'idle', 'out', { duration: 2, ease: eases.quadIn }
]);
```

In the above where the transition for `out` to `idle` is defined:
```javascript
'out', 'idle', { 
    button: {
        alpha: { duration: 0.1, ease: eases.quadIn },
        left: { duration: 0.5, ease: eases.elasticOut }
    }        
}
```

The `button` element will now have two properties which are being animated: `alpha` and `left`. `alpha` will animate from `out` to `idle` in `0.1` seconds using an ease of `quadIn` and the property `left` will animate in duration of `0.5` seconds using an ease of `elasticOut`.

In the second example:
```javascript
'idle', 'rollover', { 
    duration: 2, ease: eases.quadIn,

    button: {
        left: { duration: 1, delay: 1, ease: eases.expoOut }
    }        
}
```
A global `duration` is set which is `2` seconds and a global ease function will be used `quadIn`. So basically our good 'ol alpha will animate in `2` seconds using the function `quadIn` and also any other properties which maybe defined in the state. The `left` property however will be animated in `1` second and will be delayed by `1` second. Which basically means that it will sit in the `idle` state for `1` second before it becomes to animate towards the `rollover` state.

Using the above you should now be able to create ui elements using the dom.