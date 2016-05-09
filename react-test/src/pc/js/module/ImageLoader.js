/**
 * イメージのプリロードを行う
 * ページ内のimgのsrc全てをチェックする
 * pathで追加のイメージを指定できる
 * @param target {string}
 * @param path {Array<string>}
 * @param callback {function}
 */
class ImageLoader {
    constructor(path, callback){
        this.$img = $('img[src]');
        this.imgSrc = path ? path : [];
        this.callback = callback;
        this.totalLength = 0;
        this.imgLength = 0;
        this.init();
    }
    init(){
        //イメージのsrcを取得
        this.imgLength = this.$img.length;
        for(let i = 0; i < this.imgLength; i++){
            this.imgSrc.push(this.$img[i].getAttribute('src'));
        }
        this.imgLength = this.imgSrc.length;
        this.totalLength = this.imgLength;
        this.load(this.imgSrc);
    }
    //イメージのロード
    load(images){
        let $images = $(images);
        for(let i = 0; i < this.imgLength; i++){
            $images.each((index, target) => {
                let src = target;
            $('<img />').attr('src', src)
                .load(() => {
                $images = $images.filter((index, target) => {
                    return target !== src;
        });
            this.setProgress(this.totalLength, this.totalLength - $images.length);
        });
        });
        }
    }
    //読み込み状況をチェックして、それに応じてコールバックを実行する
    setProgress(total, loaded){
        this.progress = loaded / total;
    }
    getProgress(){
        return this.progress;
    }
}

export default ImageLoader;