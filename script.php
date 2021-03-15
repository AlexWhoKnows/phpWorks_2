<?php

	include_once('menu.php');

	function doMenu($id = 0)
	{
		global $menu;
		$text = '';
		foreach ($menu as $item) {
			if ($item['parent'] == $id) {
				$text .= "<li><a href='#'>$item[name]</a>" . doMenu($item['id']) . '</li>';
			}
		}
		$text = ($text !== '') ? "<ul>$text</ul>" : '';
		return $text;
	}

	echo doMenu();