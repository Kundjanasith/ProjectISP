 var STATUS = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/status/Start.png' );
    },

    change: function(x){
    	if(x=='play'){
    		this.initWithFile( 'res/status/Play.png' );
    	}
    	if(x=='stop'){
    		this.initWithFile( 'res/status/Stop.png' );
    	}
    }
    
}); 