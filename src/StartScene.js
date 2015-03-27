var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        this.game = true ;
        this.Name = ' '; 
        this.layer = new StartLayer();
        this.layer.init();

        this.layer1 = new GameLayer();
        this.layer1.init(this.Name);

        this.layer2 = new EndLayer();
        this.layer2.init(this.layer1.deleteScreen()[1],this.layer1.deleteScreen()[2],this.layer1.deleteScreen()[3]);
        
        this.addChild( this.layer );
        this.scheduleUpdate();
        
    },

    // update: function(){
    // 	if(this.layer.deleteScreen()[0]){
    // 		this.layer1 = new EndLayer();
    //         this.layer1.init(this.layer.deleteScreen()[1],this.layer.deleteScreen()[2],this.layer.deleteScreen()[3]);
    //         this.addChild( this.layer1 );
    // 	}
    // }

    update: function(){
        if(this.layer.showGame&&this.game){
            this.Name = prompt('Player name : ');
            this.layer1.init(this.Name);
            this.layer.menu.removeFromParent();
            this.game = false;
            this.addChild( this.layer1 );
        }
        // if(this.layer1.deleteScreen()[0]){
        //     this.addChild( this.layer2 );
        // }
    }


});
