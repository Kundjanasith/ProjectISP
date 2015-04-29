var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        this.state = 0;
        this.layer = new StartLayer();
        this.layer.init();
        this.addChild( this.layer );     
    }

});
