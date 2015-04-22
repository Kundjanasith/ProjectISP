 var Heart = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/heart.png' );
    },
    
    destroy: function(){
    	this.removeFromParent();
    },

    change: function(step){
       if(step==1) this.initWithFile ( 'res/heart1.png' );
    }

}); 