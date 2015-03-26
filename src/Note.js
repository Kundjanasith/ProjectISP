var Note = cc.Sprite.extend({

    ctor: function(color) {
        this.speed = 5;
        this._super();
        if(color=='Red')this.initWithFile( 'res/note/NoteRed.png' );
        if(color=='Orange')this.initWithFile( 'res/note/NoteOrange.png' );
        if(color=='Yellow')this.initWithFile( 'res/note/NoteYellow.png' );
        if(color=='Green')this.initWithFile( 'res/note/NoteGreen.png' );
        if(color=='Blue')this.initWithFile( 'res/note/NoteBlue.png' );
        if(color=='Green')this.initWithFile( 'res/note/NoteGreen.png' );
        if(color=='Viloet')this.initWithFile( 'res/note/NoteViolet.png' );
    },

    update: function(){
        this.setPosition( new cc.Point( this.getPosition().x, this.getPosition().y + this.speed ) );
        this.destroy();
    },

    destroy: function(){
        if(this.getPosition().y>=375){
            this.removeFromParent();
        }
    }
    
}); 
 