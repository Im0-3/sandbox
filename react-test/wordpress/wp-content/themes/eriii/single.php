<?php get_header('single'); ?>
    <div class="l-container l-container-single">
        <?php if (have_posts()) :?>
        <?php while (have_posts()) : the_post(); ?>
        <main class="l-main l-main-single">
            <div class="l-article">
                <div class="l-article-header">
                    <div class="l-article-header-heading">
                        <div class="l-article-header-data">
                            <div class="l-article-header-cat">
                                <?php
                                $category = get_the_category();
                                ?>
                                <div class="article-cat"><?php echo $category[0]->cat_name; ?></div>
                            </div>
                            <div class="l-article-header-date">
                                <time class="article-date"><?php the_date(); ?></time>
                            </div>
                        </div>
                        <h1 class="article-heading"><?php the_title(); ?></h1>
                    </div>
                    <div class="l-article-thumbnail">
                        <?php
                        if(!has_post_thumbnail()) {
                            echo '<img src="'.get_template_directory_uri().'/images/noimage-large.png" alt="" />';
                        }else{
                            the_post_thumbnail();
                        }
                        ?>
                    </div>
                </div>
                <article class="l-article-body">
                    <?php the_content(); ?>
                </article>
                <div class="l-article-footer">
                    <div class="l-article-sns">
                        <div class="l-article-sns-item">
                            <a href="https://twitter.com/share?url=<?php echo get_permalink()?>&text=<?php the_title(); ?>｜<?php echo bloginfo('name'); ?>" class="button button-twitter" target="_blank">
                                <span class="button-icon">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/icon-twitter.svg" width="20" alt="">
                                </span>
                                <span class="button-text">Twitter</span>
                            </a>
                        </div>
                        <div class="l-article-sns-item">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink()?>" class="button button-facebook" target="_blank">
                            <span class="button-icon">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/icon-facebook.svg" width="20" alt="">
                            </span>
                                <span class="button-text">Facebook</span>
                            </a>
                        </div>
                        <div class="l-article-sns-item">
                            <a href="http://b.hatena.ne.jp/entry/<?php echo get_permalink()?>" class="button button-hatena" target="_blank">
                             <span class="button-icon">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/icon-hatena.svg" width="20" alt="">
                            </span>
                                <span class="button-text">Hatena</span>
                            </a>
                        </div>
                        <div class="l-article-sns-item">
                            <a href="http://line.me/R/msg/text/?<?php
                            $title = get_the_title();
                            $name =  '|'. get_bloginfo('name');
                            $url = get_permalink();
                            echo  rawurlencode($title . $name . ' ' . $url);
                            ?>
" class="button button-line">
                             <span class="button-icon">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/icon-line.svg" width="20" alt="">
                            </span>
                                <span class="button-text">LINE</span>
                            </a>
                        </div>
                    </div>
                    <aside class="l-aside l-article-recommend">
                        <div class="l-aside-header">
                            <div class="aside-heading">おすすめ記事</div>
                        </div>
                        <div class="l-aside-body l-padding-top-0">
                            <?php
                            $wpp = array (
                                'cat' => ''.$categoryid.'',
                                'limit' => '5',
                                'range' => 'all',
                                'order_by' => 'views',
                                'post_type' => 'post',
                                'title_length' => '120',
                                'stats_comments' => '0',
                                'stats_views' => '0',
                                'stats_date' => '1',
                                'stats_summary' => '1',
                                'stats_date_format' => 'Y年Md日',
                                'thumbnail_width' => '70',
                                'thumbnail_height' => '70',
                                'stats_category' => '1',
                                'wpp_start' => '<ul class="l-media-list">',
                                'wpp_end=' => '</ul></div>',
                                'post_html' => '<li class="l-media-list-item">
                                    <article class="media media-recommend">
                                    <a class="media-link" href="{url}">
                                        <div class="media-thumbnail">
                                            {thumb}
                                        </div>
                                        <div class="media-data">
                                            <div class="media-cat">{category}</div>
                                            <time class="media-date">{date}</time>
                                        </div>
                                        <h1 class="media-heading">{title}</h1>
                                        <p class="media-detail">{summary}</p>
                                        </a>
                                    </article>
                                </li>',
                            ); ?>
                            <?php wpp_get_mostpopular($wpp); ?>
                        </div>
                    </aside>
                    <div class="l-article-pager">
                        <div class="pager pager-single">
                            <?php if (get_previous_post()):?>
                            <div class="pager-item pager-item-prev">
                                <span class="pager-label">前の記事</span>
                                <?php previous_post_link('%link','%title',TRUE); ?>
                            </div>
                            <?php endif; ?>
                            <?php if (get_next_post()):?>
                            <div class="pager-item pager-item-next">
                                <span class="pager-label">次の記事</span>
                                <?php next_post_link('%link','%title',TRUE); ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php endwhile; ?>
    <?php endif; ?>
    <?php get_sidebar('single'); ?>
</div>
<?php get_footer('single'); ?>