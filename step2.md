# Step 2 - Define your transitions

In the previous step we defined our states with the following code:

```javascript
body = f1DOM({
    el: document.body,

    states: { //Begin a list of object states
        idle:{
            elButton:{
                style:{
                    opacity: 1
                }
            },

        },

        rollover:{
            elButton:{
                style:{
                    opacity: 0.1
                }
            },
        }

        rollout:{
            elButton:{
                style:{
                    opacity: 0
                }
            },
        }
    }
})
```

Next we'll want to define our transitions. Transitions tell `f1-dom` which states it can move between.

Transitions are added by passing an array to the transitions function. Let's add in some transitions:

```javascript
var f1DOM = require('f1-dom');
var elButton;
var body;

body = f1DOM({
	el: document.body,
	
	states: {
		idle:{
			elButton:{
				style:{
					opacity: 1
				}
			},
		},
		
		rollover:{
			elButton:{
				style:{
					opacity: 0.1
				}
			},
		},
		
		rollout:{
			elButton:{
				style:{
					opacity: 0
				}
			},
		},
	}, 
	transitions: [
    {from: 'idle', to: 'rollover', bi: false },
	{from: 'rollover', to: 'rollout', bi: false},
	{from: 'rollout', to: 'idle', bi: false}
  ]
	})
```

The above essentially tells `f1-dom` that we can move from `rollout` to `idle` and from `idle` to `rollover`. 

You may have noticed the `bi` parameter. Set to false, as it is above, and the transitions will only go one way. Set it to true, and the animation will now have the ability to be played in reverse! Take a look at this.

```javascript
transitions: [
  { from: 'idle', to: 'rollover', bi: true }
  ]
```

This one transition will cause a fade in whenever the cursor enters the area of the button, and a fade out whenever it exits. This can make things a great deal simpler, but it does block the ability to use the `rollout` animation due to it conflicting with it.

At this point your ui element is almost ready to go. It has states defined and a map/transitions in how you can move between these states. The only problem is that we haven't brought in our poor dom element yet.

[Step 3 - Define what you will animate](step3.md)
