var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 195, 195, 195, 0) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.Status = 0;

        this.noteRed = new NOTERED();
        this.noteRed.setPosition(new cc.Point(125,5));
        this.addChild(this.noteRed);
        
        this.noteOrange = new NOTEORANGE();
        this.noteOrange.setPosition(new cc.Point(225,5));
        this.addChild(this.noteOrange);

        this.noteYellow = new NOTEYELLOW();
        this.noteYellow.setPosition(new cc.Point(325,5));
        this.addChild(this.noteYellow);

        this.noteGreen = new NOTEGREEN();
        this.noteGreen.setPosition(new cc.Point(425,5));
        this.addChild(this.noteGreen);
        
        this.noteBlue= new NOTEBLUE();
        this.noteBlue.setPosition(new cc.Point(525,5));
        this.addChild(this.noteBlue);

        this.noteViolet= new NOTEVIOLET();
        this.noteViolet.setPosition(new cc.Point(625,5));
        this.addChild(this.noteViolet);

        this.red = new RED();
        this.red.setPosition(new cc.Point(125,400));
        this.addChild(this.red);

        this.orange = new ORANGE();
        this.orange.setPosition(new cc.Point(225,400));
        this.addChild(this.orange);

        this.yellow = new YELLOW();
        this.yellow.setPosition(new cc.Point(325,400));
        this.addChild(this.yellow);

        this.green = new GREEN();
        this.green.setPosition(new cc.Point(425,400));
        this.addChild(this.green);

        this.blue = new BLUE();
        this.blue.setPosition(new cc.Point(525,400));
        this.addChild(this.blue);

        this.violet = new VIOLET();
        this.violet.setPosition(new cc.Point(625,400));
        this.addChild(this.violet);



        this.sts = new STATUS();
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
            this.Status++;
                if(this.Status%2===1){
                    this.sts.change('play');
                    this.noteRed.scheduleUpdate();
                }
                if(this.Status%2===0){
                    this.sts.change('stop');
                    this.noteRed.unscheduleUpdate();
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
    }

});


