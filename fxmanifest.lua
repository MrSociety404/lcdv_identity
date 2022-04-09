fx_version 'adamant'

game 'gta5'

description 'ESX Identity'

version '1.5.0'

shared_script '@es_extended/imports.lua'

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
	'locales/*.lua',
	'config.lua',
	'server/main.lua'
}

client_scripts {
	'@es_extended/locale.lua',
	'locales/*.lua',
	'config.lua',
	'client/main.lua'
}

ui_page 'html/dist/index.html'

files {
  'html/dist/assets/*.js',
	'html/dist/assets/*.png',
	'html/dist/assets/*.css',
	'html/dist/img/*.webp',
	'html/dist/img/*.png',
	'html/dist/*',
	'html/dist/index.html',
}

dependency 'es_extended'
