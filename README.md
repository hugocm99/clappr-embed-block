# Clappr Video Player Embed and Block for Wordpress

Contributors: condacore, Hugo Carabaña <br>
Tags: embed, video, player, responsive, rtmp, hls, live <br>
Requires at least: 3.0.1 <br>
Tested up to: 6.0 <br>
Stable tag: 2.0.1 <br>
License: GPLv3 <br>
License URI: http://www.gnu.org/licenses/gpl-3.0.html

The most functional und most beautiful Video Player for WordPress. Fully-Responsive, Retina-Ready and flexible.

== Description ==

[Clappr](https://github.com/clappr/clappr) is an extensible plugin for creating video players that can be used as backgrounds or simple video containers. It is supported by many browsers and basically all mobile devices, even in some video game consoles. It is the most beautiful looking player you can find!

**Features of this Plugin**

* Supports HLS and RTMP Livestreams
* Also supports .mp4, .mp3, .webm  and.ogv
* Fully-Responsive, Retina-Ready and flexible
* Beautiful and modern Design
* Customizable Colors
* Optimized page load performance
* Block for post/page without need to create shortcode

= The Shortcode =

In order to embed a video create a new post/page and use the Clappr block in Wordpress block editor:

This block will create a block with content like this, that will show the player on your page or post:
`[clappr media="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://i.imgur.com/GRJ3u1j.jpg" watermark="https://i.imgur.com/If2p9w8.png" mute="yes"]`

= A lot of Options =

In the Admin Area under "Settings" -> "Clappr Shortcodes" you can find a lot of Shortcodes to customize the player.

<code>preload="metadata"</code> you can use auto, metadata, none.
<code>autoplay="yes"</code> if video should automatically play after page load.
<code>watermark="https://domain.com/watermark.png"</code> to display a watermark on the video.
<code>watermarkLink="https://domain.com"</code> to define an URL to open when the watermark is clicked.
<code>mute="yes"</code> if you want to start player with no sound.
<code>chromeless="yes"</code> if you want the player to act in chromeless mode.
<code>controlbarvisible="yes"</code> to disable media control auto hide.
<code>hidevolumebar="yes"</code> to hide volume bars.
<code>buttoncolor="#66B2FF"</code> to set the color (HEX) of the control buttons.
<code>seekbarcolor="#E113D3"</code> to set the color (HEX) of the seekbar.


== Installation ==

1. Upload `embed-clappr` folder to your `/wp-content/plugins/` directory.
2. Activate the plugin from Admin > Plugins menu.
3. Once activated your site is ready!

== Frequently Asked Questions ==

= Can I set the height of the player? =

No. You only need the `"width"` parameter. The player will set the height automatically.

= Does this player work on iPhone? =

Yes. It works on all mobile devices.

= Which video formats can I use? =

You can use .m3u8, .mp4, .mp3 and .webm!

= Can I use other formats than PNG for the poster? =

Yes. You can use .jpg, .png and .gif!

== Screenshots ==

1. Player Interface
2. Responsive Player
3. Player full width
4. Schortcodes
5. Source Code

== Upgrade Notice ==
none

== Changelog ==

= 2.0 =
*Release Date - 17th Jun 2022*

* Updated files to 2022 modifications
* Added Wordpress block

= 1.1 =
*Release Date - 6th Jan 2018*

* Updated Frameworks
* Added Watermark and Watermark Link feature

= 1.0 =
*Release Date - 25th Mai 2017*

* Initial release
