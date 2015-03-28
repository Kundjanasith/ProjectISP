var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        this.state = 0;
        this.layer = new GameLayer();
        this.layer.init();
        this.addChild( this.layer );
        this.scheduleUpdate();
        
    },

    update: function(){
    	if(this.layer.deleteScreen()[0]&&this.state===0){
            cc.log('end');
            this.state++;
    		this.layer1 = new EndLayer();
            this.layer1.init(this.layer.deleteScreen()[1],this.layer.deleteScreen()[2],this.layer.deleteScreen()[3]);
            this.addChild( this.layer1 );
        }
    }


});
