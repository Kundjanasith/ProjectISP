var Note = cc.Sprite.extend({

    ctor: function(color) {
        this.speed = 5;
        this._super();
        this.colors = color;
        if(this.colors=='Red')this.initWithFile( 'res/note/NoteRed.png' );
        if(this.colors=='Orange')this.initWithFile( 'res/note/NoteOrange.png' );
        if(this.colors=='Yellow')this.initWithFile( 'res/note/NoteYellow.png' );
        if(this.colors=='Green')this.initWithFile( 'res/note/NoteGreen.png' );
        if(this.colors=='Blue')this.initWithFile( 'res/note/NoteBlue.png' );
        if(this.colors=='Green')this.initWithFile( 'res/note/NoteGreen.png' );
        if(this.colors=='Viloet')this.initWithFile( 'res/note/NoteViolet.png' );
    },

    update: function(){
        // this.speed+=0.05;
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
    },

    destroy: function(){
        this.removeFromParent();
    }

}); 
