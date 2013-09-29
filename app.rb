require 'sinatra'
require 'sinatra/partial'
require 'sinatra/reloader' if development?

"""
	Instagram APIzzle
"""
require "instagram"

"""
	manual
"""
require "net/https"
require "uri"
require 'json'

# Instagram.configure do |config|
#   config.client_id = "b363e5fb49f54a1b90f3b974d9d5300e"
#   config.access_token = '23858448.b363e5f.c5cb4bc2e0bf430ca6456863abbccab6'
#   config.client_secret = '9fa0749318be465385fd23421e565e8f'
# end

# data = Instagram.tag_search("wedding")
# data[0].each do |tag|
# 	puts tag
# end


pics = []

uri = URI.parse("https://api.instagram.com/v1/tags/craigandbeegetmarried/media/recent?access_token=23858448.b363e5f.c5cb4bc2e0bf430ca6456863abbccab6")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)
results = JSON.parse(response.body)

results["data"].each do |data|
	pics.push(data["images"]["low_resolution"]["url"])
end

uri = URI.parse(results["pagination"]["next_url"])
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)
results = JSON.parse(response.body)

results["data"].each do |data|
	pics.push(data["images"]["low_resolution"]["url"])
end

puts pics

get '/' do
	# Instagram.user_recent_media(521232640).each do |media|
	# 	time = Time.at(media.created_time.to_i)
	# 	year = time.year.to_s[0,2]
	# 	time_string = "#{time.month}.#{time.day}.#{year}"

	# 	vids = media.videos
	# 	titles = media.caption.text.split(" @")
	# 	videos.push({:src => vids.standard_resolution.url, :type => "video/mp4", :title => titles[0], :time => time_string, :at => titles[1] })
	# end

	erb :main, :locals => {
        :pics => pics
    }
end