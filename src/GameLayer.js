var GameLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 0, 0, 0, 0 ) );
        this.setPosition(new cc.Point(0, 0)  );
        // this.Speed = 10 ;
        // this.Screen = new cc.Sprite(res.Screen_png);
        // this.Screen.setPosition(new cc.Point(100,0));
        // this.addChild(this.Screen);

        this.Name = '' ;
        this.showDetail();

        this.show=false;

        this.createAction();

        this.Life = 4 ;

        this.STATUS = 0;

        this.noteRed = this.createNote('Red');
        this.noteOrange = this.createNote('Orange');

        this.showPress();
        this.addKeyboardHandlers( true );


        return true;
    },

    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
            this.pressCheck('Red');
        }
        if(e===cc.KEY.d){
            this.orange.change('down');
            this.pressCheck('Orange');
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
//              this.Name = prompt('Player Name :');
                this.Name = 'name';
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
            // for(var i=0 ; i<this.noteYellow.length ; i++){
            // if(this.noteYellow[i]!=null){
            // this.noteYellow[i].scheduleUpdate();
            // }
            // }
            // }
            // if(this.STATUS%2===0){
            // this.sts.change('stop');
            // this.unscheduleUpdate();
            // for(var i=0 ; i<this.noteRed.length ; i++){
            // if(this.noteRed[i]!=null){
            // this.noteRed[i].unscheduleUpdate();
            // }
            // }
            // for(var i=0 ; i<this.noteOrange.length ; i++){
            // if(this.noteOrange[i]!=null){
            // this.noteOrange[i].unscheduleUpdate();
            // }
            // }
            // for(var i=0 ; i<this.noteYellow.length ; i++){
            // if(this.noteYellow[i]!=null){
            // this.noteYellow[i].unscheduleUpdate();
            // }
            // }
            // }
        }
    },

    pressCheck: function(color){
        if(this.STATUS>0){
            if(color=='Red')this.pressCheckHelper(this.noteRed,this.perfectRed,this.missRed);
            if(color=='Orange')this.pressCheckHelper(this.noteOrange,this.perfectOrange,this.missOrange);
            if(color=='Yellow')this.pressCheckHelper(this.noteYellow,this.perfectYellow,this.missYellow);
            if(color=='Green')this.pressCheckHelper(this.noteGreen,this.perfectGreen,this.missGreen);
            if(color=='Blue')this.pressCheckHelper(this.noteBlue,this.perfectBlue,this.missBlue);
            if(color=='Violet')this.pressCheckHelper(this.noteViolet,this.perfectViolet,this.missViolet);
        }
    },

    pressCheckHelper: function(Note,perfect,miss){
        var check = true;
        for(var i=0 ; i<Note.length ; i++){
            if(Note[i].getPosition().y>=325&&Note[i].getPosition().y<=450){
                this.score++;
                miss.destroy();
                perfect.destroy();
                this.addChild(perfect);
                check = false;
            }
        }
        if(check){
            miss.destroy();
            perfect.destroy();
            this.addChild(miss);
            if(this.Life>=0)this.Heart[this.Life].destroy();
            else{
                this.unscheduleUpdate();
                this.removeFromParent();
                this.show=true;
                this.deleteScreen();
            }
            this.Life--;
        }
    },

    actionDestroy: function(color){
        if(color=='Red'){
            this.perfectRed.destroy();
            this.missRed.destroy();
        }
        if(color=='Orange'){
            this.perfectOrange.destroy();
            this.missOrange.destroy();
        }
        if(color=='Yellow'){
            this.perfectYellow.destroy();
            this.missYellow.destroy();
        }
        if(color=='Green'){
            this.perfectGreen.destroy();
            this.missGreen.destroy();
        }
        if(color=='Blue'){
            this.perfectBlue.destroy();
            this.missBlue.destroy();
        }
        if(color=='Violet'){
            this.perfectViolet.destroy();
            this.missViolet.destroy();
        }
    },
    onKeyUp: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('up');
            this.actionDestroy('Red');
        }
        if(e===cc.KEY.d){
            this.orange.change('up');
            this.actionDestroy('Orange');
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
        for ( var i = 0; i < 50 ; i++ ){
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

    createNote: function(color){
        this.pos = this.randomPosition();
        var noteCreated = [];
        var posX = 0;
        var notePos = [];
        if(color=='Red')posX = 125;
        if(color=='Orange')posX = 225;
        if(color=='Yellow')posX = 325;
        if(color=='Green')posX = 425;
        if(color=='Blue')posX = 525;
        if(color=='Violet')posX = 625; 
        for(var i=0 ; i<this.pos.length ; i++){
            if(this.pos[i]==1){
                var note = new Note(color);
                note.setPosition( new cc.Point(posX, - 50 - ( i * 75 )) );
                noteCreated.push(note);
                this.addChild(note);
                notePos.push(note.getPosition().y);
            }
            else notePos.push(0);
        }
        if(color=='Red')this.posRed = notePos;
        if(color=='Orange')this.posOrange = notePos;
        if(color=='Yellow')this.posYellow = notePos;
        if(color=='Green')this.posGreen = notePos;
        if(color=='Blue')this.posBlue = notePos;
        if(color=='Violet')this.posViolet = notePos; 
        return noteCreated;
    },

    update: function(){
        if(this.STATUS!=0){
            this.sts.setTime(this.hr,this.min,this.sec,this.timeLabel);
        }
        this.scoreLabel.setString('Score : '+this.score, 'Arial', 20);
        this.nameLabel.setString(this.Name,'Arial', 20);
        for(var i=0 ; i<this.noteRed.length ; i++){
            if(this.noteRed[i].getPosition().y===400){
                this.noteRed[i].setPosition(new cc.Point(125,this.subArray(this.posRed)[i]));
            }
        }
         for(var i=0 ; i<this.noteOrange.length ; i++){
            if(this.noteOrange[i].getPosition().y===400){
                this.noteOrange[i].setPosition(new cc.Point(225,this.subArray(this.posOrange)[i]));
            }
        }

//      this.noteRed.scheduleUpdate();
        // this.Screen.setPosition(new
        // cc.Point(this.Screen.getPosition().x,this.Screen.getPosition().y+this.Speed));
        // if(this.Screen.getPosition().y>=800){
        // this.Screen.setPosition(new cc.Point(this.Screen.getPosition().x,0));
        // }

    },

    createLife: function(){
        var Heart0 = [] ;
        for ( var i = 0; i < 5; i++ ) {
            var H = new Heart( );
            H.setPosition( new cc.Point(800, 275 - ( i * 40 )) );
            this.addChild( H );
            Heart0.push( H );
        }
        return Heart0;
    },

    showDetail: function(){
        this.sts = new Status();
        this.addChild(this.sts);
        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create( 'Score : ' + this.score, 'Arial', 20 );
        this.scoreLabel.setPosition( new cc.Point(725, 325) );
        this.addChild( this.scoreLabel );
        this.lifeLabel = cc.LabelTTF.create( 'Life : ', 'Arial', 20 );
        this.lifeLabel.setPosition( new cc.Point(750, 275) );
        this.addChild( this.lifeLabel );
        this.Heart = this.createLife();
        this.NLabel = cc.LabelTTF.create( 'Player Name :', 'Arial', 20 );
        this.NLabel.setPosition( new cc.Point(750, 80) );
        this.addChild( this.NLabel );
        this.nameLabel = cc.LabelTTF.create( '', 'Arial', 20 );
        this.nameLabel.setPosition( new cc.Point(800, 60) );
        this.addChild( this.nameLabel );
        this.TLabel = cc.LabelTTF.create( 'Your Time :' , 'Arial', 20 );
        this.TLabel.setPosition( new cc.Point(735, 40) );
        this.addChild( this.TLabel );
        this.hr = 0 ;
        this.min = 0;
        this.sec = 0;
        this.timeLabel = cc.LabelTTF.create( '- - : - - : - -', 'Arial', 20 );
        this.timeLabel.setPosition( new cc.Point(800, 20) );
        this.addChild( this.timeLabel );
    },

    showPress: function(){

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
    },

    // stopAllNote: function(){
    //     for(var i=0 ; i<this.noteRed.length ; i++){
    //         if(this.noteRed[i]!=null){
    //             this.noteRed[i].unscheduleUpdate();
    //         }
    //     }
    //     for(var i=0 ; i<this.noteOrange.length ; i++){
    //     if(this.noteOrange[i]!=null){
    //     this.noteOrange[i].unscheduleUpdate();
    //     }
    //     }
    //     for(var i=0 ; i<this.noteYellow.length ; i++){
    //     if(this.noteYellow[i]!=null){
    //     this.noteYellow[i].unscheduleUpdate();
    //     }
    //     }
    // },

    deleteScreen: function(){
        var Screen = [this.show,this.Name,this.scoreLabel.getString(),this.timeLabel.getString()];
        return Screen;
    },

    createAction: function(){
        this.perfectRed = new Action('perfect','Red');
        this.missRed = new Action('miss','Red');
        this.perfectOrange = new Action('perfect','Orange');
        this.missOrange = new Action('miss','Orange');
        this.perfectYellow = new Action('perfect','Yellow');
        this.missYellow = new Action('miss','Yellow');
        this.perfectGreen = new Action('perfect','Green');
        this.missGreen = new Action('miss','Green');
        this.perfectBlue = new Action('perfect','Blue');
        this.missBlue = new Action('miss','Blue');
        this.perfectViolet = new Action('perfect','Violet');
        this.missViolet = new Action('miss','Violet');
    },

    subArray: function(array){
        var subArr = [];
        for(var i=0 ; i<array.length ; i++){
              if(array[i]!=0)subArr.push(array[i]);
        }
        return subArr;
    }



});


