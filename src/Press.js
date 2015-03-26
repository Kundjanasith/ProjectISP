 var Press = cc.Sprite.extend({
     
    ctor: function(color) {
        this._super();
        this.colors = color;
        if(this.colors=='Red'){
            this.initWithFile( 'res/press/red1.png' );
            this.setPosition(new cc.Point(125,400));
        }
        if(this.colors=='Orange'){
            this.initWithFile( 'res/press/orange1.png' );
            this.setPosition(new cc.Point(225,400));
        }
        if(this.colors=='Yellow'){
            this.initWithFile( 'res/press/yellow1.png' );
            this.setPosition(new cc.Point(325,400));
        }
        if(this.colors=='Green'){
            this.initWithFile( 'res/press/green1.png' );
            this.setPosition(new cc.Point(425,400));
        }
        if(this.colors=='Blue'){
            this.initWithFile( 'res/press/blue1.png' );
            this.setPosition(new cc.Point(525,400));
        }
        if(this.colors=='Violet'){
            this.initWithFile( 'res/press/violet1.png' );
            this.setPosition(new cc.Point(625,400));   
        }    
 
    },

 });

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