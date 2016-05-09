let OPTION = {
    target: '.js-acordion',
    panel: '.js-acordion-pane',
    isActive: 'is-active'
}

class CustomAcordion {
    constructor(option){
        this.option = $.extend({}, OPTION, option);
        this.$target = $(this.option.target);
        this.init();
    }
    init(){
        this.$target.on('click', this.clickHandler.bind(this));
    }
    clickHandler(e){
        console.log(e);
        let $target = $(e.currentTarget);
        let $panel = $target.next();
        $target.toggleClass(this.option.isActive);
        $panel.toggleClass(this.option.isActive)
            .slideToggle();
    }
}

export default CustomAcordion;