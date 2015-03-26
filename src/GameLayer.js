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

        this.Heart = this.createLife();
        
        this.score = 0;

        this.scoreLabel = cc.LabelTTF.create( 'Score : '+this.score , 'Arial', 20 );
        this.scoreLabel.setPosition( new cc.Point( 750, 325 ) );
        this.addChild( this.scoreLabel );

        this.lifeLabel = cc.LabelTTF.create( 'Life : ' , 'Arial', 20 );
        this.lifeLabel.setPosition( new cc.Point( 750, 275 ) );
        this.addChild( this.lifeLabel );

        this.CtimeLabel = cc.LabelTTF.create( 'Your Time :' , 'Arial', 20 );
        this.CtimeLabel.setPosition( new cc.Point( 750, 40 ) );
        this.addChild( this.CtimeLabel );

        this.StimeLabel = cc.LabelTTF.create( 'Started Time :' , 'Arial', 20 );
        this.StimeLabel.setPosition( new cc.Point( 750, 80 ) );
        this.addChild( this.StimeLabel );
        
        this.hr = 0 ;
        this.min = 0;
        this.sec = 0;

        var sec = new Date().getSeconds();
        var min = new Date().getMinutes();
        var hr = new Date().getHours();

        if(sec<10){
            sec='0'+sec;
        }
        if(min<10){
            min='0'+min;
        }
        if(hr<10){
            hr='0'+hr;
        }

        this.timeLabel0 = cc.LabelTTF.create( '- - : - - : - -', 'Arial', 20 );
        this.timeLabel0.setPosition( new cc.Point( 800, 60 ) );
        this.addChild( this.timeLabel0 );

        this.timeLabel = cc.LabelTTF.create( '- - : - - : - -', 'Arial', 20 );
        this.timeLabel.setPosition( new cc.Point( 800, 20 ) );
        this.addChild( this.timeLabel );


        
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
            var sec = new Date().getSeconds();
            var min = new Date().getMinutes();
            var hr = new Date().getHours();

            this.hr = hr;
            this.min = min;
            this.sec = sec;

            if(sec<10){
                sec='0'+sec;
            }
            if(min<10){
                min='0'+min;
            }
            if(hr<10){
                hr='0'+hr;
            }
            this.timeLabel0.setString( hr +' : '+ min+' : '+ sec, 'Arial', 20 );

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
            var note = new NoteRed();
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
            var note = new NoteOrange();
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
            var note = new NoteYellow();
            note.setPosition(new cc.Point(325,-50-(i*75)));
            noteYellow.push(note);
            this.addChild(note);
        } 
    }
    return noteYellow;
},

update: function(){
    if(this.STATUS!=0){
        var sec = new Date().getSeconds();
        var min = new Date().getMinutes();
        var hr = new Date().getHours();

        var duration0 = (this.sec)+(this.min*60)+(this.hr*3600);
        var duration1 = sec+(min*60)+(hr*3600);

        var duration = duration1-duration0;

        var h = Math.floor(duration/3600);
        var m = Math.floor(duration/60);
        var s = Math.floor(duration%60);

        if(s<10){
            s='0'+s;
        }
        if(m<10){
            m='0'+m;
        }
        if(h<10){
            h='0'+h;
        }

        this.timeLabel.setString( h+' : '+ m+' : '+ s, 'Arial', 60 );
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
}

});


