var GameLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.STATUS = 0;

        this.noteRed = this.createNoteRed();
        
        this.noteOrange = this.createNoteOrange();

        this.noteYellow = this.createNoteYellow();

        this.noteGreen = new NoteGreen();
        this.noteGreen.setPosition(new cc.Point(425,-50));
        this.addChild(this.noteGreen);
        
        this.noteBlue= new NoteBlue();
        this.noteBlue.setPosition(new cc.Point(525,-50));
        this.addChild(this.noteBlue);

        this.noteViolet= new NoteViolet();
        this.noteViolet.setPosition(new cc.Point(625,-50));
        this.addChild(this.noteViolet);

        this.red = new Red();
        this.red.setPosition(new cc.Point(125,400));
        this.addChild(this.red);

        this.orange = new Orange();
        this.orange.setPosition(new cc.Point(225,400));
        this.addChild(this.orange);

        this.yellow = new Yellow();
        this.yellow.setPosition(new cc.Point(325,400));
        this.addChild(this.yellow);

        this.green = new Green();
        this.green.setPosition(new cc.Point(425,400));
        this.addChild(this.green);

        this.blue = new Blue();
        this.blue.setPosition(new cc.Point(525,400));
        this.addChild(this.blue);

        this.violet = new Violet();
        this.violet.setPosition(new cc.Point(625,400));
        this.addChild(this.violet);

        this.sts = new Status();
        this.sts.setPosition(new cc.Point(800,400));
        this.addChild(this.sts);

        this.addKeyboardHandlers( true );


        return true;
    },

    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
        }
        if(e===cc.KEY.d){
            this.orange.change('down');
        }
        if(e===cc.KEY.f){
            this.yellow.change('down');
        }
        if(e===cc.KEY.j){
            this.green.change('down');
        }
        if(e===cc.KEY.k){
            this.blue.change('down');
        }
        if(e===cc.KEY.l){
            this.violet.change('down');
        }
        if(e===cc.KEY.enter){
            this.STATUS++;
                if(this.STATUS%2===1){
                    this.sts.change('play');
                    for(var i=0 ; i<this.noteRed.length ; i++){
                        if(this.noteRed[i]!=null){
                            this.noteRed[i].scheduleUpdate();
                        }
                    }
                    for(var i=0 ; i<this.noteOrange.length ; i++){
                        if(this.noteOrange[i]!=null){
                            this.noteOrange[i].scheduleUpdate();
                        }
                    }
                    for(var i=0 ; i<this.noteYellow.length ; i++){
                        if(this.noteYellow[i]!=null){
                            this.noteYellow[i].scheduleUpdate();
                        }
                    }
                }
                if(this.STATUS%2===0){
                    this.sts.change('stop');
                   for(var i=0 ; i<this.noteRed.length ; i++){
                        if(this.noteRed[i]!=null){
                                this.noteRed[i].unscheduleUpdate();
                        }
                    }
                    for(var i=0 ; i<this.noteOrange.length ; i++){
                        if(this.noteOrange[i]!=null){
                                this.noteOrange[i].unscheduleUpdate();
                        }
                    }
                    for(var i=0 ; i<this.noteYellow.length ; i++){
                        if(this.noteYellow[i]!=null){
                                this.noteYellow[i].unscheduleUpdate();
                        }
                    }
                }
        }
   
    },

    onKeyUp: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('up');
        }
        if(e===cc.KEY.d){
            this.orange.change('up');
        }
        if(e===cc.KEY.f){
            this.yellow.change('up');
        }
        if(e===cc.KEY.j){
            this.green.change('up');
        }
        if(e===cc.KEY.k){
            this.blue.change('up');
        }
        if(e===cc.KEY.l){
            this.violet.change('up');
        }

    },

    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( e ) {
                self.onKeyDown( e );
            },
            onKeyReleased: function( e ) {
                self.onKeyUp( e );
            }
        }, this);
    },
    
    createNoteRed: function(){
        var note1 = [1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0];
        var noteRed = [];
        cc.log(note1.length);
        for(var i=0 ; i<note1.length ; i++){
            if(note1[i]==1){
            var note = new NoteRed();
            note.setPosition(new cc.Point(125,-50-(i*75)));
            noteRed.push(note);
            this.addChild(note);
            } 
        }
     return noteRed;
    },

    createNoteOrange: function(){
        var note1 = [1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0];
        var noteOrange = [];
        cc.log(note1.length);
        for(var i=0 ; i<note1.length ; i++){
            if(note1[i]==0){
            var note = new NoteOrange();
            note.setPosition(new cc.Point(225,-50-(i*75)));
            noteOrange.push(note);
            this.addChild(note);
            } 
        }
     return noteOrange;
    },

    createNoteYellow: function(){
        var note1 = [1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0];
        var noteYellow = [];
        cc.log(note1.length);
        for(var i=0 ; i<note1.length ; i++){
            if(note1[i]==0){
            var note = new NoteYellow();
            note.setPosition(new cc.Point(325,-50-(i*75)));
            noteYellow.push(note);
            this.addChild(note);
            } 
        }
     return noteYellow;
    }

});


