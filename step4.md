# Step 4 - Making things move

If you were to run our current example it would actually do nothing. :(

In order for `f1-dom` to animate, it needs to know the initial state where it should be. For that we'll use the `init` method.

Using init looks like this:

```javascript
.init('idle');
```

You just simply pass it a string which corelates to the name of the initial state you want to animate/go to. In this case we're telling the `f1-dom` ui instance to initialize itself on the `out` state.

After we've initialized `f1` we call call the `go` function to transition from the initial state (`'out'`) to another section. We'd do that like this:

```javascript
ui.go( 'idle' );
```

Let's put all this together.

```javascript
var f1DOM = require('f1-dom');
var elButton; //Our button element variable!
var body; //Our page body variable!

body = f1DOM({
	el: document.body,
	
	states
		idle: {
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
	{from: 'rollout', to: 'idle', bi: true}
  ]
	})
	.init('idle'); 
	
	elButton = document.querySelector('[data-f1]');
	
	elButton = body.go('rollover'); //This tells f1-dom to apply an animation!
```

Finally if you were to run the above code it'll actually fade in the button element. Notice the new line added at the bottom. This will make our button go into the `rollover` state when the page is loaded. Please note that `body.go('rollover')` is assigned to the `elButton` variable. This tells `f1-dom` to only animate that element and not every single element defined under the `rollover` state.

You can call the `go` method at any point in time to animate to another state. Even mid animation you can call `go`. If for instance `f1-dom` was animating from `idle` to `rollover` and all of a sudden you told it to go to `out` a route would be calculated and it would begin to animate towards out. In this case the path would look like this:
```
somewhere between idle and roll over -> idle -> out
```

So illustrate the ability to call `go` at any time let's add mouse events to our button:

```javascript
//Defines the library
var f1DOM = require('f1-dom');
var elButton; //Our button element variable!
var body; //Our page body variable!

//Creates a button
body = f1DOM({
	el: document.body,
	
	states:{
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
	.init('idle'); 
	
	elButton = document.querySelector('[data-f1]');
	
	elButton.onmouseover = function(){body.go('rollover');}; //Switches states on rollover...
	elButton.onmouseout = function() {body.go('idle');};//... Goes back to idle on rollout.
```

You may have noticed that two elements, `elButton.onmouseover` and `elButton.onmouseout` have now been added to the bottom of the script. This tells `f1-dom` to use certian states when a specific condition is met. For example, the first statement has `elButton` set to be modified when `onmouseover` is true. This then triggers the assigned function that tells the `go` method to modify our `body` variable. (Necessary since this is where `elButton` resides.) It then triggers the selected state (`rollover`) and uses a transition to get there from the current state, if one is defined.

If you run the example now you should be able to see the button animate in from being transparent and then on mouse over it'll become slightly transparent again.

[Step 5 - Tweaking Animations](step5.md)
