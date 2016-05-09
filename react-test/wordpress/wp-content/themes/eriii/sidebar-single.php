<div class="l-sub l-sub-single">
    <div class="l-sub-content l-sub-content-top">
        <div class="l-sub-content-inner">
            <aside class="l-aside l-aside-col1">
                <div class="l-aside-banner">
                    <div class="banner">
                        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                        <!-- スマホ用 -->
                        <ins class="adsbygoogle"
                             style="display:inline-block;width:300px;height:250px"
                             data-ad-client="ca-pub-4587165896072981"
                             data-ad-slot="7118376153"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    <div class="l-sub-content l-sub-content-middle">
        <div class="l-sub-content-inner">
            <aside class="l-aside l-aside-col1">
                <div class="l-aside-header">
                    <div class="aside-heading">最新記事一覧</div>
                </div>
                <div class="l-aside-body l-padding-top-0">
                    <ul class="l-media-list">
                        <?php $paged = get_query_var('paged'); ?>
                        <?php query_posts("posts_per_page=3&paged=$paged"); ?>
                        <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
                            <li class="l-media-list-item">
                                <article class="media media-latest">
                                    <a href="<?php the_permalink(); ?>" class="media-link">
                                        <h1 class="media-heading"><?php the_title(); ?></h1>
                                    </a>
                                </article>
                            </li>
                        <?php endwhile; ?>
                        <?php else: ?>
                        <?php endif; ?>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
    <div class="l-sub-content l-sub-content-bottom">
        <div class="l-sub-content-inner">
            <aside class="l-aside l-aside-col2">
                <div class="l-aside-header">
                    <div class="aside-heading aside-heading-white
                            ">カテゴリー</div>
                </div>
                <div class="l-aside-body l-aside-body-white">
                    <ul class="l-cat-list l-cat-list-white">
                        <?php
                        $args = array(
                            'hide_empty' => 0,
                            'hierarchical' => 0,
                            'title_li' => ''
                        );
                        wp_list_categories($args); ?>
                    </ul>
                </div>
            </aside>
            <aside class="l-aside l-aside-col2">
                <div class="l-aside-header">
                    <div class="aside-heading aside-heading-white">私について</div>
                </div>
                <div class="l-aside-body l-aside-body-white">
                    <div class="profile profile-white">
                        <div class="profile-image">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/eriii.jpg" alt="">
                        </div>
                        <div class="profile-text">
                            <p>元ワセジョ
                                元Gow!Magazinライター</p>
                            <p>
                                お酒と本がすきです。
                                「せんべろ」という言葉に抱かれたい。</p>
                            <div class="profile-button">
                                <a href="https://twitter.com/intent/follow?screen_name=__erI_" class="button button-follow button-white" target="_blank">フォローする</a>
                            </div>
                        </div>

                    </div>

                </div>
            </aside>
        </div>
    </div>
</div>