# Step 5 - Tweaking Animations

If you run our current example. It'll look very boring and both the animate in function (`rollout` -> `idle`) and roll over animation (`idle` -> `rollover`) will have the same duration.

We can do better.

When defining your transitions like so:

```javascript
transitions: [
    {from: 'idle', to: 'rollover', bi: false},
	{from: 'rollover', to: 'rollout', bi: false},
	{from: 'rollout', to: 'idle', bi: false}
  ]
```

We can actually set durations for animations:

```javascript
transitions: [
	//{ from: 'idle', to: 'rollover', bi: true }
    {from: 'idle', to: 'rollover', bi: false, animation: {
    duration: 0.3
    }},
	{from: 'rollover', to: 'rollout', bi: false, animation: {
	duration: 0.5
	}},
	{from: 'rollout', to: 'idle', bi: false, animation: {
	duration: 2
	}}
  ]
```

Using the above code you'll be able to adjust it so that the animate in or (out -> idle) animation will take `2` seconds.

You can also incorporate `easing` equations in the following way to make the animation more visually appealing:

```javascript
var eases = require( 'eases' ); //Define this at the top of the document

transitions: [
    {from: 'idle', to: 'rollover', bi: false, animation: {
		duration: 0.3,
		ease: eases.quadIn
		}},
	{from: 'rollover', to: 'rollout', bi: false, animation: {
		duration: 0.5,
		ease: eases.expoOut
		}},
	{from: 'rollout', to: 'idle', bi: false, animation: {
		duration: 2,
		ease: eases.bounceIn
		}}
  ]
```

Obviously as your ui becomes more complex you may want to animate properties individually. Let's assume we've added in another property to adjust the css left attribute. We could do something like this:

```javascript
var eases = require( 'eases' );

states: {
		idle: {
			elButton:{
				style:{
					opacity: 1,
					marginLeft: 0
				}
			},
		},
		
		rollover: {
			elButton: {
				style:{
					opacity: 0.1,
					marginLeft: 0
				}
			},
		},
		
		rollout: {
			elButton: {
				style:{
					opacity: 0,
					marginLeft: 500
				}
			},
		},
	},
	transitions: [
    {from: 'idle', to: 'rollover', bi: false, animation: {
		elButton: {
			style: {
		opacity: {duration: 0.3, ease: eases.quadIn}
			}
		}
	}},
	{from: 'rollover', to: 'rollout', bi: false, animation: {
		elButton: {
			style:{
		opacity: {duration: 0.5, ease: eases.expoOut}
			}
		}
	}},
	{from: 'rollout', to: 'idle', bi: false, animation: {
		elButton: {
			style: {
		opacity: {duration: 0.3, ease: eases.quadIn},
		marginLeft: {duration: 2, delay: 1, ease: eases.elasticOut}
			}
		}
	}}
]
```
In the above where the transition for `rollout` to `idle` is defined:
```javascript
{from: 'rollout', to: 'idle', bi: false, animation: {
		elButton: {
			style: {
		opacity: {duration: 0.3, ease: eases.quadIn},
		marginLeft: {duration: 2, delay: 1, ease: eases.elasticOut}
			}
		}
}}
```

The `button` element will now have two properties which are being animated: `opacity` and `marginLeft`. `opacity` will animate from `rollout` to `idle` in `0.3` seconds using an ease of `quadIn` and the property `marginLeft` will animate in duration of `2` seconds, with a delay of `1` second, using an ease of `elasticOut`.

In the second example:
```javascript
 {from: 'idle', to: 'rollover', bi: false, animation: {
		duration: 2, ease: eases.expoIn,
		elButton: {
			style: {
		opacity: {duration: 0.3, delay: 1, ease: eases.quadIn}
			}
		}
	}}
```
A global `duration` is set which is `2` seconds and a global ease function will be used `quadIn`. So basically our good 'ol `marginLeft` will animate in `2` seconds using the function `expoIn` and also any other properties which maybe defined in the state. The `opacity` property however will be animated in `0.3` seconds and will be delayed by `1` second. Which basically means that it will sit in the `idle` state for `1` second before it becomes to animate towards the `rollover` state.

Using the above you should now be able to create UI elements using the DOM.
