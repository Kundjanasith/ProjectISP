 var NoteRed = cc.Sprite.extend({

    ctor: function() {
        this.speed = 5;
        this._super();
        this.initWithFile( 'res/note/NoteRed.png' );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    }
    
}); 

var NoteOrange = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/note/NoteOrange.png' );
    }
    
}); 

var NoteYellow = cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( 'res/note/NoteYellow.png' );
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