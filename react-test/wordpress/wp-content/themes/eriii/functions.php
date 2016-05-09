<?php
// 文末文字を変更する
function custom_excerpt_more($more) {
    return ' ... ';
}
add_filter('excerpt_more', 'custom_excerpt_more');


add_theme_support('post-thumbnails');
add_image_size('thumb100',100,100,true);
add_image_size('thumb150',150,150,true);
