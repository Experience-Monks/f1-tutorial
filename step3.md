# Step 3 - Define what you will animate

Now we have `states` and `transitions` defined. We must now define what `f1-dom` is going to animate.

`F1-DOM` is simply a animation framework that changes the property values of `Objects`. 

In order for `F1-DOM` to do anything meaningful, in our case, change the opacity of a DOM element, we need to do two things:

1. Define the DOM element whose opacity we will be changing
2. Define how `F1-DOM` will change the DOM elements opacity

Let's define what `f1-dom` will animate:

```javascript
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
		
		rollover: {
			elButton: {
				style:{
					opacity: 0.1
				}
			},
		},
		
		rollout: {
			elButton: {
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

  elButton = document.querySelector('[data-f1]');
```

Now that the `elButton` variable has been defined, `f1-dom` will target an HTML element with `data-f1="elButton"` as a parameter. So in our case:

```HTML
<button data-f1="elButton">I'm a button</button>
```

[Step 4 - Making things move](step4.md)
