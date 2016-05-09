let OPTION = {
    target: '.js-selector',
    view: '.js-selector-view',
    isActive: 'is-active'
};

class CustomSelector {
    constructor(option){
        this.option = $.extend({}, OPTION, option);
        this.$target = $(this.option.target);
        this.init();
    }
    init(){
        this.$target.on('change', this.changeHandler.bind(this))
            .trigger('change');
    }
    changeHandler(e){
        let $target = $(e.currentTarget);
        let $view = $target.find(this.option.view);
        let $option = $target.find('option:selected');
        $view.html($option.text());
    }
}

export default CustomSelector;