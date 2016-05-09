<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" prefix="og: http://ogp.me/ns#"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" prefix="og: http://ogp.me/ns#"><!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <title><?php wp_title( '|', true, 'right' ); bloginfo('name'); ?></title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta property="og:locale" content="ja_JP">
    <meta property="fb:admins" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="">
    <meta property="og:type" content="blog">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/images/common/logo_ogp.png">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/common/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/images/common/apple-touch-icon-precomposed.png">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
    <script src="<?php echo get_template_directory_uri(); ?>/lib/modernizr.js"></script>
    <?php wp_head(); ?>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-47965378-1', 'auto');
        ga('send', 'pageview');
    </script>
</head>
<body class="l-body">
<header class="l-header">
    <a href="<?php echo home_url('/'); ?>" class="logo">
        <div class="l-header-bar">
            <h1 class="l-header-logo">
                <img src="<?php echo get_template_directory_uri(); ?>/images/logo.svg" alt="<?php bloginfo('name'); ?>">
            </h1>
        </div>
    </a>
</header>