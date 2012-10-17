

File.new("run.html", "w")
myfile = File.open("run.html", "w") do |f1|
	f1.puts "This is text"
end
