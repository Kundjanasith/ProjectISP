var GameLayer = cc.LayerColor.extend({

    init: function(name,level) {
        this._super( new cc.Color( 0, 0, 0, 0 ) );
        this.setPosition(new cc.Point(0, 0)  ); 
        this.back = cc.Sprite.create(res.Back_png);
        this.back.setPosition(new cc.Point(375,0));
        this.addChild(this.back);
        this.showPress();
        this.lightRed = new LightRed();
        this.addChild(this.lightRed);
        this.lightOrange = new LightOrange();
        this.addChild(this.lightOrange);
        this.lightYellow = new LightYellow();
        this.addChild(this.lightYellow);
        this.lightGreen = new LightGreen();
        this.addChild(this.lightGreen);
        this.lightBlue = new LightBlue();
        this.addChild(this.lightBlue);
        this.lightViolet = new LightViolet();
        this.addChild(this.lightViolet);
        this.bar = cc.Sprite.create(res.Ba_png);
        this.bar.setPosition(new cc.Point(375,430));
        this.namePlayer = name.split(":")[1] ;
        this.level = level.split(":")[1];
        this.showDetail();
        this.show=true;
        this.life = 4 ;
        this.statusGame = 0;
        this.colors = [];
        this.noteRed = this.createNote('Red');
        this.noteOrange = this.createNote('Orange');
        this.noteYellow = this.createNote('Yellow');
        this.noteGreen = this.createNote('Green');
        this.noteBlue = this.createNote('Blue');
        this.noteViolet = this.createNote('Violet');
        this.Item = this.createItem();
        this.addChild(this.bar);

        this.showPress();
        this.ItemName = '';
        this.addKeyboardHandlers( true );

        

        return true;
    },

    showPress: function(){
        this.press = [];
        this.red = new Red();
        this.addChild(this.red);
        this.press.push(this.red);
        this.orange = new Orange();
        this.addChild(this.orange);
        this.press.push(this.orange);
        this.yellow = new Yellow();
        this.addChild(this.yellow);
        this.press.push(this.yellow);
        this.green = new Green();
        this.addChild(this.green);
        this.press.push(this.green);
        this.blue = new Blue();
        this.addChild(this.blue);
        this.press.push(this.blue);
        this.violet = new Violet();
        this.addChild(this.violet);
        this.press.push(this.violet);
    },

    checkItem: function(color){
       var check = true;
       var posX = 0;
       if(color=='Red')posX=125;
       if(color=='Orange')posX=225;
       if(color=='Yellow')posX=325;
       if(color=='Green')posX=425;
       if(color=='Blue')posX=525;
       if(color=='Violet')posX=625;
       for(var i=0 ; i<this.Item.length ; i++){
            if(this.Item[i].getPosition().y>=325&&this.Item[i].getPosition().y<=450&&posX==this.Item[i].getPosition().x){
            var iname = this.Item[i].getName();
            this.itemLabel.setString('Item:  '+iname);
            check = false;
              if(iname=='SpeedUp') ;
              if(iname=='SpeedDown') ;
              if(iname=='HealUp'){
                if(this.life<this.Heart.length-1){
                    this.life++;
                    if(this.show)this.addChild(this.Heart[this.life]); 
                }
              } ;
              if(iname=='KeyXei') this.score+=2;
              if(iname=='KeyYei') this.score+=5;
              if(iname=='KeyZei') this.score+=10;
            }
        }
        return check;
    },

    onKeyDown: function( e ) {
        for(var i=0 ; i<this.press.length ; i++) {
             this.press[i].pressDown(e);
         }
        if(e===cc.KEY.s){
            this.pressCheck('Red');
            this.lightRed.isOn = true;
        }
        if(e===cc.KEY.d){
            this.pressCheck('Orange');
            this.lightOrange.isOn = true;
        }
        if(e===cc.KEY.f){
            this.pressCheck('Yellow');
            this.lightYellow.isOn = true;
        }
        if(e===cc.KEY.j){
            this.pressCheck('Green');
            this.lightGreen.isOn = true;
        }
        if(e===cc.KEY.k){
            this.pressCheck('Blue');
            this.lightBlue.isOn = true;
        }
        if(e===cc.KEY.l){
            this.pressCheck('Violet');
            this.lightViolet.isOn = true;
        }
        if(e===cc.KEY.enter){
            this.statusGame++;
            if(this.statusGame===1){
                this.sec = new Date().getSeconds();
                this.min = new Date().getMinutes();
                this.hr = new Date().getHours();
            }
            this.sts.change('play');
            this.scheduleUpdate();
             for(var i=0 ; i<this.Item.length ; i++){
             var item = this.Item[i];
               item.scheduleUpdate();
            }
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
           if(color=='Red')this.pressCheckHelper(this.noteRed,'Red');
           if(color=='Orange')this.pressCheckHelper(this.noteOrange,'Orange');
           if(color=='Yellow')this.pressCheckHelper(this.noteYellow,'Yellow');
           if(color=='Green')this.pressCheckHelper(this.noteGreen,'Green');
           if(color=='Blue')this.pressCheckHelper(this.noteBlue,'Blue');
           if(color=='Violet')this.pressCheckHelper(this.noteViolet,'Violet');
       }
    },

    pressCheckHelper: function(Note,color){
        var check = true;
        var posx = 0;
        if(color=='Red') posx=125;
        if(color=='Orange') posx=225;
        if(color=='Yellow') posx=325;
        if(color=='Green') posx=425;
        if(color=='Blue') posx=525;
        if(color=='Violet') posx=625;
        this.removeChild(this.miss);
        this.removeChild(this.perfect);
        for(var i=0 ; i<Note.length ; i++){
            if(Note[i].getPosition().y>=325&&Note[i].getPosition().y<=450&&this.show){
                this.score++;
                this.removeChild(this.miss);
                this.removeChild(this.perfect);
                this.perfect = cc.Sprite.create(res.Perfect_png);
                this.perfect.setPosition(new cc.Point(posx,380));
                this.addChild(this.perfect);
                check = false;
            }
        }
        var checkI = this.checkItem(color);
        var c = check&&checkI;
            if((this.show&&c)){
            this.removeChild(this.miss);
            this.removeChild(this.perfect);
            this.miss = cc.Sprite.create(res.Miss_png);
            this.miss.setPosition(new cc.Point(posx,380));
            this.addChild(this.miss);
                if(this.life>=0){
                    this.Heart[this.life].destroy();
                    this.life--;
                }
                else{
                   this.show=false;
                   this.unscheduleUpdate();
                   cc.audioEngine.setMusicVolume(0);
                   var layer2 = new EndLayer();
                   layer2.init(this.namePlayer,this.scoreLabel.getString(),this.timeLabel.getString());
                   this.stopNow(this.noteRed);
                   this.stopNow(this.noteOrange);
                   this.stopNow(this.noteYellow);
                   this.stopNow(this.noteGreen);
                   this.stopNow(this.noteBlue);
                   this.stopNow(this.noteViolet);
                   for(var i=0 ; i<this.Heart.length ; i++) this.removeChild(this.Heart[i]);
                   this.addChild(layer2);
                }   
            }
    },


    onKeyUp: function( e ) {
        cc.audioEngine.pauseMusic();
        for(var i=0 ; i<this.press.length ; i++) this.press[i].pressUp(e);
        this.removeChild(this.perfect);
        this.removeChild(this.miss);
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
        for ( var i = 0; i < 1000 ; i++ ){
            var x = (Math.random()*5)+(Math.random()*5);
            if(x<2){
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

        for(var i=0 ; i<this.Item.length ; i++){
             var item = this.Item[i];
              if(item.getPosition().y>=450)item.setPosition(new cc.Point(item.getPosition().x,item.getStartPos()));
        }

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
        for ( var i = 0; i < 5; i++ ) {
            var H = new Heart( );
            H.change(1);
            H.setPosition( new cc.Point(850, 275 - ( i * 40 )) );
            Heart0.push( H );
        }
        return Heart0;
    },

    showDetail: function(){
        this.detail = [];
        this.sts = new Status();
        this.addChild(this.sts);
        this.score = 0;
        this.itemLabel = cc.LabelTTF.create( 'Item :  ', 'Arial', 20 );
        this.itemLabel.setPosition( new cc.Point(750, 355) );
        this.addChild( this.itemLabel );
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
        this.nameLabel = cc.LabelTTF.create( this.namePlayer , 'Arial', 20 );
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

    subArray: function(array){
        var subArr = [];
        for(var i=0 ; i<array.length ; i++){
              if(array[i]!=0)subArr.push(array[i]);
        }
        return subArr;
    },

    stopNow: function(array){
        for(var i=0 ; i<array.length ; i++){
            this.removeChild(array[i]);
        }
    },

    createItem: function(){
        var it = [];
        for(var i=0 ; i<100 ; i++){
            var items = [new speedUp(),new speedDown(),new healUp(),new keyXei(),new keyYei(),new keyZei()];            // var items = [new healUp()];
            var x = Math.round(Math.random()*(items.length-1));
            it.push(items[x]);
            it[i].setStartPos(-((i+1)*10000*this.level));
            this.addChild(it[i]);
        }
        return it;
    }

});