//Defines the library
var f1DOM = require('f1-dom');
var eases = require('eases');
var elButton; //Our button element variable!
var body; //Our page body variable!

document.addEventListener('DOMContentLoaded', function () {
//Creates a button
body = f1DOM({
	el: document.body,
	
	states: { //Begin a list of object states
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
	}, // This ends the states step. Now we need to create transitions to link these together.
	transitions: [
	//{ from: 'idle', to: 'rollover', bi: true }
    {from: 'idle', to: 'rollover', bi: false, animation: {
		duration: 2, ease: eases.expoIn,
		elButton: {
			style: {
		opacity: {duration: 0.3, delay: 1, ease: eases.quadIn}
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
	})
	.init('idle'); //This sets the button to default to the idle state.
	
	elButton = document.querySelector('[data-f1]');
	//elbutton = body.go('rollover');
	elButton.onmouseover = function(){body.go('rollover');}; //Switches states on rollover...
	elButton.onmouseout = function() {body.go('idle');};//... Goes back to idle on rollout.
});