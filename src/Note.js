 var NoteRed = cc.Sprite.extend({

    ctor: function() {
        this.speed = 5;
        this._super();
        this.initWithFile( 'res/note/NoteRed.png' );
    },

    update: function(){
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.speed ) );
    }
    
}); 

var NoteOrange = cc.Sprite.extend({

    ctor: function() {
        this.speed = 5;
        this._super();
        this.initWithFile( 'res/note/NoteOrange.png' );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    }
    
}); 

var NoteYellow = cc.Sprite.extend({

    ctor: function() {
        this.speed = 5;
        this._super();
        this.initWithFile( 'res/note/NoteYellow.png' );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    }
    
}); 

var NoteGreen = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/note/NoteGreen.png' );
    }
    
}); 

var NoteBlue = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/note/NoteBlue.png' );
    }
    
}); 

var NoteViolet = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/note/NoteViolet.png' );
    }
    
}); 