 var ORANGE = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/press/orange1.png' );
    },
    change: function(x){
    	if(x=='up'){
    		this.initWithFile( 'res/press/orange1.png' );
    	}
    	if(x=='down'){
    		this.initWithFile( 'res/press/orange2.png' );
    	}
    }
}); 