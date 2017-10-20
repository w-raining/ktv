<?php

define('CSS_PATH', '/date/public/css/');
define('JS_PATH', '/date/public/js/');
define('IMG_PATH', '/date/public/img/');
define('VIEW_PATH', 'app/views/');
define('DEBUG', true);
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/function.php';
include 'core/core.php';

spl_autoload_register('\core\core::autoload');
\core\core::run();








