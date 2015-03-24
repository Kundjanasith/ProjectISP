 var RED = cc.Sprite.extend({
     ctor: function() {
        this._super();
        this.initWithFile( 'res/press/red1.png' );
    },
    change: function(x){
    	if(x=='up'){
    		this.initithFile( 'res/press/red1.png' );
    	}
    	if(x=='down'){
    		this.initWithFile( 'res/press/red2.png' );
    	}
    }
}); 