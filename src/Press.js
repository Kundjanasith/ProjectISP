 var Red = cc.Sprite.extend({

     ctor: function() {
        this._super();
        this.initWithFile( 'res/press/red1.png' );
    },

    change: function(x){
        if(x=='up'){
            this.initWithFile( 'res/press/red1.png' );
        }
        if(x=='down'){
            this.initWithFile( 'res/press/red2.png' );
        }
    }
    
}); 

var Orange = cc.Sprite.extend({

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

 var Yellow = cc.Sprite.extend({

     ctor: function() {
        this._super();
        this.initWithFile( 'res/press/yellow1.png' );
    },

    change: function(x){
        if(x=='up'){
            this.initWithFile( 'res/press/yellow1.png' );
        }
        if(x=='down'){
            this.initWithFile( 'res/press/yellow2.png' );
        }
    }
    
}); 

var Green = cc.Sprite.extend({

     ctor: function() {
        this._super();
        this.initWithFile( 'res/press/green1.png' );
    },

    change: function(x){
        if(x=='up'){
            this.initWithFile( 'res/press/green1.png' );
        }
        if(x=='down'){
            this.initWithFile( 'res/press/green2.png' );
        }
    }
    
}); 

var Blue = cc.Sprite.extend({

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

var Violet = cc.Sprite.extend({

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