<?php get_header(); ?>
<div class="l-container">
    <div class="l-cat-header">
        <p class="cat-heading"><?php single_cat_title(); ?></p>
    </div>
    <?php if (have_posts()) :?>
    <main class="l-main">
        <ul class="l-media-list">
            <?php
            $media_count = 0;
            while (have_posts()) : the_post();
            ?>
            <li class="l-media-list-item">
                <?php if($media_count == 0){ ?>
                <article class="media media-top">
                <? }else{ ?>
                <article class="media media">
                <? } ?>
                    <a class="media-link" href="<?php the_permalink(); ?>">
                        <div class="media-thumbnail">
                            <?php
                            if(!has_post_thumbnail()) {
                                echo '<img src="'.get_template_directory_uri().'/images/noimage-large.png" alt="" />';
                            }
                            if($media_count == 0){
                                the_post_thumbnail();
                            }else{
                                the_post_thumbnail();
                            }
                            $media_count ++;
                            ?>
                        </div>
                        <div class="media-data">
                            <?php
                            $category = get_the_category();
                            ?>
                            <div class="media-cat"><?php echo $category[0]->cat_name; ?></div>
                            <time class="media-date"><?php the_date(); ?></time>
                        </div>
                        <h1 class="media-heading"><?php the_title(); ?></h1>
                        <p class="media-detail"><?php the_excerpt(); ?></p>
                    </a>
                </article>
            </li>

            <?php
            endwhile;
            ?>
        </ul>
        <?php if ( $wp_query -> max_num_pages > 1 ) : ?>
        <div class="pager l-margin-top-32">
            <div class="pager-item pager-item-prev">
                <?php next_posts_link('&lt; 前のページへ'); ?>
            </div>
            <div class="pager-item pager-item-next">
                <?php previous_posts_link('次のページへ &gt;'); ?>
            </div>
        </div>
        <?php endif; ?>
    <?php endif; ?>
    </main>
    <?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>