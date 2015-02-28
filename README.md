# What is F1?

F1 is a state driven animation framework.

What you will use it for most likely is to create animations for ui elements.

When a designer designs a UI element they do it in two steps. 

If they're creating a button they would likely take the following steps:

1. Design the look of the button: when it is idle, rolled over, or pressed. These are the `states` of the button.
2. After this they will design the animation between the `states`. These animations are the `transitions` between the states.

With `F1` you will work in a similar fashion:

1. Define `states` of your ui and what it will look like in the states
2. Define the `transitions` between all of it's states

Of course we'll also need to define what we'll be animating so there is an additional step:

3. Define what `F1` is going `to animate` (DOM elements for instance)

## Tutorial

To demonstrate how to work with `F1` we'll create a simple button using a HTML Button Element which has three states: out, idle, rollover.

To keep things simple `f1` will simply just modifying the DOM element's CSS opacity property as the user interacts with the button.

If at any time you'd like to see what you're building plus a little bit more you can run the command in terminal:
```
$ npm install
$ npm run example
```

The source for the example lives in the example folder.

So let's create an `F1` ui element: 

[Step 1 - Define your states](step1.md)