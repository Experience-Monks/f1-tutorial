var f1 = require( 'f1' );
var find = require( 'dom-select' );
var eases = require( 'eases' );

var button = find( '#button' );


/*********************************************************/
/*********************** SETUP F1 ************************/
/*********************************************************/
var ui = f1();
ui.states( {

    out: {
    	button: {
    		alpha: 0,
            left: -100
    	}
    },
    idle: {
    	button: {
    		alpha: 1,
            left: 10
    	}
    },
    rollover: {
    	button: {
    		alpha: 0.1,
            left: 40
    	}
    }
})
.transitions( [

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
])
.toAnimate( {

	button: button
})
.teach( [ 
    function( item, data ) {

    	item.style.opacity = data.alpha;
    },

    function( item, data ) {

        item.style.position = 'absolute';
        item.style.left = data.left + 'px';
    }
] )
.init( 'out' )
.go( 'idle' );


/*********************************************************/
/****************** ADD EVENT LISTENERS ******************/
/*********************************************************/
button.addEventListener( 'mouseenter', function() {

	ui.go( 'rollover' );
});

button.addEventListener( 'mouseleave', function() {

	ui.go( 'idle' );
});