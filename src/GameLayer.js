var GameLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        var name = prompt('Player name : ');
        this.STATUS = 0;

        this.noteRed = this.createNoteRed();
        
        this.noteOrange = this.createNoteOrange();

        this.noteYellow = this.createNoteYellow();

        this.noteGreen = new Note('Green');
        this.noteGreen.setPosition(new cc.Point(425,-50));
        this.addChild(this.noteGreen);
        
        this.noteBlue= new Note('Blue');
        this.noteBlue.setPosition(new cc.Point(525,-50));
        this.addChild(this.noteBlue);

        this.noteViolet= new Note('Violet');
        this.noteViolet.setPosition(new cc.Point(625,-50));
        this.addChild(this.noteViolet);

        this.red = new Press('Red');
        this.addChild(this.red);

        this.orange = new Press('Orange');
        this.addChild(this.orange);

        this.yellow = new Press('Yellow');
        this.addChild(this.yellow);

        this.green = new Press('Green');
        this.addChild(this.green);

        this.blue = new Press('Blue');
        this.addChild(this.blue);

        this.violet = new Press('Violet');
        this.addChild(this.violet);

        this.showDetail(name);

        
        
        

        

        
        
        

        
        this.scheduleUpdate();

        this.addKeyboardHandlers( true );


        return true;
    },

    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
            for(var i=0 ; i<this.noteRed.length ; i++){
               if(this.noteRed[i].getPosition().y>=350&&this.noteRed[i].getPosition().y<=450){
                this.score++;
                this.scoreLabel.setString('Score : '+this.score);
            }
        }
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
        if(this.STATUS===1){
            this.sec = new Date().getSeconds();
            this.min = new Date().getMinutes();
            this.hr = new Date().getHours();
        }
        // if(this.STATUS%2===1){
            this.sts.change('play');
            this.scheduleUpdate();
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
        // }
        // if(this.STATUS%2===0){
        //     this.sts.change('stop');
        //     this.unscheduleUpdate();
        //     for(var i=0 ; i<this.noteRed.length ; i++){
        //         if(this.noteRed[i]!=null){
        //             this.noteRed[i].unscheduleUpdate();
        //         }
        //     }
        //     for(var i=0 ; i<this.noteOrange.length ; i++){
        //         if(this.noteOrange[i]!=null){
        //             this.noteOrange[i].unscheduleUpdate();
        //         }
        //     }
        //     for(var i=0 ; i<this.noteYellow.length ; i++){
        //         if(this.noteYellow[i]!=null){
        //             this.noteYellow[i].unscheduleUpdate();
        //         }
        //     }
        // }
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

randomPosition: function(){
    var note1 = [];
    for(var i=0 ; i<100 ; i++){
        var x = Math.random();
        if(x*10<5){
            note1.push(1);
        }
        else{
            note1.push(0);
        }
    }
    return note1;
},

createNoteRed: function(){
    var note1 = this.randomPosition();
    var noteRed = [];
    for(var i=0 ; i<note1.length ; i++){
        if(note1[i]==1){
            var note = new Note('Red');
            note.setPosition(new cc.Point(125,-50-(i*75)));
            noteRed.push(note);
            this.addChild(note);
        } 
    }
    return noteRed;
},

createNoteOrange: function(){
    var note1 = this.randomPosition();
    var noteOrange = [];
    for(var i=0 ; i<note1.length ; i++){
        if(note1[i]==0){
            var note = new Note('Orange');
            note.setPosition(new cc.Point(225,-50-(i*75)));
            noteOrange.push(note);
            this.addChild(note);
        } 
    }
    return noteOrange;
},

createNoteYellow: function(){
    var note1 = this.randomPosition();
    var noteYellow = [];
    for(var i=0 ; i<note1.length ; i++){
        if(note1[i]==0){
            var note = new Note('Yellow');
            note.setPosition(new cc.Point(325,-50-(i*75)));
            noteYellow.push(note);
            this.addChild(note);
        } 
    }
    return noteYellow;
},

update: function(){
    if(this.STATUS!=0){
        this.sts.setTime(this.hr,this.min,this.sec,this.timeLabel);
    }
},

createLife: function(){
    var Heart0 = [] ;
    for(var i=0 ; i<5 ; i++){
        var H = new Heart();
        H.setPosition( new cc.Point(800,275-(i*40)));
        this.addChild(H);
        Heart0.push(H);
    }
    return Heart0;
},

showDetail: function(name){
    this.sts = new Status();
    this.addChild(this.sts);
    this.score = 0;
    this.scoreLabel = cc.LabelTTF.create( 'Score : '+this.score , 'Arial', 20 );
    this.scoreLabel.setPosition( new cc.Point( 750, 325 ) );
    this.addChild( this.scoreLabel );
    this.lifeLabel = cc.LabelTTF.create( 'Life : ' , 'Arial', 20 );
    this.lifeLabel.setPosition( new cc.Point( 750, 275 ) );
    this.addChild( this.lifeLabel );
    this.Heart = this.createLife();
    this.NLabel = cc.LabelTTF.create( 'Player Name :' , 'Arial', 20 );
    this.NLabel.setPosition( new cc.Point( 750, 80 ) );
    this.addChild( this.NLabel );
    this.nameLabel = cc.LabelTTF.create( name , 'Arial', 20 );
    this.nameLabel.setPosition( new cc.Point( 800, 60 ) );
    this.addChild( this.nameLabel );
    this.TLabel = cc.LabelTTF.create( 'Your Time :' , 'Arial', 20 );
    this.TLabel.setPosition( new cc.Point( 750, 40 ) );
    this.addChild( this.TLabel );
    this.hr = 0 ;
    this.min = 0;
    this.sec = 0;
    this.timeLabel = cc.LabelTTF.create( '- - : - - : - -', 'Arial', 20 );
    this.timeLabel.setPosition( new cc.Point( 800, 20 ) );
    this.addChild( this.timeLabel );

}

});


