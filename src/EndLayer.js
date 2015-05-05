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
             var win = new ScoreLayer();
             win.init();
             this.addChild(win);
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

        var againItem = new cc.MenuItemImage(
            res.Again0_png,
            res.Again1_png,
            function () {
             location.reload(true);
         }, this);
        againItem.attr({
            x: 200,
            y: 30,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.playAgain = new cc.Menu(againItem);
        this.playAgain.x = 0;
        this.playAgain.y = 0;
        this.addChild(this.playAgain);

        var adminItem = new cc.MenuItemImage(
            res.Admin0_png,
            res.Admin1_png,
            function () {
             var ad = prompt('Want to clear hight score');
             if(ad=='0849207611'){
                for(var i=0 ; i<(24*3600) ; i++)
                    cc.sys.localStorage.removeItem(i);
                alert('Hight score is clear !');
             }
             else alert('Incorrect password !');
         }, this);
        adminItem.attr({
            x: 500,
            y: 30,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.Admin = new cc.Menu(adminItem);
        this.Admin.x = 0;
        this.Admin.y = 0;
        this.addChild(this.Admin);



        this.collectScore(name,score,time,skill);
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
    }

});









