var GameLayer = cc.LayerColor.extend({

    init: function() {
        this._super( new cc.Color( 0, 0, 0, 0 ) );
        this.setPosition(new cc.Point(0, 0)  );
        this.show=true;
        this.namePlayer = '' ;
        this.showDetail();
        this.createAction();
        this.life = 4 ;
        this.statusGame = 0;
        this.colors = [];
        this.noteRed = this.createNote('Red');
        this.noteOrange = this.createNote('Orange');
        this.noteYellow = this.createNote('Yellow');
        this.noteGreen = this.createNote('Green');
        this.noteBlue = this.createNote('Blue');
        this.noteViolet = this.createNote('Violet');
        this.showPress();
        this.addKeyboardHandlers( true );
        this.addItem();
        return true;
    },

    onKeyDown: function( e ) {
        if(e===cc.KEY.s){
            this.red.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressS.mp3',false);
            this.pressCheck('Red');
        }
        if(e===cc.KEY.d){
            this.orange.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressD.mp3',false);
            this.pressCheck('Orange');
        }
        if(e===cc.KEY.f){
            this.yellow.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressF.mp3',false);
            this.pressCheck('Yellow');
        }
        if(e===cc.KEY.j){
            this.green.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressJ.mp3',false);
            this.pressCheck('Green');
        }
        if(e===cc.KEY.k){
            this.blue.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressK.mp3',false);
            this.pressCheck('Blue');
        }
        if(e===cc.KEY.l){
            this.violet.change('down');
            if(this.show)cc.audioEngine.playMusic('sound/pressL.mp3',false);
            this.pressCheck('Violet');
        }
        if(e===cc.KEY.enter){
            this.statusGame++;
            if(this.statusGame===1){
             this.namePlayer = prompt('Player Name :');
                this.sec = new Date().getSeconds();
                this.min = new Date().getMinutes();
                this.hr = new Date().getHours();
            }
            this.sts.change('play');
            this.scheduleUpdate();
            this.startNote(this.noteRed);
            this.startNote(this.noteOrange);
            this.startNote(this.noteYellow);
            this.startNote(this.noteGreen);
            this.startNote(this.noteBlue);
            this.startNote(this.noteViolet);
        }
    },

    startNote: function(Note){
            for(var i=0 ; i<Note.length ; i++){
                if(Note[i]!=null){
                    Note[i].scheduleUpdate();
                }
            }
    },

    pressCheck: function(color){
        if(this.statusGame>0){
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
            if(Note[i].getPosition().y>=325&&Note[i].getPosition().y<=450&&this.show){
                this.score++;
                miss.destroy();
                perfect.destroy();
                this.addChild(perfect);
                check = false;
            }
        }
        if(check&&this.show){
            miss.destroy();
            perfect.destroy();
            this.addChild(miss);
            if(this.life>=0)this.Heart[this.life].destroy();
            else{
                this.unscheduleUpdate();
                this.show=false;
                this.deleteScreen();
                var layer2 = new EndLayer();
                layer2.init(this.namePlayer,this.scoreLabel.getString(),this.timeLabel.getString());
                this.stopNow(this.noteRed);
                this.stopNow(this.noteOrange);
                this.stopNow(this.noteYellow);
                this.stopNow(this.noteGreen);
                this.stopNow(this.noteBlue);
                this.stopNow(this.noteViolet);
                this.addChild(layer2);
            }
            this.life--;
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
        cc.audioEngine.pauseMusic();
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
            this.actionDestroy('Yellow');
        }
        if(e===cc.KEY.j){
            this.green.change('up');
            this.actionDestroy('Green');
        }
        if(e===cc.KEY.k){
            this.blue.change('up');
            this.actionDestroy('Blue');
        }
        if(e===cc.KEY.l){
            this.violet.change('up');
            this.actionDestroy('Violet');
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
            if(x*10<3){
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
        if(this.statusGame!=0){
            this.sts.setTime(this.hr,this.min,this.sec,this.timeLabel);
        }
        this.scoreLabel.setString('Score : '+this.score, 'Arial', 20);
        this.nameLabel.setString(this.namePlayer,'Arial', 20);

        this.supportUpdate(this.noteRed,this.posRed,125);
        this.supportUpdate(this.noteOrange,this.posOrange,225);
        this.supportUpdate(this.noteYellow,this.posYellow,325);
        this.supportUpdate(this.noteGreen,this.posGreen,425);
        this.supportUpdate(this.noteBlue,this.posBlue,525);
        this.supportUpdate(this.noteViolet,this.posViolet,625);

    },

    supportUpdate: function(array1,array2,pos){
        for(var i=0 ; i<array1.length ; i++){
            if(array1[i].getPosition().y===500){
                array1[i].setPosition(new cc.Point(pos,this.subArray(array2)[i]));
            }
        }
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
        this.detail = [];
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
        this.detail.push(this.scoreLabel);
        this.detail.push(this.lifeLabel);
        this.detail.push(this.Nlabel);
        this.detail.push(this.nameLabel);
        this.detail.push(this.TLabel);
        this.detail.push(this.timeLabel);
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

    deleteScreen: function(){
        var Screen = [this.show,this.namePlayer,this.scoreLabel.getString(),this.timeLabel.getString()];
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
    },

    stopNow: function(array){
        for(var i=0 ; i<array.length ; i++){
                    array[i].unscheduleUpdate();
            }
    },

    addItem: function(){
        // var items = [new speedUp(),new speedDown(),new healUp()];
        // var x = Math.round(Math.random()*3);
        // var item = items[x];
        // item.setPos(-100);
        // item.scheduleUpdate();
        // this.add(item);
        var item = new speedUp();
        item.setPos(100);
        item.scheduleUpdate();
        this.addChild(item);
    }

});