var EndLayer = cc.LayerColor.extend({

    init: function(name,score,time) {

        this._super( new cc.Color( 0,0, 0, 255) );
        this.setPosition( new cc.Point( 0, 0 ) );
       
        this.OverLabel = cc.LabelTTF.create( 'GameOver', 'Arial', 100 );
        this.OverLabel.setPosition( new cc.Point( 500, 400 ) );
        this.addChild( this.OverLabel );

        this.nameLabel = cc.LabelTTF.create( 'Player Name :'+name , 'Arial', 50 );
        this.nameLabel.setPosition( new cc.Point( 500, 300 ) );
        this.addChild( this.nameLabel );

        this.scoreLabel = cc.LabelTTF.create( score , 'Arial', 50 );
        this.scoreLabel.setPosition( new cc.Point( 500, 225 ) );
        this.addChild( this.scoreLabel );

        this.timeLabel = cc.LabelTTF.create( 'Time : '+time , 'Arial', 50 );
        this.timeLabel.setPosition( new cc.Point( 500, 150 ) );
        this.addChild( this.timeLabel );

        var t = [] ;
        t = time.split(":");
        var duration = parseInt(t[2])+(parseInt(t[1])*60)+(parseInt(t[0])*3600);
        var s = [] ;
        s = score.split(":");
        var Score = s[1];
        var skill = ((Score/duration)*Math.pow(10,2)).toFixed(2);
        
        this.skillLabel = cc.LabelTTF.create( 'Your Skill: '+skill , 'Arial', 50 );
        this.skillLabel.setPosition( new cc.Point( 500, 75 ) );
        this.addChild( this.skillLabel );
     

        var scoreItem = new cc.MenuItemImage(
            res.HighScore0_png,
            res.HighScore1_png,
            function () {
             cc.log("h");
             var win = new ScoreLayer();
             win.init();
             this.addChild(win);
             this.removeChild(this.skillLabel);
             this.removeChild(this.timeLabel);
             this.removeChild(this.scoreLabel);
             this.removeChild(this.nameLabel);
             this.removeChild(this.OverLabel);
             this.removeChild(this.highScore);
         }, this);
        scoreItem.attr({
            x: 800,
            y: 30,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.highScore = new cc.Menu(scoreItem);
        this.highScore.x = 0;
        this.highScore.y = 0;
        this.addChild(this.highScore);

        // this.collectScore(name,score,time,skill);
        this.addKeyboardHandlers( true );
        return true;
    },

    onKeyDown: function( e ) {


    },

    onKeyUp: function( e ) {


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

    collectScore: function(name,score,time,skill){

       var ls = cc.sys.localStorage;

       var sec = new Date().getSeconds();
       var min = new Date().getMinutes();
       var hr = new Date().getHours();
       
       var key = (hr*3600)+(min*60)+sec;
       var value =  name+".Score."+score+".Time."+time+".Skill."+skill;

       ls.setItem(key,value);

    
        // return score;    
    }


});









