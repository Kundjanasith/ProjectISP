 var VIOLET = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/press/violet1.png' );
    },
    change: function(x){
    	if(x=='up'){
    		this.initWithFile( 'res/press/violet1.png' );
    	}
    	if(x=='down'){
    		this.initWithFile( 'res/press/violet2.png' );
    	}
    }
}); 