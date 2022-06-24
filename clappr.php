<?php
/*
Plugin Name: Clappr Video Player
Version: 1.3.0.4.1
Plugin URI: https://wordpress.org/plugins/embed-clappr/
Author: CONDACORE / Miguel Pons / Hugo Carabaña
Author URI: https://condacore.com/ / https://escplus.es
Description: Clappr is a popular open-source HTML5 player. You can check out the Clappr github pages for more information, including available configuration options and plug-ins.
Text Domain: embed-clappr
Domain Path: /languages
 */

if (!defined('ABSPATH')) {
    exit;
}
if (!class_exists('CLAPPR_VIDEO_PLAYER')) {

    class CLAPPR_VIDEO_PLAYER {

        var $plugin_version = '1.3.0.4';
        var $clappr_version = '0.4.5.2';
        var $rtmp_version = '0.0.2';

        function __construct() {
            define('CLAPPR_PLUGIN_VERSION', $this->plugin_version);
            define('CLAPPR_PLAYER_VERSION', $this->clappr_version);
            define('CLAPPR_RTMP_VERSION', $this->rtmp_version);
            $this->plugin_includes();
        }

        function plugin_includes() {
            if (is_admin()) {
                add_filter('plugin_action_links', array($this, 'plugin_action_links'), 10, 2);
            }
            add_action('plugins_loaded', array($this, 'plugins_loaded_handler'));
            add_action('wp_enqueue_scripts', 'clappr_video_player_enqueue_scripts');
            add_action('admin_menu', array($this, 'add_options_menu'));
            add_shortcode('clappr', 'clappr_video_player_embed_handler');
            //allows shortcode execution in the widget, excerpt and content
            add_filter('widget_text', 'do_shortcode');
            add_filter('the_excerpt', 'do_shortcode', 11);
            add_filter('the_content', 'do_shortcode', 11);
        }

        function plugin_url() {
            if ($this->plugin_url)
                return $this->plugin_url;
            return $this->plugin_url = plugins_url(basename(plugin_dir_path(__FILE__)), basename(__FILE__));
        }

        function plugin_action_links($links, $file) {
            if ($file == plugin_basename(dirname(__FILE__) . '/clappr.php')) {
                $links[] = '<a href="options-general.php?page=clappr-shortcodes">'.__('Shortcodes', 'embed-clappr').'</a>';
            }
            return $links;
        }

        function plugins_loaded_handler()
        {
            load_plugin_textdomain('clappr', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
        }

        function add_options_menu() {
            if (is_admin()) {
                add_options_page(__('Clappr Shortcodes', 'embed-clappr'), __('Clappr Shortcodes', 'embed-clappr'), 'manage_options', 'clappr-shortcodes', array($this, 'options_page'));
            }
        }

        function options_page() {
            ?>
            <div class="wrap">
			   <h2>Clappr for WordPress<span style="font-size: 10px; margin-left: 7px;">Version <?php echo $this->plugin_version; ?></span></h2>
			   <div id="poststuff">
				  <div id="post-body" class="metabox-holder">
					 <!-- main content -->
					 <div id="post-body-content">
						<div class="meta-box-sortables ui-sortable">
						   <div class="postbox">
							  <h3><span>Usage</span></h3>
							  <div class="inside">
								 <p><code>[clappr media="https://domain.com/video.mp4"]</code></p>
								 <p>Supported Formats / Protocols: <strong>.m3u8</strong>, <strong>.mp4</strong>, <strong>.mpd</strong>, <strong>.mp3</strong>, <strong>.webm</strong>, <strong>rtmp://</strong></p>
							  </div>
							  <!-- .inside -->
						   </div>
						   <!-- .postbox -->
						   <div class="postbox">
							  <h3><span>Add a Poster</span></h3>
							  <div class="inside">
								 <p><code>[clappr media="https://domain.com/video.mp4" poster="https://domain.com/image.jpg"]</code></p>
								 <p>Supported Formats: <strong>.jpg</strong>, <strong>.png</strong>, <strong>.gif</strong></p>
							  </div>
							  <!-- .inside -->
						   </div>
						   <!-- .postbox -->
						   <div class="postbox">
							  <h3><span>Width of the Player</span></h3>
							  <div class="inside">
								 <p><code>[clappr media="https://domain.com/video.mp4" width="640"]</code></p>
								 <p>In most cases you don't need to set the width. The player automatically will set the width and height.</p>
							  </div>
							  <!-- .inside -->
						   </div>
						   <!-- .postbox -->
						   <div class="postbox">
							  <h3><span>More Parameters</span></h3>
							  <div class="inside">
								 <p><code>preload="metadata"</code> you can use <strong>auto</strong>, <strong>metadata</strong>, <strong>none</strong>.</p>
								 <p><code>autoplay="yes"</code> if video should automatically play after page load.</p>
								 <p><code>watermark="https://domain.com/watermark.png"</code> to display a watermark on the video.</p>
								 <p><code>watermarkLink="https://domain.com"</code> to define an URL to open when the watermark is clicked.</p>
								 <p><code>mute="yes"</code> if you want to start player with no sound.</p>
								 <p><code>controlbarvisible="yes"</code> to disable media control auto hide.</p>
								 <p><code>hidevolumebar="yes"</code> to hide volume bars.</p>
								 <p><code>seekbarcolor="#ff0400"</code> to set the color (HEX) of <strong>ESCplus España</strong> on the seekbar.</p>
								 <p><code>seekbarcolor="#03eb2d"</code> to set the color (HEX) of <strong>ESCplus International</strong> on the seekbar.</p>
							  </div>
							  <!-- .inside -->
						   </div>
						   <!-- .postbox -->
						   <div class="postbox">
							  <h3><span>Example</span></h3>
							  <div class="inside">
								 <p><code>[clappr media="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://i.imgur.com/GRJ3u1j.jpg" watermark="https://i.imgur.com/If2p9w8.png" mute="yes"]</code></p>
							  </div>
							  <!-- .inside -->
						   </div>
						   <!-- .postbox -->
						   Copyright &copy; 2021, <a href="https://escplus.es" target="_blank">ESCplus</a> &amp; <a href="https://condacore.com" target="_blank">CONDACORE</a>.
						</div>
					 </div>
				  </div>
			   </div>
			</div>
            <?php
        }
    }
    $GLOBALS['clappr_for_wordpress'] = new CLAPPR_VIDEO_PLAYER();
}

function clappr_video_player_enqueue_scripts() {
    if (!is_admin()) {
        $plugin_url = plugins_url('', __FILE__);
        wp_register_style('clappr-style', $plugin_url . '/clappr.css', array(), CLAPPR_PLUGIN_VERSION, false);
        wp_enqueue_style('clappr-style');
        wp_register_script('clappr-main', $plugin_url . '/files/player_2021.min.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-main');
		wp_register_script('clappr-chromecast-main', $plugin_url . '/files/player_2021_chromecast.min.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-chromecast-main');
		wp_register_script('clappr-quality-selector-main', $plugin_url . '/files/player_2021_quality_selector.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-quality-selector-main');
		wp_register_script('clappr-dash-main', $plugin_url . '/files/player_2021_dash.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-dash-main');
		wp_register_script('clappr-pip-main', $plugin_url . '/files/player_2021_pip_2.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-pip-main');
		wp_register_script('clappr-markers-main', $plugin_url . '/files/player_2021_markers.js.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-markers-main');
		wp_register_script('clappr-thumbnails-main', $plugin_url . '/files/player_2021_thumbnails_linebar.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-thumbnails-main');
		wp_register_script('clappr-p2p-main', $plugin_url . '/files/player_2021_p2p_media_loader_core.min.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-p2p-main');
		wp_register_script('clappr-p2p-hls-main', $plugin_url . '/files/player_2021_p2p_media_loader_hlsjs.min.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-p2p-hls-main');
		wp_register_script('clappr-audio-selector-main', $plugin_url . '/files/player_2021_audioselector.js', array(), CLAPPR_PLAYER_VERSION, false);
        wp_enqueue_script('clappr-audio-selector-main');
        wp_register_script('clappr-rtmp', $plugin_url . '/files/rtmp.min.js', array(), CLAPPR_RTMP_VERSION, false);
        wp_enqueue_script('clappr-rtmp');
    }
}

function clappr_video_player_embed_handler($atts) {
    extract(shortcode_atts(array(
        'media' => '',
        'url' => '',
        'width' => '',
        'chromeless' => '',
        'preload' => '',
        'autoplay' => '',
        'loop' => '',
        'mute' => '',
        'poster' => '',
        'class' => '',
        'watermark' => '',
		'watermarkLink' => '',
		'mediacontrol' => '',
		'controlbarvisible' => '',
		'hidevolumebar' => '',
		'seekbarcolor' => '',
		'buttoncolor' => '',
    ), $atts));
    if(empty($media)){
        return __('You need to specify the media tag to use Clappr!', 'embed-clappr');
    }

    // use "url" or "media" parameter
    if ($media) {
      $src = $media;
    } elseif ($url) {
      $src = $url;
    }

    //chromeless
    if($chromeless) {
        $chromeless = "\nchromeless: true,";
    }
	//muted
    if($mute){
        $mute = "\nmute: true,";
    }
	//hideMediaControl
    if($controlbarvisible) {
        $controlbarvisible = "\nhideMediaControl: false,";
    }
	//hideVolumeBar
    if($hidevolumebar) {
        $hidevolumebar = "\nhideVolumeBar: true,";
    }
    //preload
    if($preload == "metadata") {
        $preload = "\npreload: 'metadata',";
    }
    else if($preload == "none") {
        $preload = "\npreload: 'none'";
    }
     else if($preload == "auto") {
        $preload = "\npreload: 'auto',";
    }
    //autoplay
    if($autoplay){
        $autoplay = "\nautoPlay: true,";
    }
	//colors
    if($buttoncolor || $seekbarcolor){
		$mediacontrol = "\nmediacontrol: {";
		if ($buttoncolor){
			$mediacontrol .= "\nbuttons: '$buttoncolor',";
		} if ($seekbarcolor) {
			$mediacontrol .= "\nseekbar: '$seekbarcolor'";
		}
		$mediacontrol .= "\n},";
    }
    //poster
    if($poster) {
        $poster = "\nposter: '$poster',";
    }
    if($watermark) {
        $watermark = "\nwatermark: '$watermark',";
    }
    if($watermarkLink) {
        $watermarkLink = "\nwatermarkLink: '$watermarkLink',";
    }
    $player = "clappr-" . uniqid();
    //custom style
    $style = '';
    if($width){
        $style = "
        <style>
        #$player {
            max-width:{$width}px;
        }
        </style>";

    }
	$plugin_url = plugins_url('', __FILE__);
    $output = "
	\n
<!-- Start Clappr Plugin for WordPress -->
<div class=\"player2021\">
<div id=\"$player\" style=\"position: absolute;width: 100%;height: 100%;top: 0;left: 0;\"></div>
</div>

<script>
var player = new Clappr.Player({
source: '$src',{$poster}{$watermark}{$watermarkLink}{$preload}{$chromeless}{$autoplay}{$controlbarvisible}{$hidevolumebar}{$mute}{$mediacontrol}
plugins: [ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, LevelSelector],

<!-- Configuración Chromecast -->
chromecast: {
    appId: '038E2142',
    media: {
        title: ' ',
        subtitle: ' '
    }
},

parentId: '#$player',";
$output .= "\nwidth: '100%',
height: '100%'
});
</script>
$style
<!-- End Clappr Plugin for WordPress -->";

    return $output;
}

/* Clappr block for Gutenberg */
function gutenberg_clappr_block() {
   wp_enqueue_script(
      'gutenberg-clappr-block-active-editor',
      plugins_url( '/block-clappr/block-clappr.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );

   wp_enqueue_style(
      'gutenberg-clappr-block-active-editor',
      plugins_url( '/block-clappr/block-clappr.css', __FILE__ ),
      array()
   );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_clappr_block' );

// Load assets for the frontend
function gutenberg_clappr_block_frontend() {

   wp_enqueue_style(
      'gutenberg-clappr-block-editor',
      plugins_url( '/block-clappr/block-clappr.css', __FILE__ ),
      array()
   );
}
add_action( 'wp_enqueue_scripts', 'gutenberg_clappr_block_frontend' );
