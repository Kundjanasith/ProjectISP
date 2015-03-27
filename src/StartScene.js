var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        this.layer = new GameLayer();
        this.layer.init();
        this.addChild( this.layer );
        this.scheduleUpdate();
    },

    update: function(){
    	if(this.layer.deleteScreen()){
    		this.layer1 = new EndLayer();
            this.layer1.init();
            this.addChild( this.layer1 );
    	}
    }

    
});
