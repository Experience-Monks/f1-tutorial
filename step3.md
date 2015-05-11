# Step 3 - Define what you will animate

Now we have `states` and `transitions` defined. We must now define what `f1` is going to animate.

`F1` is simply a animation framework that changes the property values of `Objects`. 

In order for `F1` to do anything meaningful for instance in our case change the opacity of a DOM element. We need to do two things:

1. Define the dom element whose opacity we will be changing
2. Define how `F1` will change the DOM elements opacity

Let's define what `f1` will animate:

```javascript
var f1 = require( 'f1' );
var find = require( 'dom-select' );

var ui = f1();
ui.states( {

    out: {
        button: {
            alpha: 0
        }
    },
    idle: {
        button: {
            alpha: 1    
        }
    },
    rollover: {
        button: {
            alpha: 0.1
        }
    }
})
.transitions( [

    { from: 'out', to: 'idle' },
    { from: 'idle', to: 'rollover' },
    { from: 'rollover', to: 'idle' },
    { from: 'idle', to: 'out' }
])
.targets( {
  
  button: find( '#button' )
});
```

The `targets` function accepts an object. Which looks very similar to one of the states. But instead of there being properties like in the state we pass the item we want to animate in our case the `#button` dom element.

If we had two elements it would look something like

```javascript
ui.targets( {
  
  button: find( '#button' ),
  anotherElement: find( '#someQueryString' )
});
```

As you remember all our states define a property called `alpha` we now need to be able to take that alpha value and somehow apply it to css. To do this we have to `parsers` `f1` how to handle properties of states.

This is done by passing in an `Array` of functions which will parse data from the current state of `f1` and apply it to css.

Let's do that:
```javascript
var f1 = require( 'f1' );
var find = require( 'dom-select' );

var ui = f1();
ui.states( {

    out: {
        button: {
            alpha: 0
        }
    },
    idle: {
        button: {
            alpha: 1    
        }
    },
    rollover: {
        button: {
            alpha: 0.1
        }
    }
})
.transitions( [

    { from: 'out', to: 'idle' },
    { from: 'idle', to: 'rollover' },
    { from: 'rollover', to: 'idle' },
    { from: 'idle', to: 'out' }
])
.targets( {
  
  button: find( '#button' )
})
.parsers( [

    function( button, state ) {

        button.style.opacity = state.alpha;
    }
]);
```

Above we called the parsers method of `f1` instance and passed it an `Array` with one function. As `f1` updates this function will be run and it's only purpose is to take the values from the state and apply it to dom element. 

Now you should be able to see how the `alpha` property gets applied to the CSS property opacity.

It's quite laborious to always have to define your own methods which will parse properties and apply them to a dom element. So there are two modules which have been created:

- `f1-dom`
- `f1-model`

`f1-dom` is a collection of functions which will take properties from defined states and apply it to many css properties. If you used `f1-dom` calling the parsers method would look something like this:

```javascript
ui.parsers( require( 'f1-dom' ) );
```

As you can see it reduces a lot of the boilerplate especially if you're trying to target multiple CSS properties.

`f1-model` is much more generic where it simply copies all values from the calculated state into another object defined in the `targets` function call. This can be used if working with MVC frameworks that have databinding and directives. `f1` can simply update the model and directives can update css.

[Step 4 - Making things move](step4.md)