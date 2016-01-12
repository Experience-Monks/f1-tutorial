# Step 1 - Define your states

So we'd like to create a simple button that is one DOM element and has three states: `rollout`, `idle` and `rollover`.

Before we can do any of that we must first instantiate a new `F1-DOM` instance:

```javascript
var f1DOM = require('f1-dom');
```

Then, to target the DOM, we need to create a couple of variables. One for the page's body, and one for the button we are changing.

```javascript
var elButton; //Our button element variable!
var body; //Our page body variable!
```

After this we can begin to define our states. Our states will be called `rollout`, `idle` and `rollover`.
```javascript
body = f1DOM({
	el: document.body,
	
	states: { //Begin a list of object states
		idle:{
			elButton:{
			},
		},
	
		rollover: {
			elButton: {
				}
			},
			
			idle:{
			elButton:{
			},
		},
	}
})
```

Your states are now defined: idle and rollover. In each state we added a button object which will contain all the information to define the state for our item we'll animate. But obviously really nothing is going to happen if there are no values defined so lets add in some values. This is done by adding `style:{}` inside `elButton:{}`, and inserting CSS elements.

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
		
		rollover: {
			elButton: {
				style:{
					opacity: 0.1
				}
			},
		}
		
		rollout: {
			elButton: {
				style:{
					opacity: 0
				}
			},
		}
	}
})
```

Now your states are fully defined, so when the button is in the `rollout` state its opacity will be 0, in the `idle` state it will be 1, and in the `rollover` state it'll be 0.1.

If you wanted to animate other properties you could simply add them in `style{}` for each state.

[Step 2 - Define your transitions](step2.md)
