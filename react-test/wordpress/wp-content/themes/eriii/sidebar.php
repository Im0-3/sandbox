    <div class="l-sub">
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
                <aside class="l-aside">
                    <div class="l-aside-header">
                        <div class="aside-heading
                            ">カテゴリー</div>
                    </div>
                    <div class="l-aside-body">
                        <ul class="l-cat-list">
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
                <aside class="l-aside">
                    <div class="l-aside-header">
                        <div class="aside-heading">私について</div>
                    </div>
                    <div class="l-aside-body">
                        <div class="profile">
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
                                    <a href="https://twitter.com/intent/follow?screen_name=__erI_" class="button button-follow" target="_blank">フォローする</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>