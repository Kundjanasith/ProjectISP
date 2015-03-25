 var BLUE = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/press/blue1.png' );
    },

    change: function(x){
        if(x=='up'){
            this.initWithFile( 'res/press/blue1.png' );
        }
        if(x=='down'){
            this.initWithFile( 'res/press/blue2.png' );
        }
    }
    
}); 