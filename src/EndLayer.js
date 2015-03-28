var EndLayer = cc.LayerColor.extend({

    init: function(name,score,time) {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.addKeyboardHandlers( true );

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
        var duration = t[0]+(t[1]*60)+(t[2]*3600);
        cc.log("D"+duration);
        var s = [] ;
        s = score.split(":");
        var Score = s[1];
        cc.log("S"+Score);
        var skill = ((Score[1]/duration)*Math.pow(10,9)).toFixed(2);
        
        this.skillLabel = cc.LabelTTF.create( 'Your Skill: '+skill , 'Arial', 50 );
        this.skillLabel.setPosition( new cc.Point( 500, 75 ) );
        this.addChild( this.skillLabel );

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


});


